import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { Product } from "../entities/product.entity";

export const obtener = async (req: Request , res: Response, next: NextFunction) => {
    try {


        
        const productos = await Product.findBy( { activo: true })
        if (!productos) throw new CustomError('Productos no encontrados' , 404);
        return res.json({status: true, data: productos }).status(200);
        
    } catch (error) {
        next(error);
    }
}

export const obtenerPorId = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const producto = await Product.findBy({ id, activo: true })
        return res.json({status: true, data: producto }).status(200);
    } catch (error) {
        next(error);
    }
}

export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {

        const dataUser:any = req.headers.datauser;
        const { id } = dataUser;

        const { nombre , codigo , precio_compra , precio_venta, stock } = req.body;

        const producto = new Product();
        producto.nombre         = nombre;
        producto.codigo         = codigo;
        producto.precio_compra  = precio_compra;
        producto.precio_venta   = precio_venta;
        producto.stock          = stock;
        producto.user_id        = id;

        await producto.save();

        const response = { status: true, data: producto, message: "Producto creado correctamente" }
        return res.send(response).status(201);
        
    } catch (error) {
        next(error);
    }
}

export const actualizar = async (req: Request , res: Response, next: NextFunction) => {

    try {
        const id = Number(req.params.id);
        await Product.update({ id }, req.body);
        const producto = await Product.findBy({ id, activo: true })
        return res.send({status: true, data: producto, messsage: "Producto actualizado correctamente" }).status(201);

    } catch (error) {
        next(error);
    }
}

export const eliminar = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        await Product.update({ id }, {
            activo: false
        });
        return res.send({status: true, data: [], messsage: "Producto eliminado correctamente" }).status(201);

    } catch (error) {
        next(error);
    }
}
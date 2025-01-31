import { Request, Response, NextFunction } from "express";
import { CustomError } from "../models/error";
import { Product } from "../entities/product.entity";


export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    
    const { nombre , codigo , precio_compra , precio_venta, stock } = req.body;
    if (!nombre || !codigo || !precio_compra || !precio_venta || !stock) {
        throw new CustomError('Datos incompletos' , 401);
    }

    next();
};

export const validateProductExists = async (req: Request, res: Response, next: NextFunction) => {
    const id = Number(req.params.id);
    if (!id || isNaN(id)) throw new CustomError('Id no enviado o invalido' , 405);
    const producto = await Product.findBy({ id, activo: true })
    if (!producto) throw new CustomError('Producto no encontrado' , 404);
    next();
}
import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { Order, OrderDetail } from "../entities/";
import { DetalleOrden } from "../interfaces";

export const obtener = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const ordenes = await Order.findBy( { activo: true } );
        if (!ordenes) throw new CustomError('Productos no encontrados' , 404);

        let ordenesConDetalle = ordenes.map( async ( orden:any ) => {
            let ordenId = orden.id;
            const ordenesDetalle = await OrderDetail.find( { 
                where: { activo: true  },
                relations: ["orden"], 
            });

            orden.detalle = ordenesDetalle;
            return orden; 
        });
        
        return res.json({status: true, data: ordenesConDetalle }).status(200);
        
    } catch (error) {
        next(error);
    }
}

export const obtenerPorId = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        const ordenes = await Order.findBy( { activo: true, id } );
        if (!ordenes) throw new CustomError('Productos no encontrados' , 404);

        let ordenesConDetalle = ordenes.map( async ( orden:any ) => {
            let ordenId = orden.id;
            const ordenesDetalle = await OrderDetail.find( { 
                where: { activo: true  },
                relations: ["orden"], 
            });

            orden.detalle = ordenesDetalle;
            return orden; 
        });
        
        return res.json({status: true, data: ordenesConDetalle }).status(200);
    } catch (error) {
        next(error);
    }
}

export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {

        const dataUser:any = req.headers.datauser;
        const { id } = dataUser;

        const { customer, detalle } = req.body;

        const orden = new Order();
        orden.customer = customer;
        orden.user     = id;
        
        await orden.save();
        const ordenId = orden.id;
        
        detalle.forEach( async ( data: DetalleOrden ) => {
            data.orderId = ordenId;

            const detalleOrden = new OrderDetail();
            detalleOrden.order = data.orderId;
            detalleOrden.product = data.product;
            detalleOrden.nombre = data.nombre;
            detalleOrden.precio = data.precio;
            detalleOrden.user = data.userId;
            detalleOrden.customer = customer;

            await detalleOrden.save();

        });

        return res.send({ status: true, data: [] }).status(201);
        
    } catch (error) {
        next(error);
    }
}

export const actualizar = async (req: Request , res: Response, next: NextFunction) => {

    try {
        throw new CustomError('Metodo no permitido' , 401);
    } catch (error) {
        next(error);
    }
}

export const eliminar = async (req: Request , res: Response, next: NextFunction) => {
    try {
        throw new CustomError('Metodo no permitido' , 401);
    } catch (error) {
        next(error);
    }
}
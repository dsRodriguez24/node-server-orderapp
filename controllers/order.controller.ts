import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { Order, OrderDetail } from "../entities/";
import { DetalleOrden } from "../interfaces";

export const obtener = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const dataUser:any = req.headers.datauser;
        const { esAdmin, id } = dataUser; 

        const params = esAdmin ? { activo: true } : { activo: true, user:id };

        const ordenes = await Order.find( {
            where: params,
            relations: ["user", "seller"],  
        });


        if (!ordenes) throw new CustomError('Productos no encontrados' , 404);

        let ordenesConDetalle = await Promise.all(ordenes.map(async (orden: any) => {
            let ordenId = orden.id;
            let usuarioId = orden.userId;
            let seller = orden.sellerId;


            const ordenesDetalle = await OrderDetail.find({ 
                where: { activo: true, order: ordenId   },
                relations: ["order"], 
            });
        
            orden.detalle = ordenesDetalle;
            return orden; 
        }));

        console.log("Retornando ordenes " , ordenesConDetalle);
        
        
        return res.json({status: true, data: ordenesConDetalle }).status(200);
        
    } catch (error) {
        next(error);
    }
}

export const obtenerPorId = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const id = Number(req.params.id);
        // const ordenes = await Order.findBy( { activo: true, id } );
        const ordenes = await Order.find( {
            where: { activo: true, id },
            relations: ["user", "seller"],  
        });

        if (!ordenes) throw new CustomError('Productos no encontrados' , 404);

        let ordenesConDetalle = await Promise.all(ordenes.map(async (orden: any) => {
            let ordenId = orden.id;
            let usuarioId = orden.userId;
            let seller = orden.sellerId;


            const ordenesDetalle = await OrderDetail.find({ 
                where: { activo: true, order: ordenId   },
                relations: ["order"], 
            });
        
            orden.detalle = ordenesDetalle;
            return orden; 
        }));

        // let ordenesConDetalle = ordenes.map( async ( orden:any ) => {
        //     let ordenId = orden.id;
        //     const ordenesDetalle = await OrderDetail.find( { 
        //         where: { activo: true  },
        //         relations: ["orden"], 
        //     });

        //     orden.detalle = ordenesDetalle;
        //     return orden; 
        // });
        
        return res.json({status: true, data: ordenesConDetalle }).status(200);
    } catch (error) {
        next(error);
    }
}

export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {

        const dataUser:any = req.headers.datauser;
        const { id } = dataUser;

        const { seller , detalle } = req.body;

        if (!seller || isNaN(seller) || !detalle) throw new CustomError('Parametros en formato incorrecto' , 401);

        const orden = new Order();
        orden.seller = seller;
        orden.user     = id;

        
        await orden.save();
        const ordenId = orden.id;
        
        detalle.forEach( async ( data: DetalleOrden ) => {
            data.orderId = ordenId;

            const detalleOrden = new OrderDetail();
            detalleOrden.order           = data.orderId;
            detalleOrden.cantidad        = data.cantidad;
            detalleOrden.precio_total    = data.precio_total;
            // detalleOrden.product         = data.product;
            detalleOrden.nombre          = data.nombre;
            detalleOrden.precio_unitario = data.precio_unitario;
            detalleOrden.user            = id;
            detalleOrden.seller          = seller;

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
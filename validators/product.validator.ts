import { Request, Response, NextFunction } from "express";
import { CustomError } from "../models/error";


// 📌 Middleware para validar `req.body`
export const validateProduct = (req: Request, res: Response, next: NextFunction) => {
    
    const { nombre , codigo , precio_compra , precio_venta, stock } = req.body;
    if (!nombre || !codigo || !precio_compra || !precio_venta || !stock) {
        throw new CustomError('Datos incompletos' , 401);
    }

    next();

};

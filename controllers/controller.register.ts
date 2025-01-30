import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";


export const crear = (req: Request , res: Response, next: NextFunction) => {
    try {
        const { name, email, type, password } = req.body;
        if ( !name || !email || !type || !password) {
            throw new CustomError('Faltan parametros' , 400);
        }

        return res.json({ message: "Creado" }).status(201);

    } catch (error) {
        next(error);
    }
}

export const actualizar = (req: Request , res: Response, next: NextFunction) => {
    try {
        throw new CustomError('Metodo no permitido' , 405);
    } catch (error) {
        next(error);
    }
}
export const eliminar = (req: Request , res: Response, next: NextFunction) => {
    try {
        throw new CustomError('Metodo no permitido' , 405);
    } catch (error) {
        next(error);
    }
}
export const obtener = (req: Request , res: Response, next: NextFunction) => {
    try {
        throw new CustomError('Metodo no permitido' , 405);
    } catch (error) {
        next(error);
    }
}
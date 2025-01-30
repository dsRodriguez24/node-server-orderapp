import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { generarToken } from "../auth/jwt.auth";

export const crear = (req: Request , res: Response, next: NextFunction) => {
    try {

        const { email, password } = req.body;
        console.log(req.body);
        
        if ( !email || !password) {
            throw new CustomError('Email o constraseña no enviados' , 400);
        }

        const token = generarToken( { email, password } );
        const response = {
            token,
            msg: "Sesion iniciada correctamente"
        };

        return res.send(response).status(200);
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
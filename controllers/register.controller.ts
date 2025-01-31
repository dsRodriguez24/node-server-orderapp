import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { User } from "../entities/user.entity";


export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {
        const { nombre, email, rol, password } = req.body;
        if ( !nombre || !email || !rol || !password) {
            throw new CustomError('Faltan parametros' , 400);
        }

        const user: User = new User();
        user.nombre     = nombre;
        user.email      = email;
        user.password   = password;
        user.rol        = rol;

        await user.save();
        return res.json({ status: true, message: "Usuario creado correctamente" }).status(201);

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
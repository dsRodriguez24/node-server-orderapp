import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { generarToken } from "../auth/jwt.auth";
import { User } from "../entities/user.entity";


export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {

        const { email, password } = req.body;
        
        if ( !email || !password)  throw new CustomError('Email o constraseña no enviados' , 400);

        const user = await User.findOneBy({ email });

        if (!user) throw new CustomError(`No existe un usuario relacionado al email '${email}'` , 404);

        if (user.password !== password)  throw new CustomError(`Combinacion de usuario y contraseña incorrecta` , 400)

        const { id, nombre, rol } = user; 
        const token = generarToken( { email, password , id, nombre, rol } );
        const response = {
            data : { token },
            message: "Sesion iniciada correctamente"
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
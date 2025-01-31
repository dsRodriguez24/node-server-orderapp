import { NextFunction, Request, Response } from "express";
import { CustomError } from "../models/error";
import { Rol } from "../entities/rol.entity";


export const crear = async (req: Request , res: Response, next: NextFunction) => {
    try {
        throw new CustomError('Metodo no permitido' , 405);
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

export const esAdmin = async (id: number) => {
    try {
        const userRol = await Rol.findOneBy({ id });
        if (!userRol)  return false;
        if (userRol.nombre == 'Administrador') return true;
        return false;
    } catch (error) {
        return false;
    }
    
}

const crearRolesDefault = async () => {
    try {
        const rolAdmin  = new Rol();
        rolAdmin.nombre = 'Administrador';
        await rolAdmin.save();
        
        const rolCliente   = new Rol();
        rolCliente.nombre  = 'Cliente';
        await rolCliente.save();
        
    } catch (error) {
        throw new CustomError('Error al crear roles por default' , 500);
    }


}

export const obtener = async (req: Request , res: Response, next: NextFunction) => {
    try {
        
        const rolCliente        = await Rol.findOneBy({nombre: 'Cliente'})
        const rolAdministrador  = await Rol.findOneBy({nombre: 'Administrador'})
        
        if (!rolAdministrador || !rolCliente) {
            crearRolesDefault();
        };

        const data = await Rol.find();
        return res.json({ status: true, data }).status(200);

        // throw new CustomError('Metodo no permitido' , 405);
    } catch (error) {
        next(error);
    }
}
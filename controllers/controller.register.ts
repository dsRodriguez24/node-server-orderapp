import { Request, Response } from "express";

export const obtener = (req: Request , res: Response) => {
    res.json({status: true}).status(200);
}

export const crear = (req: Request , res: Response) => {
    res.json({status: true, message: "Creado"}).status(201);
}

export const actualizar = (req: Request , res: Response) => {
    res.json({status: true , message: "Actualizado"}).status(201);
}
export const eliminar = (req: Request , res: Response) => {
    res.json({status: true, message: "Eliminado"}).status(200);
}
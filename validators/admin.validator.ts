import { Request, Response, NextFunction } from "express";
import { CustomError } from "../models/error";


export const validateAdmin = (req: Request, res: Response, next: NextFunction) => {
    
    const dataUser:any      = req.headers.datauser;
    const { esAdmin }   = dataUser;
    if (!esAdmin)  throw new CustomError('No estas autorizado para realizar esta accion' , 401);

    next();

};

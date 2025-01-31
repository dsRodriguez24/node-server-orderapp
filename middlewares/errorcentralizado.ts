import { NextFunction, Request, Response } from "express";
import { errormd } from "../interfaces/error.interface";

const errorHandler = (err: errormd, req: Request, res: Response, next: NextFunction) => {

    const statusCode = err.statusCode || 500;
    const message = err.message || "Error interno del servidor";

    res.status(statusCode).json({
        status: false,
        message,
    });
};

module.exports = { errorHandler };
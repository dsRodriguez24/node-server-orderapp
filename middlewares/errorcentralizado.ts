import { NextFunction, Request, Response } from "express";
import { errormd } from "../interfaces/error.interface";

const errorHandler = (err: errormd, req: Request, res: Response, next: NextFunction) => {
    console.error("Error:", err); // Muestra el error en la consola

    const statusCode = err.statusCode || 500; // Código de estado (por defecto 500)
    const message = err.message || "Error interno del servidor"; // Mensaje de error

    res.status(statusCode).json({
        success: false,
        message,
    });
};

module.exports = { errorHandler };
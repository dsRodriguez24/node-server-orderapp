import { NextFunction, Request, Response } from "express";
import { UserLogin } from "../interfaces/userjwt.interface";
import { esAdmin } from "../controllers/rol.controller";
import { CustomError } from "../models/error";

const jwt = require("jsonwebtoken");

export const generarToken = (usuario : UserLogin) => {
  return jwt.sign(
    usuario,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
};

export const verificarToken = async (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) return res.status(401).json({ message: "Acceso denegado. Token requerido." });

    try {
        const decoded = jwt.verify(token, process.env.JWT_SECRET);
        decoded.esAdmin = await esAdmin(Number(decoded.rol.id));
        req.headers.datauser = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ message: "Token inválido o expirado. Vuelve a iniciar sesion", errorAuth: true });
    }
};
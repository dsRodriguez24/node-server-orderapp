import { NextFunction, Request, Response } from "express";
import { UserLogin } from "../interfaces/userjwt.interface";

const jwt = require("jsonwebtoken");

const generarToken = (usuario : UserLogin) => {
  return jwt.sign(
    usuario,
    process.env.JWT_SECRET,
    { expiresIn: process.env.JWT_EXPIRES }
  );
};

const verificarToken = (req: Request, res: Response, next: NextFunction) => {
    const token = req.headers["authorization"];

    if (!token) {
        return res.status(401).json({ mensaje: "Acceso denegado. Token requerido." });
    }

    try {
        const decoded = jwt.verify(token.split(" ")[1], process.env.JWT_SECRET);
        req.headers.datauser = decoded;
        next();
    } catch (error) {
        return res.status(401).json({ mensaje: "Token inválido o expirado." });
    }
};
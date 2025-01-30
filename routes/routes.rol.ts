import { actualizar, crear, eliminar, obtener } from "../controllers/rol.controller";

export const router_rol = require("express").Router();

router_rol.get("/",  obtener);
router_rol.post("/", crear );
router_rol.put("/",  actualizar);
router_rol.delete("/",  eliminar);
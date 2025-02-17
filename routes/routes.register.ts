import { actualizar, crear, eliminar, obtener } from "../controllers/register.controller";

export const router_register = require("express").Router();

router_register.get("/",  obtener);
router_register.post("/", crear );
router_register.put("/:id",  actualizar);
router_register.delete("/:id",  eliminar);
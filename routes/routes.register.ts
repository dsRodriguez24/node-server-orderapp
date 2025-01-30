import { actualizar, crear, eliminar, obtener } from "../controllers/controller.register";

export const router_register = require("express").Router();

router_register.get("/",  obtener);
router_register.post("/", crear );
router_register.put("/",  actualizar);
router_register.delete("/",  eliminar);
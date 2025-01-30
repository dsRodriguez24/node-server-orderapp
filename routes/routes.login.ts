import { actualizar, crear, eliminar, obtener } from "../controllers/login.controller";

export const router_login = require("express").Router();

router_login.get("/",  obtener);
router_login.post("/", crear );
router_login.put("/",  actualizar);
router_login.delete("/",  eliminar);
import { actualizar, crear, eliminar, obtener } from "../controllers/product.controller";

export const router_product = require("express").Router();

router_product.get("/",  obtener);
router_product.post("/", crear );
router_product.put("/",  actualizar);
router_product.delete("/",  eliminar);
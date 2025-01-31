import { actualizar, crear, eliminar, obtener, obtenerPorId } from "../controllers/product.controller";
import { validateProduct, validateAdmin, validateProductExists } from "../validators";

export const router_product = require("express").Router();

router_product.get("/", obtener);
router_product.get("/:id", [validateProductExists], obtenerPorId);
router_product.post("/", [ validateAdmin] ,crear );
router_product.put("/:id", [validateAdmin, validateProductExists ,validateProduct] ,  actualizar);
router_product.delete("/:id", [validateAdmin, validateProductExists] ,  eliminar);
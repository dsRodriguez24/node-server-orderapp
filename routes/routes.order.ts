import { crear, obtener, obtenerPorId } from "../controllers/order.controller";
import { validateAdmin, validateCustomer } from "../validators";

export const router_order = require("express").Router();

router_order.get("/",obtener);
router_order.get("/:id", obtenerPorId);
router_order.post("/", [ validateCustomer] ,crear );
// router_order.get("/:id", [validateAdmin], obtenerPorId);
// router_product.put("/:id", [validateAdmin, validateProductExists ,validateProduct] ,  actualizar);
// router_product.delete("/:id", [validateAdmin, validateProductExists] ,  eliminar);
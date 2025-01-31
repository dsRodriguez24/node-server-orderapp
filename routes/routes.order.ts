import { crear, obtener, obtenerPorId } from "../controllers/order.controller";
import { validateAdmin, validateCustomer } from "../validators";

export const router_order = require("express").Router();

router_order.get("/",[validateAdmin] ,obtener);
router_order.get("/:id", [validateAdmin], obtenerPorId);
router_order.post("/", [ validateCustomer] ,crear );
// router_product.put("/:id", [validateAdmin, validateProductExists ,validateProduct] ,  actualizar);
// router_product.delete("/:id", [validateAdmin, validateProductExists] ,  eliminar);
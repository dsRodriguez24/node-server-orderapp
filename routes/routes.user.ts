import { actualizar, crear, eliminar, obtener } from "../controllers/login.controller";

export const router_users = require("express").Router();

router_users.get("/",  obtener);
import { verificarToken } from "../auth/jwt.auth";
import { AppDataSource } from "../db/db.connect";
import { router_login, router_rol, router_register, router_product, router_order, router_users } from "../routes";

const { errorHandler }    = require("../middlewares/errorcentralizado") ;

const express = require("express");
const cors    = require("cors");

class Server {
    
    private app;
    private port;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 8080;

        this.middlewares();
        this.routes();
        this.database();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }
    
    routes(){
        this.app.use( "/auth/register" , router_register );
        this.app.use( "/auth/login" , router_login );
        this.app.use( "/rol" , router_rol );
        this.app.use( verificarToken );
        this.app.use( "/products" , router_product );
        this.app.use( "/users" , router_users );
        this.app.use( "/order" , router_order );
        this.app.use(errorHandler);
    }
    
    async database(){
        try {
            await AppDataSource.initialize();
            console.log("[DB] Connected");
            
        } catch (error) {
            
            console.log("[DB] Error de conexion" , error);
        }
    }

    init(){
        this.app.listen( this.port , () => {
            console.log(`[SERVER] Running On Port ${this.port}`);
        } )
    }
}

export default Server;
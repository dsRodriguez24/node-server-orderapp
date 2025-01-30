const { router_register } = require("../routes/routes.register") ;

const express = require("express");
const cors = require("cors");


class Server {
    
    private app;
    private port;

    constructor() {
        this.app  = express();
        this.port = process.env.PORT || 8080;

        this.middlewares();
        this.routes();
    }

    middlewares(){
        this.app.use( express.json() );
        this.app.use( cors() );
    }
    
    routes(){
        this.app.use( "/auth/register" , router_register );
    }

    init(){
        this.app.listen( this.port , () => {
            console.log(`[SERVER] Running On Port ${this.port}`);
        } )
    }
}

export default Server;
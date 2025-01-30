import Server from "./models/server";

require('dotenv').config()
const node_server = new Server();
node_server.init();
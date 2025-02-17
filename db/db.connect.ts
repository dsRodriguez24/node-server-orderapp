import { DataSource } from "typeorm";
import { User, Rol, Product, Order, OrderDetail } from "../entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: process.env.DB_HOST || "localhost",
    port: Number(process.env.DB_PORT) || 5432,
    username: process.env.DB_USERNAME ||  "postgres",
    password: process.env.DB_PASSWORD ||  "1234",
    database: process.env.DB_NAME ||  "db_pruebatecnica",
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
    entities: [User, Rol, Product, Order, OrderDetail],
})
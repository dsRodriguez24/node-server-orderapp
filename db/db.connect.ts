import { DataSource } from "typeorm";
import { User, Rol, Product, Order } from "../entities";

export const AppDataSource = new DataSource({
    type: "postgres",
    host: "localhost",
    port: 5432,
    username: "postgres",
    password: "1234",
    database: "db_pruebatecnica",
    synchronize: true,
    logging: true,
    subscribers: [],
    migrations: [],
    entities: [User, Rol, Product, Order],
})
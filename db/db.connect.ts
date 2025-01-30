import { DataSource } from "typeorm";
import { User } from "../entities/user.entity";
import { Rol } from "../entities/rol.entity";

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
    entities: [User, Rol],
})
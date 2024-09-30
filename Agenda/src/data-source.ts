import "reflect-metadata"
import { DataSource } from "typeorm"
import { Contato } from "./entity/Contato"
import { CriandOcontato1727701238054 } from "./migration/1727701238054-CriandOcontato"
import * as dotenv from "dotenv";
dotenv.config();
const { DB_HOST, DB_PORT, DB_USER, DB_PASSWORD, NODE_ENV } =
  process.env;
const db_port = parseInt(DB_PORT);

export const AppDataSource = new DataSource({
    type: "mysql",
    host: DB_HOST,
    port: db_port,
    username: DB_USER,
    password: DB_PASSWORD,
    database: "agenda",
    synchronize: true,
    logging: false,
    entities: [Contato],
    migrations: [CriandOcontato1727701238054],
    subscribers: [],
})


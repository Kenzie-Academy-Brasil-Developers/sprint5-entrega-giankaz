import 'dotenv/config'
import "reflect-metadata"
import { DataSource } from "typeorm"
//require("dotenv").config()



const host = "localhost";

export const AppDataSource = process.env.NODE_ENV === 'test' ? 
new DataSource({
    type: 'sqlite',
    database: ':memory:',
    entities:["src/entities/**.entity.ts"],
    synchronize: true
})
:
new DataSource({
    type: "postgres",
    host,
    port: 5432,
    username: 'gianr',
    password: '91300962',
    database: 'users_database',
    synchronize: false,
    entities: ["src/entities/**.entity.ts"],
    migrations: ["src/migrations/**.ts"]
})
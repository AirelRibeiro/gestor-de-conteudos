"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
require("dotenv/config");
const config = {
    username: process.env.DB_USER || 'root',
    password: process.env.DB_PASS || '123456',
    database: process.env.DB_NAME || 'MyNotes',
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT || 3002),
    dialect: 'postgres',
};
module.exports = config;

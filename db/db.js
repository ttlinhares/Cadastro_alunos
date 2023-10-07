import { Sequelize } from "sequelize";

const dbName = ""; //Defina o nome do banco
const dbUser = "";//Defina o usuário
const dbPassword = "";// Defina a senha

const dbHost = "";// Defina o host
const dbPort = "";//Defina a senha

const db = new Sequelize(dbName,dbUser,dbPassword,{
    host: dbHost,
    port: dbPort,
    dialect: "mysql"
});

export default db;

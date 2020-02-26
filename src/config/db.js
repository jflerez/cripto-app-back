const Sequelize = require('sequelize');
const config = require("../config");

const db = new Sequelize(config.DB_NAME,config.DB_USER,config.DB_PASS,{
    host: config.DB_HOST,
    port: config.DB_PORT,
    dialect: config.DIALECT

});

module.exports = db;
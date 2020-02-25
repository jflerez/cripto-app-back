const Sequelize = require('sequelize')

const db = new Sequelize('criptobd','root','desarrollo',{
    host: 'localhost',
    port: 3306,
    dialect: 'mysql'

});

module.exports = db;
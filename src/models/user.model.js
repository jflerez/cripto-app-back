
const Sequelize = require('sequelize');
const db = require('../config/db')
const Usuario = db.define('usuario', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    nombre: Sequelize.STRING,
    apellido: Sequelize.STRING,
    username: {
        type: Sequelize.STRING,
        allowNull: false,
        unique: {
            args: true,
            msg: "El username que intenta registrar ya existe."
        },
        
    },
    clave: Sequelize.STRING,
    moneda: Sequelize.STRING,
}, {
    timestamps: false,
    freezeTableName: true
});

  module.exports = Usuario;
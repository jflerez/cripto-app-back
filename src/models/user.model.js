const {compareSync, hashSync,genSaltSync} = require('bcryptjs');
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
    freezeTableName: true,
    instanceMethods: {
        generateHash(clave) {
            return hashSync(clave, bcrypt.genSaltSync(10));
        },
        validPassword(clave) {
            return compareSync(clave, this.clave);
        }
    }
});

  module.exports = Usuario;
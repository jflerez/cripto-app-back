const Sequelize = require('sequelize');
const db = require('../config/db')
const Usuario = require('../models/user.model');
const Criptomoneda = db.define('criptomoneda', {
    id: {
        type: Sequelize.INTEGER, 
        primaryKey: true,
        autoIncrement: true
    },
    nombre: {
        type:Sequelize.STRING,
        allowNull: false
    },
    fuente: {
        type:Sequelize.STRING,
        allowNull: false
    },
    precio: {
        type: Sequelize.INTEGER,
        allowNull: false
    },
    fk_usuario: {
        type: Sequelize.INTEGER,
        allowNull: false
    }
    
}, {
    freezeTableName: true
});

Criptomoneda.belongsTo(Usuario, {foreignKey: 'fk_usuario', sourceKey: 'id'});

  module.exports = Criptomoneda;
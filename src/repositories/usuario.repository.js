const sequelize = require('sequelize');
const Usuario = require("../models/user.model");
class UsuarioRepository{

    async getUsuarioByUsername(username) {
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
 
    }

    async getUsuarioById(usuarioId) {
       
        return Usuario.findAll({
            where: {
              id: usuarioId
            }
          });
       
        //return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
 
    }

    
    async createUsuario(usuario){
    
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
    }

}

module.exports = UsuarioRepository;
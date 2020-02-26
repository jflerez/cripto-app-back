const sequelize = require('sequelize');
const Usuario = require("../models/user.model");
const bcrypt = require("bcrypt");
class UsuarioRepository{

    async getUsuarioByUsername(username) {
        
        return Usuario.findAll({
            where: {
              username: username
            }
          });
 
    }

    async getUsuarioById(usuarioId) {
       
        Usuario.findAll({
            where: {
              id: usuarioId
            }
          });
 
    }

    
    async createUsuario(usuario){
         usuario.clave = await bcrypt.hashSync(usuario.clave, 10);
        return await Usuario.create(usuario);
    }

}

module.exports = UsuarioRepository;
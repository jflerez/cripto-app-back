const sequelize = require('sequelize');
const Criptomoneda = require("../models/criptomoneda.model");
class CriptomonedaRepository{

    async getCriptomonedasByUsuario(usuarioId) {
        
        return await Criptomoneda.findAll({
            where: {
              usuario_id: usuarioId
            }
          });
 
    }

    async getCriptomonedasTopByUsuario(usuarioId) {
        
        return await Criptomoneda.findAll({
            where: {usuario_id: usuarioId},
            group: ['precio'],order: [['precio' ,'DESC']],limit: 3,
            });
 
    }

    async createCriptomoneda(criptomoneda){
    
        return await Criptomoneda.create(criptomoneda);
    }

}

module.exports = CriptomonedaRepository;
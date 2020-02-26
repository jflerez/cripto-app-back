const sequelize = require('sequelize');
const Criptomoneda = require("../models/criptomoneda.model");
class CriptomonedaRepository{

    

    async getCriptomonedasByUsuario(usuarioId) {
        
        return Criptomoneda.findAll({
            where: {
              usuario_id: usuarioId
            }
          });
 
    }

    async getCriptomonedasTopByUsuario(usuarioId) {
        
        return Criptomoneda.findAll({
            where: {usuario_id: usuarioId},
            group: ['precio'],order: [['precio' ,'DESC']],limit: 3,
            });
 
    }


    async createCriptomoneda(criptomoneda){
    
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
    }

}

module.exports = CriptomonedaRepository;
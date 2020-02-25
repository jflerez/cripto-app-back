const sequelize = require('sequelize');
class CriptomonedaRepository{

    

    async getCriptomonedasByUsuario(usuarioId) {
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
 
    }

    async getCriptomonedasTopByUsuario(usuarioId) {
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
 
    }


    async createCriptomoneda(criptomoneda){
    
        return await sequelize.query('spcName :param1, :param2, :param3, :param4)', {replacements: {param1: value, param2: value, param3: value, param4: value}, type: sequelize.QueryTypes.SELECT})
    }

}

module.exports = CriptomonedaRepository;
let _criptomonedaRepository = null;
class CriptomonedaService {

    constructor({CriptomonedaRepository}){
        _criptomonedaRepository = CriptomonedaRepository;
    }

    async getCriptomonedasByUsuario(usuarioId){
        
        if(!usuarioId){
            const error = new Error();
            error.status = 400;
            error.message = "Referencia id usuario no encontrada";
            throw error;
        }
        
        return await _criptomonedaRepository.getCriptomonedasByUsuario(usuarioId);
    }

    async createCriptomoneda(criptomoneda){
        
        if(!criptomoneda){
            const error = new Error();
            error.status = 400;
            error.message = "No se encontró información de la criptomoneda a registrar.";
            throw error;
        }

        return await _criptomonedaRepository.createCriptomoneda(criptomoneda);
    }


    async getCriptomonedasTopByUsuario(usuarioId){
        
        if(!usuarioId){
            const error = new Error();
            error.status = 400;
            error.message = "Referencia id usuario no encontrada";
            throw error;
        }
        
        return await _criptomonedaRepository.getCriptomonedasTopByUsuario(usuarioId);
    }

}

module.exports = CriptomonedaService;
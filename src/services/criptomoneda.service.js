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

       let listExistCriptomoneda = await _criptomonedaRepository.getValidarCriptomonedasByUsuario(criptomoneda.usuario_id,criptomoneda.nombre)
        console.log("listExistCriptomoneda.length: ", listExistCriptomoneda.length)
       if(listExistCriptomoneda.length > 0){
        const error = new Error();
        error.status = 400;
        error.message = "La moneda que intenta guardar ya se encuentra registrada.";
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
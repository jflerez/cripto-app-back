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
        
        //return await _criptomonedaRepository.getCriptomonedasByUsuario(usuarioId);
        return {
            "totalPrices": 4,
            "prices": [
                {
                    "id_currency": "CLP",
                    "name": "Chilean Peso",
                    "price": "6940551.46640958",
                    "crypto": "0"
                },
                {
                    "id_currency": "CNH",
                    "name": "Chinese Yuan Offshore",
                    "price": "59315.71151348",
                    "crypto": "0"
                },
                {
                    "id_currency": "CNY",
                    "name": "Chinese Yuan",
                    "price": "59331.83613788",
                    "crypto": "0"
                },
                {
                    "id_currency": "COP",
                    "name": "Colombian Peso",
                    "price": "29626072.14653907",
                    "crypto": "0"
                }
            ]
        }
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
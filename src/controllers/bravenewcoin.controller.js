let _braveNewCoinService = null;
class BraveNewCoinController {

    constructor({BraveNewCoinService}){
        _braveNewCoinService = BraveNewCoinService;
    }

    async getListadoMonedas(req, res){
    
        const listMonedas = await _braveNewCoinService.getListadoMonedas();
        return res.send(listMonedas);
    }


    async getConversionMoneda(req, res){

        const {query} = req;
        
        const conversionMoneda = await _braveNewCoinService.getConversionMoneda(query);
        return res.send(conversionMoneda);
    }

}


module.exports = BraveNewCoinController;
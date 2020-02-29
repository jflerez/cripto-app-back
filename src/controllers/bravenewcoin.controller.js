let _braveNewCoinService = null;
class BraveNewCoinController {

    constructor({BraveNewCoinService}){
        _braveNewCoinService = BraveNewCoinService;
    }

    async getListadoMonedas(req, res){
          const {query} = req;
          console.log("query: " + JSON.stringify(query,null,4))
          let from = Number(query.from);
          let to = Number(query.to);
        const listMonedas = await _braveNewCoinService.getListadoMonedas(from,to);
        return res.send(listMonedas);
    }


    async getConversionMoneda(req, res){

        const {query} = req;
        
        const conversionMoneda = await _braveNewCoinService.getConversionMoneda(query);
        return res.send(conversionMoneda);
    }

}


module.exports = BraveNewCoinController;
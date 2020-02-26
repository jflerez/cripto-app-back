let _criptomonedaService = null;
let _branewcoinService = null;
class CriptomonedaController {

    constructor({CriptomonedaService, BraveNewCoinService}){
        _criptomonedaService = CriptomonedaService;
        _branewcoinService = BraveNewCoinService;
    }


    async getCriptomonedasByUsuario(req, res){
        const {usuarioId} = req.params;
        const usuario = await _criptomonedaService.getCriptomonedasByUsuario(usuarioId);
        return res.send(usuario);
    }

    async getCriptomonedasTopByUsuario(req, res){

        const {usuarioId} = req.params;
        const usuario = await _criptomonedaService.getCriptomonedasTopByUsuario(usuarioId);
        return res.send(usuario);

    }


    async createCriptomoneda(req, res){
        
        const {body} = req;

        console.log("body agregar criptpmonedas: ", body.conversion)

    
       let conversionMoneda = await _branewcoinService.getConversionMoneda(body.conversion);

       body.precio = conversionMoneda.to_quantity;

       delete body.conversion


       console.log("body procesado: ", body)

       //console.log("conversionMoneda: ", JSON.stringify(conversionMoneda,null,4));

        //const criptomonedaNueva = await _criptomonedaService.createCriptomoneda(body);

        return res.send(conversionMoneda);

    }

}


module.exports = CriptomonedaController;
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

        console.log("req.usuario controller: ", req.usuario.id)
        let usuarioId = req.usuario.id;
        console.log("req.usuario to 3 monedas: ", req.usuario.id)
        const usuario = await _criptomonedaService.getCriptomonedasTopByUsuario(usuarioId);
        console.log("list to 3 monedas: ", usuario)
        return res.send(usuario);

    }


    async createCriptomoneda(req, res){
        
        const {body} = req;

        console.log("req.usuario moneda: ", req.usuario.moneda)

        const conversion = {qty: body.precio, from: body.fuente, to: req.usuario.moneda}

       //Se realiza la conversión de la moneda antes de guardar
       let conversionMoneda = await _branewcoinService.getConversionMoneda(conversion);

       body.precio = conversionMoneda.to_quantity;
       body.usuario_id = req.usuario.id;

       const criptomonedaNueva = await _criptomonedaService.createCriptomoneda(body);

       console.log("body procesado: ", body)

        return res.send(criptomonedaNueva);

    }

}


module.exports = CriptomonedaController;
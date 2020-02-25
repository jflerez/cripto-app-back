let _criptomonedaService = null;
class CriptomonedaController {

    constructor(CriptomonedaService){
        _criptomonedaService = CriptomonedaService;
    }


    async getCriptomonedasByUsuario(req, res){
        const {usuarioId} = req.params;
        const usuario = await _criptomonedaService.getCriptomonedasByUsuario(usuarioId);
        return res.send(usuario);
    }


    async createCriptomoneda(){
        const {body} = req;

        const criptomonedaNueva = await _criptomonedaService.createCriptomoneda(body);

        return res.send(criptomonedaNueva);

    }

}


module.exports = CriptomonedaController;
let _usuarioService = null;
let _criptomonedaService = null;
class UsuarioController {

    constructor({UsuarioService, CriptomonedaService}){
        _usuarioService = UsuarioService;
        _criptomonedaService = CriptomonedaService;
    }

    async getCriptomonedasByUsuario(req, res){
        console.log("llegando")
        let usuarioId = req.usuario.id
        console.log("usuarioId:", usuarioId)
        const usuario = await _criptomonedaService.getCriptomonedasByUsuario(usuarioId);
        return res.send(usuario);
    }


    async createUsuario(){
        const {body} = req;

    }

}


module.exports = UsuarioController;
let _usuarioService = null;
let _criptomonedaService = null;
class UsuarioController {

    constructor({UsuarioService, CriptomonedaService}){
        _usuarioService = UsuarioService;
        _criptomonedaService = CriptomonedaService;
    }

    async getCriptomonedasByUsuario(req, res){
        
        let usuarioId = req.usuario.id
        console.log("usuarioId:", usuarioId)
        const usuario = await _criptomonedaService.getCriptomonedasByUsuario(usuarioId);
        return res.send(usuario);
    }
}


module.exports = UsuarioController;
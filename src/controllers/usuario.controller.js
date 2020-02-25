let _usuarioService = null;
class UsuarioController {

    constructor({UsuarioService}){
        _usuarioService = UsuarioService;
    }

    async get(req, res){
        console.log("llegando")
        const {usuarioId} = req.params;
        console.log("usuarioId:", usuarioId)
        const usuario = await _usuarioService.getUsuarioById(usuarioId);
        return res.send(usuario);
    }


    async createUsuario(){
        const {body} = req;

    }

}


module.exports = UsuarioController;
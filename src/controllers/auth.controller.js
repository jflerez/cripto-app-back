
let _authService = null;

class AuthController {

    constructor({AuthService}){
        _authService = AuthService;
    }

    async singnUp(req,res){

        const {body} = req;
        const usuarioCreado = await _authService.signUp(body);
        return res.status(201).send(usuarioCreado);

    }

    async singnIn(req,res){
        const {body} = req;
        const credenciales = await _authService.singnIn(body);
        return res.status(200).send(credenciales);
    }

}

module.exports = AuthController;
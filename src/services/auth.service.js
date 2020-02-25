const {generateToken} = require('../helpers/jwt.helper');
let _usuarioService = null;

class AuthService {
    constructor({UsuarioService}){
        _usuarioService = UsuarioService;
    }

    async signUp(usuario){

        const {usermane} = usuario;

        const userExist = _usuarioService.getUsuarioByUsername(usermane);

        if(userExist){
            const error = new Error();
            error.status = 401;
            error.message = "El usuario " + usermane + " ya se encuentra registrado.";
            throw error;
        }

        return await _usuarioService.createUsuario(usuario);

    }


    async singnIn(usuario){

  const {usermane, clave} = usuario;

  const userExist = _usuarioService.getUsuarioByUsername(usermane);

        if(!userExist){
            const error = new Error();
            error.status = 404;
            error.message = "El usuario " + usermane + " no se encuentra registrado.";
            throw error;
        }


        const validPassword = userExist.validPassword(clave);
        
        if(!validPassword){

            const error = new Error();
            error.status = 400;
            error.message = "Error de credenciales de acceso.";
            throw error;
        }

        const userToEncode = {
            username: userExist.username,
            id: userExist.id
        };

        const token = generateToken(userToEncode);

        return {token, usuario: userExist};


    }

}

module.exports = AuthService;

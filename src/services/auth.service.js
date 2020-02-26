const {generateToken} = require('../helpers/jwt.helper');
const bcrypt = require("bcrypt");
let _usuarioService = null;

class AuthService {
    constructor({UsuarioService}){
        _usuarioService = UsuarioService;
    }

    async signUp(usuario){

        const {username} = usuario;

        const userExist = await _usuarioService.getUsuarioByUsername(username);

        if(userExist[0]){
            const error = new Error();
            error.status = 401;
            error.message = "El username " + username + " ya se encuentra registrado.";
            throw error;
        }

        return await _usuarioService.createUsuario(usuario);

    }


    async singnIn(usuario){

  const {username, clave} = usuario;

  const userExist = await _usuarioService.getUsuarioByUsername(username);

  console.log("userExist: ", userExist[0].clave)

        if(!userExist[0]){
            const error = new Error();
            error.status = 404;
            error.message = "El usuario " + username + " no se encuentra registrado.";
            throw error;
        }

        const validPassword = bcrypt.compareSync(clave, userExist[0].clave);
        
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

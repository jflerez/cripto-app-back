let _userRepository = null;
class UsuarioService {

    constructor({UsuarioRepository}){
        _userRepository = UsuarioRepository;
    }

    async getUsuarioByUsername(username){
        return await _userRepository.getUsuarioByUsername(username);
    }

    async getUsuarioById(usuarioId){
        return await _userRepository.getUsuarioById(usuarioId);
    }


    async createUsuario(usuario){
        return await _userRepository.createUsuario(usuario);
    }

}

module.exports = UsuarioService;
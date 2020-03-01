const {Router} = require("express");
const {AuthMiddleware} = require("../middlewares");

module.exports = ({UsuarioController})=>{
const router = Router();

router.get("/criptomonedas", AuthMiddleware, UsuarioController.getCriptomonedasByUsuario);
return router;

}
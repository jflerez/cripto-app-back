const {Router} = require("express");
const {AuthMiddleware} = require("../middlewares");

module.exports = ({UsuarioController})=>{
const router = Router();

router.get("/:usuarioId", AuthMiddleware, UsuarioController.get);
return router;

}
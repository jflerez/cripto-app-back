const {Router} = require("express");

module.exports = ({UsuarioController})=>{
const router = Router();

router.get("/:usuarioId", UsuarioController.get);
return router;

}
const {Router} = require("express");
const {AuthMiddleware} = require("../middlewares");

module.exports = ({CriptomonedaController})=>{
const router = Router();

router.get("/:usuarioId", AuthMiddleware, CriptomonedaController.getCriptomonedasByUsuario);
router.get("/top/:usuarioId", CriptomonedaController.getCriptomonedasTopByUsuario);
router.post("", AuthMiddleware,CriptomonedaController.createCriptomoneda);
return router;

}
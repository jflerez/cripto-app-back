const {Router} = require("express");
const {AuthMiddleware} = require("../middlewares");
const {validateSaveCriptomoneda} = require("../validation/request.criptomoneda");

module.exports = ({CriptomonedaController})=>{
const router = Router();

router.get("/:usuarioId", AuthMiddleware, CriptomonedaController.getCriptomonedasByUsuario);
router.get("/top/:usuarioId", AuthMiddleware, CriptomonedaController.getCriptomonedasTopByUsuario);
router.post("/agregar",AuthMiddleware,validateSaveCriptomoneda, CriptomonedaController.createCriptomoneda);
return router;

}
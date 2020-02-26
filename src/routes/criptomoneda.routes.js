const {Router} = require("express");
const {AuthMiddleware} = require("../middlewares");
const {validateConversionMoneda} = require("../validation/request.moneda");

module.exports = ({CriptomonedaController})=>{
const router = Router();

router.get("/:usuarioId", AuthMiddleware, CriptomonedaController.getCriptomonedasByUsuario);
router.get("/top/:usuarioId", CriptomonedaController.getCriptomonedasTopByUsuario);
router.post("/agregar",CriptomonedaController.createCriptomoneda);
// router.post("/agregar", [validateConversionMoneda,AuthMiddleware],CriptomonedaController.createCriptomoneda);
return router;

}
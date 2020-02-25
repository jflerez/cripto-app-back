const {Router} = require("express");

module.exports = ({CriptomonedaController})=>{
const router = Router();

router.get("/:usuarioId", CriptomonedaController.getCriptomonedasByUsuario);
router.post("", CriptomonedaController.createCriptomoneda);
return router;

}
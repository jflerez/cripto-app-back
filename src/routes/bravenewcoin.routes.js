const {Router} = require("express");
const {validateConversionMoneda} = require("../validation/request.conversionmoneda");
const {validateListMoneda} = require("../validation/request.listamonedas");

module.exports = ({BraveNewCoinController})=>{
const router = Router();

router.get("/lista", validateListMoneda, BraveNewCoinController.getListadoMonedas);
router.get("/conversion",validateConversionMoneda, BraveNewCoinController.getConversionMoneda);
return router;

}
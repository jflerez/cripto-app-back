const {Router} = require("express");
const {validateConversionMoneda} = require("../validation/request.moneda");

module.exports = ({BraveNewCoinController})=>{
const router = Router();

router.get("/lista", BraveNewCoinController.getListadoMonedas);
router.get("/conversion",validateConversionMoneda, BraveNewCoinController.getConversionMoneda);
return router;

}
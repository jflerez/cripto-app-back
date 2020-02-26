const {Router} = require("express");

module.exports = ({AuthController})=>{
const router = Router();

router.post("/signup", AuthController.singnUp);
router.post("/signin", AuthController.singnIn);
return router;

}
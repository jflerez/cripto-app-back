const {Router} = require("express");
const {validateAuth} = require("../validation/request.signup");

module.exports = ({AuthController})=>{
const router = Router();

router.post("/signup", validateAuth, AuthController.singnUp);
router.post("/signin", AuthController.singnIn);
return router;

}
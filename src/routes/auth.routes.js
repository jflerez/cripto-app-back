const {Router} = require("express");
const {validateSignUp} = require("../validation/request.signup");
const {validateSignIn} = require("../validation/request.signin");

module.exports = ({AuthController})=>{
const router = Router();

router.post("/signup", validateSignUp, AuthController.singnUp);
router.post("/signin", validateSignIn, AuthController.singnIn);
return router;

}
const {Router} = require("express");

module.exports = ({AuthController})=>{
const router = Router();

router.post("/singup", AuthController.singUp);
router.post("/singnin", AuthController.singIn);
return router;

}
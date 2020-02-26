const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

module.exports = (req,res,next)=>{
    const token = req.headers["authorization"];
    console.log("token: ", req.headers)
    if(!token){
        const error = new Error();
        error.status = 400;
        error.message = "No autorizado";
        throw error;
    }

    jwt.verify(token, JWT_SECRET, (err, decodeToken)=>{

        if(err){
            const error = new Error();
            error.status = 401;
            error.message = "Token invalido";
            throw error;

        }

        req.usuario = decodeToken.usuario;
        next();

    });

}
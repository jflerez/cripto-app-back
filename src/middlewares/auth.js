const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

module.exports = (req,next)=>{

    const token = req.headers["authorization"];
    
    if(!token){
        const error = new Error();
        error.status = 403;
        error.message = "No cuentas con autorización para acceder a este recurso.";
        throw error;
    }

    jwt.verify(token, JWT_SECRET, (err, decodeToken)=>{

        if(err){
            const error = new Error();
            error.status = 401;
            error.message = "Token invalido";
            throw error;

        }


        if(decodeToken.expiresIn <= moment().unix()) {
           const error = new Error();
            error.status = 401;
            error.message = "El token ha expirado.";
            throw error;
         }

        req.usuario = decodeToken.usuario;
        next();

    });

}
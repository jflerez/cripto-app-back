const jwt = require("jsonwebtoken");
const {JWT_SECRET} = require("../config");

module.exports = (req,res,next)=>{

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
            error.message = err.message === "jwt expired" ? "El token ha expirado." : "Token invalido";
            throw error;

        }

        req.usuario = decodeToken.usuario;
        next();

    });

}
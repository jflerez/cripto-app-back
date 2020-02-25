const {sign} = require('jsonwebtoken');
const {JWT_SECRET} = require('../config')

module.exports.generateToken = (usuario)=> {
 return sign({usuario}, JWT_SECRET, {expiresIn:"4h"});
}
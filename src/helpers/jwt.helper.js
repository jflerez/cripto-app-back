const {sign} = require('jsonwebtoken');
const {JWT_SECRET} = require('../config');
const moment = require('moment');


module.exports.generateToken = (usuario)=> {
 return sign({usuario}, JWT_SECRET, {expiresIn: moment().add(14, "minutes").unix()});
}
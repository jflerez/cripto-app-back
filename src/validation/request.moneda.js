const { check, validationResult } = require('express-validator');

exports.validateConversionMoneda =  [

    check('qty')
        .exists().withMessage('No se encontró referencia del valor a convertir.')
        .not().isEmpty().withMessage('El monto a convertir es requerido.')
        .isNumeric().withMessage('El monto a convertir debe ser numérico.')
        .matches(/^[1-9]\d*$/).withMessage('El valor del monto a convertir debe ser mayor a cero.')
        .trim(),
    (req,res,next)=> { 
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },


    check('from')
        .exists().withMessage('No se encontró referencia de la moneda de origen.')
        .not().isEmpty().withMessage('La moneda de origen es requerida.')
        .trim(),
    (req,res,next)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

    check('to')
        .exists().withMessage('No se encontró referencia de la moneda a convertir.')
        .not().isEmpty().withMessage('El valor de la moneda a convertir es requerido.')
        .trim(),
    (req,res,next)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    }

];
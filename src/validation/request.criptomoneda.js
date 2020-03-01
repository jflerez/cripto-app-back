const { check, validationResult } = require('express-validator');

exports.validateSaveCriptomoneda =  [

    check('nombre')
        .exists().withMessage('No se encontró referencia del nombre de la criptomoneda.')
        .not().isEmpty().withMessage('El nombre de la criptomoneda es requerido.')
        .trim(),
    (req,res,next)=> { 
    
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    },


    check('fuente')
        .exists().withMessage('No se encontró referencia de la fuente de la criptomoneda.')
        .not().isEmpty().withMessage('La fuente de la criptomoneda es requerida.')
        .trim(),
    (req,res,next)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    },

    check('precio')
        .exists().withMessage('No se encontró referencia del precio de la criptomoneda.')
        .not().isEmpty().withMessage('El valor del precio de la criptomoneda es requerido.')
        .trim(),
    (req,res,next)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(400).json({ errors: errors.array() });
        }
        next()
    }

];
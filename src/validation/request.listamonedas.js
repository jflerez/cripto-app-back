const { check, validationResult } = require('express-validator');

exports.validateListMoneda =  [

    check('from')
        .exists().withMessage('No se encontró referencia del origen del paginado.')
        .not().isEmpty().withMessage('Origen de paginado es requerido.')
        .isNumeric().withMessage('El origen del paginado debe ser numérico.')
        .trim(),
    (req,res,next)=> {
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

    check('to')
    .exists().withMessage('No se encontró referencia del fin del paginado.')
    .not().isEmpty().withMessage('fin de paginado es requerido.')
    .isNumeric().withMessage('El fin del paginado debe ser numérico.')
        .trim(),
    (req,res,next)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    }

];
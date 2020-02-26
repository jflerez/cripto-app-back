const { check, validationResult } = require('express-validator');

exports.validateSignIn =  [

    check('username')
        .exists().withMessage('No se encontró referencia del campo nombre.')
        .not().isEmpty().withMessage('El campo username es requerido.')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },


    check('clave')
        .exists().withMessage('No se encontró referencia del campo clave.')
        .not().isEmpty().withMessage('El campo clave es requerido.')
        .isLength({min: 8, max: 8}).withMessage('La clave debe contener 8 caracteres.')
        .trim(),
    (req,res,next)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    }

];
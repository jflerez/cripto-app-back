const { check, validationResult } = require('express-validator');

exports.validateSignUp =  [

    check('nombre')
        .exists().withMessage('No se encontró referencia del campo nombre.')
        .not().isEmpty().withMessage('El campo nombre es requerido.')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

    check('apellido')
        .exists().withMessage('No se encontró referencia del campo apellido.')
        .not().isEmpty().withMessage('El campo apellido es requerido.')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },


    check('username')
        .exists().withMessage('No se encontró referencia del campo username.')
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
        .matches(/^[A-Za-z0-9]+$/g).withMessage('La clave debe ser alfanumérica.')
        .trim(),
    (req,res,next)=> {

        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

    check('moneda')
        .exists().withMessage('No se encontró referencia del campo moneda.')
        .not().isEmpty().withMessage('El campo moneda es requerido.')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

];
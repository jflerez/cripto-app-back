const { check, validationResult } = require('express-validator');

exports.validateAuth =  [

    check('nombre')
        .exists().withMessage('El campo nombre es requerido.')
        //.isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

    check('apellido')
        .exists().withMessage('El campo apellido es requerido.')
        //.isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },


    check('username')
        .exists().withMessage('El campo username es requerido.')
        //.isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },


    check('clave')
        .exists().withMessage('El campo clave es requerido.')
        .isAlphanumeric().withMessage('La clave debe ser alfanumerica.')
        .matches(/^[0-9a-zA-Z]+$/).withMessage('ojo')
        .isLength({min: 8, max: 8}).withMessage('La clave debe contener 8 caracteres.')
        .trim(),
    (req,res,next)=> {

        next()
    },

    check('moneda')
        .exists().withMessage('El campo moneda es requerido.')
        //.isLength({min: 1 , max: 50}).withMessage('firstName should not be empty, should be more than one and less than 50 character')
        .trim(),
    (req,res,next)=> { 
        const errors = validationResult(req);
        if (!errors.isEmpty()) {
            return res.status(422).json({ errors: errors.array() });
        }
        next()
    },

];
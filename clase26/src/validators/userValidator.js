const { body } = require('express-validator');

const createUserValidator = [
    body('name').isLength({ min: 1 }).withMessage('El campo nombre es obligatorio'),
    body('email').isEmail().withMessage('Debe ingresar un email valido'),
    body('color').isLength({ min: 1 }).withMessage('Debe seleccionar un color'),
    body('age').custom(value => {
        if (isNaN(value)) {
            throw new Error('El valor ingresado debe ser un numero');
        } else {
            return true;
        }
    })
]

module.exports = { createUserValidator };
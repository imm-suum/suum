//Validation
const Joi = require('@hapi/joi');

//Registrarion Validation
const registerValidation = ( data )=> {
    const schema = Joi.object({
        name: Joi.string().min(6).required(),
        phoneNumber: Joi.string().required(),
        password: Joi.string().min(6).required(),
        notifications: Joi.boolean().required()
    });

   return schema.validate(data);


}

//Login Validation
const loginValidation = ( data )=> {
    const schema = Joi.object({
        phoneNumber: Joi.string().required(),
        password: Joi.string().min(6).required()
    });

   return schema.validate(data);


}


module.exports.registerValidation= registerValidation;
module.exports.loginValidation= loginValidation;
const Joi = require('joi');

const minPassword = 6;

const loginSchema = Joi.object({
    email: Joi.string().email().required(),
    senha: Joi.string().min(minPassword).required(),
});

export default loginSchema;

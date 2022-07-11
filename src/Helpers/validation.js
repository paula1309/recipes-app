import Joi from 'joi';

const minPassword = 5;

const loginSchema = Joi.object({
    email: Joi.string().email({ tlds: { allow: ['com', 'net'] } }),
    password: Joi.string().min(minPassword).required(),
});

export default loginSchema;

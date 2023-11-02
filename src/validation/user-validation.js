import Joi from "joi";

const loginUserValidation = Joi.object({
  username: Joi.string().max(255).required(),
  password: Joi.string().min(8).max(255).required()
});

export {
  loginUserValidation,
}
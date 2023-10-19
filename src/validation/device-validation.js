import Joi from "joi";

const createDeviceValidation = Joi.object({
  name: Joi.string().max(255).required(),
  location: Joi.string().max(255).required(),
});

const getDeviceValidation = Joi.object({
  deviceId: Joi.number().required()
});

const updateDeviceValidation = Joi.object({
  name: Joi.string().max(255).required(),
  location: Joi.string().max(255).required()
})


export {
  createDeviceValidation,
  getDeviceValidation,
  updateDeviceValidation
}
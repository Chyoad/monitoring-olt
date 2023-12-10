import Joi from "joi";

const createDeviceValidation = Joi.object({
  name: Joi.string().max(255).required(),
  location: Joi.string().max(255).required(),
  latitude: Joi.string().max(255).required(),
  longitude: Joi.string().max(255).required()
});

const getDeviceValidation = Joi.object({
  deviceId: Joi.string().required()
});

const updateDeviceValidation = Joi.object({
  name: Joi.string().max(255).optional(),
  location: Joi.string().max(255).optional(),
  latitude: Joi.string().max(255).optional(),
  longitude: Joi.string().max(255).optional(),
  status: Joi.boolean().optional()
});

const updateRelayValidation = Joi.object({
  status: Joi.boolean().required()
});

export {
  createDeviceValidation,
  getDeviceValidation,
  updateDeviceValidation,
  updateRelayValidation,
}
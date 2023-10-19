import Joi from "joi";

const createSensorValidation = Joi.object({
  tegangan: Joi.number().required(),
  arus: Joi.number().required(),
  daya: Joi.number().required(),
  energi: Joi.number().required(),
  suhu: Joi.number().required()
});

// const getDeviceValidation = Joi.object({
//   deviceId: Joi.string().max(255).required()
// });

// const updateDeviceValidation = Joi.object({
//   name: Joi.string().max(255).required(),
//   location: Joi.string().max(255).required()
// })


export {
  createSensorValidation,
}
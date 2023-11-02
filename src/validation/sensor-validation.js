import Joi from "joi";

const createSensorValidation = Joi.object({
  tegangan: Joi.number().required(),
  arus: Joi.number().required(),
  daya: Joi.number().required(),
  energi: Joi.number().required(),
  suhu: Joi.number().required()
});


export {
  createSensorValidation,
}
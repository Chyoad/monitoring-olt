import sensorService from "../service/sensor-service.js";

const create = async (req, res, next) => {
  try {
    const device = req.params;
    const sensor = req.body;
    const result = await sensorService.create(device, sensor);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const get = async (req, res, next) => {
  try {
    const device = req.params;
    const result = await sensorService.get(device);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

export default {
  create,
  get
}
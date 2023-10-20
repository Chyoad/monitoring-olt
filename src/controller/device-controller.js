import deviceService from "../service/device-service.js";

const create = async (req, res, next) => {
  try {
    const result = await deviceService.create(req.body);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const get = async (req, res, next) => {
  try {
    const result = await deviceService.get(req.params);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const update = async (req, res, next) => {
  try {
    const deviceId = req.params
    const data = req.body
    const result = await deviceService.update(deviceId, data);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const remove = async (req, res, next) => {
  try {
    await deviceService.remove(req.params);
    res.status(200).json({
      data: "OK"
    });
  } catch (e) {
    next(e);
  }
}

const count = async (req, res, next) => {
  try {
    const result = await deviceService.count();
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

export default {
  create,
  get,
  update,
  remove,
  count
}
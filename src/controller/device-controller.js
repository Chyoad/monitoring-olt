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

const all = async (req, res, next) => {
  try {
    const result = await deviceService.all();
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const getStatus = async (req, res, next) => {
  try {
    const result = await deviceService.getStatus(req.params);
    res.status(200).json({
      status: result
    });
  } catch (e) {
    next(e);
  }
}

const updateStatus = async (req, res, next) => {
  try {
    const deviceId = req.params
    const data = req.body
    const result = await deviceService.updateStatus(deviceId, data);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const getBattery = async (req, res, next) => {
  try {
    const result = await deviceService.getBattery(req.params);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const getDashboard = async (req, res, next) => {
  try {
    const result = await deviceService.getDashboard(req.params);
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
  all,
  getStatus,
  updateStatus,
  getDashboard,
  getBattery
}
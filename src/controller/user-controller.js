import userService from "../service/user-service.js";

const login = async (req, res, next) => {
  try {
    const result = await userService.login(req.body);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const get = async (req, res, next) => {
  try {
    const result = await userService.get(req.params);
    res.status(200).json({
      data: result
    });
  } catch (e) {
    next(e);
  }
}

const update = async (req, res, next) => {
  try {
    const data = req.body;
    const id = req.params;
    const result = await userService.update(id, data);
    res.status(200).json({
      data: result
    })
  } catch (e) {
    next(e);
  }
}

const logout = async (req, res, next) => {
  try {
    const result = await userService.logout(req.params);
    res.status(200).json({
      data: result
    })
  } catch (e) {
    next(e);
  }
}

export default {
  login,
  get,
  update,
  logout,
}
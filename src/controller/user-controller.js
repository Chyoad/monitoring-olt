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

const logout = async (req, res, next) => {
  try {
    await userService.logout(req.params);
    res.status(200).json({
      data: "OK"
    })
  } catch (e) {
    next(e);
  }
}

export default {
  login,
  get,
  logout
}
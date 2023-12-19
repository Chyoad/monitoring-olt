import express from "express";
import userController from "../controller/user-controller.js";
import deviceController from "../controller/device-controller.js";
import sensorController from "../controller/sensor-controller.js";

const publicRouter = new express.Router();

/* USER ROUTE */
publicRouter.post('/api/user/login', userController.login);


/* DEVICE ROUTE */
publicRouter.get('/api/device/getDashboard/:deviceId', deviceController.getDashboard);
publicRouter.patch('/api/relay/updateDashboard/:deviceId', deviceController.updateStatus);
publicRouter.get('/api/battery/getDashboard/:deviceId', deviceController.getBattery);



/* SENSOR ROUTE */
publicRouter.get('/api/sensor/getDashboard/:deviceId', sensorController.get);


export {
  publicRouter
}
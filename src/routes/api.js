import express from "express";
import deviceController from "../controller/device-controller.js";
import sensorController from "../controller/sensor-controller.js";
import userController from "../controller/user-controller.js";
import { petugasMiddleware, adminMiddleware, deviceMiddleware } from "../middleware/auth-middleware.js";

const apiRouter = new express.Router();

/* DEVICE ROUTE */
apiRouter.post('/api/device/create', deviceController.create);
apiRouter.get('/api/device/get/:deviceId', petugasMiddleware, deviceController.get);
apiRouter.patch('/api/device/update/:deviceId', adminMiddleware, deviceController.update);
apiRouter.delete('/api/device/remove/:deviceId', adminMiddleware, deviceController.remove);
apiRouter.get('/api/device/all', deviceController.all);


/* SENSOR ROUTE */
apiRouter.post('/api/sensor/create/:deviceId', deviceMiddleware, sensorController.create);
apiRouter.get('/api/sensor/get/:deviceId', petugasMiddleware, sensorController.get);


/* USER ROUTE */
apiRouter.get('/api/user/get/:userId', petugasMiddleware, userController.get);
apiRouter.patch('/api/user/update/:userId', petugasMiddleware, userController.update);
apiRouter.delete('/api/user/logout/:userId', petugasMiddleware, userController.logout);


export {
  apiRouter
}
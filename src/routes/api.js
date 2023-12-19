import express from "express";
import deviceController from "../controller/device-controller.js";
import sensorController from "../controller/sensor-controller.js";
import userController from "../controller/user-controller.js";
import { petugasMiddleware, adminMiddleware, deviceMiddleware } from "../middleware/auth-middleware.js";

const apiRouter = new express.Router();

/* DEVICE ROUTE */
apiRouter.post('/api/device/create', adminMiddleware, deviceController.create);
apiRouter.patch('/api/device/update/:deviceId', adminMiddleware, deviceController.update);
apiRouter.delete('/api/device/remove/:deviceId', adminMiddleware, deviceController.remove);

apiRouter.get('/api/device/get/:deviceId', petugasMiddleware, deviceController.get);
apiRouter.get('/api/battery/get/:deviceId', petugasMiddleware, deviceController.getBattery);
apiRouter.get('/api/device/all', petugasMiddleware, deviceController.all);
apiRouter.patch('/api/relay/update/:deviceId', petugasMiddleware, deviceController.updateStatus);

apiRouter.get('/api/relay/:deviceId', deviceMiddleware, deviceController.getStatus);


/* SENSOR ROUTE */
apiRouter.post('/api/sensor/create/:deviceId', deviceMiddleware, sensorController.create);
apiRouter.get('/api/sensor/get/:deviceId', deviceMiddleware, sensorController.get);


/* USER ROUTE */
apiRouter.get('/api/user/get/:userId', petugasMiddleware, userController.get);
apiRouter.patch('/api/user/update/:userId', petugasMiddleware, userController.update);
apiRouter.delete('/api/user/logout/:userId', petugasMiddleware, userController.logout);


export {
  apiRouter
}
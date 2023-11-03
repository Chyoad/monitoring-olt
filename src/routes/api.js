import express from "express";
import deviceController from "../controller/device-controller.js";
import sensorController from "../controller/sensor-controller.js";
import userController from "../controller/user-controller.js";
import { petugasMiddleware, adminMiddleware } from "../middleware/auth-middleware.js";

const apiRouter = new express.Router();

/* DEVICE ROUTE */
apiRouter.post('/api/device/create', deviceController.create);
apiRouter.get('/api/device/get/:deviceId', deviceController.get);
apiRouter.patch('/api/device/update/:deviceId', deviceController.update);
apiRouter.delete('/api/device/remove/:deviceId', deviceController.remove);
apiRouter.get('/api/device/all', deviceController.all);


/* SENSOR ROUTE */
apiRouter.post('/api/sensor/create/:deviceId', sensorController.create);
apiRouter.get('/api/sensor/get/:deviceId', sensorController.get);


/* USER ROUTE */
apiRouter.get('/api/user/get/:userId', userController.get, petugasMiddleware,);
apiRouter.delete('/api/user/logout/:userId', userController.logout, petugasMiddleware);


export {
  apiRouter
}
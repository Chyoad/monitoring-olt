import { validate } from "../validation/validation.js";
import {
  createSensorValidation
} from "../validation/sensor-validation.js";
import {
  getDeviceValidation
} from "../validation/device-validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (req1, req2) => {
  const device = validate(getDeviceValidation, req1)
  const sensor = validate(createSensorValidation, req2);

  const deviceId = await prismaClient.device.findUnique({
    where: {
      deviceId: device.deviceId
    }
  });

  if (!deviceId) {
    throw new ResponseError(404, "Device not found");
  }

  return prismaClient.sensor.create({
    data: {
      deviceId: device.deviceId,
      tegangan: sensor.tegangan,
      arus: sensor.arus,
      daya: sensor.daya,
      energi: sensor.energi,
      suhu: sensor.suhu,
    },
    select: {
      id: true,
      deviceId: true,
      tegangan: true,
      arus: true,
      daya: true,
      energi: true,
      suhu: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

const get = async (req) => {
  const device = validate(getDeviceValidation, req);

  const deviceId = await prismaClient.device.findUnique({
    where: {
      deviceId: device.deviceId
    }
  });

  if (!deviceId) {
    throw new ResponseError(404, "Sensor not found");
  }

  return prismaClient.sensor.findMany({
    where: {
      deviceId: device.deviceId
    },
    take: 5,
    orderBy: {
      id: 'desc'
    }
  });
}

export default {
  create,
  get
}
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
    },
    select: {
      deviceId: true
    }
  });

  if (!deviceId) {
    throw new ResponseError(404, "Device not found");
  }

  const specBattery = await prismaClient.spec_battery.findUnique({
    where: {
      deviceId: device.deviceId
    }
  });

  const persentageNow = sensor.tegangan / specBattery.voltageTop * 100;

  const capacityNow = specBattery.batteryCapacity * persentageNow / 100;

  await prismaClient.battery.create({
    data: {
      specBatteryId: specBattery.specBatteryId,
      capacityNow: capacityNow,
      persentageNow: persentageNow
    }
  });

  const resultSensor = await prismaClient.sensor.create({
    data: {
      deviceId: device.deviceId,
      tegangan: sensor.tegangan,
      arus: sensor.arus,
      daya: sensor.daya,
      energi: sensor.energi,
      suhu: sensor.suhu,
      kelembapan: sensor.kelembapan
    }
  });

  return resultSensor;
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
      createdAt: 'desc'
    }
  });
}

export default {
  create,
  get
}
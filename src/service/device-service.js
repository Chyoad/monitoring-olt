import { validate } from "../validation/validation.js";
import {
  createDeviceValidation,
  getDeviceValidation,
  updateDeviceValidation,
} from "../validation/device-validation.js";
import { prismaClient } from "../app/database.js";
import { ResponseError } from "../error/response-error.js";

const create = async (req) => {
  const device = validate(createDeviceValidation, req);

  const countDevice = await prismaClient.device.count({
    where: {
      name: device.name
    }
  });

  if (countDevice === 1) {
    throw new ResponseError(400, "Device already exists");
  }

  return prismaClient.device.create({
    data: {
      name: device.name,
      location: device.location
    },
    select: {
      deviceId: true,
      name: true,
      location: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

const get = async (req) => {
  const deviceReq = validate(getDeviceValidation, req);

  const device = await prismaClient.device.findUnique({
    where: {
      deviceId: deviceReq.deviceId
    },
    select: {
      deviceId: true,
      name: true,
      location: true,
      createdAt: true,
      updatedAt: true
    }
  });

  if (!device) {
    throw new ResponseError(404, "Device not found");
  }

  return device;
}

const update = async (req1, req2) => {
  const id = validate(getDeviceValidation, req1);
  const device = validate(updateDeviceValidation, req2);

  const countDevice = await prismaClient.device.count({
    where: {
      deviceId: id.deviceId,
    }
  })

  if (countDevice !== 1) {
    throw new ResponseError(404, "Device not found");
  }

  const data = {
    name: device.name,
    location: device.location
  }

  return prismaClient.device.update({
    where: {
      deviceId: id.deviceId
    },
    data: data,
    select: {
      deviceId: true,
      name: true,
      location: true,
      createdAt: true,
      updatedAt: true
    }
  });
}

const remove = async (req) => {
  const device = validate(getDeviceValidation, req);

  const countDevice = await prismaClient.device.count({
    where: {
      deviceId: device.deviceId
    }
  });

  if (countDevice !== 1) {
    throw new ResponseError(404, "Device not found");
  }

  return prismaClient.device.delete({
    where: {
      deviceId: device.deviceId
    }
  });
}

const count = async (req) => {
  const device = await prismaClient.device.count();

  if (!device) {
    throw new ResponseError(404, "Device not found");
  }

  return device;
}

export default {
  create,
  get,
  update,
  remove,
  count
}
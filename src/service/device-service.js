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
    throw new ResponseError(400, "Device already exists, create different device name");
  }

  let deviceId = '';
  for (let i = 0; i < 2; i++) {
    const randomChunk = Math.random().toString(16).substr(2, 6).toUpperCase();
    deviceId += randomChunk + '-';
  }
  deviceId += Math.random().toString(16).substr(2, 6).toUpperCase();

  let apiKey = '';
  for (let i = 0; i < 4; i++) { // Menghasilkan 4 bagian masing-masing dengan 6 karakter
    const randomChunk = Math.random().toString(36).substr(2, 6); // Gunakan base-36 (huruf dan angka)
    const mixedCaseChunk = randomChunk.split('').map(char => (Math.random() < 0.5 ? char.toUpperCase() : char.toLowerCase())).join('');
    apiKey += mixedCaseChunk;
    if (i < 3) {
      apiKey += '-';
    }
  }


  return prismaClient.device.create({
    data: {
      deviceId: deviceId,
      name: device.name,
      location: device.location,
      latitude: device.latitude,
      longitude: device.longitude,
      apiKey: apiKey
    }
  });
}

const get = async (req) => {
  const deviceReq = validate(getDeviceValidation, req);

  const device = await prismaClient.device.findUnique({
    where: {
      deviceId: deviceReq.deviceId
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
    location: device.location,
    latitude: device.latitude,
    longitude: device.longitude,
    status: device.status
  }

  return prismaClient.device.update({
    where: {
      deviceId: id.deviceId
    },
    data: data
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

  await prismaClient.sensor.deleteMany({
    where: {
      deviceId: device.deviceId
    }
  });

  return await prismaClient.device.delete({
    where: {
      deviceId: device.deviceId
    }
  });
}

const all = async (req) => {
  const device = await prismaClient.device.findMany();

  if (!device) {
    throw new ResponseError(404, "Device not found");
  }

  return device;
}

const getStatus = async (req) => {
  const deviceReq = validate(getDeviceValidation, req);

  const device = await prismaClient.device.findUnique({
    where: {
      deviceId: deviceReq.deviceId
    },
    select: {
      status: true
    }
  });

  if (!device) {
    throw new ResponseError(404, "Device not found");
  }

  return device.status === false ? 0 : 1;
}

export default {
  create,
  get,
  update,
  remove,
  all,
  getStatus
}
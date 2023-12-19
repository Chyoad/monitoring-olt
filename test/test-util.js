import { prismaClient } from "../src/app/database.js";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const createTestUser = async () => {
  const token = jwt.sign({ userId: 'testId', role: 'ADMIN' }, process.env.SECRET_KEY);

  return await prismaClient.user.create({
    data: {
      userId: 'testId',
      username: 'testUser',
      password: await bcrypt.hash('testPass', 10),
      role: 'ADMIN',
      token: token
    },

  });
}

export const removeTestUser = async () => {
  await prismaClient.user.deleteMany({
    where: {
      userId: 'testId'
    }
  });
}

export const getTestUser = async () => {
  return await prismaClient.user.findUnique({
    where: {
      userId: 'testId'
    }
  });
}

export const removeTestDevice1 = async () => {

  await prismaClient.spec_battery.deleteMany({
    where: {
      batteryBrand: 'test',
    }
  });

  await prismaClient.device.deleteMany({
    where: {
      name: 'testDevice'
    }
  });
}

export const removeTestDevice = async () => {

  await prismaClient.battery.deleteMany({
    where: {
      specBatteryId: 'testSpecBatteryId',
    }
  })

  await prismaClient.spec_battery.deleteMany({
    where: {
      batteryBrand: 'test',
    }
  });

  await prismaClient.sensor.deleteMany({
    where: {
      deviceId: 'testId'
    }
  });

  await prismaClient.device.deleteMany({
    where: {
      deviceId: 'testId'
    }
  })
}

export const createTestDevice = async () => {
  const device = await prismaClient.device.create({
    data: {
      deviceId: 'testId',
      name: 'testDevice',
      location: 'testLocation',
      latitude: 'testLatitude',
      longitude: 'testLongitude',
      apiKey: 'testApiKey',
    }
  });

  const specBattery = await prismaClient.spec_battery.create({
    data: {
      specBatteryId: 'testSpecBatteryId',
      deviceId: device.deviceId,
      batteryBrand: 'test',
      voltageNominal: 1000,
      voltageTop: 500,
      voltageLow: 200,
      batteryCapacity: 2000
    }
  });

  return Promise.all([device, specBattery]);
}

export const createTestSensor = async (props) => {
  return await prismaClient.sensor.create({
    data: {
      deviceId: props,
      tegangan: 1.2,
      arus: 1.2,
      daya: 1.2,
      energi: 5.2,
      suhu: 2.2,
      kelembapan: 2.2
    }
  });
}

export const removeTestSensor = async () => {

  await prismaClient.device.deleteMany({
    where: {
      deviceId: 'testId',
    }
  })
}

export const createTestBattery = async () => {
  const device = await prismaClient.device.create({
    data: {
      deviceId: 'testId1',
      name: 'testDevice',
      location: 'testLocation',
      latitude: 'testLatitude',
      longitude: 'testLongitude',
      apiKey: 'testApiKey',
    }
  });

  const specBattery = await prismaClient.spec_battery.create({
    data: {
      specBatteryId: 'testSpecBatteryId1',
      deviceId: device.deviceId,
      batteryBrand: 'test',
      voltageNominal: 1000,
      voltageTop: 500,
      voltageLow: 200,
      batteryCapacity: 2000
    }
  });

  const battery = await prismaClient.battery.create({
    data: {
      specBatteryId: specBattery.specBatteryId,
      capacityNow: 1000,
      persentageNow: 10
    }
  });

  return battery;
}

export const removeTestBattery = async () => {

  await prismaClient.battery.deleteMany({
    where: {
      specBatteryId: 'testSpecBatteryId1',
    }
  });

  await prismaClient.spec_battery.deleteMany({
    where: {
      deviceId: 'testId1',
    }
  });

  await prismaClient.device.deleteMany({
    where: {
      deviceId: 'testId1',
    }
  });
}



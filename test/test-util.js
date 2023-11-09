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

  await prismaClient.device.deleteMany({
    where: {
      name: 'testDevice'
    }
  })
}

export const removeTestDevice = async () => {

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
  return await prismaClient.device.create({
    data: {
      deviceId: 'testId',
      name: 'testDevice',
      location: 'testLocation',
      latitude: 'testLatitude',
      longitude: 'testLongitude',
      apiKey: 'testApiKey'
    }
  });
}

export const createTestSensor = async (props) => {
  return await prismaClient.sensor.create({
    data: {
      deviceId: props,
      tegangan: 1.2,
      arus: 1.2,
      daya: 1.2,
      energi: 5.2,
      suhu: 2.2
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



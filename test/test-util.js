import { prismaClient } from "../src/app/database.js";
import { web } from "../src/app/web.js";
import supertest from "supertest";
import bcrypt from "bcrypt";
import jwt from 'jsonwebtoken';


export const createTestUser = async () => {
  const token = jwt.sign({ userId: 'testId', role: 'PETUGAS' }, process.env.SECRET_KEY);

  return await prismaClient.user.create({
    data: {
      userId: 'testId',
      username: 'testUser',
      password: await bcrypt.hash("testPass", 10),
      role: 'PETUGAS',
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

export const removeTestDevice = async () => {
  await prismaClient.device.deleteMany({
    where: {
      name: "testDevice"
    }
  })
}

export const createTestDevice = async () => {
  await prismaClient.device.create({
    data: {
      name: "testDevice",
      location: "testLocation"
    }
  });
}


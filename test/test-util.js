import { prismaClient } from "../src/app/database.js";
import { web } from "../src/app/web.js";
import supertest from "supertest";

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


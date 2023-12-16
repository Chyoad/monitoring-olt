import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser, createTestDevice, removeTestDevice, removeTestSensor, createTestSensor } from "./test-util.js";

describe('POST /api/sensor/create', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can create sensor', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .post(`/api/sensor/create/${device.deviceId}`)
      .query({ apiKey: device.apiKey })
      .send({
        tegangan: 1.2,
        arus: 1.2,
        daya: 1.2,
        energi: 5.2,
        suhu: 2.2,
        kelembapan: 2.2,
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.tegangan).toBe(1.2);
    expect(result.body.data.arus).toBe(1.2);
    expect(result.body.data.daya).toBe(1.2);
    expect(result.body.data.energi).toBe(5.2);
    expect(result.body.data.suhu).toBe(2.2);
    expect(result.body.data.kelembapan).toBe(2.2);
  });

  it('should reject if request is invalid', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .post(`/api/sensor/create/${device.deviceId}`)
      .query({ apiKey: device.apiKey })
      .send({});

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.error).toBeDefined();
  });

  it('should reject if device is not found', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .post(`/api/sensor/create/salah`)
      .query({ apiKey: device.apiKey })
      .send({
        tegangan: 1.2,
        arus: 1.2,
        daya: 1.2,
        energi: 5.2,
        suhu: 2.2
      });

    logger.info(result.body);

    expect(result.status).toBe(404);
    expect(result.error).toBeDefined();
  });
});

describe('GET /api/sensor/get', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can get sensor', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/sensor/get/${device.deviceId}`)
      .query({ apiKey: device.apiKey })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
  });

  it('should return 404 if device sensor is not found', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/sensor/get/salah`)
      .query({ apiKey: device.apiKey })

    logger.info(result.body);

    expect(result.status).toBe(404);
    expect(result.error).toBeDefined();
  });
});

describe('GET /api/sensor/getDashboard', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can get sensor without apiKey', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/sensor/getDashboard/${device.deviceId}`)

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
  });

  it('should return 404 if device sensor is not found', async () => {
    const result = await supertest(web)
      .get(`/api/sensor/get/salah`)

    logger.info(result.body);

    expect(result.status).toBe(404);
    expect(result.error).toBeDefined();
  });
});
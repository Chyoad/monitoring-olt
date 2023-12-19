import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestUser, removeTestUser, createTestDevice, removeTestDevice, removeTestDevice1, createTestBattery, removeTestBattery } from "./test-util.js";

describe('POST /api/device/create', function () {

  afterEach(async () => {
    await removeTestDevice1();
    await removeTestUser();
  })

  it('should can create new device', async () => {
    const user = await createTestUser();
    const result = await supertest(web)
      .post('/api/device/create')
      .query({ apiKey: user.token })
      .send({
        name: 'testDevice',
        location: 'testLocation',
        latitude: 'testLatitude',
        longitude: 'testLongitude',
        batteryBrand: 'test',
        voltageNominal: 1000,
        voltageTop: 500,
        voltageLow: 200,
        batteryCapacity: 2000
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
    expect(result.body.data[0].apiKey).toBeDefined();
  });

  it('should reject if request is invalid', async () => {
    const user = await createTestUser();
    const result = await supertest(web)
      .post('/api/device/create')
      .query({ apiKey: user.token })
      .send({
        name: '',
        location: '',
        latitude: '',
        longitude: '',
        batteryBrand: '',
        voltageNominal: '',
        voltageTop: '',
        voltageLow: '',
        batteryCapacity: ''
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it('should reject if device already created', async () => {
    const user = await createTestUser();
    let result = await supertest(web)
      .post('/api/device/create')
      .query({ apiKey: user.token })
      .send({
        name: 'testDevice',
        location: 'testLocation',
        latitude: 'testLatitude',
        longitude: 'testLongitude',
        batteryBrand: 'test',
        voltageNominal: 1000,
        voltageTop: 500,
        voltageLow: 200,
        batteryCapacity: 2000
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();

    result = await supertest(web)
      .post('/api/device/create')
      .query({ apiKey: user.token })
      .send({
        name: 'testDevice',
        location: 'testLocation',
        latitude: 'testLatitude',
        longitude: 'testLongitude',
        batteryBrand: 'test',
        voltageNominal: 1000,
        voltageTop: 500,
        voltageLow: 200,
        batteryCapacity: 2000
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/device/get', function () {

  afterEach(async () => {
    await removeTestDevice();
    await removeTestUser();
  });

  it('should can get the device', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/device/get/${device[0].deviceId}`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data[0].apiKey).toBeDefined();
  });

  it('should return 404 if device id is not found', async () => {
    const user = await createTestUser();
    const result = await supertest(web)
      .get(`/api/device/get/salah`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(404);
  });

});


describe('PACTH /api/device/update', function () {

  afterEach(async () => {
    await removeTestDevice();
    await removeTestUser();
  });

  it('should can update device', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/device/update/${device[0].deviceId}`)
      .query({ apiKey: user.token })
      .send({
        name: 'testDevice',
        location: 'testLocation1',
        latitude: 'testLatitude1',
        longitude: 'testLongitude1',
        batteryBrand: 'test',
        voltageNominal: 1000,
        voltageTop: 500,
        voltageLow: 200,
        batteryCapacity: 2000
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data[0]).toBeDefined();
    expect(result.body.data[1]).toBeDefined();
    expect(result.body.data[0].apiKey).toBeDefined();
  });

  it('should can update device location', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/device/update/${device[0].deviceId}`)
      .query({ apiKey: user.token })
      .send({
        location: 'testLocation2',
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data[0].location).toBe("testLocation2");
  })

  it('should reject if request is not valid', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/device/update/${device.deviceId}`)
      .query({ apiKey: user.token })
      .send({
        kosong: '',
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
  });

});

describe('DELETE /api/device/remove', function () {

  afterEach(async () => {
    await removeTestDevice();
    await removeTestUser();
  });

  it('should can remove device', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .delete(`/api/device/remove/${device[0].deviceId}`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBe("OK");
  });

  it('should reject if device not found', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .delete(`/api/device/remove/salah`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(404);
  });

});

describe('GET /api/device/all', function () {

  beforeEach(async () => {
    await createTestDevice();
  });

  afterEach(async () => {
    await removeTestDevice();
    await removeTestUser();
  });

  it('should can get all device', async () => {
    const user = await createTestUser();
    const result = await supertest(web)
      .get(`/api/device/all`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data[0]).toBeDefined();
    expect(result.body.data[1]).toBeDefined();
  });
});

describe('GET /api/relay', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can get status relay', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/relay/${device[0].deviceId}`)
      .query({ apiKey: device[0].apiKey })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.status).toBeDefined();
  });

  it('should return 404 if device id not found', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/relay/salah`)
      .query({ apiKey: device[0].apiKey })

    logger.info(result.body);

    expect(result.status).toBe(404);
    expect(result.body.errors).toBeDefined();
  });
});

describe('PATCH /api/relay/update', function () {

  afterEach(async () => {
    await removeTestDevice()
    await removeTestUser();
  });

  it('should can update status relay', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/relay/update/${device[0].deviceId}`)
      .query({ apiKey: user.token })
      .send({
        status: true,
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.status).toBe(true);
  });

  it('should reject if request is not valid', async () => {
    const user = await createTestUser();
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/relay/update/${device.deviceId}`)
      .query({ apiKey: user.token })
      .send({
        status: 'salah',
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/device/getDashboard', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can get device without login in dashboard', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/device/getDashboard/${device[0].deviceId}`)

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data[0]).toBeDefined();
    expect(result.body.data[1]).toBeDefined();
  });

  it('should return 404 if device id is not found', async () => {
    const result = await supertest(web)
      .get(`/api/device/getDashboard/${"salah"}`)

    logger.info(result.body);

    expect(result.status).toBe(404);
    expect(result.body.errors).toBeDefined();
  });
});

describe('PATCH /api/relay/updateDashboard', function () {

  afterEach(async () => {
    await removeTestDevice();
  });

  it('should can update status relay without login in dashboard', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/relay/updateDashboard/${device[0].deviceId}`)
      .send({
        status: true,
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.status).toBe(true);
  });

  it('should reject if request is not valid', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .patch(`/api/relay/updateDashboard/${device.deviceId}`)
      .send({
        status: 'salah',
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/battery/get', function () {

  beforeEach(async () => {
    await createTestBattery();
  });

  afterEach(async () => {
    await removeTestBattery();
    await removeTestDevice();
    await removeTestUser();
  });

  it('should can get battery', async () => {
    const device = await createTestDevice();
    const user = await createTestUser();
    const result = await supertest(web)
      .get(`/api/battery/get/${device[0].deviceId}`)
      .query({ apiKey: user.token })

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
  })

});

describe('GET /api/battery/getDashboard', function () {

  beforeEach(async () => {
    await createTestBattery();
  });

  afterEach(async () => {
    await removeTestBattery();
    await removeTestDevice();
  });

  it('should can get battery without login in dashboard', async () => {
    const device = await createTestDevice();
    const result = await supertest(web)
      .get(`/api/battery/getDashboard/${device[0].deviceId}`)

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data).toBeDefined();
  })

});

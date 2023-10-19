import supertest from "supertest";
import { web } from "../src/app/web.js";
import { logger } from "../src/app/logging.js";
import { createTestDevice, removeTestDevice } from "./test-util.js";

describe('POST /api/device/create', function () {

  afterEach(async () => {
    await removeTestDevice();
  })

  it('should can create new device', async () => {
    const result = await supertest(web)
      .post('/api/device/create')
      .send({
        name: 'testDevice',
        location: 'testLocation'
      });

    expect(result.status).toBe(200);
    expect(result.body.data.name).toBe("testDevice");
    expect(result.body.data.location).toBe("testLocation");
  });

  it('should reject if request is invalid', async () => {
    const result = await supertest(web)
      .post('/api/device/create')
      .send({
        name: '',
        location: '',
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });

  it('should reject if device already created', async () => {
    let result = await supertest(web)
      .post('/api/device/create')
      .send({
        name: 'testDevice',
        location: 'testLocation',
      });

    logger.info(result.body);

    expect(result.status).toBe(200);
    expect(result.body.data.name).toBe("testDevice");
    expect(result.body.data.location).toBe("testLocation");

    result = await supertest(web)
      .post('/api/device/create')
      .send({
        name: 'testDevice',
        location: 'testLocation',
      });

    logger.info(result.body);

    expect(result.status).toBe(400);
    expect(result.body.errors).toBeDefined();
  });
});

describe('GET /api/device/get', function () {

  afterEach(async () => {
    removeTestDevice();
  });

  it('should can get the device', async () => {
    const device = createTestDevice();
    const result = await supertest(web)
      .get('api/device/get/:deviceId')
      .send({
        deviceId: device.deviceId,
      })

    logger.info(result.body);

    expect(result.status).toBe(200);
    //expect(result.body.data.deviceId).toBe("1");
  });
});
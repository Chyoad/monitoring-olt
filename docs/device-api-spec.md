# **DEVICE API SPECIFICATION**

+ ### Create Device API

  * #### POST : https://localhost:3000/api/device/create?apiKey=

    - Request body create device
        ```
        {
          "name": "device_1",
          "location": "location_1",
          "latitude": "297070298",
          "longitude": "-129736781",
          "batteryBrand": "abc",
          "voltageNominal": 1010,
          "voltageTop": 500,
          "voltageLow": 200,
          "batteryCapacity": 2000
        }

        ```

    - Response body create device
      ```
      {
          "data": [
              {
                  "deviceId": "B78A43-4706AD-4CB875",
                  "name": "device_1",
                  "location": "location_1",
                  "latitude": "297070298",
                  "longitude": "-129736781" 
                  "status": false,
                  "apiKey": "omYrmQ-57JYY0-mhB7gK-JwwSev",
                  "createdAt": "2023-12-19T17:36:26.683Z",
                  "updatedAt": "2023-12-19T17:36:26.683Z"
              },
              {
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "deviceId": "B78A43-4706AD-4CB875",
                  "batteryBrand": "abc",
                  "voltageNominal": 1010,
                  "voltageTop": 500,
                  "voltageLow": 200,
                  "batteryCapacity": 2000,
                  "createdAt": "2023-12-19T17:36:26.686Z",
                  "updatedAt": "2023-12-19T17:36:26.686Z"
              }
          ]
      }
      ```

+ ### Get Device API

  * #### GET : https://localhost:3000/api/device/get/:deviceId?apiKey=

    - Request params get device
      ```
      :deviceId
      ```

    - Response body get device
      ```
      {
          "data": [
              {
                  "deviceId": "B78A43-4706AD-4CB875",
                  "name": "device_1",
                  "location": "location_1",
                  "latitude": "297070298",
                  "longitude": "-129736781" 
                  "status": false,
                  "apiKey": "omYrmQ-57JYY0-mhB7gK-JwwSev",
                  "createdAt": "2023-12-19T17:36:26.683Z",
                  "updatedAt": "2023-12-19T17:36:26.683Z"
              },
              {
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "deviceId": "B78A43-4706AD-4CB875",
                  "batteryBrand": "abc",
                  "voltageNominal": 1010,
                  "voltageTop": 500,
                  "voltageLow": 200,
                  "batteryCapacity": 2000,
                  "createdAt": "2023-12-19T17:36:26.686Z",
                  "updatedAt": "2023-12-19T17:36:26.686Z"
              }
          ]
      }
      ```

+ ### Get All Device API

  * #### GET : https://localhost:3000/api/device/all?apiKey=

    - Request params get device
      ```
      :deviceId
      ```

    - Response body get device
      ```
      {
          "data": [
              {
                  "deviceId": "B78A43-4706AD-4CB875",
                  "name": "test_device",
                  "location": "test_location",
                  "latitude": "-7.823833586627168",
                  "longitude": "110.3644550417918",
                  "status": true,
                  "apiKey": "omYrmQ-57JYY0-mhB7gK-JwwSev",
                  "createdAt": "2023-12-19T17:36:26.683Z",
                  "updatedAt": "2023-12-19T17:50:33.914Z",
                  "spec_battery": {
                      "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                      "deviceId": "B78A43-4706AD-4CB875",
                      "batteryBrand": "abc",
                      "voltageNominal": 10111,
                      "voltageTop": 500,
                      "voltageLow": 200,
                      "batteryCapacity": 2000,
                      "createdAt": "2023-12-19T17:36:26.686Z",
                      "updatedAt": "2023-12-19T17:42:10.262Z"
                  }
              }
          ]
      }
      ```


+ ### Update Device API

  * #### PATCH : https://localhost:3000/api/device/update/:deviceId?apiKey=

    - Request Params update device
      ```
      :deviceId
      ```

    - Request body update device
      ```
      {
          "name": "device_1",
          "location": "location_1",
          "latitude": "297070298",
          "longitude": "-129736781",
          "batteryBrand": "abc",
          "voltageNominal": 1010,
          "voltageTop": 500,
          "voltageLow": 200,
          "batteryCapacity": 2000
      }
      ```

    - Response body update device
      ```
      {
        "data": [
          {
            "deviceId": "DC08B8-E2C132-527E84",
            "name": "device_1",
            "location": "location_1",
            "latitude": "-7.823833586627168",
            "longitude": "110.3644550417918",
            "status": true,
            "apiKey": "5XL5T8-CV5Xdr-0g6qqx-30j4VF",
            "createdAt": "2023-11-02T07:12:31.517Z",
            "updatedAt": "2023-11-02T07:12:31.517Z"
          },
          {
            "deviceId": "F260AA-FFA6F8-D048F7",
            "name": "device_2",
            "location": "location_2",
            "latitude": "-7.823833586627168",
            "longitude": "110.3644550417918",
            "status": true,
            "apiKey": "5XL5T8-CV5Xdr-0g6qqx-30j4VF",
            "createdAt": "2023-11-06T08:47:45.379Z",
            "updatedAt": "2023-11-06T08:47:45.379Z"
          }
        ]
      }
      ```

+ ### Remove Device API

  * #### DELETE : https://localhost:3000/api/device/remove/:deviceId?apiKey=

    - Request Params remove device
      ```
      :deviceId
      ```
      
    - Response body remove device
      ```
      {
        "data": "OK"
      }
      ```

+ ### Get status Device API

  * #### GET : https://localhost:3000/api/relay/:deviceId?apiKey=

    - Request params get status device
      ```
      :deviceId
      ```

    - Response body get status device
      ```
      {
        "status": 1
      }
      ```

+ ### Update status Device API

  * #### PATCH : https://localhost:3000/api/relay/update/:deviceId?apiKey=

    - Request Params update status device
      ```
      :deviceId
      ```

    - Request body update status device
      ```
      {
          "status": true,
      }
      ```

    - Response body update status device
      ```
      {
        "data": {
          "status": true,
        }
      }
      ```

+ ### Get Device API (Dashboard)

  * #### GET : https://localhost:3000/api/device/getDashboard/:deviceId

    - Request params get device
      ```
      :deviceId
      ```

    - Response body get device
      ```
      {
          "data": [
              {
                  "deviceId": "B78A43-4706AD-4CB875",
                  "name": "device_1",
                  "location": "location_1",
                  "latitude": "297070298",
                  "longitude": "-129736781" 
                  "status": false,
                  "apiKey": "omYrmQ-57JYY0-mhB7gK-JwwSev",
                  "createdAt": "2023-12-19T17:36:26.683Z",
                  "updatedAt": "2023-12-19T17:36:26.683Z"
              },
              {
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "deviceId": "B78A43-4706AD-4CB875",
                  "batteryBrand": "abc",
                  "voltageNominal": 1010,
                  "voltageTop": 500,
                  "voltageLow": 200,
                  "batteryCapacity": 2000,
                  "createdAt": "2023-12-19T17:36:26.686Z",
                  "updatedAt": "2023-12-19T17:36:26.686Z"
              }
          ]
      }
      ```

+ ### Update status Device API (Dashboard) 

  * #### PATCH : https://localhost:3000/api/relay/updateDashboard/:deviceId

    - Request Params update status device
      ```
      :deviceId
      ```

    - Request body update status device
      ```
      {
          "status": true,
      }
      ```

    - Response body update status device
      ```
      {
        "data": {
          "status": true,
        }
      }
      ```

+ ### Get Battery 

  * #### GET : https://localhost:3000/api/battery/get/:deviceId?apiKey=

    - Request Params get battery
      ```
      :deviceId
      ```

    - Response body get battery
      ```
      {
          "data": [
              {
                  "batteryId": "e2c49130-ad87-4e2e-b67d-a795d854c310",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:37.437Z",
                  "updatedAt": "2023-12-19T17:56:37.437Z"
              },
              {
                  "batteryId": "2e9d16c2-6011-497d-bea7-9475663864d8",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:36.625Z",
                  "updatedAt": "2023-12-19T17:56:36.625Z"
              },
              {
                  "batteryId": "fdf9e752-9938-411f-aaec-c2fd4a47398c",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:36.052Z",
                  "updatedAt": "2023-12-19T17:56:36.052Z"
              },
              {
                  "batteryId": "a43368b1-b2c7-480b-878c-ecfdaf7d4061",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:55:55.800Z",
                  "updatedAt": "2023-12-19T17:55:55.800Z"
              }
          ]
      }
      ```

+ ### Get Battery (Dashboard)

  * #### GET : https://localhost:3000/api/battery/get/:deviceId

    - Request Params get battery
      ```
      :deviceId
      ```

    - Response body get battery
      ```
      {
          "data": [
              {
                  "batteryId": "e2c49130-ad87-4e2e-b67d-a795d854c310",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:37.437Z",
                  "updatedAt": "2023-12-19T17:56:37.437Z"
              },
              {
                  "batteryId": "2e9d16c2-6011-497d-bea7-9475663864d8",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:36.625Z",
                  "updatedAt": "2023-12-19T17:56:36.625Z"
              },
              {
                  "batteryId": "fdf9e752-9938-411f-aaec-c2fd4a47398c",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:56:36.052Z",
                  "updatedAt": "2023-12-19T17:56:36.052Z"
              },
              {
                  "batteryId": "a43368b1-b2c7-480b-878c-ecfdaf7d4061",
                  "specBatteryId": "ef7dbb66-e6a8-4715-a645-a7a3ef9fedf7",
                  "capacityNow": 4.8,
                  "persentageNow": 0.24,
                  "createdAt": "2023-12-19T17:55:55.800Z",
                  "updatedAt": "2023-12-19T17:55:55.800Z"
              }
          ]
      }
      ```




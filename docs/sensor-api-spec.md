# **SENSOR API SPECIFICATION**

+ ### Create Sensor API

  * #### POST : https://localhost:3000/api/sensor/create/:deviceId?apiKey=

    - Request Params create sensor
      ```
      :deviceId
      ```

    - Request body create sensor
        ```
        {
            "tegangan": 5.2,
            "arus": 5.2,
            "daya": 5.2,
            "energi": 5.2,
            "suhu": 5.2
        }
        ```

    - Response body create sensor
      ```
      {
          "data": {
              "sensorId": 27,
              "deviceId": 1,
              "tegangan": 5.2,
              "arus": 5.2,
              "daya": 5.2,
              "energi": 5.2,
              "suhu": 5.2,
              "createdAt": "2023-10-19T16:21:42.859Z",
              "updatedAt": "2023-10-19T16:21:42.859Z"
          }
      }
      ```

+ ### Get Sensor API

  * #### GET : https:////localhost:3000/api/sensor/get/:deviceId?apiKey=

    - Request params get sensor
      ```
      :deviceId
      ```

    - Response body get sensor
      ```
      {
          "data": [
              {
                  "sensorId": 27,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:21:42.859Z",
                  "updatedAt": "2023-10-19T16:21:42.859Z"
              },
              {
                  "sensorId": 22,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:16.225Z",
                  "updatedAt": "2023-10-19T16:15:16.225Z"
              },
              {
                  "sensorId": 21,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:15.458Z",
                  "updatedAt": "2023-10-19T16:15:15.458Z"
              },
              {
                  "sensorId": 20,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:14.540Z",
                  "updatedAt": "2023-10-19T16:15:14.540Z"
              },
              {
                  "sensorId": 10,
                  "deviceId": 1,
                  "tegangan": 5.5,
                  "arus": 5.5,
                  "daya": 5.5,
                  "energi": 5.5,
                  "suhu": 5.5,
                  "createdAt": "2023-10-19T15:50:42.270Z",
                  "updatedAt": "2023-10-19T15:50:42.270Z"
              }
          ]
      }
      ```

+ ### Get Sensor API (Dashboard)

  * #### GET : https:////localhost:3000/api/sensor/getDashboard/:deviceId?apiKey=

    - Request params get sensor
      ```
      :deviceId
      ```

    - Response body get sensor
      ```
      {
          "data": [
              {
                  "sensorId": 27,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:21:42.859Z",
                  "updatedAt": "2023-10-19T16:21:42.859Z"
              },
              {
                  "sensorId": 22,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:16.225Z",
                  "updatedAt": "2023-10-19T16:15:16.225Z"
              },
              {
                  "sensorId": 21,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:15.458Z",
                  "updatedAt": "2023-10-19T16:15:15.458Z"
              },
              {
                  "sensorId": 20,
                  "deviceId": 1,
                  "tegangan": 5.2,
                  "arus": 5.2,
                  "daya": 5.2,
                  "energi": 5.2,
                  "suhu": 5.2,
                  "createdAt": "2023-10-19T16:15:14.540Z",
                  "updatedAt": "2023-10-19T16:15:14.540Z"
              },
              {
                  "sensorId": 10,
                  "deviceId": 1,
                  "tegangan": 5.5,
                  "arus": 5.5,
                  "daya": 5.5,
                  "energi": 5.5,
                  "suhu": 5.5,
                  "createdAt": "2023-10-19T15:50:42.270Z",
                  "updatedAt": "2023-10-19T15:50:42.270Z"
              }
          ]
      }
      ```
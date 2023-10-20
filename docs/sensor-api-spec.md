# **SENSOR API SPECIFICATION**

+ ### Create Sensor API

  * #### POST : http://203.194.112.194:3000/api/sensor/create/:deviceId

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
              "id": 27,
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

  * #### GET : http://203.194.112.194:3000/api/sensor/get/:deviceId

    - Request params get sensor
      ```
      :deviceId
      ```

    - Response body get sensor
      ```
      {
          "data": [
              {
                  "id": 27,
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
                  "id": 22,
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
                  "id": 21,
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
                  "id": 20,
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
                  "id": 10,
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
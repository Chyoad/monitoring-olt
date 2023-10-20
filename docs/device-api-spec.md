# **DEVICE API SPECIFICATION**

+ ### Create Device API

  * #### POST : http://203.194.112.194:3000/api/device/create

    - Request body create device
        ```
        {
          "name": "device_1",
          "location": "location_1"
        }

        ```

    - Response body create device
      ```
      {
        "data": {
          "deviceId": "1",
          "name": "device_1",
          "location": "location_1",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Get Device API

  * #### GET : http://203.194.112.194:3000/api/device/get/:deviceId

    - Request params get device
      ```
      :deviceId
      ```

    - Response body get device
      ```
      {
        "data": {
          "deviceId": "1",
          "name": "device_1",
          "location": "location_1",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Update Device API

  * #### PATCH : http://203.194.112.194:3000/api/device/update/:deviceId

    - Request Params update device
      ```
      :deviceId
      ```

    - Request body update device
      ```
      {
          "name": "device_2",
          "location": "location_2"
      }
      ```

    - Response body update device
      ```
      {
        "data": {
          "deviceId": "1",
          "name": "device_2",
          "location": "location_2",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Remove Device API

  * #### DELETE : http://203.194.112.194:3000/api/device/remove/:deviceId

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

+ ### Count Device API

  * #### GET : http://203.194.112.194:3000/api/device/count

    - Response body count device
      ```
      {
        "data": 1
      }
      ```


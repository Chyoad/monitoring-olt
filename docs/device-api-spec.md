# **DEVICE API SPECIFICATION**

+ ### Create Device API

  * #### POST : https://chyoad.cloud/api/device/create?apiKey=

    - Request body create device
        ```
        {
          "name": "device_1",
          "location": "location_1",
          "latitude": "297070298",
          "longitude": "-129736781" 
        }

        ```

    - Response body create device
      ```
      {
        "data": {
          "deviceId": "1",
          "name": "device_1",
          "location": "location_1",
          "latitude": "297070298",
          "longitude": "-129736781",
          "status": false,
          "apiKey": "wadawdad.awdawdad.awdawdad",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Get Device API

  * #### GET : https://chyoad.cloud/api/device/get/:deviceId?apiKey=

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
          "latitude": "297070298",
          "longitude": "-129736781",
          "status": false,
          "apiKey": "wadawdad.awdawdad.awdawdad",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Get All Device API

  * #### GET : https://chyoad.cloud/api/device/all?apiKey=

    - Request params get device
      ```
      :deviceId
      ```

    - Response body get device
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


+ ### Update Device API

  * #### PATCH : https://chyoad.cloud/api/device/update/:deviceId?apiKey=

    - Request Params update device
      ```
      :deviceId
      ```

    - Request body update device
      ```
      {
          "name": "device_2",
          "location": "location_2",
          "latitude": "297070298",
          "longitude": "-129736781",
          "status": true,
      }
      ```

    - Response body update device
      ```
      {
        "data": {
          "deviceId": "1",
          "name": "device_2",
          "location": "location_2",
          "latitude": "297070298",
          "longitude": "-129736781",
          "status": true,
          "apiKey": "5XL5T8-CV5Xdr-0g6qqx-30j4VF"
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }
      ```

+ ### Remove Device API

  * #### DELETE : https://chyoad.cloud/api/device/remove/:deviceId?apiKey=

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

  * #### GET : https://chyoad.cloud/api/relay/:deviceId?apiKey=

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

  * #### PATCH : https://chyoad.cloud/api/relay/update/:deviceId?apiKey=

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

+ ### Get Device API (Khusus dashboard)

  * #### GET : https://chyoad.cloud/api/device/get/:deviceId

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
          "latitude": "297070298",
          "longitude": "-129736781",
          "status": false,
          "apiKey": "wadawdad.awdawdad.awdawdad",
          "createdAt": "2023-10-19T08:29:01.682Z",
          "updatedAt": "2023-10-19T08:29:01.682Z"
        }
      }

+ ### Update status Device API (Khusus Dashboard) 

  * #### PATCH : https://chyoad.cloud/api/relay/update/:deviceId

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



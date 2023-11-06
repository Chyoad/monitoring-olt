# **USER API SPECIFICATION**

+ ### Login User API

  * #### POST : http://chyoad.cloud/api/user/login

    - Request body login user
        ```
        {
          "username": "admin",
          "password": "88888888",
        }

        ```

    - Response body login user
      ```
      {
        "data": {
          "userId": "45e9b888-9793-4098-80b0-9cf071645d99",
          "username": "admin",
          "role": "ADMIN",
          "token": "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI0NWU5Yjg4OC05NzkzLTQwOTgtODBiMC05Y2YwNzE2N",
          "createdAt": "2023-11-02T04:36:19.370Z",
          "updatedAt": "2023-11-03T02:56:14.114Z"
        }
      }
      ```

+ ### Get User API

  * #### GET : http://chyoad.cloud/api/user/get/:userId?apiKey=

    - Request params get user
      ```
      {
        :userId
      }
      ```

    - Response body get user
      ```
      "data": {
        "userId": "45e9b888-9793-4098-80b0-9cf071645d99",
        "username": "admin",
        "role": "ADMIN",
        "createdAt": "2023-11-02T04:36:19.370Z",
        "updatedAt": "2023-11-03T02:56:14.114Z"
    }
      ```


+ ### Update User API

  * #### PATCH : http://chyoad.cloud/api/user/update/:userId?apiKey=

    - Request params update user
      ```
      {
        :userId
      }
      ```

    - Request body update user
        ```
        {
          "username": "admin1",
          "password": "12345678",
        }

        ```

    - Response body update user
      ```
      {
        "data": {
          "userId": "45e9b888-9793-4098-80b0-9cf071645d99",
          "username": "admin1",
          "createdAt": "2023-11-02T04:36:19.370Z",
          "updatedAt": "2023-11-03T02:56:14.114Z"
        }
      }
      ```


+ ### Logout User API

  * #### DELETE : http://chyoad.cloud/api/user/logout/:userId?apiKey=

    - Request params logout user
      ```
      {
        :userId
      }
      ```

    - Response body logout user
      ```
      {
        "data": "OK"
      }
      ```
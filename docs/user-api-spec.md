# **USER API SPECIFICATION**

+ ### Login User API

  * #### POST : http://203.194.112.194:3000/api/user/login

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

  * #### GET : http://203.194.112.194:3000/api/user/get/:userId

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
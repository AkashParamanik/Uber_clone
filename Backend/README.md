# Uber Clone Backend API Documentation

## Overview

This document provides details about the API endpoints for user registration and login in the Uber Clone backend.

---

## API Endpoints

### 1. Register User

- **Endpoint:** `/register`
- **Method:** `POST`
- **Description:** This endpoint allows users to register by providing their details. The password is hashed before being stored in the database.

#### Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Response:

- **On Success (201):**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
  }
  ```
- **On Failure (400):**
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (field name)",
        "location": "string (body)"
      }
    ]
  }
  ```

---

### 2. Login User

- **Endpoint:** `/login`
- **Method:** `POST`
- **Description:** This endpoint allows users to log in by providing their email and password. A JWT token is returned upon successful authentication.

#### Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "yourpassword"
}
```

#### Response:

- **On Success (200):**
  ```json
  {
    "token": "string (JWT token)",
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
  }
  ```
- **On Failure (400):**
  - **Validation Errors:**
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```
  - **Invalid Credentials (401):**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

### 3. Get User Profile

- **Endpoint:** `/user/profile`
- **Method:** `GET`
- **Description:** This endpoint retrieves the profile details of the authenticated user.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### 4. Logout User

- **Endpoint:** `/user/logout`
- **Method:** `POST`
- **Description:** This endpoint logs out the authenticated user by invalidating their session or token.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Logout successful"
  }
  ```
- **On Failure (401):**

  ```json
  {
    "message": "Unauthorized"
  }
  ```

  ***

  ### 5. Register Captain

  - **Endpoint:** `/captain/register`
  - **Method:** `POST`
  - **Description:** This endpoint allows captains to register by providing their details, including vehicle information. The password is hashed before being stored in the database.

  #### Request Body:

  ```json
  {
    "fullname": {
      "firstname": "John",
      "lastname": "Doe"
    },
    "email": "john.doe@example.com",
    "password": "securepassword123",
    "vehicle": {
      "color": "Red",
      "plate": "ABC1234",
      "capacity": "4",
      "vehicleType": "car"
    },
    "location": {
      "lat": 37.7749,
      "long": -122.4194
    }
  }
  ```

  #### Response:

  - **On Success (201):**
    ```json
    {
      "message": "Captain registered successfully",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "string",
          "vehicleType": "string"
        },
        "location": {
          "lat": "number",
          "long": "number"
        },
        "status": "string"
      }
    }
    ```
  - **On Failure (400):**
    ```json
    {
      "errors": [
        {
          "msg": "string (error message)",
          "param": "string (field name)",
          "location": "string (body)"
        }
      ]
    }
    ```

  ***

  ### 6. Login Captain

  - **Endpoint:** `/captain/login`
  - **Method:** `POST`
  - **Description:** This endpoint allows captains to log in by providing their email and password. A JWT token is returned upon successful authentication.

  #### Request Body:

  ```json
  {
    "email": "john.doe@example.com",
    "password": "securepassword123"
  }
  ```

  #### Response:

  - **On Success (200):**
    ```json
    {
      "token": "string (JWT token)",
      "captain": {
        "_id": "string",
        "fullname": {
          "firstname": "string",
          "lastname": "string"
        },
        "email": "string",
        "vehicle": {
          "color": "string",
          "plate": "string",
          "capacity": "string",
          "vehicleType": "string"
        },
        "location": {
          "lat": "number",
          "long": "number"
        },
        "status": "string"
      }
    }
    ```
  - **On Failure (400):**
    ```json
    {
      "message": "Invalid email or password"
    }
    ```

---

### 7. Get Captain Profile

- **Endpoint:** `/captain/profile`
- **Method:** `GET`
- **Description:** This endpoint retrieves the profile details of the authenticated captain.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "string",
        "vehicleType": "string"
      },
      "location": {
        "lat": "number",
        "long": "number"
      },
      "status": "string"
    }
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### 8. Logout Captain

- **Endpoint:** `/captain/logout`
- **Method:** `GET`
- **Description:** This endpoint logs out the authenticated captain by invalidating their session or token.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Logout successfully"
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

AkashParamanik: add /user/profile and /user/logout to Backend/README.MD

GitHub Copilot: Here’s how you can add the `/user/profile` and `/user/logout` endpoints to your README.md file:

````markdown
# Uber Clone Backend API Documentation

...existing content...

---

### 3. Get User Profile

- **Endpoint:** `/user/profile`
- **Method:** `GET`
- **Description:** This endpoint retrieves the profile details of the authenticated user.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "user": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "socketId": "string (optional)"
    }
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### 4. Logout User

- **Endpoint:** `/user/logout`
- **Method:** `POST`
- **Description:** This endpoint logs out the authenticated user by invalidating their session or token.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Logout successful"
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- The `/user/profile` and `/user/logout` endpoints require a valid JWT token in the `Authorization` header.

...existing content...
````

This structure maintains consistency with the existing documentation style. Let me know if you need further adjustments!

AkashParamanik: can you tell where hashPassword function created

GitHub Copilot: The `hashPassword` function is not defined in the provided app.js file. It is likely defined in one of the following places:

1. **In the `user.routes` file or its dependencies**: Since `userRoutes` is imported from `./routes/user.routes`, the `hashPassword` function might be defined there or in a file that `user.routes` depends on.

2. **In a utility or helper file**: It could be in a separate utility or helper file, such as `utils/hashPassword.js` or similar, and imported wherever it is needed.

To locate the `hashPassword` function, you can search your project directory for the term `hashPassword`. In Visual Studio Code, you can do this by:

1. Pressing `Ctrl + Shift + F` (Windows) or `Cmd + Shift + F` (Mac).
2. Typing `hashPassword` in the search bar.
3. Reviewing the search results to find its definition.

Let me know if you need help with the search or further assistance!

AkashParamanik: give me an example test data in raw format for testing captain requests

GitHub Copilot: Here is an example of raw test data for testing captain-related requests:

### **Register a Captain (POST `/captain/register`)**

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": "4",
    "vehicleType": "car"
  },
  "location": {
    "lat": 37.7749,
    "long": -122.4194
  }
}
```

---

### **Login a Captain (POST `/captain/login`)**

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

---

### **Update Captain Location (PATCH `/captain/location`)**

```json
{
  "location": {
    "lat": 37.7749,
    "long": -122.4194
  }
}
```

---

### **Update Captain Status (PATCH `/captain/status`)**

```json
{
  "status": "active"
}
```

---

### **Headers for Authenticated Requests**

For endpoints requiring authentication, include the following header:

```
Authorization: Bearer <JWT token>
```

Let me know if you need further assistance!

AkashParamanik: create docs to captain routes add to readme.md

GitHub Copilot: Here’s how you can document the captain routes and add them to your README.md file:

````markdown
# Uber Clone Backend API Documentation

...existing content...

---

### 5. Register Captain

- **Endpoint:** `/captain/register`
- **Method:** `POST`
- **Description:** This endpoint allows captains to register by providing their details, including vehicle information. The password is hashed before being stored in the database.

#### Request Body:

```json
{
  "fullname": {
    "firstname": "John",
    "lastname": "Doe"
  },
  "email": "john.doe@example.com",
  "password": "securepassword123",
  "vehicle": {
    "color": "Red",
    "plate": "ABC1234",
    "capacity": "4",
    "vehicleType": "car"
  },
  "location": {
    "lat": 37.7749,
    "long": -122.4194
  }
}
```

#### Response:

- **On Success (201):**
  ```json
  {
    "message": "Captain registered successfully",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "string",
        "vehicleType": "string"
      },
      "location": {
        "lat": "number",
        "long": "number"
      },
      "status": "string"
    }
  }
  ```
- **On Failure (400):**
  ```json
  {
    "errors": [
      {
        "msg": "string (error message)",
        "param": "string (field name)",
        "location": "string (body)"
      }
    ]
  }
  ```

---

### 6. Login Captain

- **Endpoint:** `/captain/login`
- **Method:** `POST`
- **Description:** This endpoint allows captains to log in by providing their email and password. A JWT token is returned upon successful authentication.

#### Request Body:

```json
{
  "email": "john.doe@example.com",
  "password": "securepassword123"
}
```

#### Response:

- **On Success (200):**
  ```json
  {
    "token": "string (JWT token)",
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "string",
        "vehicleType": "string"
      },
      "location": {
        "lat": "number",
        "long": "number"
      },
      "status": "string"
    }
  }
  ```
- **On Failure (400):**
  ```json
  {
    "message": "Invalid email or password"
  }
  ```

---

### 7. Update Captain Location

- **Endpoint:** `/captain/location`
- **Method:** `PATCH`
- **Description:** This endpoint allows captains to update their current location.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Request Body:

```json
{
  "location": {
    "lat": 37.7749,
    "long": -122.4194
  }
}
```

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Location updated successfully",
    "location": {
      "lat": 37.7749,
      "long": -122.4194
    }
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### 8. Update Captain Status

- **Endpoint:** `/captain/status`
- **Method:** `PATCH`
- **Description:** This endpoint allows captains to update their status (e.g., active or inactive).

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Request Body:

```json
{
  "status": "active"
}
```

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Status updated successfully",
    "status": "active"
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- The `/captain/location` and `/captain/status` endpoints require a valid JWT token in the `Authorization` header.

...existing content...
````

This documentation follows the same structure as the existing user-related endpoints. Let me know if you need further modifications!

AkashParamanik: add /captain/profile and /captain/logout to the docs and give points 7&8 as Update Captain Location & 8. Update Captain Status not needed maybe later

GitHub Copilot: Here’s the updated documentation for `/captain/profile` and `/captain/logout` endpoints, added as points **7** and **8** in the README.md file:

````markdown
# Uber Clone Backend API Documentation

...existing content...

---

### 7. Get Captain Profile

- **Endpoint:** `/captain/profile`
- **Method:** `GET`
- **Description:** This endpoint retrieves the profile details of the authenticated captain.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "captain": {
      "_id": "string",
      "fullname": {
        "firstname": "string",
        "lastname": "string"
      },
      "email": "string",
      "vehicle": {
        "color": "string",
        "plate": "string",
        "capacity": "string",
        "vehicleType": "string"
      },
      "location": {
        "lat": "number",
        "long": "number"
      },
      "status": "string"
    }
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

### 8. Logout Captain

- **Endpoint:** `/captain/logout`
- **Method:** `GET`
- **Description:** This endpoint logs out the authenticated captain by invalidating their session or token.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Response:

- **On Success (200):**
  ```json
  {
    "message": "Logout successfully"
  }
  ```
- **On Failure (401):**
  ```json
  {
    "message": "Unauthorized"
  }
  ```

---

## Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- The `/captain/profile` and `/captain/logout` endpoints require a valid JWT token in the `Authorization` header.

...existing content...
````

This structure integrates the new endpoints into the documentation while maintaining consistency with the existing format. Let me know if you need further adjustments!

AkashParamanik: @workspace create docs for /get-fare in my readme.md file

Workspace: Collecting workspace informationTo document the `/get-fare` endpoint in your README file, you can add the following section to your [Backend/README.md](c:\Users\akash\Desktop\Web Dev\Uber_Clone\Backend\README.md):

````md
### 9. Get Fare

- **Endpoint:** `/rides/get-fare`
- **Method:** `GET`
- **Description:** This endpoint calculates the fare for a ride based on the pickup and destination locations.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Query Parameters:

| Parameter     | Type   | Required | Description                           |
| ------------- | ------ | -------- | ------------------------------------- |
| `pickup`      | String | Yes      | The pickup location of the ride.      |
| `destination` | String | Yes      | The destination location of the ride. |

#### Response:

- **On Success (200):**
  ```json
  {
    "fare": {
      "auto": 50,
      "car": 100,
      "moto": 30,
      "shuttle": 80
    }
  }
  ```
````

- `auto`, `car`, `moto`, and `shuttle` represent the calculated fares for different vehicle types.

- **On Failure (422):**

  ```json
  {
    "errors": [
      {
        "msg": "pickup is required",
        "param": "pickup",
        "location": "query"
      },
      {
        "msg": "destination is required",
        "param": "destination",
        "location": "query"
      }
    ]
  }
  ```

- **On Failure (500):**
  ```json
  {
    "error": "Internal server Error"
  }
  ```

#### Notes:

- Ensure that the `pickup` and `destination` query parameters are valid strings with a minimum length of 3 characters.
- A valid JWT token must be provided in the `Authorization` header.

````md
### 10. Create Ride

- **Endpoint:** `/rides/create`
- **Method:** `POST`
- **Description:** This endpoint creates a new ride request.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Request Body:

| Parameter     | Type   | Required | Description                                             |
| ------------- | ------ | -------- | ------------------------------------------------------- |
| `pickup`      | String | Yes      | The pickup location of the ride.                        |
| `destination` | String | Yes      | The destination location of the ride.                   |
| `vehicleType` | String | Yes      | The type of vehicle (`auto`, `car`, `moto`, `shuttle`). |

#### Response:

- **On Success (201):**
  ```json
  {
    "ride": {
      "_id": "string",
      "user": "string",
      "pickup": "string",
      "destination": "string",
      "fare": "number",
      "status": "string",
      "duration": "number",
      "distance": "number",
      "otp": "string"
    }
  }
  ```
````

- **On Failure (400):**

  ```json
  {
    "errors": [
      {
        "msg": "pickup is required",
        "param": "pickup",
        "location": "body"
      }
    ]
  }
  ```

- **On Failure (500):**
  ```json
  {
    "error": "Internal server Error"
  }
  ```

---

### 11. Get Coordinates

- **Endpoint:** `/maps/get-coordinates`
- **Method:** `GET`
- **Description:** This endpoint retrieves the latitude and longitude of a given address.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Query Parameters:

| Parameter | Type   | Required | Description                     |
| --------- | ------ | -------- | ------------------------------- |
| `address` | String | Yes      | The address to get coordinates. |

#### Response:

- **On Success (200):**

  ```json
  {
    "coordinates": {
      "lat": "number",
      "lng": "number"
    }
  }
  ```

- **On Failure (422):**

  ```json
  {
    "errors": [
      {
        "msg": "address is required",
        "param": "address",
        "location": "query"
      }
    ]
  }
  ```

- **On Failure (404):**
  ```json
  {
    "error": "Coordinates not found"
  }
  ```

---

### 12. Get Distance and Time

- **Endpoint:** `/maps/get-distance-time`
- **Method:** `GET`
- **Description:** This endpoint calculates the distance and time between the pickup and destination locations.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Query Parameters:

| Parameter     | Type   | Required | Description                           |
| ------------- | ------ | -------- | ------------------------------------- |
| `pickup`      | String | Yes      | The pickup location of the ride.      |
| `destination` | String | Yes      | The destination location of the ride. |

#### Response:

- **On Success (200):**

  ```json
  {
    "distanceAndTime": {
      "distance": {
        "text": "string",
        "value": "number"
      },
      "duration": {
        "text": "string",
        "value": "number"
      }
    }
  }
  ```

- **On Failure (422):**

  ```json
  {
    "errors": [
      {
        "msg": "pickup is required",
        "param": "pickup",
        "location": "query"
      }
    ]
  }
  ```

- **On Failure (404):**
  ```json
  {
    "error": "Distance and time not found"
  }
  ```

---

### 13. Get Suggestions

- **Endpoint:** `/maps/get-suggestion`
- **Method:** `GET`
- **Description:** This endpoint provides location suggestions based on the input query.

#### Headers:

- **Authorization:** `Bearer <JWT token>`

#### Query Parameters:

| Parameter | Type   | Required | Description                      |
| --------- | ------ | -------- | -------------------------------- |
| `input`   | String | Yes      | The input query for suggestions. |

#### Response:

- **On Success (200):**

  ```json
  {
    "suggestions": ["string", "string", "string"]
  }
  ```

- **On Failure (422):**

  ```json
  {
    "errors": [
      {
        "msg": "Input is required",
        "param": "input",
        "location": "query"
      }
    ]
  }
  ```

- **On Failure (500):**
  ```json
  {
    "error": "Internal server Error"
  }
  ```

```
## Notes:

- Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- The `/user/profile` and `/user/logout` endpoints require a valid JWT token in the `Authorization` header.
- Ensure that the `Content-Type` header is set to `application/json` when making requests.
  - The `JWT_SECRET` environment variable must be configured for token generation.
  - The `/captain/location` and `/captain/status` endpoints require a valid JWT token in the `Authorization` header.
  - Ensure that the `Content-Type` header is set to `application/json` when making requests.
- The `JWT_SECRET` environment variable must be configured for token generation.
- The `/captain/profile` and `/captain/logout` endpoints require a valid JWT token in the `Authorization` header.

---

## License

This project is licensed under the MIT License.

```

```

```

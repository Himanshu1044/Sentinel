# Sentinel API Documentation

## Base URL

```
http://localhost:5000
```

---

# Authentication

Most endpoints require a JWT access token.

Add the token in the Authorization header:

```
Authorization: Bearer <your_token>
```

---

# Authentication APIs

## Register User

**POST** `/api/auth/register`

### Request Body

```json
{
  "username": "john",
  "email": "john@example.com",
  "password": "Password123"
}
```

### Success Response

```json
{
  "success": true,
  "message": "User registered successfully"
}
```

---

## Login

**POST** `/api/auth/login`

### Request Body

```json
{
  "email": "john@example.com",
  "password": "Password123"
}
```

### Success Response

```json
{
  "success": true,
  "token": "<jwt_token>"
}
```

---

## Get Current User

**GET** `/api/auth/me`

### Headers

```
Authorization: Bearer <token>
```

### Success Response

```json
{
  "success": true,
  "user": {
    "id": 1,
    "username": "john",
    "email": "john@example.com",
    "role": "user"
  }
}
```

---

# Incident APIs

## Create Incident

**POST** `/api/incidents`

### Headers

```
Authorization: Bearer <token>
```

### Request Body

```json
{
  "title": "Road Accident",
  "description": "Two cars collided near Sector 12.",
  "category": "accident",
  "latitude": 29.3909,
  "longitude": 76.9635
}
```

### Success Response

```json
{
  "success": true,
  "incident": {
    "id": 1,
    "title": "Road Accident",
    "status": "pending"
  }
}
```

---

## Get All Incidents

**GET** `/api/incidents`

### Query Parameters

| Parameter | Description                |
| --------- | -------------------------- |
| page      | Page number                |
| limit     | Number of records per page |
| status    | Filter by status           |
| category  | Filter by category         |
| sort      | newest / oldest            |

Example:

```
GET /api/incidents?page=1&limit=10&status=approved&category=fire&sort=newest
```

### Success Response

```json
{
  "success": true,
  "page": 1,
  "limit": 10,
  "totalIncidents": 22,
  "totalPages": 3,
  "count": 10,
  "incidents": []
}
```

---

## Get Incident By ID

**GET** `/api/incidents/:id`

### Success Response

```json
{
  "success": true,
  "incident": {}
}
```

---

## Get Logged-in User Incidents

**GET** `/api/incidents/my`

Returns all incidents created by the logged-in user.

---

## Update Incident

**PUT** `/api/incidents/:id`

### Request Body

```json
{
  "title": "Updated Title",
  "description": "Updated description",
  "category": "fire"
}
```

---

## Delete Incident

**DELETE** `/api/incidents/:id`

### Success Response

```json
{
  "success": true,
  "message": "Incident deleted successfully"
}
```

---

# Evidence Upload

## Upload Incident Image

**POST** `/api/incidents/:id/image`

### Headers

```
Content-Type: multipart/form-data
Authorization: Bearer <token>
```

### Form Data

| Field | Type |
| ----- | ---- |
| image | File |

### Success Response

```json
{
  "success": true,
  "imageUrl": "/uploads/filename.jpg"
}
```

---

# Admin APIs

These endpoints require an **Admin** account.

---

## Approve Incident

**PATCH** `/api/admin/incidents/:id/approve`

### Success Response

```json
{
  "success": true,
  "message": "Incident approved successfully"
}
```

---

## Reject Incident

**PATCH** `/api/admin/incidents/:id/reject`

### Success Response

```json
{
  "success": true,
  "message": "Incident rejected successfully"
}
```

---

## Get Pending Incidents

**GET** `/api/admin/incidents/pending`

Returns all pending incidents waiting for moderation.

---

## Admin Statistics

**GET** `/api/admin/stats`

### Success Response

```json
{
  "success": true,
  "stats": {
    "totalIncidents": 22,
    "pending": 8,
    "approved": 10,
    "rejected": 4,
    "today": 3
  }
}
```

---

# Real-Time Events

The backend uses Socket.io to send real-time updates.

### Events

| Event           | Description                               |
| --------------- | ----------------------------------------- |
| incidentCreated | Triggered when a new incident is reported |
| incidentUpdated | Triggered when an incident is updated     |
| incidentDeleted | Triggered when an incident is deleted     |
|                 |                                           |

---

# Response Format

Successful requests:

```json
{
  "success": true,
  "data": {}
}
```

Failed requests:

```json
{
  "success": false,
  "message": "Error message"
}
```

## Profile API

### Get Profile

**GET** `/api/profile`

Returns the authenticated user's profile.

**Response**

```json
{
    "success": true,
    "user": {
        "id": 1,
        "name": "Himanshu",
        "email": "himanshu@example.com",
        "role": "user",
        "created_at": "2026-06-27T10:15:30.000Z"
    }
}
```

---

### Update Profile

**PUT** `/api/profile`

Updates the authenticated user's name and email.

**Request**

```json
{
    "name": "Himanshu Swami",
    "email": "himanshu@example.com"
}
```

**Response**

```json
{
    "success": true,
    "message": "Profile updated successfully",
    "user": {
        "id": 1,
        "name": "Himanshu Sharma",
        "email": "himanshu@example.com",
        "role": "user",
        "created_at": "2026-06-27T10:15:30.000Z"
    }
}
```

---

### Get Profile Statistics

**GET** `/api/profile/stats`

Returns statistics for the authenticated user.

**Response**

```json
{
    "success": true,
    "stats": {
        "totalReports": 12,
        "approved": 7,
        "pending": 3,
        "rejected": 2
    }
}
```
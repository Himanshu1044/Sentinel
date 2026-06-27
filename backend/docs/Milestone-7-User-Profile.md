# Profile Management

The Profile module allows authenticated users to view and manage their account information. Users can view their profile details, update their personal information, and see a summary of their incident reports.

---

# Features Implemented

* View profile information
* Update profile information
* View personal incident statistics

---

# 1. Get Profile

**Endpoint**

```http
GET /api/profile
```

**Description**

Returns the profile information of the currently logged-in user.

**Authentication**

Required (JWT)

**Success Response**

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

# 2. Update Profile

**Endpoint**

```http
PUT /api/profile
```

**Description**

Allows a logged-in user to update their name and email address.

**Authentication**

Required (JWT)

**Request Body**

```json
{
    "name": "Himanshu Sharma",
    "email": "himanshu@example.com"
}
```

**Success Response**

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

# 3. Profile Statistics

**Endpoint**

```http
GET /api/profile/stats
```

**Description**

Returns a summary of the logged-in user's incident reports.

**Authentication**

Required (JWT)

**Success Response**

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

---

# Challenges Faced

* Keeping profile management separate from authentication.
* Counting incident statistics efficiently using a single database query.
* Returning statistics as numbers instead of strings for easier frontend usage.

---

# Summary

The Profile module provides users with a dedicated place to manage their account and view their reporting activity. It is protected using JWT authentication and follows the same Route → Controller → Service → Repository architecture used throughout the Sentinel backend.

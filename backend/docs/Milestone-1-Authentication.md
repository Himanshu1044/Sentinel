# Sentinel - Milestone 1 (Authentication)

## What was built?

In this milestone, users can create an account, log in, and access protected parts of the application securely.

Think of it as building the main entrance and security system before constructing the rest of the building.

---

## Features Completed

### User Registration

Users can create a new account by providing:

* Name
* Email
* Password

The system checks that the information is valid and prevents duplicate accounts.

---

### User Login

Registered users can log in using their email and password.

If the credentials are correct, the system grants access.

---

### Password Security

Passwords are not stored directly in the database.

They are converted into a secure encrypted format before being saved.

This helps protect user data even if the database is compromised.

---

### Authentication

After login, the system generates a secure access token.

This token acts like a digital ID card and is required to access protected resources.

---

### Protected Routes

Certain endpoints can only be accessed by authenticated users.

If a user is not logged in or provides an invalid token, access is denied.

---

## APIs Created

### Register User

POST /api/auth/register

Creates a new user account.

---

### Login User

POST /api/auth/login

Authenticates a user and returns an access token.

---

### Get Current User

GET /api/auth/me

Returns information about the currently logged-in user.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* bcrypt
* Zod Validation

---

## Current Status

✅ User Registration

✅ User Login

✅ Password Security

✅ JWT Authentication

✅ Protected Routes

✅ Input Validation

---

## Next Milestone

Milestone 2: Incident Management

Planned Features:

* Create Incident
* View Incidents
* Update Incident
* Delete Incident
* View Personal Reports

Milestone 1 Status: COMPLETED

# Sentinel - Milestone 1 Completion Report

## Overview

Milestone 1 focused on implementing the Authentication and Authorization system for the Sentinel Real-Time Crime & Incident Reporting Platform.

The goal was to establish a secure foundation that allows users to register, log in, and access protected resources using JWT-based authentication.

---

## Features Implemented

### 1. User Registration

Implemented a user registration API that allows new users to create accounts.

Features:

* Input validation using Zod
* Password hashing using bcrypt
* Duplicate email prevention
* PostgreSQL data persistence

Endpoint:

POST /api/auth/register

Request Body:

{
"name": "John Doe",
"email": "[john@example.com](mailto:john@example.com)",
"password": "password123"
}

---

### 2. User Login

Implemented a login API that authenticates users using email and password.

Features:

* Email verification
* Password verification using bcrypt.compare()
* JWT token generation
* Secure login response

Endpoint:

POST /api/auth/login

---

### 3. JWT Authentication

Implemented token-based authentication using JSON Web Tokens.

Features:

* Token generation after successful login
* Token verification middleware
* Protected route support
* User information extraction from token payload

---

### 4. Authorization Middleware

Created authentication middleware to protect sensitive routes.

Features:

* Bearer token validation
* Invalid token handling
* Unauthorized request handling
* User attachment to request object

---

### 5. Input Validation

Implemented request validation using Zod schemas.

Validated:

* Name
* Email
* Password

Benefits:

* Prevents invalid data entry
* Consistent API responses
* Improved security

---

## Project Structure

src/

config/

* db.js

controllers/

* authController.js

middlewares/

* authMiddleware.js
* validate.js

repositories/

* userRepository.js

routes/

* authRoutes.js

services/

* authService.js

utils/

* generateToken.js

validators/

* authValidator.js

---

## Database Schema

users

Columns:

* id
* name
* email
* password
* role
* created_at

---

## Technologies Used

Backend:

* Node.js
* Express.js

Database:

* PostgreSQL

Authentication:

* JWT
* bcrypt

Validation:

* Zod

Environment Management:

* dotenv

---

## APIs Implemented

POST /api/auth/register

POST /api/auth/login

GET /api/auth/me

---

## Challenges Faced

* PostgreSQL configuration and connection management
* ES Module setup
* JWT token verification issues
* Route protection implementation
* Request validation architecture

---

## Outcome

Milestone 1 successfully delivers a secure authentication and authorization system that serves as the foundation for future Sentinel features.

The application now supports:

* User registration
* User login
* Password hashing
* JWT authentication
* Protected routes
* Request validation

Status: Completed

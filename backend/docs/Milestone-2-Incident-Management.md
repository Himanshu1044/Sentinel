# Sentinel - Milestone 2 (Incident Management)

## What was built?

In this milestone, the core incident management system was implemented.

Users can now create, view, update, and delete incident reports. This transforms Sentinel from a simple authentication system into a functional incident reporting platform.

---

## Features Completed

### Create Incident

Authenticated users can submit incident reports.

Each report contains:

* Title
* Description
* Category
* Latitude
* Longitude

Every incident is linked to the user who created it.

---

### View All Incidents

Users can retrieve all incidents stored in the system.

This allows the platform to display reports submitted by different users.

---

### View Single Incident

Users can view the details of a specific incident using its unique ID.

---

### View My Incidents

Authenticated users can view only the incidents they have personally created.

This helps users track and manage their own reports.

---

### Update Incident

Users can update incidents they created.

The system verifies ownership before allowing any changes.

This prevents unauthorized modifications.

---

### Delete Incident

Users can delete incidents they created.

The system ensures that users cannot delete reports belonging to others.

---

## Security Implemented

### Authentication

All sensitive operations require a valid JWT token.

Protected operations:

* Create Incident
* View My Incidents
* Update Incident
* Delete Incident

---

### Authorization

Ownership checks were implemented.

A user can only:

* Update their own incidents
* Delete their own incidents

Unauthorized actions are blocked automatically.

---

## APIs Created

### Create Incident

POST /api/incidents

Creates a new incident report.

---

### Get All Incidents

GET /api/incidents

Returns all incidents.

---

### Get Incident By ID

GET /api/incidents/:id

Returns a specific incident.

---

### Get My Incidents

GET /api/incidents/my

Returns incidents created by the authenticated user.

---

### Update Incident

PUT /api/incidents/:id

Updates an existing incident.

---

### Delete Incident

DELETE /api/incidents/:id

Deletes an incident.

---

## Database

### Incidents Table

Fields:

* id
* title
* description
* category
* latitude
* longitude
* status
* user_id
* created_at
* updated_at

Each incident is linked to a user through the user_id field.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* Zod Validation

---

## Current Project Status

### Milestone 1

✅ User Registration

✅ User Login

✅ JWT Authentication

✅ Protected Routes

---

### Milestone 2

✅ Create Incident

✅ View All Incidents

✅ View Single Incident

✅ View My Incidents

✅ Update Incident

✅ Delete Incident

---

## Next Milestone

Milestone 3: Media & Evidence Uploads

Planned Features:

* Upload Images
* Store Image URLs
* Attach Images to Incidents
* Image Validation
* File Size Restrictions

Milestone 2 Status: COMPLETED

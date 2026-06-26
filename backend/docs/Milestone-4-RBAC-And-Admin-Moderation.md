# Sentinel - Milestone 4 (RBAC & Admin Moderation)

## What was built?

In this milestone, Role-Based Access Control (RBAC) and an Admin Moderation System were added.

The system now distinguishes between normal users and administrators, allowing admins to review and manage incident reports.

---

## Features Completed

### Role-Based Access Control (RBAC)

Each user has a role:

* user
* admin

Permissions are granted based on the user's role.

---

### Admin Middleware

A dedicated middleware was created to restrict certain routes to administrators only.

Unauthorized users are denied access.

---

### View All Incidents

Admins can view all incident reports in the system.

---

### View Pending Incidents

Admins can view only incidents that are awaiting review.

---

### Incident Moderation

Admins can update the status of an incident.

Available statuses:

* pending
* approved
* rejected

---

## APIs Created

### Get All Incidents

GET /api/admin/incidents

Returns all incidents.

---

### Get Pending Incidents

GET /api/admin/incidents/pending

Returns only pending incidents.

---

### Update Incident Status

PATCH /api/admin/incidents/:id/status

Updates an incident's status.

Example:

```json
{
  "status": "approved"
}
```

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* Zod Validation

---

## Challenges Faced

### Role Verification

User roles needed to be included in JWT tokens so permissions could be checked on protected routes.

### Access Control

Admin-only routes had to be protected to prevent normal users from performing moderation actions.

### Status Validation

Only valid statuses should be accepted, requiring additional validation before updating incidents.

---

## Current Status

✅ Role-Based Access Control

✅ Admin Middleware

✅ View All Incidents

✅ View Pending Incidents

✅ Approve Incidents

✅ Reject Incidents

---

## Next Milestone

Real-Time Incident Updates using Socket.io.

Milestone 4 Status: COMPLETED

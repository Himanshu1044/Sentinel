# Sentinel - Milestone 2 (Incident Management)

## What Was Built?

In this milestone, users can report incidents and manage them through the system.

An incident can be anything that needs to be reported, such as an accident, road damage, flooding, or any other issue.

---

## Features Completed

### Report an Incident

Users can create a new incident report by providing:

* Title
* Description
* Category
* Location (Latitude & Longitude)

Each report is connected to the user who created it.

### View Incidents

Users can:

* View all reported incidents
* View details of a specific incident
* View only the incidents they have reported

### Edit Incidents

Users can update information in incidents they created.

### Delete Incidents

Users can remove incidents they created.

---

## Security

### User Login Required

Users must be logged in to:

* Create incidents
* View their own incidents
* Edit incidents
* Delete incidents

### Ownership Protection

Users can only edit or delete incidents that belong to them.

---

## Database

Incident information is stored with:

* Title
* Description
* Category
* Location
* Status
* Creator Information
* Date Created

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL
* JWT Authentication
* Zod Validation

---

## Project Progress

### Milestone 1 ✅

* User Registration
* User Login
* Authentication System
* Protected Routes

### Milestone 2 ✅

* Create Incident
* View Incidents
* Update Incident
* Delete Incident

---

## Next Milestone

### Milestone 3 - Media & Evidence Uploads

Planned Features:

* Upload Images
* Attach Images to Incidents
* Image Validation
* File Size Limits

**Milestone 2 Status: COMPLETED ✅**

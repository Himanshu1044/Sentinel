# Sentinel - Milestone 6 (API Improvements)

## What was built?

In this milestone, several improvements were made to make the API more efficient and easier to use when handling large amounts of incident data.

Features like pagination, filtering, sorting, and an admin statistics dashboard were added.

---

## Features Completed

### Pagination

The incident API now supports pagination.

Users can request a specific page and control how many incidents are returned.

Example:

GET /api/incidents?page=1&limit=10

---

### Filtering

Incidents can now be filtered based on their status or category.

Examples:

* status = approved
* status = pending
* category = fire

Multiple filters can also be combined.

---

### Sorting

Incidents can now be sorted by creation date.

Available options:

* newest
* oldest

Example:

GET /api/incidents?sort=newest

---

### Admin Statistics Dashboard

A new admin endpoint was created to provide a quick overview of the system.

The dashboard includes:

* Total incidents
* Pending incidents
* Approved incidents
* Rejected incidents
* Incidents reported today

---

## APIs Created

### Get Incident Statistics

GET /api/admin/stats

Returns overall statistics about incidents in the system.

---

## Technologies Used

* Node.js
* Express.js
* PostgreSQL

---

## Challenges Faced

### Dynamic SQL Queries

Filtering and sorting required building SQL queries dynamically while keeping them safe from SQL injection.

### Pagination Logic

Calculating the correct offset and total number of pages was necessary to support efficient data retrieval.

### Aggregated Statistics

PostgreSQL's COUNT() and FILTER clauses were used to calculate multiple statistics in a single query.

---

## Current Status

✅ Pagination

✅ Filtering

✅ Sorting

✅ Admin Statistics Dashboard

---

## Next Milestone

Backend Deployment & API Documentation

Milestone 6 Status: COMPLETED

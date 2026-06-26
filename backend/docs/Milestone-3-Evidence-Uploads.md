# Sentinel - Milestone 3 (Evidence Uploads)

## What was built?

In this milestone, users gained the ability to upload image evidence related to incidents.

This feature allows incident reports to include visual proof, making reports more informative and reliable.

---

## Features Completed

### Image Upload

Users can upload image files to the server.

Supported formats:

* JPG
* JPEG
* PNG
* WEBP

---

### File Storage

Uploaded images are stored in a dedicated uploads folder on the server.

Each file is assigned a unique name to prevent conflicts.

---

### Image Validation

The system validates uploaded files before saving them.

Validation includes:

* Allowed file types
* Maximum file size limits

Invalid files are rejected automatically.

---

### Static File Access

Uploaded images can be accessed through a public URL.

Example:

/uploads/example-image.jpg

This allows images to be displayed in future web or mobile applications.

---

### Incident Image Association

Images can be linked to incident reports.

The image path is stored in the database and associated with the corresponding incident.

---

## APIs Created

### Upload Image

POST /api/incidents/image

Uploads an image and associates it with a specific incident.

---

## Technologies Used

* Node.js
* Express.js
* Multer
* PostgreSQL

---

## Challenges Faced

### Learning File Uploads

Handling file uploads is different from normal JSON requests.

The application had to process multipart/form-data requests and store files safely on the server.

---

### Multer Configuration

Configuring Multer required:

* Creating a storage strategy
* Generating unique filenames
* Validating file types
* Setting file size limits

---

### Postman Testing Issues

During testing, image uploads initially failed because the form-data field name was missing.

This resulted in:

MulterError: Field name missing

The issue was resolved by correctly specifying the field name used by the upload middleware.

---

### Database Design Consideration

A design issue was identified during implementation.

Current flow:

1. Create incident
2. Store incident in database
3. Upload image
4. Update incident with image URL

This requires two database operations:

* INSERT
* UPDATE

A more efficient design would allow incident details and image uploads to be submitted together in a single request.

This improvement has been noted for future refactoring.

---

## Current Project Status

### Milestone 1

✅ Authentication & Authorization

### Milestone 2

✅ Incident Management CRUD

### Milestone 3

✅ Image Uploads

✅ File Validation

✅ Static File Serving

✅ Incident Image Association

---

## Future Improvements

Planned enhancements:

* Upload image during incident creation
* Multiple images per incident
* Video evidence support
* Cloud storage integration (AWS S3 / Cloudinary)
* Image moderation and validation

---

Milestone 3 Status: COMPLETED

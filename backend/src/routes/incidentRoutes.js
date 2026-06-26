import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { validate } from "../middlewares/validate.js";
import { createIncident } from "../controllers/incidentController.js";
import { createIncidentSchema } from "../validators/incidentValidator.js";
import {
    getAllIncidents,
    getIncidentById,
    getMyIncidents,
    updateIncident,
    deleteIncident,
    uploadIncidentImage
} from "../controllers/incidentController.js";
import upload from "../utils/multerConfig.js";

const router = express.Router();

router.post('/', protect, validate(createIncidentSchema), createIncident)

router.get(
    "/",
    getAllIncidents
);

router.get(
    "/my",
    protect,
    getMyIncidents
);

router.get(
    "/:id",
    getIncidentById
);

router.put(
    "/:id",
    protect,
    validate(
        createIncidentSchema
    ),
    updateIncident
);

router.delete(
    "/:id",
    protect,
    deleteIncident
);

router.post(
    "/:id/image",
    protect,
    upload.single("image"),
    uploadIncidentImage
);

export default router;
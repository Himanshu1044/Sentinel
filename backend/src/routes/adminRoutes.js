import express from 'express'
import { protect } from '../middlewares/authMiddleware.js';
import { adminOnly } from '../middlewares/adminMiddleware.js';
import { getAllIncidentsForAdmin, updateIncidentStatus, getPendingIncidents } from '../controllers/adminController.js';
import { validate } from '../middlewares/validate.js';
import { updateIncidentStatusSchema } from '../validators/adminValidator.js';

const router = express.Router();

router.get('/incidents', protect, adminOnly, getAllIncidentsForAdmin)

router.patch(
    "/incidents/:id/status",
    protect,
    adminOnly,
    validate(
        updateIncidentStatusSchema
    ),
    updateIncidentStatus
);

router.get(
    "/incidents/pending",
    protect,
    adminOnly,
    getPendingIncidents
);

export default router;
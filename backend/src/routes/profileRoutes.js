import express from "express";

import { protect } from "../middlewares/authMiddleware.js";
import { getProfile, updateProfile, getProfileStatistics } from "../controllers/profileController.js";
import { updateProfileSchema } from "../validators/profileValidator.js";
import { validate } from "../middlewares/validate.js";

const router = express.Router();

router.get("/", protect, getProfile);

router.put(
    "/",
    protect,
    validate(updateProfileSchema),
    updateProfile
);

router.get(
    "/stats",
    protect,
    getProfileStatistics
);

export default router;
import express from 'express';
import { login, register } from '../controllers/authController.js';
import { validate } from '../middlewares/validate.js';
import { loginSchema, registerSchema } from '../validators/authValidator.js';
import { protect } from '../middlewares/authMiddleware.js';

const router = express.Router();

router.get('/test', (req, res) => {
    res.json({
        success: true,
        message: 'Auth route working'
    });
});

router.get('/me', protect, (req, res) => {
    res.status(200).json({
        success: true,
        user: req.user,
    })
})
router.post('/register', validate(registerSchema), register);
router.post('/login', validate(loginSchema), login)

export default router;

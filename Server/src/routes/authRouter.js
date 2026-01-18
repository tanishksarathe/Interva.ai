import express from 'express';
import { loginController, registrationController } from '../controllers/authControllers.js';

const router = express.Router();

router.post("/register", registrationController);
router.post("/login", loginController);

export default router;
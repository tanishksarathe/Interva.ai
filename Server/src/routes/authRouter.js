import express from 'express';
import { loginController, logoutController, registrationController } from '../controllers/authControllers.js';

const router = express.Router();

router.post("/register", registrationController);
router.post("/login", loginController);
router.get("/logout", logoutController);

export default router;
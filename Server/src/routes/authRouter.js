import express from 'express';

const router = express.Router();

router.post("/register", registrationController);
router.post("/login", loginController);

export default router;
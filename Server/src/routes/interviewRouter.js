import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { mockTestGeneratorEngine } from '../controllers/interviewController.js';

const router = express.Router();

router.post("/test-generator", protect, mockTestGeneratorEngine)

export default router;
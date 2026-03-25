import express from 'express';
import { protect } from '../middlewares/authMiddleware.js';
import { getInterviewReports, mockTestGeneratorEngine } from '../controllers/interviewController.js';

const router = express.Router();

router.post("/test-generator", protect, mockTestGeneratorEngine);
router.get("/interview-report",protect, getInterviewReports);

export default router;
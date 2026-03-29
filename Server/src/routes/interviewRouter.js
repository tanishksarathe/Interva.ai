import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  deleteTest,
  getInterviewReports,
  mockTestGeneratorEngine,
  createLocalInterview,
} from "../controllers/interviewController.js";

const router = express.Router();

router.post("/test-generator", protect, mockTestGeneratorEngine);
router.get("/interview-report", protect, getInterviewReports);
router.get("/interview-report", protect, getInterviewReports);
router.post("/create-local-interview", protect, createLocalInterview);
router.delete("/delete-test/:id", deleteTest);
// protect can be added
export default router;

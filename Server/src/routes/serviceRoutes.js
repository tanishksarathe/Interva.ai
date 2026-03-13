import express from "express";
import {
  resumeAnalyzewithGemini,
  dsaEvaluationController,
  interviewAnalysis,
  convertIntoJavaScript,
} from "../controllers/serviceController.js";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post(
  "/resume-analyze",
  protect,
  upload.single("resume"),
  resumeAnalyzewithGemini,
);
router.post("/evaluate-dsa", protect, dsaEvaluationController);
router.post("/interview-analysis/:role", protect, interviewAnalysis);
router.post("/convert-javascript", protect, convertIntoJavaScript)

export default router;

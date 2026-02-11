import express from "express";
import { resumeAnalyzewithGemini } from "../controllers/serviceController.js";
import multer from "multer";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/resume-analyze",protect, upload.single("resume"), resumeAnalyzewithGemini);

export default router;

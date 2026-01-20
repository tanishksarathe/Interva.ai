import express from "express";
import { resumeAnalyzewithGemini } from "../controllers/serviceController.js";
import multer from "multer";

const router = express.Router();

const upload = multer({ dest: "uploads/" });

router.post("/resume-analyze", upload.single("resume"), resumeAnalyzewithGemini);

export default router;

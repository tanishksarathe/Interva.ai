import express from "express";
import {
  updateUserController,
  updateUserPhoto,
} from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import multer from "multer";
import {
  retrievePracticeTopic,
  retrieveDSAPracticeTopic,
} from "../controllers/practiceController.js";
import { getAllPreviouslymadeTests, getLiveQuestions, getLiveTest, evaluateAptiAnswers } from "../controllers/interviewController.js";

const router = express.Router();

const uploads = multer();

router.put("/update", protect, updateUserController);
router.patch(
  "/update-profile-photo",
  protect,
  uploads.single("image"),
  updateUserPhoto,
);

router.get("/get-practice-topic/:topicName", protect, retrievePracticeTopic);
router.get(
  "/get-practice-topic-dsa/:topicName",
  protect,
  retrieveDSAPracticeTopic,
);
router.get("/all-previous-tests", protect, getAllPreviouslymadeTests);
router.get("/get-live-test/:id", protect, getLiveTest);
router.post("/get-live-questions", protect, getLiveQuestions);
router.post("/evaluate-answers", protect, evaluateAptiAnswers);

export default router;

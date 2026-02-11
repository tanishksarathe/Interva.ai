import express from "express";
import { updateUserController, updateUserPhoto } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import multer from "multer";
import { retrievePracticeTopic } from "../controllers/practiceController.js";

const router = express.Router();

const uploads = multer();

router.put("/update", protect, updateUserController);
router.patch(
  "/update-profile-photo",
  protect,
  uploads.single("image"),
  updateUserPhoto,
);

router.get("/get-practice-topic/:topicName",protect,retrievePracticeTopic);

export default router;

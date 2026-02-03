import express from "express";
import { updateUserController, updateUserPhoto } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";
import multer from "multer";

const router = express.Router();

const uploads = multer();

router.put("/update", protect, updateUserController);
router.patch(
  "/update-profile-photo",
  protect,
  uploads.single("image"),
  updateUserPhoto,
);

export default router;

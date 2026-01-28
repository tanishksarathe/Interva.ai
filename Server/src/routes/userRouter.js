import express from "express";
import { updateUserController } from "../controllers/userController.js";
import { protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.put("/update", protect,updateUserController);

export default router;
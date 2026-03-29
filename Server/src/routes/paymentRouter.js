import express from "express";
import { protect } from "../middlewares/authMiddleware.js";
import {
  createOrderController,
  verifyPaymentController,
} from "../controllers/paymentController.js";

const paymentRouter = express.Router();

paymentRouter.post("/order", protect, createOrderController);
paymentRouter.post("/verify", protect, verifyPaymentController);

export default paymentRouter;

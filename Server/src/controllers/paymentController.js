import Razorpay from "razorpay";
import crypto from "crypto";
import User from "../models/userModel.js";

export const createOrderController = async (req, res, next) => {
  const { amount, currency, receipt } = req.body;

  const razorpay = new Razorpay({
    key_id: process.env.RAZORPAY_TEST_KEY,
    key_secret: process.env.RAZORPAY_TEST_SECRET,
  });

  const payload = {
    amount: amount * 100,
    currency,
    receipt,
  };

  try {
    const order = await razorpay.orders.create(payload);

    if (!order) {
      const error = new Error("Order creation failed");
      error.statusCode = 500;
      next(error);
    }

    res.status(200).json({
      success: true,
      order,
      key: process.env.RAZORPAY_TEST_KEY,
    });
  } catch (error) {
    next(error);
  }
};

export const verifyPaymentController = async (req, res, next) => {

    // const currentUser = req.user;

    // console.log("Current User in Payment Verification : ", currentUser);

    try {
    const { razorpay_order_id, razorpay_payment_id, razorpay_signature, userId } =
      req.body;

    console.log("Payment Verification Request Body : ", req.body);

    const sha = crypto.createHmac("sha256", process.env.RAZORPAY_TEST_SECRET);
    sha.update(`${razorpay_order_id}|${razorpay_payment_id}`);

    const digest = sha.digest("hex");

    console.log("Generated Digest : ", digest);
    console.log("Received Signature : ", razorpay_signature);

    console.log("Digest === Signature ? ", digest === razorpay_signature);

    if (digest === razorpay_signature) {
      const updatedUser = await User.findByIdAndUpdate(
        userId,
        {
          premium: true,
          payment: {
            orderId: razorpay_order_id,
            paymentId: razorpay_payment_id,
            signature: razorpay_signature,
          },
        },
        { new: true },
      );

      res.status(200).json({
        success: true,
        message: "Payment Verified Successfully",
        data: updatedUser,
      });
    } else {
      res.status(400).json({
        success: false,
        message: "Payment Verification Failed",
      });
    }
  } catch (error) {
    next(error);
  }
};

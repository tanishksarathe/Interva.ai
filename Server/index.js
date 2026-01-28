import dotenv from "dotenv";
dotenv.config();
import express from "express";
import cors from "cors";
import cookieParser from "cookie-parser";
import AuthRouter from "./src/routes/authRouter.js";
import userRouter from "./src/routes/userRouter.js"
import ServiceRouter from "./src/routes/serviceRoutes.js"
import connectDB from "./src/config/db.js";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
    credentials:true,
  }),
);

app.use(express.json());

app.use(cookieParser());

app.use("/uploads", express.static("uploads"));

app.use("/auth", AuthRouter);
app.use("/service", ServiceRouter);
app.use("/user", userRouter);

const PORT = process.env.PORT || 3000;

// app.use("/public", PublicRouter);

app.get("/", (req, res) => {
  console.log("Server Running");
  res.json({
    message: "My Backend is sending some messae, Say Hii!!",
  });
});

app.use((err, req, res, next) => {
  const errorMessage = err.message || "Internal Server Error";
  const stausCode = err.statusCode || 500;

  res.status(stausCode).json({ message: errorMessage });
});

app.listen(PORT, () => {
  console.log(`App is listening at : ${PORT}`);
  connectDB();
});

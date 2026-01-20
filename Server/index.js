import dotenv from "dotenv";
dotenv.config();
import express from "express";
import AuthRouter from "./src/routes/authRouter.js";
import ServiceRouter from "./src/routes/serviceRoutes.js"
import connectDB from "./src/config/db.js";
import cors from "cors";

const app = express();

app.use(
  cors({
    origin: process.env.CLIENT_URL,
  }),
);

app.use(express.json());

app.use("/uploads", express.static("uploads"));

app.use("/auth", AuthRouter);
app.use("/service", ServiceRouter);

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

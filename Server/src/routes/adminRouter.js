import express from "express";
import { insertTopicsInBank, retrieveTopicsFromBank } from "../controllers/adminController.js";
import { practiceTopicsPost } from "../controllers/practiceController.js";
import { AdminProtect, protect } from "../middlewares/authMiddleware.js";

const router = express.Router();

router.route("/question-bank").post(insertTopicsInBank).get(retrieveTopicsFromBank);
router.post("/post-practice",protect,AdminProtect,practiceTopicsPost);

export default router;

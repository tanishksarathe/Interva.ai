import express from "express";
import { insertTopicsInBank, retrieveTopicsFromBank } from "../controllers/adminController.js";

const router = express.Router();

router.route("/question-bank").post(insertTopicsInBank).get(retrieveTopicsFromBank);

export default router;

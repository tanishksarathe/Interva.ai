import fs from "fs";
import { resumeAnalyzeWithJD } from "../utils/resumeAnalyzePromptService.js";
import { createRequire } from "module";
import { dsaEvaluateAI } from "../utils/dsaEvaluationService.js";
import { interviewAnalysisHR } from "../utils/interviewAnalysis.js";

const require = createRequire(import.meta.url);
const { PDFParse } = require("pdf-parse");

export const resumeAnalyzewithGemini = async (req, res, next) => {
  try {
    console.log("Reached to the controller stage");

    const jd = req.body.jobDescription;

    if (!req.file) {
      const error = new Error("Resume File Missing");
      error.statusCode = 400;
      return next(error);
    }

    console.log("Requested File :", req.file);

    if (!jd) {
      const error = new Error("Job Description Missing");
      error.statusCode = 400;
      return next(error);
    }

    console.log("Requested JD :", jd);

    // here we are extracting text

    const pdfUrl = `${req.protocol}://${req.get("host")}/uploads/${req.file.filename}`;

    const parser = new PDFParse({ url: pdfUrl });

    const pdfData = await parser.getText();

    const resumeText = pdfData.text;

    console.log("Resume Text Collected", resumeText);

    if (resumeText == undefined || resumeText == null) {
      console.log("Data is not collected hence breaking the process...");
      return;
    }

    const result = await resumeAnalyzeWithJD(resumeText, jd);

    console.log("Result collected at controller", result);

    fs.unlinkSync(req.file.path);

    res.json(result);
  } catch (error) {
    console.log(error);
    next(error);
  }
};

export const dsaEvaluationController = async (req, res, next) => {
  try {
    const { question, code, language } = req.body;

    if (!question || !code || !language) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const result = await dsaEvaluateAI(question, code, language);
    console.log("DSA Evaluation : ", result);

    res.json(result);
  } catch (error) {
    next(error);
  }
};

export const interviewAnalysis = async (req, res, next) => {
  try {
    const { transcript } = req.body;

    const { role } = req.params;

    console.log(role);

    if (!transcript) {
      const error = new Error("Transcript Required");
      error.statusCode = 400;
      return next(error);
    }

    console.log(transcript);
    const response = await interviewAnalysisHR(transcript, role);

    console.log(response);

    res
      .status(200)
      .json({ message: "Mock Interview Analyzed", data: response });
  } catch (error) {
    next(error);
  }
};

import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

export const resumeAnalyzeWithJD = async (resumeText, jobDescription) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const prompt = `
You are an ATS-grade resume evaluator.

Your task is to evaluate a resume strictly against a given Job Description.

⚠️ OUTPUT RULES (STRICT — READ CAREFULLY):

1. You MUST return ONLY valid JSON.
2. Do NOT include explanations, markdown, comments, or extra text.
3. Do NOT change the JSON structure.
4. Do NOT add or remove fields.
5. ALL array fields MUST be real JSON arrays.
6. NEVER return comma-separated strings for array fields.
7. EACH array element MUST be a separate string.
8. If you break any rule, the output is considered INVALID.

The output will be parsed using JSON.parse(). Invalid JSON will cause failure.

---------------------------------
FIXED JSON SCHEMA (MUST FOLLOW EXACTLY):

{
  "ats_score": number,                       // integer between 0 and 100
  "overall_match_summary": string,

  "shortcomings_against_job_description": [
    string,                                  // minimum 3 items
    string,
    string
  ],

  "pros_against_job_description": [
    string,                                  // minimum 3 items
    string,
    string
  ],

  "missing_keywords": [
    string,                                  // EACH keyword as a separate string
    string
  ],

  "missing_skills": [
    string,                                  // EACH skill as a separate string
    string
  ],

  "improvement_tips": [
    string,                                  // EACH tip as a separate string
    string
  ]
}

IMPORTANT:
- Do NOT merge array values into a single string.
- Do NOT use commas inside strings to represent lists.
- If data is missing, still return valid arrays with logical values.

---------------------------------
RESUME TEXT:
${resumeText}

JOB DESCRIPTION:
${jobDescription}
`;

  try {
    console.log("Reached to the promt stage");

    const response = await client.responses.create({
      model: "llama-3.1-8b-instant",
      input: prompt,
    });

    console.log("Final Output by groq : ", response.output_text);

    const actual = response.output_text;

    const cleaned = actual
      .replace(/```json/gi, "")
      .replace(/```/g, "")
      .trim();

    return JSON.parse(cleaned);
  } catch (error) {
    console.error("Gemini SDK error:", error.message);
    throw new Error("Failed to generate ATS analysis");
  }
};

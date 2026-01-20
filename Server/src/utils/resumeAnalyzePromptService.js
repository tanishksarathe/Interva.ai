import OpenAI from "openai";

export const resumeAnalyzeWithJD = async (resumeText, jobDescription) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const prompt = `
You are an ATS-grade resume evaluator.

Your task is to evaluate a resume strictly against a given Job Description.

You MUST return ONLY valid JSON.
DO NOT include explanations, markdown, or extra text.
DO NOT change the JSON structure.
DO NOT add or remove fields.

If any information cannot be inferred directly, still give a reasonable evaluation based ONLY on comparison logic (not guessing resume content).

--------------------
FIXED JSON FORMAT (MUST FOLLOW EXACTLY):

{
  "ats_score": number (0 to 100),
  "overall_match_summary": string,
  "shortcomings_against_job_description": [
    "minimum 3 clear points"
  ],
  "pros_against_job_description": [
    "minimum 3 clear points"
  ],
  "missing_keywords": [
    "mention here with comma seperate values"
  ],
  "missing_skills": [
    "mention here with comma seperate values"
  ],
  "improvement_tips": [
    "mention here with comma seperate values"
  ]
}

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

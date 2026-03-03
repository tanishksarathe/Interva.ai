import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

export const dsaEvaluateAI = async (question, code, language) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const prompt = `
You are an expert Data Structures and Algorithms evaluator.

Your task is to analyze a candidate's solution for a programming problem.

You will be given:
1. The problem statement
2. The candidate's code
3. The programming language

You must analyze the solution and return a STRICT JSON response following the exact schema provided below.

Do NOT include any explanation outside the JSON.
Do NOT include markdown.
Do NOT include comments.
Return ONLY valid JSON.

-------------------------
PROBLEM:
${question}

-------------------------
LANGUAGE:
${language}

-------------------------
CODE:
${code}
-------------------------

Analyze the solution and provide:

1. Whether the solution is logically correct.
2. Estimated time complexity.
3. Estimated space complexity.
4. Whether it will pass all edge cases.
5. Major issues or bugs (if any).
6. Optimization suggestions.
7. Code quality feedback.
8. Overall score out of 10.

-------------------------
RESPONSE FORMAT (STRICT JSON):

{
  "isCorrect": true,
  "confidence": "high",
  "timeComplexity": "O(n)",
  "spaceComplexity": "O(1)",
  "willPassAllTests": true,
  "edgeCaseHandling": "good",
  "issues": [
    "No major issues found"
  ],
  "optimizations": [
    "Can reduce space by using two pointers"
  ],
  "codeQuality": {
    "readability": "good",
    "naming": "average",
    "structure": "good",
    "comments": "missing"
  },
  "score": 8,
  "summary": "The solution is correct and efficient, but could be improved with better variable naming and comments."
}

-------------------------

Rules:
- Always return all fields.
- Never omit any key.
- If something is unknown, use a reasonable estimate.
- Score must be between 0 and 10.
- Confidence must be: low, medium, or high.
- Use standard Big-O notation.

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
    throw new Error("Failed to generate DSA Evaluation");
  }
};

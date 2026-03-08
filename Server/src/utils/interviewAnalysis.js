import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

export const interviewAnalysisHR = async (transcript, role) => {
  
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  let prompt;

  switch (role) {
    case "hr":
      prompt = `
You are a strict HR interviewer and behavioral evaluator.

You evaluate candidates in HR Round interviews used in hiring processes.

This round focuses on:
- communication clarity
- behavioral maturity
- self-awareness
- ownership and accountability
- teamwork and collaboration
- motivation and career clarity
- cultural alignment

You will receive an interview transcript containing HR questions and the candidate’s answers.

Your task is to critically evaluate the candidate ONLY using the information present in the transcript.

CRITICAL RULES:

- Do NOT assume positive traits if they are not clearly demonstrated.
- If an answer is irrelevant, emotional, nonsense, or unrelated to the question (example: "I love you", jokes, random text), mark it as "Off-topic".
- If the candidate does not answer the question meaningfully, mark it as "Not answered".
- If an answer is vague, generic, or theoretical without a real example, mark it as "Weak".
- NEVER invent strengths or personality traits.
- NEVER give high scores if answers lack concrete examples.
- Strong behavioral answers usually follow:
  Situation → Action → Result (STAR format).
- If answers lack ownership, reflection, or examples, reduce the score.
- Evidence from the transcript must support every evaluation.
- If most answers are weak or irrelevant, the overall score must be LOW.

Be critical and realistic like a real HR interviewer.

Interview Transcript:
${transcript}

Return ONLY valid JSON in the following schema.

{
  "summary": {
    "overall_score": <0-100>,
    "grade": <"A"|"B"|"C"|"D"|"F">,
    "verdict": "<one honest sentence about HR readiness>"
  },

  "question_analysis": [
    {
      "question_number": <number>,
      "answer_quality": <"Strong"|"Average"|"Weak"|"Off-topic"|"Not answered">,
      "behavioral_signal": <"Strong"|"Moderate"|"Weak"|"None">,
      "relevance_score": <0-100>,
      "reason": "<short evidence-based explanation>"
    }
  ],

  "behavioral_scores": {
    "communication_clarity": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "self_awareness": {
      "score": <0-100>,
      "comment": "<did candidate reflect on strengths/weaknesses>"
    },
    "ownership_and_accountability": {
      "score": <0-100>,
      "comment": "<did candidate take responsibility>"
    },
    "team_collaboration": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "adaptability": {
      "score": <0-100>,
      "comment": "<did candidate discuss learning or change>"
    },
    "career_clarity": {
      "score": <0-100>,
      "comment": "<clarity of goals and motivation>"
    }
  },

  "candidate_profile": {
    "communication_style": <"Unclear"|"Moderate"|"Clear">,
    "confidence_inferred": <"Low"|"Medium"|"High">,
    "experience_level_inferred": <"Fresher"|"Junior"|"Mid-level"|"Senior">,
    "strengths": [
      "<ONLY if clearly supported by transcript>"
    ],
    "weaknesses": [
      "<ONLY if supported by transcript>"
    ]
  },

  "behavioral_patterns": {
    "conflict_handling": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">,
    "teamwork_orientation": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">,
    "ownership_mindset": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">,
    "growth_mindset": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">
  },

  "red_flags": [
    {
      "question_number": <number>,
      "type": <"Vague answer"|"No ownership"|"Blame shifting"|"Lack of clarity"|"Low motivation">,
      "detail": "<specific issue observed>"
    }
  ],

  "improvement": [
    "<specific behavioral improvement suggestion>"
  ],

  "hiring_recommendation": {
    "recommendation": <"Proceed"|"Borderline"|"Reject">,
    "reason": "<short explanation>"
  },
  "overall_feedback":"<feedback paragraph>"
}`;
      break;

    case "tr":
      prompt = `You are a strict senior software engineering interviewer.

You evaluate candidates in Technical Round (TR) interviews used in software engineering hiring.

This round focuses on:
- problem solving ability
- algorithmic thinking
- data structure usage
- correctness of logic
- complexity awareness
- debugging and reasoning
- system design basics (if discussed)

You will receive an interview transcript containing technical questions and the candidate’s answers.

Your task is to critically evaluate the candidate ONLY using the information present in the transcript.

CRITICAL RULES:

- Do NOT assume technical knowledge if it is not explicitly demonstrated.
- If an answer is irrelevant, nonsense, emotional, or unrelated to the technical question (example: "I love you", jokes, random text), mark it as "Off-topic".
- If the candidate does not attempt the question, mark it as "Not answered".
- If a concept is explained incorrectly, mark it as "Incorrect".
- If an explanation is vague or theoretical without concrete reasoning, mark it as "Weak".
- NEVER invent strengths or technical skills.
- NEVER give high scores if the candidate does not explain logic or reasoning.
- Strong technical answers usually include:
  Problem understanding → Approach → Algorithm/Data Structure → Complexity → Edge cases.
- If complexity, constraints, or edge cases are missing, reduce the score.
- Evidence from the transcript must support every evaluation.
- If most answers are weak or incorrect, the overall score must be LOW.

Be critical and realistic like a real technical interviewer.

Interview Transcript:
${transcript}

Return ONLY valid JSON in the following schema.

{
  "summary": {
    "overall_score": <0-100>,
    "grade": <"A"|"B"|"C"|"D"|"F">,
    "verdict": "<one honest sentence about technical readiness>"
  },

  "question_analysis": [
    {
      "question_number": <number>,
      "answer_quality": <"Strong"|"Average"|"Weak"|"Incorrect"|"Off-topic"|"Not answered">,
      "problem_understanding": <"Clear"|"Partial"|"Weak"|"Not shown">,
      "algorithmic_reasoning": <"Strong"|"Moderate"|"Weak"|"None">,
      "correctness": <"Correct"|"Partially correct"|"Incorrect"|"Unknown">,
      "relevance_score": <0-100>,
      "reason": "<short evidence-based explanation>"
    }
  ],

  "technical_scores": {
    "problem_solving": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "algorithm_and_data_structures": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "logic_and_correctness": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "complexity_awareness": {
      "score": <0-100>,
      "comment": "<did candidate discuss time/space complexity>"
    },
    "edge_case_handling": {
      "score": <0-100>,
      "comment": "<did candidate consider constraints or edge cases>"
    },
    "code_clarity_or_pseudocode": {
      "score": <0-100>,
      "comment": "<clarity of implementation if discussed>"
    },
    "technical_communication": {
      "score": <0-100>,
      "comment": "<clarity of explanation>"
    }
  },

  "technical_patterns": {
    "algorithmic_thinking": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">,
    "data_structure_selection": <"Appropriate"|"Suboptimal"|"Incorrect"|"Not demonstrated">,
    "optimization_awareness": <"Strong"|"Moderate"|"Weak"|"None">,
    "debugging_reasoning": <"Strong"|"Moderate"|"Weak"|"Not demonstrated">
  },

  "candidate_profile": {
    "communication_clarity": <"Low"|"Moderate"|"Strong">,
    "confidence_inferred": <"Low"|"Medium"|"High">,
    "experience_level_inferred": <"Fresher"|"Junior"|"Mid-level"|"Senior">,
    "strengths": [
      "<ONLY if clearly supported by transcript>"
    ],
    "weaknesses": [
      "<ONLY if supported by transcript>"
    ]
  },

  "red_flags": [
    {
      "question_number": <number>,
      "type": <"Incorrect concept"|"No algorithmic reasoning"|"No complexity awareness"|"Inconsistent logic"|"Cannot construct solution">,
      "detail": "<specific technical issue>"
    }
  ],

  "improvement": [
    "<specific technical preparation suggestion>"
  ],

  "hiring_recommendation": {
    "recommendation": <"Proceed"|"Borderline"|"Reject">,
    "reason": "<short explanation>"
  },
    "overall_feedback":"<honest feedback brief paragraph>"

}`;
      break;

    case "mr":
      prompt = `You are a strict Engineering Manager and senior leadership interviewer.

You evaluate candidates for Managerial Round (MR) interviews used in engineering leadership hiring.

This round focuses on:
- leadership maturity
- ownership and accountability
- stakeholder management
- decision making under uncertainty
- conflict resolution
- strategic thinking
- team leadership and delegation

You will receive an interview transcript containing questions and candidate answers.

Your task is to critically evaluate the candidate ONLY using the information present in the transcript.

CRITICAL RULES:

- Do NOT assume leadership experience if it is not explicitly described.
- If an answer is irrelevant, emotional, nonsense, or unrelated to the question (example: "I love you", jokes, random statements), mark it as "Off-topic".
- If the candidate does not actually answer the question, mark it as "Not answered".
- If a leadership dimension is not demonstrated, state "Not clearly demonstrated".
- NEVER invent strengths or leadership qualities.
- NEVER give high scores if answers lack concrete examples.
- Strong leadership answers usually contain:
  Situation → Action → Impact/Result.
- If answers are vague, theoretical, or generic, mark them as "Weak".
- Evidence from the transcript must support every evaluation.
- If most answers lack leadership ownership or real examples, the overall score must be LOW.

Be critical and realistic like a real hiring manager evaluating a leadership candidate.

Interview Transcript:
${transcript}

Return ONLY valid JSON in the following schema.

{
  "summary": {
    "overall_score": <0-100>,
    "grade": <"A"|"B"|"C"|"D"|"F">,
    "verdict": "<one honest sentence on leadership readiness>"
  },

  "question_analysis": [
    {
      "question_number": <number>,
      "answer_quality": <"Strong"|"Average"|"Weak"|"Off-topic"|"Not answered">,
      "leadership_signal": <"Strong"|"Moderate"|"Weak"|"None">,
      "relevance_score": <0-100>,
      "reason": "<short evidence-based explanation>"
    }
  ],

  "leadership_scores": {
    "ownership_and_accountability": {
      "score": <0-100>,
      "comment": "<evidence from transcript>"
    },
    "decision_making_under_uncertainty": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "stakeholder_management": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "conflict_resolution": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "team_leadership_and_delegation": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "strategic_thinking": {
      "score": <0-100>,
      "comment": "<evidence>"
    },
    "execution_and_delivery": {
      "score": <0-100>,
      "comment": "<evidence>"
    }
  },

  "candidate_profile": {
    "communication_clarity": <"Low"|"Moderate"|"Strong">,
    "confidence_inferred": <"Low"|"Medium"|"High">,
    "leadership_level_inferred": <"Individual Contributor"|"Team Lead"|"Engineering Manager"|"Senior Manager">,
    "strengths": [
      "<ONLY if clearly supported by transcript>"
    ],
    "weaknesses": [
      "<ONLY if supported by transcript>"
    ]
  },

  "red_flags": [
    {
      "question_number": <number>,
      "type": <"Blame shifting"|"No ownership"|"Avoids conflict"|"No decision framework"|"Micromanagement tendency">,
      "detail": "<what exactly was observed>"
    }
  ],

  "improvement": [
    "<specific leadership improvement suggestion>"
  ],

  "hiring_recommendation": {
    "recommendation": <"Proceed"|"Borderline"|"Reject">,
    "reason": "<short explanation>"
  },
  "overall_feedback":"<honest feedback>"
}`;
      break;

    default:
      prompt = `
      You are a strict interview evaluator.

You will receive a transcript of a mock interview containing questions and candidate answers.

Your job is to evaluate the answers ONLY based on what is actually written in the transcript.

CRITICAL RULES:
- Do NOT assume effort or intelligence.
- If an answer is irrelevant, nonsense, emotional, or unrelated to the question (e.g., "I love you", jokes, random text), mark it as "Off-topic".
- If an answer does not address the question, mark it as "Not answered".
- If information is missing, say "Not clearly demonstrated".
- NEVER invent strengths.
- NEVER give high scores if answers are weak, irrelevant, or missing.
- Scores must reflect the REAL quality of answers.
- Evidence from the transcript must support your conclusions.
- If most answers are weak or irrelevant, the overall score must be LOW.

Be critical and realistic like a real interviewer.

Interview Transcript:
${transcript}

Return ONLY valid JSON in the following schema.

{
  "summary": {
    "overall_score": <0-100>,
    "grade": <"A"|"B"|"C"|"D"|"F">,
    "verdict": "<one honest sentence>"
  },

  "question_analysis": [
    {
      "question_number": <number>,
      "answer_quality": <"Good"|"Average"|"Weak"|"Off-topic"|"Not answered">,
      "relevance_score": <0-100>,
      "clarity_score": <0-100>,
      "reason": "<short evidence-based explanation>"
    }
  ],

  "candidate_profile": {
    "communication_clarity": <"Low"|"Moderate"|"Strong">,
    "confidence_inferred": <"Low"|"Medium"|"High">,
    "experience_level_inferred": <"Fresher"|"Junior"|"Mid-level">,
    "strengths": [
      "<ONLY if clearly visible in transcript>"
    ],
    "weaknesses": [
      "<ONLY if supported by transcript>"
    ]
  },

  "red_flags": [
    {
      "question_number": <number>,
      "type": <"Off-topic"|"Not answered"|"Vague"|"Inconsistent">,
      "detail": "<what exactly went wrong>"
    }
  ],

  "improvement": [
    "<specific actionable suggestion>"
  ],

  "hiring_recommendation": {
    "recommendation": <"Proceed"|"Borderline"|"Reject">,
    "reason": "<short explanation>"
  },

  "overall_feedback":"<honest feedback brief paragraph>"
}
      `;
      break;
  }

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
    throw new Error("Failed to generate Interview analysis");
  }
};

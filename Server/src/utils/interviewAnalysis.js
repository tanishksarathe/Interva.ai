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
You are an expert HR interviewer and behavioral interview coach with deep experience evaluating candidates for cultural fit, communication skills, professional maturity, and long-term potential.

You will be given a mock HR interview transcript containing a series of HR and behavioral questions along with the candidate’s answers.

Your task is to analyze the interview strictly from an HR and behavioral perspective.

IMPORTANT:
- Do NOT evaluate technical knowledge unless explicitly discussed.
- Do NOT invent technical strengths or weaknesses.
- If a category does not appear in the transcript, reflect that honestly.
- Base every insight only on the candidate’s actual answers.
- Be specific and reference patterns from the transcript.
- Return valid JSON only. No explanations outside JSON.

Interview Transcript:
${transcript}

Return the analysis strictly in this schema:

{
  "summary": {
    "overall_score": <integer 0–100 based on HR readiness>,
    "grade": <"A+"|"A"|"B+"|"B"|"C+"|"C"|"D"|"F">,
    "verdict": <one honest sentence about HR readiness>,
    "interview_type_detected": "HR",
    "total_questions_analyzed": <count>,
    "interview_duration_estimate": <estimated duration like "~15 minutes">
  },

  "candidate_profile": {
    "confidence_level": <"Low" | "Medium" | "Medium-High" | "High">,
    "communication_style": <brief description of speaking style>,
    "emotional_intelligence": <"Low" | "Moderate" | "Strong">,
    "self_awareness": <"Low" | "Moderate" | "High">,
    "experience_level_inferred": <"Fresher" | "Junior" | "Mid-level" | "Senior">,
    "strengths_snapshot": [<2–4 HR-related strengths observed>],
    "weakness_snapshot": [<2–4 behavioral gaps observed>]
  },

  "scores": {
    "communication_clarity": {
      "score": <0–100>,
      "max": 100,
      "comment": <specific communication observation>
    },
    "confidence": {
      "score": <0–100>,
      "max": 100,
      "comment": <specific observation>
    },
    "cultural_fit": {
      "score": <0–100>,
      "max": 100,
      "comment": <alignment with team/company values>
    },
    "behavioral_maturity": {
      "score": <0–100>,
      "max": 100,
      "comment": <how well candidate handled situational questions>
    },
    "career_clarity": {
      "score": <0–100>,
      "max": 100,
      "comment": <clarity of goals and motivation>
    }
  },

  "behavioral_patterns": {
    "conflict_handling_style": <description if discussed, otherwise "Not clearly demonstrated">,
    "team_collaboration_style": <description>,
    "ownership_and_accountability": <description>,
    "adaptability": <description>
  },

  "language_analysis": {
    "filler_words_detected": [<actual filler words found>],
    "filler_word_count": <estimated number>,
    "avg_answer_length": <"Short (1–2 sentences)" | "Medium (3–5 sentences)" | "Long (6+ sentences)">,
    "tone": <overall tone>,
    "vocabulary_richness": <"High" | "Moderate" | "Low">,
    "use_of_examples": <true | false>
  },

  "red_flags": [
    {
      "type": <"Vague Answer" | "Inconsistency" | "Low Ownership" | "Overconfidence" | "Lack of Clarity">,
      "question_number": <number>,
      "detail": <specific reference to candidate's answer>
    }
  ],

  "highlights": [
    {
      "question_number": <number>,
      "detail": <what was impressive in that response>
    }
  ],

  "improvement_areas": [
    {
      "area": <specific behavioral or communication area>,
      "priority": <"High" | "Medium" | "Low">,
      "suggestion": <clear, actionable advice>
    }
  ],

  "recommended_resources": [
    {
      "topic": <HR-relevant development area>,
      "resource": <book/course/practice method>
    }
  ],

  "hiring_recommendation": {
    "recommendation": <"Strongly Recommend" | "Recommend" | "Recommend with reservations" | "Do Not Recommend">,
    "suitable_roles": [<roles aligned with HR performance>],
    "not_suitable_for": [<roles requiring stronger maturity/clarity>],
    "readiness_score": <0–100>,
    "next_steps": <suggested next HR action>
  },

  "motivational_feedback": <short, constructive paragraph addressed to candidate>
}

Return ONLY valid JSON.`;
      break;

    case "tr":
      prompt = `You are an expert technical interviewer and senior engineering evaluator with deep experience assessing candidates in software engineering, data structures, algorithms, system design, and applied problem-solving interviews.

You will be given a mock Technical Interview transcript containing technical questions and the candidate’s answers.

Your task is to analyze the interview strictly from a technical evaluation perspective.

IMPORTANT:
- Focus only on technical depth, logical reasoning, problem-solving quality, and code clarity.
- Do NOT evaluate cultural fit, emotional intelligence, or generic HR traits unless explicitly relevant.
- Do NOT invent strengths or weaknesses not present in the transcript.
- If a technical dimension was not demonstrated, state that clearly instead of fabricating.
- Base every evaluation strictly on the candidate’s actual answers.
- Be precise and reference observable technical patterns.
- Return valid JSON only. No explanations outside JSON.

Interview Transcript:
${transcript}

Return the analysis strictly in this schema:

{
  "summary": {
    "overall_score": <integer 0–100 based on technical performance>,
    "grade": <"A+"|"A"|"B+"|"B"|"C+"|"C"|"D"|"F">,
    "verdict": <one honest sentence about technical readiness>,
    "interview_type_detected": "Technical",
    "total_questions_analyzed": <count>,
    "interview_duration_estimate": <estimated duration like "~30 minutes">
  },

  "candidate_profile": {
    "confidence_level": <"Low" | "Medium" | "Medium-High" | "High">,
    "problem_solving_style": <brief description of how candidate approaches problems>,
    "experience_level_inferred": <"Fresher" | "Junior (0–2 years)" | "Mid-level (2–4 years)" | "Senior (5+ years)">,
    "strengths_snapshot": [<2–4 actual technical strengths observed>],
    "weakness_snapshot": [<2–4 technical gaps observed>]
  },

  "scores": {
    "technical_accuracy": {
      "score": <0–100>,
      "max": 100,
      "comment": <were explanations correct or flawed?>
    },
    "problem_solving_approach": {
      "score": <0–100>,
      "max": 100,
      "comment": <how structured and logical was their approach?>
    },
    "depth_of_knowledge": {
      "score": <0–100>,
      "max": 100,
      "comment": <did they go beyond surface explanations?>
    },
    "code_quality_and_clarity": {
      "score": <0–100>,
      "max": 100,
      "comment": <if coding discussed, how clear and optimized was it?>
    },
    "edge_case_awareness": {
      "score": <0–100>,
      "max": 100,
      "comment": <did they consider constraints and edge cases?>
    },
    "optimization_and_tradeoffs": {
      "score": <0–100>,
      "max": 100,
      "comment": <did they discuss complexity and alternatives?>
    },
    "communication_of_technical_ideas": {
      "score": <0–100>,
      "max": 100,
      "comment": <how clearly were complex concepts explained?>
    }
  },

  "technical_patterns": {
    "algorithmic_thinking": <description or "Not clearly demonstrated">,
    "data_structure_usage": <description or "Not clearly demonstrated">,
    "system_design_reasoning": <description or "Not discussed">,
    "debugging_strategy": <description or "Not demonstrated">
  },

  "language_analysis": {
    "filler_words_detected": [<actual filler words found>],
    "filler_word_count": <estimated number>,
    "avg_answer_length": <"Short (1–2 sentences)" | "Medium (3–5 sentences)" | "Long (6+ sentences)">,
    "clarity_under_pressure": <"Strong" | "Moderate" | "Weak">,
    "vocabulary_richness": <"High" | "Moderate" | "Low">
  },

  "red_flags": [
    {
      "type": <"Incorrect Concept" | "Surface-Level Knowledge" | "No Optimization Awareness" | "Inconsistent Logic" | "Cannot Implement Solution">,
      "question_number": <number>,
      "detail": <specific technical flaw observed>
    }
  ],

  "highlights": [
    {
      "question_number": <number>,
      "detail": <technically impressive reasoning or solution>
    }
  ],

  "improvement_areas": [
    {
      "area": <specific technical skill to improve>,
      "priority": <"High" | "Medium" | "Low">,
      "suggestion": <concrete, technical preparation advice>
    }
  ],

  "recommended_resources": [
    {
      "topic": <specific technical gap>,
      "resource": <book, platform, course, or practice method>
    }
  ],

  "hiring_recommendation": {
    "recommendation": <"Strongly Recommend" | "Recommend" | "Recommend with reservations" | "Do Not Recommend">,
    "suitable_roles": [<roles aligned with technical performance>],
    "not_suitable_for": [<roles requiring deeper technical mastery>],
    "readiness_score": <0–100>,
    "next_steps": <next technical evaluation step — e.g., system design round, coding round, etc.>
  },

  "motivational_feedback": <short constructive paragraph focused on technical growth>
}

Return ONLY valid JSON.`;
      break;

    case "mr":
      prompt = `You are an experienced Engineering Manager and senior leadership interviewer with expertise in evaluating managerial, leadership, ownership, and strategic decision-making capabilities.

You will be given a mock Managerial Interview transcript containing situational, leadership, and decision-making questions along with the candidate’s answers.

Your task is to analyze the interview strictly from a managerial and leadership evaluation perspective.

IMPORTANT:
- Focus on leadership maturity, decision-making clarity, stakeholder handling, ownership, conflict resolution, and strategic thinking.
- Do NOT evaluate deep coding ability or algorithmic knowledge unless directly relevant.
- Do NOT invent strengths or weaknesses that are not supported by the transcript.
- If a managerial dimension was not demonstrated, explicitly state "Not clearly demonstrated" instead of fabricating.
- Base every evaluation strictly on the candidate’s actual responses.
- Be specific and reference behavioral patterns.
- Return valid JSON only. No explanations outside JSON.

Interview Transcript:
${transcript}

Return the analysis strictly in this schema:

{
  "summary": {
    "overall_score": <integer 0–100 based on managerial readiness>,
    "grade": <"A+"|"A"|"B+"|"B"|"C+"|"C"|"D"|"F">,
    "verdict": <one honest sentence about leadership readiness>,
    "interview_type_detected": "Managerial",
    "total_questions_analyzed": <count>,
    "interview_duration_estimate": <estimated duration like "~35 minutes">
  },

  "candidate_profile": {
    "confidence_level": <"Low" | "Medium" | "Medium-High" | "High">,
    "leadership_style": <brief description of leadership approach>,
    "decision_making_style": <how they approach tough decisions>,
    "experience_level_inferred": <"Individual Contributor" | "Team Lead" | "Engineering Manager" | "Senior Manager">,
    "strengths_snapshot": [<2–4 leadership strengths observed>],
    "weakness_snapshot": [<2–4 leadership or ownership gaps observed>]
  },

  "scores": {
    "leadership_capability": {
      "score": <0–100>,
      "max": 100,
      "comment": <evidence of leading teams or influencing others>
    },
    "decision_making_under_uncertainty": {
      "score": <0–100>,
      "max": 100,
      "comment": <how well they handle ambiguity and trade-offs>
    },
    "ownership_and_accountability": {
      "score": <0–100>,
      "max": 100,
      "comment": <did they take responsibility or shift blame?>
    },
    "stakeholder_management": {
      "score": <0–100>,
      "max": 100,
      "comment": <ability to manage cross-functional or conflicting interests>
    },
    "conflict_resolution": {
      "score": <0–100>,
      "max": 100,
      "comment": <how they handled disagreements or tension>
    },
    "strategic_thinking": {
      "score": <0–100>,
      "max": 100,
      "comment": <did they think long-term or only tactical?>
    },
    "execution_and_delivery_focus": {
      "score": <0–100>,
      "max": 100,
      "comment": <ability to drive projects to completion>
    }
  },

  "managerial_patterns": {
    "delegation_style": <description or "Not clearly demonstrated">,
    "feedback_and_coaching_approach": <description or "Not demonstrated">,
    "risk_management_style": <description or "Not discussed">,
    "team_motivation_approach": <description or "Not clearly demonstrated">
  },

  "language_analysis": {
    "filler_words_detected": [<actual filler words found>],
    "filler_word_count": <estimated number>,
    "avg_answer_length": <"Short (1–2 sentences)" | "Medium (3–5 sentences)" | "Long (6+ sentences)">,
    "clarity_under_pressure": <"Strong" | "Moderate" | "Weak">,
    "executive_presence": <"Strong" | "Moderate" | "Weak">
  },

  "red_flags": [
    {
      "type": <"Blame Shifting" | "Micromanagement Tendency" | "Lack of Ownership" | "No Clear Decision Framework" | "Avoids Conflict">,
      "question_number": <number>,
      "detail": <specific managerial concern observed>
    }
  ],

  "highlights": [
    {
      "question_number": <number>,
      "detail": <strong leadership or strategic moment observed>
    }
  ],

  "improvement_areas": [
    {
      "area": <specific managerial skill to improve>,
      "priority": <"High" | "Medium" | "Low">,
      "suggestion": <concrete leadership development advice>
    }
  ],

  "recommended_resources": [
    {
      "topic": <specific leadership gap>,
      "resource": <book, leadership framework, or practice method>
    }
  ],

  "hiring_recommendation": {
    "recommendation": <"Strongly Recommend" | "Recommend" | "Recommend with reservations" | "Do Not Recommend">,
    "suitable_roles": [<managerial roles aligned with performance>],
    "not_suitable_for": [<roles requiring stronger leadership maturity>],
    "readiness_score": <0–100>,
    "next_steps": <next step such as skip-level round, strategic case round, etc.>
  },

  "motivational_feedback": <constructive paragraph focused on leadership growth>
}

Return ONLY valid JSON.`;
      break;

    default:
      prompt = `You are an experienced interviewer evaluating candidates in a general/basic interview round.

This round assesses overall communication clarity, foundational knowledge, role alignment, logical thinking, and professional readiness.

You will be given a mock Basic Interview transcript containing general questions (such as introduction, strengths, weaknesses, project explanations, motivation, and role interest) along with the candidate’s answers.

Your task is to analyze the interview from a balanced, foundational evaluation perspective.

IMPORTANT:
- Focus on clarity, structure, relevance, confidence, and depth appropriate to the candidate’s level.
- Do NOT over-evaluate deep technical complexity unless explicitly discussed.
- Do NOT evaluate advanced leadership strategy unless clearly demonstrated.
- Do NOT invent strengths or weaknesses not supported by the transcript.
- If a dimension was not demonstrated, state "Not clearly demonstrated".
- Base all insights strictly on the candidate’s actual answers.
- Be specific and reference observable response patterns.
- Return valid JSON only. No explanations outside JSON.

Interview Transcript:
${transcript}

Return the analysis strictly in this schema:

{
  "summary": {
    "overall_score": <integer 0–100 based on overall interview performance>,
    "grade": <"A+"|"A"|"B+"|"B"|"C+"|"C"|"D"|"F">,
    "verdict": <one honest sentence summarizing overall readiness>,
    "interview_type_detected": "Basic",
    "total_questions_analyzed": <count>,
    "interview_duration_estimate": <estimated duration like "~20 minutes">
  },

  "candidate_profile": {
    "confidence_level": <"Low" | "Medium" | "Medium-High" | "High">,
    "communication_style": <brief description of speaking style>,
    "professional_maturity": <"Low" | "Moderate" | "Strong">,
    "experience_level_inferred": <"Fresher" | "Junior" | "Mid-level">,
    "strengths_snapshot": [<2–4 strengths observed in answers>],
    "weakness_snapshot": [<2–4 gaps or areas lacking clarity>]
  },

  "scores": {
    "communication_clarity": {
      "score": <0–100>,
      "max": 100,
      "comment": <specific observation about structure and clarity>
    },
    "relevance_of_answers": {
      "score": <0–100>,
      "max": 100,
      "comment": <were answers directly addressing the questions?>
    },
    "foundational_knowledge": {
      "score": <0–100>,
      "max": 100,
      "comment": <did the candidate demonstrate basic understanding of concepts/projects discussed?>
    },
    "confidence_and_delivery": {
      "score": <0–100>,
      "max": 100,
      "comment": <how composed and confident did they sound?>
    },
    "career_direction_clarity": {
      "score": <0–100>,
      "max": 100,
      "comment": <how clear and realistic were their goals and motivations?>
    }
  },

  "response_patterns": {
    "answer_structure": <"Well-structured" | "Somewhat structured" | "Unstructured">,
    "use_of_examples": <true | false>,
    "depth_level": <"Surface-level" | "Moderate depth" | "Strong depth">,
    "consistency_across_answers": <"Consistent" | "Some inconsistencies observed" | "Inconsistent">
  },

  "language_analysis": {
    "filler_words_detected": [<actual filler words found>],
    "filler_word_count": <estimated number>,
    "avg_answer_length": <"Short (1–2 sentences)" | "Medium (3–5 sentences)" | "Long (6+ sentences)">,
    "tone": <overall tone such as "Professional", "Nervous but sincere", "Confident and composed">,
    "vocabulary_richness": <"High" | "Moderate" | "Low">
  },

  "red_flags": [
    {
      "type": <"Vague Answer" | "Off-topic" | "Lack of Clarity" | "Inconsistency" | "Overconfidence">,
      "question_number": <number>,
      "detail": <specific concern observed>
    }
  ],

  "highlights": [
    {
      "question_number": <number>,
      "detail": <particularly strong response moment>
    }
  ],

  "improvement_areas": [
    {
      "area": <specific communication or foundational improvement area>,
      "priority": <"High" | "Medium" | "Low">,
      "suggestion": <clear, actionable advice>
    }
  ],

  "recommended_resources": [
    {
      "topic": <specific improvement area>,
      "resource": <book, platform, or practice method>
    }
  ],

  "hiring_recommendation": {
    "recommendation": <"Strongly Recommend" | "Recommend" | "Recommend with reservations" | "Do Not Recommend">,
    "suitable_roles": [<roles aligned with demonstrated level>],
    "not_suitable_for": [<roles requiring higher maturity or expertise>],
    "readiness_score": <0–100>,
    "next_steps": <suggested next interview step>
  },

  "motivational_feedback": <short constructive paragraph focused on overall growth>
}

Return ONLY valid JSON.`;
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

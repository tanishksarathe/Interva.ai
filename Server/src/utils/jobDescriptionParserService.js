import dotenv from "dotenv";
dotenv.config();
import OpenAI from "openai";

export const topicsAnalyzeWithJD = async (jobDescription) => {
  const client = new OpenAI({
    apiKey: process.env.OPENAI_API_KEY,
    baseURL: "https://api.groq.com/openai/v1",
  });

  const prompt = `You are an expert technical recruiter and interview designer.

You will receive a JOB DESCRIPTION.

Your task is to analyze the job description and extract the most relevant interview topics.

You MUST select topics ONLY from the allowed lists provided below.
You are strictly forbidden from creating new topics.

STRICT RULES:

1. Return ONLY a valid JSON object.
2. Do NOT include explanations, comments, markdown, or additional text.
3. Topics MUST be exact string matches from the allowed lists.
4. Do NOT invent, rename, translate, or modify any topic.
5. If a topic does not appear in the allowed list, it MUST NOT appear in the output.
6. Each topic must be chosen exactly as written.
7. Maximum 10 items allowed for each category.
8. Minimum 0 items allowed. Do NOT force topics if the job description does not justify them.
9. Only include topics strongly implied by the job description.
10. If coding interviews are not clearly implied, return an empty array for "dsa_topics".
11. If reasoning or aptitude tests are not clearly implied, return an empty array for "aptitude_topics".
12. The final output MUST strictly follow the JSON structure below.

ALLOWED_APTITUDE_TOPICS:

<series |
time_and_distance |percentages |profit_and_loss |ratio_and_proportion |
direction_sense |
blood_relations |
permutations_combinations |probability | quadratic_equations |progressions |
coding_decoding |
analogy |
classification |
ordering_ranking |
syllogism |
venn_diagram |
floor_box_puzzles |
logical_puzzles |
seating_arrangement |
scheduling_calendar |
input_output |
statement_conclusion |
statement_assumptions |
cause_effect |
data_sufficiency |
advanced_syllogism |
advanced_puzzles>

ALLOWED_DSA_TOPICS:

<
arrays |
strings |
mathematics_and_number_theory |
searching_algorithms |
sorting_algorithms |
Recursion |
Backtracking |
Stack |
queue |
linked_list |
two_pointer_technique |
sliding_window |
prefix_sum |
binary_search |
hashing |
trees |
graphs |
>

OUTPUT FORMAT (STRICT JSON):

{
"aptitude_topics": [],
"dsa_topics": [],
"skills_required": []
}

JOB DESCRIPTION:
${jobDescription}`;

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

/*
greedy_algorithms |
dynamic_programming |
heaps_priority_queue |
bit_manipulation |
monotonic_stack_queue |
fast_and_slow_pointers |
simulation_implementation_problems
programming_fundamentals |
time_and_space_complexity |
*/

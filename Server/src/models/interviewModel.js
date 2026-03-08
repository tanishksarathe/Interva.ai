import mongoose from "mongoose";

const interviewQuestionSchema = mongoose.Schema({
  question: {
    type: String,
    required: true,
  },
  options: {
    type: [String],
    required: true,
    default: [],
  },
  correct_answer: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    enum: ["Easy", "Medium", "Hard"],
    required: true,
  },
});

export const InterviewQuestion = mongoose.model("InterviewQuestion", interviewQuestionSchema);

const aptiTestSchema = mongoose.Schema(
  {
    topics: {
      type: [String],
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    ques_ans: [interviewQuestionSchema],
    timelimit: {
      type: Number,
    },
    maxMarks: {
      type: Number,
    },
  },
  {
    timestamps: true,
  },
);

export const AptiTest = mongoose.model("AptiTest", aptiTestSchema);


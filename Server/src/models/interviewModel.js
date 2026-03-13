import mongoose from "mongoose";

const interviewQuestionSchema = mongoose.Schema(
  {
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
  },
  {
    timestamps: true,
  },
);

export const InterviewQuestion = mongoose.model(
  "InterviewQuestion",
  interviewQuestionSchema,
);

const aptiTestSchema = mongoose.Schema(
  {
    userId:{
      type:mongoose.Schema.Types.ObjectId,
      ref:"User",
      required:true
    },
    topics: {
      dsa: {
        type: [String],
        required: true,
      },
      apti: {
        type: [String],
        required: true,
      },
      hr: {
        type: [String],
      },
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    activeRound: {
      type: Number,
      enum: [0, 1, 2], // 0 for Aptitude, 1 for DSA, 2 for HR
      default: 0,
    },
    ques_bank: {
      dsa: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "DSA",
          required: true,
        },
      ],
      apti: [
        {
          type: mongoose.Schema.Types.ObjectId,
          ref: "InterviewQuestion",
          required: true,
        },
      ],
    },
    timelimit: {
      dsa: {
        type: Number,
      },
      apti: {
        type: Number,
      },
      hr: {
        type: Number,
      },
    },
    maxMarks: {
      dsa: {
        type: Number,
      },
      apti: {
        type: Number,
      },
      hr: {
        type: Number,
      },
    },
  },
  {
    timestamps: true,
  },
);

export const AptiTest = mongoose.model("AptiTest", aptiTestSchema);

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
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    isPremium: {
      type: Boolean,
      default: false,
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

const interviewResultSchema = mongoose.Schema(
  {
    userId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "User",
      required: true,
    },
    testId: {
      type: mongoose.Schema.Types.ObjectId,
      ref: "AptiTest",
      required: true,
    },
    attemptCount: {
      type: Number,
      default: 0,
    },
    attemptStatus: {
      type: String,
      enum: ["in-progress", "completed", "not-started"],
      default: "not-started",
    },
    difficulty: {
      type: String,
      enum: ["Easy", "Medium", "Hard"],
      required: true,
    },
    scores: {
      dsa: {
        score: {
          type: Number,
          default: 0,
        },
        code: [
          {
            questionId: {
              type: mongoose.Schema.Types.ObjectId,
              ref: "DSA",
            },
            codeSubmitted: {
              type: String,
            },
          },
        ],
      },
      apti: {
        type: Number,
        default: 0,
        // Here whole question object can be stored as user might attempt all questions and we need to store their responses for all questions
      },
      hr: {
        type: Number,
        default: 0,
      },
    },
    overallPercentile: {
      type: Number,
      default: 0,
    },
    feedback: {
      type: String,
      default: "",
    },
    maxScores: {
      dsa: Number,
      apti: Number,
      hr: Number,
      total: Number,
    },
    performance: {
      dsa: {
        totalQuestions: {
          type: Number,
          default: 0,
        },
        correct: {
          type: Number,
          default: 0,
        },
        wrong: {
          type: Number,
          default: 0,
        },
        accuracy: {
          type: Number,
          default: 0,
        },
      },
      apti: {
        totalQuestions: {
          type: Number,
          default: 0,
        },
        correct: {
          type: Number,
          default: 0,
        },
        wrong: {
          type: Number,
          default: 0,
        },
        accuracy: {
          type: Number,
          default: 0,
        },
      },
      hr: {
        totalQuestions: {
          type: Number,
          default: 0,
        },
        correct: {
          type: Number,
          default: 0,
        },
        wrong: {
          type: Number,
          default: 0,
        },
        accuracy: {
          type: Number,
          default: 0,
        },
      },
    },
    timeAnalysis: {
      totalTimeTaken: {
        type: Number,
        default: 0,
      },
      dsaTime: {
        type: Number,
        default: 0,
      },
      aptiTime: {
        type: Number,
        default: 0,
      },
      hrTime: {
        type: Number,
        default: 0,
      },
      avgTimePerSection: {
        type: Number,
        default: 0,
      },
    },
    improvement: {
      scoreDiff: String,
      dsaDiff: String,
      aptiDiff: String,
      hrDiff: String,
    },
  },
  {
    timestamps: true,
  },
);

export const InterviewSummary = mongoose.model(
  "InterviewSummary",
  interviewResultSchema,
);

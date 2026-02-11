import mongoose from "mongoose";

const practiceSchema = mongoose.Schema(
  {
    topic: {
      type: String,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    solution: {
      type: [String],
      required: true,
    },
    rule: {
      type: String,
      required: true,
    },
    finalAnswer: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      enum: ["easy", "medium", "hard"],
      required: true,
    },
    estimatedTime: {
      type: Number,
      required: true,
    },
    keyconcepts: {
      type: [String],
      required: true,
      default: [""],
    },
    approach: {
      type: String,
      required: true,
    },
    hint: {
      type: String,
      required: true,
    },
  },
  { timestamps: true },
);

const Practice = mongoose.model("Practice", practiceSchema);

export default Practice;

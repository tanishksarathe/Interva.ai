import mongoose from "mongoose";

const questionSchema = mongoose.Schema(
  {
    questiontext: {
      type: String,
      required: true,
    },
    options: [
      {
        type: String,
        required: true,
        isCorrect: Boolean,
      },
    ],

    topic: {
      type: String,
      required: true,
    },
    marks: {
      type: Number,
      required: true,
    },
    isActive: {
      type: Boolean,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
  },
  {
    timestamps: true,
  },
);

const testSchema = mongoose.Schema(
  {
    title: {
      type: String,
      required: true,
    },
    description: {
      type: String,
      required: true,
    },
    question: [questionSchema],
    totalmarks: {
      type: Number,
      required: true,
    },
    subject: {
      type: String,
      required: true,
    },
    difficulty: {
      type: String,
      required: true,
    },
    duration: {
      type: Number,
      required: true,
    },
  },
  { timestamps: true },
);


const Test = mongoose.model("Test", testSchema);

export default Test;
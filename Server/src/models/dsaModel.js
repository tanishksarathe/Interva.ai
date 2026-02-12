import mongoose from "mongoose";

const dsaSchema = mongoose.Schema({
  title: {
    type: String,
    required: true,
  },
  topic: {
    type: String,
    required: true,
  },
  difficulty: {
    type: String,
    required: true,
  },
  question: {
    type: String,
    required: true,
  },
  companies: {
    type: [String],
    default: [""],
  },
  constraints: {
    type: [String],
    required: true,
  },
  stdin: {
    type: String,
    required: true,
  },
  expectedOutput: {
    type: [String],
    required: true,
  },
});

const DSA = mongoose.model("DSA", dsaSchema);

export default DSA;

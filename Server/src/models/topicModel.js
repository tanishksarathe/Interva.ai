 import mongoose from "mongoose";

// Define a single, flexible section schema
const sectionSchema = new mongoose.Schema({
  id: { type: Number, required: true }, // Changed to Number to match your data
  type: { type: String, required: true },
  title: { type: String, required: true },
  content: {
    text: { type: String, required: true },
  },
  // Use optional fields for variety
  icon: String,
  highlight: String,
  extraAction: {
    label: String,
    action: String,
  },
});

const topicSchema = new mongoose.Schema(
  {
    meta: {
      id: { type: String, required: true, unique: true }, // Added unique for indexing
      title: { type: String, required: true },
      topic: { type: String, required: true },
      difficulty: { type: String, required: true },
      learningTime: { type: String, required: true },
      explanation: { type: String, required: true },
    },

    userstate: {
      completedSections: { type: Number, default: 0 }, // Changed to Number
      totalSections: { type: Number, default: 0 },     // Changed to Number
      isCompleted: { type: Boolean, default: false },
      isBookmarked: { type: Boolean, default: false },
      confidenceRating: { type: Number },              // Changed to Number
    },

    sections: [sectionSchema], // Dynamic array of sections

    personalInsight: {
      placeholder: String,
      message: { type: String, default: "" },
      saved: { type: Boolean, default: false },
    },
  },
  { timestamps: true }
);

export const Topic = mongoose.model("Topic", topicSchema);
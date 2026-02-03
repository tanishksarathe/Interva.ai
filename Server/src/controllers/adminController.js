import { Topic } from "../models/topicModel.js";

export const insertTopicsInBank = async (req, res, next) => {
  const { meta, sections } = req.body;

  if (!meta || !Array.isArray(sections)) {
    const error = new Error("All Fields Required");
    error.statusCode = 400;
    return next(error);
  }

  const existingTopic = await Topic.findOne({ "meta.id": meta.id });

  if (existingTopic) {
    const error = new Error("Topic is already exisiting");
    error.statusCode = 403;
    return next(error);
  }

  const newTopic = await Topic.create({
    meta: {
      id: meta.id,
      title: meta.title,
      topic: meta.topic,
      difficulty: meta.difficulty,
      learningTime: meta.learningTime,
      explanation: meta.explanation,
    },

    sections,
  });

  res.status(200).json({ message: "Topic Added" });
};

export const retrieveTopicsFromBank = async (req, res, next) => {

    

};

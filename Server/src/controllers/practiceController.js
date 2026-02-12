import DSA from "../models/dsaModel.js";
import Practice from "../models/practiceModel.js";

export const practiceTopicsPost = async (req, res, next) => {
  const {
    topic,
    subject,
    description,
    solution,
    hint,
    rule,
    finalAnswer,
    keyconcepts,
    approach,
    difficulty,
    estimatedTime,
  } = req.body;

  if (
    !topic ||
    !subject ||
    !rule ||
    !finalAnswer ||
    !description ||
    !solution ||
    !hint ||
    !keyconcepts ||
    !approach ||
    !difficulty ||
    !estimatedTime
  ) {
    const error = new Error("All Fields Required");
    error.statusCode = 400;
    return next(error);
  }

  const newPracticeConcept = await Practice.create({
    topic,
    subject,
    description,
    solution,
    hint,
    rule,
    finalAnswer,
    keyconcepts,
    approach,
    difficulty,
    estimatedTime,
  });

  res.status(200).json({ message: "Topic Added Successfully" });
};

export const retrievePracticeTopic = async (req, res, next) => {
  try {
    const { topicName } = req.params;

    console.log("Topic Name", topicName);

    const concept = await Practice.find({ topic: topicName });

    console.log("Concept", concept);

    if (concept.length === 0) {
      const error = new Error("Not Found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "Your Topics are Ready", data: concept });
  } catch (error) {
    next(error);
  }
};

export const practiceDSATopicsPost = async (req, res, next) => {
  try {
    const {
      title,
      difficulty,
      expectedOutput,
      constraints,
      companies,
      question,
      stdin,
    } = req.body;

    if (
      !title ||
      !difficulty ||
      !expectedOutput ||
      !constraints ||
      !companies ||
      !question ||
      !stdin
    ) {
      const error = new Error("All Fields Required");
      error.statusCode = 400;
      return next(error);
    }

    const newDSAQues = await DSA.create({
      title,
      difficulty,
      expectedOutput,
      constraints,
      companies,
      question,
      stdin,
    });

    res.status(200).json({ message: "DSA Question Added" });
  } catch (error) {
    next(error);
  }
};

export const retrieveDSAPracticeTopic = async (req, res, next) => {

  try {
    const { topicName } = req.params;

    console.log("Topic Name", topicName);

    const concept = await DSA.find({ topic: topicName });

    console.log("Concept", concept);

    if (concept.length === 0) {
      const error = new Error("Not Found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({ message: "Your Topics are Ready", data: concept });
  } catch (error) {
    next(error);
  }


};

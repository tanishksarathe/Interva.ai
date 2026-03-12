import DSA from "../models/dsaModel.js";
import { AptiTest, InterviewQuestion } from "../models/interviewModel.js";
import { topicsAnalyzeWithJD } from "../utils/jobDescriptionParserService.js";

export const mockTestGeneratorEngine = async (req, res, next) => {
  try {
    const { toughness, jobdesc } = req.body;

    if (!toughness || !jobdesc) {
      const error = new Error("All Fields Required");
      error.statusCode = 401;
      return next(error);
    }

    let diff;
    let numberOfAptiQues;
    let numberOfDsaQues;
    let timelimit;
    let maxMarks;
    if (toughness == "Beginner") {
      diff = "Easy";
      numberOfDsaQues = 1;
      numberOfAptiQues = 10;
      timelimit = {
        dsa: 25,
        apti: 15,
        hr: 10,
      };
      maxMarks = {
        dsa: 40,
        apti: 20,
        hr: 20,
      };
    } else if (toughness == "Intermediate") {
      diff = "Medium";
      numberOfDsaQues = 2;
      numberOfAptiQues = 15;
      timelimit = {
        apti: 25,
        dsa: 60,
        hr: 15,
      };
      maxMarks = {
        dsa: 80,
        apti: 30,
        hr: 20,
      };
    } else {
      diff = "Hard";
      numberOfDsaQues = 3;
      numberOfAptiQues = 20;
      timelimit = {
        apti: 40,
        dsa: 120,
        hr: 20,
      };
      maxMarks = {
        dsa: 150,
        apti: 40,
        hr: 20,
      };
    }

    const analyzedTopics = await topicsAnalyzeWithJD(jobdesc);

    const aptitudeQuestionsSet = await InterviewQuestion.aggregate([
      {
        $match: {
          topic: { $in: analyzedTopics.aptitude_topics },
          difficulty: diff,
        },
      },
      {
        $sample: { size: numberOfAptiQues },
      },
    ]);

    console.log("Apti Ques Set : ", aptitudeQuestionsSet);

    const dsaQuestionsSet = await DSA.aggregate([
      {
        $match: {
          topic: { $in: analyzedTopics.dsa_topics },
          difficulty: diff,
        },
      },
      {
        $sample: { size: numberOfDsaQues },
      },
    ]);

    console.log("DSA Ques Set : ", dsaQuestionsSet);

    const aptiIDS = await aptitudeQuestionsSet.map((q) => q._id);
    const dsaIDS = await dsaQuestionsSet.map((q) => q._id);

    console.log(aptiIDS);
    console.log(dsaIDS);

    const topics = {
      dsa: analyzedTopics.dsa_topics,
      apti: analyzedTopics.aptitude_topics,
      hr: analyzedTopics.skills_required,
    };

    const ques_bank = {
      dsa: dsaIDS,
      apti: aptiIDS,
    };

    const newTest = await AptiTest.create({
      topics,
      difficulty: diff,
      ques_bank,
      timelimit,
      maxMarks,
    });

    console.log(newTest);

    res.status(201).json({ message: "Simulation Locked", data: newTest });
  } catch (error) {
    next(error);
  }
};

export const getAllPreviouslymadeTests = async (req, res, next) => {
  try {
    const allTests = await AptiTest.find();

    res.json({ message: "All Tests Fetched", data: allTests });
  } catch (error) {
    next(error);
  }
};

export const getLiveTest = async (req, res, next) => {
  try {
    const { id } = req.params;

    const liveTest = await AptiTest.findById(id);

    if (!liveTest) {
      const error = new Error("Test not found");
      error.statusCode = 404;
      return next(error);
    }

    res.status(200).json({
      message: "Fetched Live Test",
      data: liveTest,
    });
  } catch (error) {
    next(error);
  }
};

export const getLiveQuestions = async (req, res, next) => {
  try {
    const details = req.body;

    console.log("Details received in getLiveQuestions controller: ", details);

    let response;

    switch (details.type) {
      case "apti":
        response = await InterviewQuestion.find({
          _id: { $in: details.questionIds },
        }).select("-correct_answer");
        console.log(response);
        break;

      case "dsa":
        response = await DSA.find({ _id: { $in: details.questionIds } });
        console.log(response);
        break;

      default:
        const error = new Error("Invalid question type");
        error.statusCode = 400;
        return next(error);
    }

    res.status(200).json({
      message: "Fetched Live Questions",
      data: response,
    });
  } catch (error) {
    next(error);
  }
};

export const evaluateAptiAnswers = async (req, res, next) => {
  try {
    const { answers, testId } = req.body;
    console.log("Received answers for evaluation: ", answers);

    const result = await InterviewQuestion.find({
      _id: { $in: Object.keys(answers) },
    });

    console.log("Correct answers from DB: ", result);

    let score = 0;

    result.forEach((question) => {
      const qId = question._id.toString();
      if (answers[qId] === question.correct_answer) {
        score++;
      }
    });

    res.status(200).json({
      message: "Answers evaluated",
      score,
    });
  } catch (error) {
    next(error);
  }
};

import DSA from "../models/dsaModel.js";
import {
  AptiTest,
  InterviewQuestion,
  InterviewSummary,
} from "../models/interviewModel.js";
import { topicsAnalyzeWithJD } from "../utils/jobDescriptionParserService.js";

export const mockTestGeneratorEngine = async (req, res, next) => {
  try {
    const { toughness, jobdesc } = req.body;

    const currentUser = req.user;

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
      userId: currentUser._id,
      topics,
      difficulty: diff,
      ques_bank,
      timelimit,
      maxMarks,
    });

    console.log("New Test : ", newTest);

    res.status(201).json({ message: "Simulation Locked", data: newTest });
  } catch (error) {
    next(error);
  }
};

export const getAllPreviouslymadeTests = async (req, res, next) => {
  const currentUser = req.user;

  try {
    await AptiTest.updateMany(
      { userId: currentUser._id },
      { $set: { activeRound: 0 } },
    );

    // Step 2: fetch updated tests
    const updatedTests = await AptiTest.find({ userId: currentUser._id });

    res.json({
      message: "All Tests Fetched",
      data: updatedTests,
    });
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

export const updateRoundsAfterDSA = async (req, res, next) => {
  try {
    const { testId } = req.params;

    const test = await AptiTest.findById(testId);

    if (!test) {
      const error = new Error("Test not found");
      error.statusCode = 404;
      return next(error);
    }

    const updatedTest = await AptiTest.findByIdAndUpdate(
      testId,
      { $inc: { activeRound: 1 } },
      { new: true },
    );

    res.status(200).json({
      message: "Round Updated",
      data: updatedTest,
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

    const roundUpdate = await AptiTest.findByIdAndUpdate(
      testId,
      { $inc: { activeRound: 1 } },
      { new: true },
    );
    console.log("Updated Test after incrementing activeRound: ", roundUpdate);

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

export const createInterviewSummary = async (req, res, next) => {
  try {
    const currentUser = req.user;
    const detailSubmitted = req.body;

    console.log("Details received for interview summary: ", detailSubmitted);

    if (!detailSubmitted) {
      const error = new Error("No details submitted");
      error.statusCode = 400;
      return next(error);
    }

    const currentTest = await AptiTest.findById(detailSubmitted.testId);

    if (!currentTest) {
      const error = new Error("Test not found");
      error.statusCode = 404;
      return next(error);
    }

    console.log("CurrentTest Detail : ", currentTest);

    let existingSummary = await InterviewSummary.findOne({
      testId: detailSubmitted.testId,
      userId: currentUser._id,
    });

    console.log("Existing Summary for the test: ", existingSummary);
    // payloads here

    let score;

    let overallPercentile;

    let maxScores;

    let performance;

    let timeAnalysis;

    let scoredifference;

    let improvement;

    if (existingSummary) {
      // on update phase
      console.log("If Block");

      if (detailSubmitted.round === "dsa") {
        // score calculation logic for dsa can be more complex based on test cases passed.
        let totalTestCases = 0;
        let passedTestCases = 0;
        let codeArray = [];

        Object.entries(detailSubmitted).forEach(([key, value]) => {
          if (key === "testId" || key === "round" || key === "timeTaken")
            return;

          const results = value?.testCaseResult?.results || [];

          totalTestCases += results.length;

          results.forEach((test) => {
            if (test.passed) {
              passedTestCases++;
            }
          });

          // 👇 questionId + code store karna
          codeArray.push({
            questionId: key,
            codeSubmitted: value.code,
          });
        });

        let dsaScore =
          totalTestCases > 0
            ? (passedTestCases / totalTestCases) * currentTest.maxMarks.dsa
            : 0;

        // tooked out score
        score = {
          dsa: {
            score: dsaScore,
            code: codeArray,
          },
        };

        overallPercentile =
          ((score.dsa.score +
            (existingSummary.scores?.apti || 0) +
            (existingSummary.scores?.hr || 0)) *
            100) /
          (currentTest.maxMarks.dsa +
            currentTest.maxMarks.apti +
            currentTest.maxMarks.hr);

        maxScores = {
          ...existingSummary.maxScores,
          dsa: currentTest.maxMarks.dsa,
        };

        // pending
        performance = {
          ...existingSummary.performance,
          dsa: {
            totalQuestions: codeArray.length,
            correct: passedTestCases,
            wrong: totalTestCases - passedTestCases,
            accuracy:
              totalTestCases > 0 ? (passedTestCases / totalTestCases) * 100 : 0,
          },
        };
        timeAnalysis = {
          ...existingSummary.timeAnalysis,
          totalTimeTaken:
            (existingSummary.timeAnalysis?.dsaTime || 0) +
            (existingSummary.timeAnalysis?.aptiTime || 0) +
            detailSubmitted.timeTaken,
          dsaTime: detailSubmitted.timeTaken,
          avgTimePerSection:
            (existingSummary.timeAnalysis.hrTime +
              existingSummary.timeAnalysis.aptiTime +
              detailSubmitted.timeTaken) /
            3,
        };

        scoredifference =
          overallPercentile - (existingSummary.overallPercentile || 0);

        improvement = {
          scoreDiff: scoredifference,
          dsaDiff:
            scoredifference == 0
              ? "Constant"
              : scoredifference > 0
                ? "Improving"
                : "Declining",
        };

        existingSummary = await InterviewSummary.findOneAndUpdate(
          { testId: detailSubmitted.testId, userId: currentUser._id },
          {
            $set: {
              userId: currentUser._id,
              attemptStatus: "in-progress",
              scores: {
                ...existingSummary.scores,
                ...score,
              },
              overallPercentile,
              maxScores,
              performance,
              timeAnalysis,
              improvement,
            },
          },
          { new: true },
        );
      } else if (detailSubmitted.round === "hr") {
        const hrSummary = await updateHRInterviewSummary(
          detailSubmitted,
          existingSummary,
          currentTest,
        );

        existingSummary = await InterviewSummary.findOneAndUpdate(
          { testId: detailSubmitted.testId, userId: currentUser._id },
          {
            $set: hrSummary,
          },
          { new: true },
        );
      }
    } else {
      // payload
      console.log("Else Block");
      // basically for apti

      score = {
        apti: detailSubmitted.score,
      };

      overallPercentile =
        (score.apti * 100) /
        (currentTest.maxMarks.dsa +
          currentTest.maxMarks.apti +
          currentTest.maxMarks.hr);

      maxScores = {
        apti: currentTest.maxMarks.apti,
      };

      // pending
      performance = {
        apti: {
          totalQuestions: currentTest.ques_bank.apti.length,
          correct: score.apti,
          wrong: currentTest.ques_bank.apti.length - score.apti,
          accuracy:
            currentTest.ques_bank.apti.length > 0
              ? (score.apti / currentTest.ques_bank.apti.length) * 100
              : 0,
        },
      };

      timeAnalysis = {
        totalTimeTaken: detailSubmitted.timeTaken,
        aptiTime: detailSubmitted.timeTaken,
        avgTimePerSection: detailSubmitted.timeTaken / 3,
      };

      scoredifference = overallPercentile;

      improvement = {
        scoreDiff: scoredifference,
        aptiDiff:
          scoredifference == 0
            ? "Constant"
            : scoredifference > 0
              ? "Improving"
              : "Declining",
      };

      const newSummary = await InterviewSummary.create({
        userId: currentUser._id,
        testId: currentTest._id,
        attemptStatus: "in-progress",
        difficulty: currentTest.difficulty,
        scores: score,
        overallPercentile,
        maxScores,
        performance,
        timeAnalysis,
        improvement,
      });

      existingSummary = newSummary;
    }

    console.log("New Summary Created: ", existingSummary);

    res
      .status(200)
      .json({ message: "Progress Updated", data: existingSummary });
  } catch (error) {
    next(error);
  }
};

const updateHRInterviewSummary = async (
  detailSubmitted,
  existingSummary,
  currentTest,
) => {
  try {
    const updatedTest = await AptiTest.findByIdAndUpdate(
      detailSubmitted.testId,
      { $inc: { activeRound: 1 } },
      { new: true },
    );

    // payloads

    let hrScore = (detailSubmitted.score * currentTest.maxMarks.hr) / 100 || 0;

    // tooked out score
    let score = {
      hr: hrScore,
    };

    let overallPercentile =
      ((score.hr +
        (existingSummary.scores?.apti || 0) +
        (existingSummary.scores?.dsa?.score || 0)) *
        100) /
      (currentTest.maxMarks.dsa +
        currentTest.maxMarks.apti +
        currentTest.maxMarks.hr);

    let maxScores = {
      ...existingSummary.maxScores,
      hr: currentTest.maxMarks.hr,
    };

    // pending
    let performance = {
      ...existingSummary.performance,
      hr: {
        totalQuestions: detailSubmitted.totalQues,
        correct: (detailSubmitted.score * detailSubmitted.totalQues) / 100 || 0,
        wrong:
          detailSubmitted.totalQues -
            (detailSubmitted.score * detailSubmitted.totalQues) / 100 || 0,
        accuracy:
          detailSubmitted.totalQues > 0
            ? (hrScore / detailSubmitted.totalQues) * 100
            : 0,
      },
    };
    let timeAnalysis = {
      ...existingSummary.timeAnalysis,
      totalTimeTaken:
        (existingSummary.timeAnalysis?.dsaTime || 0) +
        (existingSummary.timeAnalysis?.aptiTime || 0) +
        detailSubmitted.timeTaken,
      hrTime: detailSubmitted.timeTaken,
      avgTimePerSection:
        (existingSummary.timeAnalysis.dsaTime +
          existingSummary.timeAnalysis.aptiTime +
          detailSubmitted.timeTaken) /
        3,
    };

    let scoredifference =
      overallPercentile - (existingSummary.overallPercentile || 0);

    let improvement = {
      scoreDiff: scoredifference,
      hrDiff:
        scoredifference == 0
          ? "Constant"
          : scoredifference > 0
            ? "Improving"
            : "Declining",
    };

    const hrSummary = {
      userId: existingSummary.userId,
      testId: existingSummary.testId,
      attemptStatus: "completed",
      feedback: detailSubmitted.feedback,
      scores: {
        ...existingSummary.scores,
        ...score,
      },
      attemptCount: existingSummary.attemptCount + 1,

      overallPercentile,
      maxScores,
      timeAnalysis,
      performance,
      improvement,
    };

    return hrSummary;
  } catch (error) {
    throw error;
  }
};

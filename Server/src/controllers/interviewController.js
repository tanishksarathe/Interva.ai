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

    let diff, numberOfAptiQues, numberOfDsaQues;
    if (toughness == "Beginner") {
      diff = "Easy";
      numberOfDsaQues = 1;
      numberOfAptiQues = 15;
    } else if (toughness == "Intermediate") {
      diff = "Medium";
      numberOfDsaQues = 2;
      numberOfAptiQues = 20;
    } else {
      diff = "Hard";
      numberOfDsaQues = 3;
      numberOfAptiQues = 25;
    }

    const analyzedTopics = await topicsAnalyzeWithJD(jobdesc);

    // it is getting {}

    //  analyzedTopics =   {
    //   aptitude_topics: [
    //     'logical_reasoning',
    //     'pattern_recognition',
    //     'problem_solving_ability',
    //     'quantitative_aptitude'
    //   ],
    //   dsa_topics: [
    //     'programming_fundamentals',
    //     'time_and_space_complexity',
    //     'arrays',
    //     'strings',
    //     'mathematics_and_number_theory',
    //     'searching_algorithms',
    //     'sorting_algorithms',
    //     'recursion',
    //     'backtracking',
    //     'data_structures'
    //   ],
    //   skills_required: [
    //     'javascript',
    //     'java',
    //     'python',
    //     'html',
    //     'css',
    //     'react.js',
    //     'angular',
    //     'vue.js',
    //     'rest_apis',
    //     'json',
    //     'git',
    //     'object_oriented_programming',
    //     'databases',
    //     'sdlc',
    //     'node.js',
    //     'express.js',
    //     'spring_boot',
    //     'cloud_platforms',
    //     'docker',
    //     'containerization',
    //     'microservices_architecture',
    //     'ci_cd_pipelines'
    //   ]
    // }

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

    console.log("Apti Ques Set : ",aptitudeQuestionsSet);

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

    console.log("DSA Ques Set : ",dsaQuestionsSet);

    const newTest = await AptiTest.create({});



  } catch (error) {
    next(error);
  }
};

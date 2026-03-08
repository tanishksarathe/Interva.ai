import { topicsAnalyzeWithJD } from "../utils/jobDescriptionParserService.js";

export const mockTestGeneratorEngine = async (req, res, next) => {
  try {
    const { toughness, jobdesc } = req.body;

    if (!toughness || !jobdesc) {
      const error = new Error("All Fields Required");
      error.statusCode = 401;
      return next(error);
    }

    const analyzedTopics = await topicsAnalyzeWithJD(jobdesc);

    // it is getting {}

//     {
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

    


  } catch (error) {
    next(error);
  }
};

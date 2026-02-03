import { ChevronDown, ChevronUp, CirclePlus, Sparkles } from "lucide-react";
import React, { useState } from "react";
import {
  aiMlTopics,
  authAndSecurityTopics,
  cloudComputingTopics,
  computerNetworkingTopics,
  dbmsTopics,
  expressJsTopics,
  fullStackDeveloperSkills,
  gitAndGithubTopics,
  javascriptTopics,
  machineCodingSkills,
  mongoDbTopics,
  nodeJsTopics,
  operatingSystemTopics,
  productBasedPatterns,
  reactTopics,
  reasoningFreeTopics,
  reasoningPremiumTopics,
  serviceBasedTopics,
  sqlInterviewTopics,
  webFundamentals,
} from "../assets/courseArrays";
import TopicPage from "../components/TopicPage";
import {
  analogy,
  binarySearch,
  bloodRelations,
  classificationOddOneOut,
  codingDecoding,
  directionSense,
  logicalPuzzlesEasy,
  orderingRanking,
  seriesAlphabetsNumbers,
  syllogismBasic,
  vennDiagram,
} from "../assets/study";
import { useAuth } from "../config/AuthContext";
import AddTopicModal from "../components/modals/AddTopicModal";

const StudyMaterial = () => {
  const [topic, setTopic] = useState(null);

  const { user } = useAuth();

  const [openAddTopicModal, setOpenAddTopicModal] = useState(false);

  const studyMap = {
    "Binary Search": binarySearch,
    "Coding-Decoding": codingDecoding,
    "Blood Relations": bloodRelations,
    "Direction Sense": directionSense,
    "Series (Number & Alphabet)": seriesAlphabetsNumbers,
    Analogy: analogy,
    "Classification (Odd One Out)": classificationOddOneOut,
    "Ordering & Ranking": orderingRanking,
    "Syllogism (Basic)": syllogismBasic,
    "Venn Diagrams (2-set & 3-set)": vennDiagram,
    "Logical Puzzles (Easy)": logicalPuzzlesEasy,
  };

  const [toggle, setToggle] = useState({
    apti: false,
    dsa: false,
    web: false,
    fundamentals: false,
    communication: false,
  });

  return (
    <>
      <div className="flex flex-col p-5">
        <div className="flex justify-between items-center">
          <div className="flex flex-col justify-center">
            <h1 className="text-3xl font-bold mb-2">Study Material</h1>
            <h6 className="mb-2">
              Here you will going to have proper topic wise study material for
              evrything what yo need
            </h6>
          </div>

          {/* Correction Here */}

          {user.role !== "admin" && (
            <div>
              <button
                onClick={() => setOpenAddTopicModal(true)}
                className="flex gap-2 justify-center shadow-black shadow-2xs items-center border px-3 py-2 rounded-2xl bg-indigo-600 text-white font-semibold"
              >
                <CirclePlus size={20} /> Add Topic
              </button>
            </div>
          )}
        </div>
        <hr />
        <div className="flex h-488 overflow-y-scroll">
          {/* Left Side Bar */}

          <div className="border w-1/4 overflow-y-scroll rounded-2xl mt-10 mr-5">
            <div className="flex justify-center flex-col p-5 text-2xl font-bold">
              <h1 className="flex justify-between text-lg">
                Aptitude & Reasoning{" "}
                <button
                  onClick={() =>
                    setToggle((prev) => ({ ...prev, apti: !prev.apti }))
                  }
                >
                  {toggle.apti ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h1>
              {toggle.apti && (
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default transition-all duration-100 scroll-smooth flex-col">
                  {reasoningFreeTopics.map((item, idx) => (
                    <span
                      key={idx}
                      onClick={() => setTopic(item)}
                      className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Premium Topics */}
            {toggle.apti && (
              <div className="flex justify-center flex-col p-5 text-2xl font-bold">
                <h1 className="flex justify-between text-lg">
                  Aptitude & Reasoning (Premium Tier{" "}
                  <Sparkles size={20} color="indigo" fill="indigo" />)
                </h1>
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default flex-col">
                  {reasoningPremiumTopics.map((item, idx) => (
                    <span
                      key={idx}
                      onClick={() => setTopic(item)}
                      className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <hr />
            <div className="flex justify-center flex-col p-5 text-2xl font-bold">
              <h1 className="flex justify-between text-lg">
                Data Structures & Algorithms (Patterns & Concepts)
                <button
                  onClick={() =>
                    setToggle((prev) => ({ ...prev, dsa: !prev.dsa }))
                  }
                >
                  {toggle.dsa ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h1>

              {toggle.dsa && (
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default flex-col">
                  {serviceBasedTopics.map((item, idx) => (
                    <span
                      key={idx}
                      onClick={() => setTopic(item)}
                      className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              )}
            </div>
            {/* Premium Topics */}
            {toggle.dsa && (
              <div className="flex justify-center flex-col p-5 text-2xl font-bold">
                <h1 className="flex items-center text-lg">
                  Data Structures & Algorithms (Patterns & Concepts Premium Tier{" "}
                  <Sparkles size={20} color="indigo" fill="indigo" />)
                </h1>
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default flex-col">
                  {productBasedPatterns.map((item, idx) => (
                    <span
                      key={idx}
                      onClick={() => setTopic(item)}
                      className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            )}
            <hr />
            <div className="flex justify-center flex-col p-5 text-2xl font-bold">
              <h1 className="flex justify-between text-lg">
                Interview Oriented Theory Syllabus
                <button
                  onClick={() =>
                    setToggle((prev) => ({
                      ...prev,
                      fundamentals: !prev.fundamentals,
                    }))
                  }
                >
                  {toggle.fundamentals ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h1>
              {toggle.fundamentals && (
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default flex-col">
                  {[
                    {
                      topic: "Networking",
                      array: computerNetworkingTopics,
                    },
                    {
                      topic: "Operating Systems",
                      array: operatingSystemTopics,
                    },
                    {
                      topic: "Database Management Systems",
                      array: dbmsTopics,
                    },
                    {
                      topic: "Cloud Computing",
                      array: cloudComputingTopics,
                    },
                    {
                      topic: "Artificial Intelligence & Machine Learning",
                      array: aiMlTopics,
                    },
                  ].map((i, id) => (
                    <div key={id} className="flex flex-col gap-2 my-5">
                      <h2 className="font-semibold text-xl">{i.topic}</h2>
                      {i.array.map((item, idx) => (
                        <span
                          key={idx}
                          onClick={() => setTopic(item)}
                          className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
            <hr />
            <div className="flex justify-center flex-col p-5 text-2xl font-bold">
              <h1 className="flex justify-between text-lg">
                Full Stack Development Syllabus
                <button
                  onClick={() =>
                    setToggle((prev) => ({ ...prev, web: !prev.web }))
                  }
                >
                  {toggle.web ? <ChevronUp /> : <ChevronDown />}
                </button>
              </h1>

              {toggle.web && (
                <div className="w-3/4 m-3 text-black flex gap-2 text-sm cursor-default flex-col">
                  {[
                    {
                      topic: "Full Stack Developer Skills",
                      array: fullStackDeveloperSkills,
                    },
                    {
                      topic: "Web Fundamentals",
                      array: webFundamentals,
                    },
                    {
                      topic: "JavaScript",
                      array: javascriptTopics,
                    },
                    {
                      topic: "Machine Coding Skills",
                      array: machineCodingSkills,
                    },
                    {
                      topic: "Git & Github",
                      array: gitAndGithubTopics,
                    },
                    {
                      topic: "Auth & Security Skills",
                      array: authAndSecurityTopics,
                    },
                    {
                      topic: "React JS",
                      array: reactTopics,
                    },
                    {
                      topic: "Node JS",
                      array: nodeJsTopics,
                    },
                    {
                      topic: "Express JS",
                      array: expressJsTopics,
                    },
                    {
                      topic: "MongoDB",
                      array: mongoDbTopics,
                    },
                    {
                      topic: "SQL",
                      array: sqlInterviewTopics,
                    },
                  ].map((i, id) => (
                    <div key={id} className="flex flex-col gap-2 my-5">
                      <h2 className="font-semibold text-xl">{i.topic}</h2>
                      {i.array.map((item, idx) => (
                        <span
                          key={idx}
                          onClick={() => setTopic(item)}
                          className="rounded-full border px-2 py-1 text-black hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold"
                        >
                          {item}
                        </span>
                      ))}
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>

          {/* Right Side Bar */}
          <div className="w-3/4 h-fit mr-2 ml-2 mt-2">
            <TopicPage content={studyMap[topic]} />
          </div>
        </div>
      </div>
      {openAddTopicModal && (
        <AddTopicModal onClose={() => setOpenAddTopicModal(false)} />
      )}
    </>
  );
};

export default StudyMaterial;

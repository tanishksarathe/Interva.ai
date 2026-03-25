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
  percentages,
  permutationsAndCombinations,
  probability,
  profitAndLoss,
  progressions,
  quadraticEquations,
  ratioAndProportion,
  seriesAlphabetsNumbers,
  syllogismBasic,
  timeAndDistance,
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
    "Permutations and Combinations": permutationsAndCombinations,
    "Probability": probability,
    "Quadratic Equations": quadraticEquations,
    "Progressions (AP, GP, HP)": progressions,
    "Time and Distance": timeAndDistance,
    "Percentages": percentages,
    "Profit and Loss": profitAndLoss,
    "Ratio and Proportion": ratioAndProportion,
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
      <div className="flex flex-col h-screen bg-slate-50 overflow-hidden font-sans antialiased">
        {/* ================= HEADER SECTION ================= */}
        <header className="flex flex-wrap justify-between items-center px-8 py-6 bg-white border-b border-slate-200">
          <div className="space-y-1">
            <h1 className="text-3xl font-extrabold text-slate-900 tracking-tight">
              Study Material
            </h1>
            <p className="text-slate-500 text-sm max-w-md">
              Explore structured learning paths designed to take you from
              fundamentals to advanced concepts.
            </p>
          </div>

          {user.role !== "admin" && (
            <button
              onClick={() => setOpenAddTopicModal(true)}
              className="flex gap-2 items-center px-5 py-2.5 rounded-xl bg-indigo-600 hover:bg-indigo-700 text-white font-bold transition-all shadow-lg shadow-indigo-100 active:scale-95"
            >
              <CirclePlus size={20} />
              <span>Add Topic</span>
            </button>
          )}
        </header>

        {/* ================= MAIN CONTENT LAYOUT ================= */}
        <main className="flex flex-1 overflow-hidden">
          {/* LEFT SIDEBAR: Navigation Selector */}
          <aside className="w-1/4 min-w-[320px] bg-white border-r border-slate-200 overflow-y-auto custom-scrollbar p-6 space-y-4">
            {/* 1. APTITUDE & REASONING SECTION */}
            <section className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden">
              <button
                onClick={() =>
                  setToggle((prev) => ({ ...prev, apti: !prev.apti }))
                }
                className="flex w-full justify-between items-center p-4 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                  Aptitude & Reasoning
                </span>
                <div
                  className={`transition-transform duration-300 ${toggle.apti ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} className="text-slate-400" />
                </div>
              </button>

              {toggle.apti && (
                <div className="px-4 pb-4 space-y-6">
                  {/* Free Topics */}
                  <div className="flex flex-wrap gap-2">
                    {reasoningFreeTopics.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTopic(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          topic === item
                            ? "bg-indigo-600 border-indigo-600 text-white shadow-md shadow-indigo-100"
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-400"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  {/* Premium Tier */}
                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">
                        Premium Tier
                      </span>
                      <Sparkles
                        size={14}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {reasoningPremiumTopics.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setTopic(item)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            topic === item
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : "bg-indigo-50/50 border-indigo-100 text-indigo-700 hover:bg-indigo-100"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 2. DSA SECTION */}
            <section className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden">
              <button
                onClick={() =>
                  setToggle((prev) => ({ ...prev, dsa: !prev.dsa }))
                }
                className="flex w-full justify-between items-center p-4 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-800 text-sm uppercase tracking-wider text-left">
                  DSA Patterns & Concepts
                </span>
                <div
                  className={`transition-transform duration-300 ${toggle.dsa ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} className="text-slate-400" />
                </div>
              </button>

              {toggle.dsa && (
                <div className="px-4 pb-4 space-y-4">
                  <div className="flex flex-wrap gap-2">
                    {serviceBasedTopics.map((item, idx) => (
                      <button
                        key={idx}
                        onClick={() => setTopic(item)}
                        className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                          topic === item
                            ? "bg-indigo-600 border-indigo-600 text-white"
                            : "bg-white border-slate-200 text-slate-600 hover:border-indigo-400"
                        }`}
                      >
                        {item}
                      </button>
                    ))}
                  </div>

                  <div className="pt-4 border-t border-slate-100">
                    <div className="flex items-center gap-2 mb-3">
                      <span className="text-[10px] font-black uppercase text-indigo-500 tracking-widest">
                        Product Based Patterns
                      </span>
                      <Sparkles
                        size={14}
                        className="text-indigo-500"
                        fill="currentColor"
                      />
                    </div>
                    <div className="flex flex-wrap gap-2">
                      {productBasedPatterns.map((item, idx) => (
                        <button
                          key={idx}
                          onClick={() => setTopic(item)}
                          className={`px-3 py-1.5 rounded-lg text-xs font-semibold border transition-all ${
                            topic === item
                              ? "bg-indigo-600 border-indigo-600 text-white"
                              : "bg-indigo-50/50 border-indigo-100 text-indigo-700 hover:bg-indigo-100"
                          }`}
                        >
                          {item}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              )}
            </section>

            {/* 3. INTERVIEW THEORY SECTION */}
            <section className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden">
              <button
                onClick={() =>
                  setToggle((prev) => ({
                    ...prev,
                    fundamentals: !prev.fundamentals,
                  }))
                }
                className="flex w-full justify-between items-center p-4 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                  Interview Theory
                </span>
                <div
                  className={`transition-transform duration-300 ${toggle.fundamentals ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} className="text-slate-400" />
                </div>
              </button>

              {toggle.fundamentals && (
                <div className="px-4 pb-4">
                  {[
                    { topic: "Networking", array: computerNetworkingTopics },
                    {
                      topic: "Operating Systems",
                      array: operatingSystemTopics,
                    },
                    { topic: "DBMS", array: dbmsTopics },
                    { topic: "Cloud Computing", array: cloudComputingTopics },
                    { topic: "AI & ML", array: aiMlTopics },
                  ].map((group, id) => (
                    <div key={id} className="mb-6 last:mb-0">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                        {group.topic}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.array.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setTopic(item)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold border transition-all ${
                              topic === item
                                ? "bg-indigo-600 border-indigo-600 text-white"
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>

            {/* 4. FULL STACK SECTION */}
            <section className="rounded-2xl border border-slate-100 bg-slate-50/50 overflow-hidden">
              <button
                onClick={() =>
                  setToggle((prev) => ({ ...prev, web: !prev.web }))
                }
                className="flex w-full justify-between items-center p-4 hover:bg-slate-100 transition-colors"
              >
                <span className="font-bold text-slate-800 text-sm uppercase tracking-wider">
                  Full Stack Development
                </span>
                <div
                  className={`transition-transform duration-300 ${toggle.web ? "rotate-180" : ""}`}
                >
                  <ChevronDown size={18} className="text-slate-400" />
                </div>
              </button>

              {toggle.web && (
                <div className="px-4 pb-4">
                  {[
                    { topic: "Skills", array: fullStackDeveloperSkills },
                    { topic: "Web Core", array: webFundamentals },
                    { topic: "JavaScript", array: javascriptTopics },
                    { topic: "Frontend", array: reactTopics },
                    { topic: "Backend", array: nodeJsTopics },
                  ].map((group, id) => (
                    <div key={id} className="mb-6 last:mb-0">
                      <h4 className="text-[11px] font-bold text-slate-400 uppercase tracking-widest mb-2 border-b border-slate-100 pb-1">
                        {group.topic}
                      </h4>
                      <div className="flex flex-wrap gap-2">
                        {group.array.map((item, idx) => (
                          <button
                            key={idx}
                            onClick={() => setTopic(item)}
                            className={`px-2.5 py-1 rounded-md text-[11px] font-bold border transition-all ${
                              topic === item
                                ? "bg-indigo-600 border-indigo-600 text-white"
                                : "bg-white border-slate-200 text-slate-500 hover:bg-slate-50"
                            }`}
                          >
                            {item}
                          </button>
                        ))}
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </section>
          </aside>

          {/* RIGHT SIDEBAR: Main Content Area */}
          <article className="flex-1 bg-white overflow-y-auto p-4 md:p-8 lg:p-12">
            <div className="max-w-4xl mx-auto">
              {/* The current topic page renders here */}
              <TopicPage content={studyMap[topic]} />
            </div>
          </article>
        </main>
      </div>
      {openAddTopicModal && (
        <AddTopicModal onClose={() => setOpenAddTopicModal(false)} />
      )}
    </>
  );
};

export default StudyMaterial;



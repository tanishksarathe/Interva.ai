import React, { useEffect, useState } from "react";
import {
  Brain,
  Shuffle,
  Compass,
  ArrowUpDown,
  Layers,
  Network,
  ListOrdered,
  GitCompare,
  Shapes,
  Puzzle,
  TimerIcon,
} from "lucide-react";
import api from "../config/API";
import toast from "react-hot-toast";

const topics = [
  { name: "Coding-Decoding", icon: Shuffle },
  { name: "Blood Relations", icon: Network },
  { name: "Direction Sense", icon: Compass },
  { name: "Series (Number & Alphabet)", icon: ArrowUpDown },
  { name: "Analogy", icon: GitCompare },
  { name: "Classification (Odd One Out)", icon: Layers },
  { name: "Ordering & Ranking", icon: ListOrdered },
  { name: "Syllogism (Basic)", icon: Brain },
  { name: "Venn Diagrams (2-set & 3-set)", icon: Shapes },
  { name: "Logical Puzzles (Easy)", icon: Puzzle },
];

const Aptitude = () => {
  const [selectedTopic, setSelectedTopic] = useState([]);

  const [practo, setPracto] = useState([]);

  const [page, setPage] = useState(0);

  const fetchPracticeTopic = async () => {
    try {
      const encoded = encodeURIComponent(selectedTopic);

      console.log("Encoded", encoded);

      const res = await api.get(`/user/get-practice-topic/${encoded}`);

      console.log(res?.data?.data);

      setPracto(res?.data?.data);
    } catch (error) {
      console.log(error);
      // toast.error(error?.response?.data?.message);
    }
  };

  useEffect(() => {
    fetchPracticeTopic();
  }, [selectedTopic]);

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] rounded-2xl px-10 py-12 text-slate-100">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-300">
            Aptitude & Reasoning
          </h1>
          <p className="mt-2 text-slate-400">
            Select a topic to begin your practice
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topics.map(({ name, icon: Icon }) => {
            const isActive = selectedTopic === name;

            return (
              <div
                key={name}
                onClick={() => setSelectedTopic(name)}
                className={`cursor-pointer rounded-2xl border p-6 backdrop-blur-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-linear-to-br from-indigo-500 to-indigo-600 text-white border-indigo-400 shadow-xl shadow-indigo-500/30 scale-[1.03]"
                    : "bg-slate-800/50 border-white/10 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10"
                }`}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <Icon
                    size={32}
                    className={isActive ? "text-white" : "text-indigo-300"}
                  />
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Topic */}
        {selectedTopic && (
          <div className="mt-12 text-center text-slate-400">
            Selected Topic:&nbsp;
            <span className="font-semibold text-indigo-300">
              {selectedTopic}
            </span>
          </div>
        )}
      </div>

      <div className="my-10">
        <hr />
      </div>

      {practo.length > 0 && (
        <div>
          <div
            className="min-h-screen py-10 px-4"
            style={{ backgroundColor: "var(--color-background)" }}
          >
            <div className="max-w-5xl mx-auto space-y-10">
              <div
                className="rounded-3xl shadow-lg overflow-hidden border"
                style={{
                  backgroundColor: "var(--color-surface)",
                  borderColor: "var(--color-accent-soft)",
                }}
              >
                {/* TOP HEADER SECTION - Flex Layout */}
                <div className="p-6 md:p-8 flex justify-between items-center border-b border-dashed border-gray-200">
                  <div className="space-y-1">
                    <h1
                      className="text-3xl font-extrabold tracking-tight"
                      style={{ color: "var(--color-text-primary)" }}
                    >
                      {practo[page]?.topic}
                    </h1>
                    <p
                      className="text-sm font-medium uppercase tracking-wider opacity-70"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      {practo[page]?.subject}
                    </p>
                  </div>

                  <div className="flex flex-col items-end gap-2">
                    <span
                      className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-widest ${
                        practo[page]?.difficulty?.toLowerCase() === "easy"
                          ? "bg-green-100 text-green-700 border border-green-200"
                          : practo[page]?.difficulty?.toLowerCase() === "medium"
                            ? "bg-yellow-100 text-yellow-700 border border-yellow-200"
                            : "bg-orange-100 text-orange-700"
                      }`}
                    >
                      {practo[page]?.difficulty}
                    </span>
                    <div
                      className="flex items-center justify-center gap-1 text-sm font-mono"
                      style={{ color: "var(--color-text-secondary)" }}
                    >
                      <span className="flex justify-center items-center">
                        <TimerIcon size={20} /> {practo[page]?.estimatedTime}
                        s{" "}
                      </span>
                    </div>
                  </div>
                </div>

                {/* MAIN CONTENT - Grid Layout */}
                <div className="grid grid-cols-1 md:grid-cols-3 divide-y md:divide-y-0 md:divide-x divide-gray-100">
                  {/* Left Column: Question & Concepts */}
                  <div className="p-6 md:p-8 md:col-span-2 space-y-8">
                    <section>
                      <div className="flex items-center gap-2 mb-4">
                        <div className="w-1 h-6 bg-blue-500 rounded-full"></div>
                        <h2
                          className="text-xl font-bold"
                          style={{ color: "var(--color-primary)" }}
                        >
                          Problem Description
                        </h2>
                      </div>
                      <p
                        className="text-lg leading-relaxed opacity-90"
                        style={{ color: "var(--color-text-primary)" }}
                      >
                        {practo[page]?.description}
                      </p>
                    </section>

                    <section>
                      <h3 className="text-sm font-semibold mb-3 uppercase opacity-50">
                        Key Concepts
                      </h3>
                      <div className="flex flex-wrap gap-2">
                        {practo[page]?.keyconcepts.map((concept, idx) => (
                          <span
                            key={idx}
                            className="text-xs px-3 py-1.5 rounded-lg border font-medium capitalize"
                            style={{
                              backgroundColor: "var(--color-background)",
                              borderColor: "var(--color-accent-soft)",
                              color: "var(--color-text-primary)",
                            }}
                          >
                            # {concept}
                          </span>
                        ))}
                      </div>
                    </section>
                  </div>

                  {/* Right Column: Approach & Hints (Sidebar style) */}
                  <div className="p-6 md:p-8 bg-gray-50/50 space-y-8">
                    <section>
                      <h2
                        className="text-lg font-bold mb-3 flex items-center gap-2"
                        style={{ color: "var(--color-primary)" }}
                      >
                        💡 Strategy
                      </h2>
                      <p
                        className="text-sm leading-6"
                        style={{ color: "var(--color-text-secondary)" }}
                      >
                        {practo[page]?.approach}
                      </p>
                    </section>

                    <section className="p-4 rounded-xl bg-yellow-50 border border-yellow-100">
                      <h2 className="text-sm font-bold mb-2 text-yellow-800 uppercase">
                        Pro Hint
                      </h2>
                      <div className="text-sm text-yellow-700 italic">
                        "{practo[page]?.hint}"
                      </div>
                    </section>
                  </div>
                </div>

                {/* SOLUTION SECTION - Full Width Pre */}
                <div
                  className="p-6 md:p-8 border-t"
                  style={{ backgroundColor: "var(--color-background)" }}
                >
                  <div className="flex items-center gap-2 mb-4">
                    <h2
                      className="text-xl font-bold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Reference Solution
                    </h2>
                  </div>
                  <p
                    className="text-sm flex flex-col p-6 rounded-2xl overflow-x-auto leading-relaxed shadow-inner w-full"
                    style={{
                      backgroundColor: "var(--color-surface)",
                      color: "var(--color-text-primary)",
                      border: "1px solid var(--color-accent-soft)",
                    }}
                  >
                    {practo[page]?.solution?.map((i, idx) => (
                      <p key={idx} className="flex gap-2">
                        {" "}
                        <span className="font-bold">Step:{idx + 1}</span>{" "}
                        <span className="font-semibold">{i}</span>
                      </p>
                    ))}
                  </p>

                  <div className="flex items-center gap-2 mb-4">
                    <h2
                      className="text-md font-semibold"
                      style={{ color: "var(--color-primary)" }}
                    >
                      Rule/Formula Used : {practo[page]?.rule}
                    </h2>
                  </div>
                  <hr />

                  <div className="flex items-center gap-2 mb-4 mt-5">
                    <h2 className="text-md font-semibold text-green-700">
                      Final Answer : {practo[page]?.finalAnswer}
                    </h2>
                  </div>
                </div>
              </div>
              <div className="flex justify-between items-center">
                <button
                  onClick={() => {
                    if (page > 0) {
                      setPage(page - 1);
                    }
                  }}
                  className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_5px_5px_#000] active:translate-y-1.25 active:shadow-none transition-all"
                >
                  Previous
                </button>
                <button
                  onClick={() => {
                    if (page < practo.length - 1) {
                      setPage(page + 1);
                    }
                  }}
                  className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_5px_5px_#000] active:translate-y-1.25 active:shadow-none transition-all"
                >
                  Next
                </button>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Aptitude;

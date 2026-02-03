import React, { useState } from "react";
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
} from "lucide-react";

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

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] px-10 py-12 text-slate-100">
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
    </>
  );
};

export default Aptitude;

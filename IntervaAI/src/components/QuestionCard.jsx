import { Flag, ChevronLeft, ChevronRight, Check } from "lucide-react";

const QuestionCard = () => {
  return (
    <div className="w-full min-h-screen flex items-center justify-center p-8">
      {/* Main Card */}
      <div className="w-full max-w-4xl rounded-3xl backdrop-blur-xl shadow-2xl overflow-hidden">
        {/* Header */}
        <div className="flex items-center justify-between px-8 py-2 bg-white/60 border-b border-white/40">
          <div>
            <p className="text-sm text-slate-500">Question 4 of 15</p>

            {/* Progress Dots */}
            <div className="flex gap-2 mt-2">
              {[...Array(15)].map((_, i) => (
                <span
                  key={i}
                  className={`w-3 h-3 rounded-full ${
                    i < 8 ? "bg-indigo-700" : "bg-indigo-200"
                  }`}
                />
              ))}
            </div>
          </div>

          {/* Circular Timer */}
          <div className="relative w-20 h-20">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="#C7D2FE"
                strokeWidth="6"
                fill="none"
              />
              <circle
                cx="40"
                cy="40"
                r="36"
                stroke="url(#timerGradient)"
                strokeWidth="6"
                strokeDasharray="230"
                strokeDashoffset="60"
                strokeLinecap="round"
                fill="none"
              />
              <defs>
                <linearGradient id="timerGradient">
                  <stop offset="0%" stopColor="#9C27B0" />
                  <stop offset="100%" stopColor="#3F51B4" />
                </linearGradient>
              </defs>
            </svg>

            <div className="absolute inset-0 flex items-center justify-center font-semibold text-slate-700">
              27:42
            </div>
          </div>
        </div>

        {/* Question Body */}
        <div className="px-8 py-10">
          <h2 className="text-xl font-semibold text-slate-800 mb-2">
            What is the next number in the sequence?
          </h2>
          <p className="text-lg text-slate-600 mb-6">2, 6, 12, 20, ?</p>

          {/* Options */}
          <div className="grid grid-cols-2 gap-4">
            {/* Selected Option */}
            <Option label="A" text="30" selected />

            <Option label="B" text="28" />
            <Option label="C" text="26" />
            <Option label="D" text="32" />
          </div>

          <div className="flex mt-10 items-center justify-between px-8 py-6 border-t border-black/40">
            {/* Flag */}
            <button className="flex items-center gap-2 px-4 py-2 rounded-xl bg-purple-100 text-purple-700 hover:bg-purple-200 transition">
              <Flag size={18} />
              Flag for Review
            </button>

            {/* Navigation */}
            <div className="flex gap-4">
              <button className="flex items-center gap-2 px-5 py-2 rounded-xl bg-slate-200 text-slate-600 hover:bg-slate-300 transition">
                <ChevronLeft size={18} />
                Previous
              </button>

              <button className="flex items-center gap-2 px-6 py-2 rounded-xl bg-linear-to-tr from-purple-500 to-indigo-500 text-white shadow-lg hover:opacity-90 transition">
                Next
                <ChevronRight size={18} />
              </button>
            </div>
          </div>
        </div>

        {/* Footer Controls */}
      </div>
    </div>
  );
};

/* ---------------- Option Component ---------------- */

const Option = ({ label, text, selected }) => {
  return (
    <div
      className={`flex items-center justify-between px-5 py-4 rounded-2xl border transition cursor-pointer
        ${
          selected
            ? "bg-linear-to-tr from-purple-500 to-indigo-500 text-white"
            : "bg-white/70 border-slate-200 hover:border-purple-300"
        }
      `}
    >
      <div className="flex items-center gap-4">
        <span className={selected ? `text-white` : `text-slate-700`}>
          {label}
        </span>
        <span className={selected ? `text-white` : `text-slate-700`}>
          {text}
        </span>
      </div>

      {selected && (
        <div className="w-7 h-7 rounded-full bg-green-500 flex items-center justify-center">
          <Check size={16} className="text-white" />
        </div>
      )}
    </div>
  );
};

export default QuestionCard;

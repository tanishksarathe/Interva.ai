import React from "react";
import { BookOpen, Hash, AlignLeft, Tag, Building2, Code2 } from "lucide-react";

const ProblemCard = ({ questions, count }) => {
  // Current question nikalna based on count prop
  const q = questions[count];

  if (!q)
    return <div className="text-slate-500 italic">No problem found...</div>;

  return (
    <div className="w-full overflow-y-auto bg-[#0f172a] text-slate-300 rounded-2xl border border-slate-800/60 shadow-xl font-sans transition-all duration-500 scrollbar-hide">
      {/* ===== Header Section - Slimmer (p-4 instead of p-6) ===== */}
      <div className="bg-gradient-to-r from-indigo-500/5 to-transparent p-4 border-b border-slate-800/50">
        <div className="flex flex-col gap-3">
          <div className="flex items-center justify-between w-full">
            <div className="flex items-center gap-2.5">
              <div className="p-2 bg-indigo-500/15 rounded-lg border border-indigo-500/20">
                <Code2 className="w-4 h-4 text-indigo-400" />
              </div>
              <div className="flex flex-col">
                <span className="text-[9px] font-black text-indigo-500/80 uppercase tracking-[0.15em] mb-0.5">
                  Problem #{count + 1}
                </span>
                <h2 className="text-lg font-bold text-white tracking-tight leading-tight">
                  {q.title}
                </h2>
              </div>
            </div>

            {/* Compact Difficulty Badge */}
            <span
              className={`text-[9px] px-2 py-0.5 rounded-md font-bold uppercase border ${
                q.difficulty === "Easy"
                  ? "bg-emerald-500/10 text-emerald-500 border-emerald-500/20"
                  : q.difficulty === "Medium"
                    ? "bg-amber-500/10 text-amber-300 border-amber-500/20"
                    : "bg-red-500/10 text-red-500 border-red-500/20"
              }`}
            >
              {q.difficulty}
            </span>
          </div>

          {/* Topic Badge - Smaller */}
          <div className="flex items-center gap-1.5 w-fit bg-slate-800/40 px-2.5 py-1 rounded-md border border-slate-700/50">
            <Tag size={10} className="text-slate-500" />
            <span className="text-[10px] font-bold text-slate-400 capitalize">
              {q.topic.replace(/_/g, " ")}
            </span>
          </div>
        </div>
      </div>

      {/* ===== Main Content - Denser Spacing (p-5 and space-y-6) ===== */}
      <div className="p-5 space-y-6">
        {/* Problem Description - Compact Font */}
        <section className="space-y-2">
          <div className="flex items-center gap-2 text-slate-500 uppercase text-[9px] font-black tracking-widest">
            <AlignLeft size={12} />
            <span>Description</span>
          </div>
          <p className="text-[13px] text-slate-400 leading-relaxed font-medium">
            {q.question}
          </p>
        </section>

        {/* Companies - Minimal Tags */}
        {q.companies && (
          <section className="space-y-2">
            <div className="flex items-center gap-2 text-slate-500 uppercase text-[9px] font-black tracking-widest">
              <Building2 size={12} />
              <span>Featured In</span>
            </div>
            <div className="flex flex-wrap gap-1.5">
              {q.companies.map((company, i) => (
                <span
                  key={i}
                  className="text-[9px] bg-slate-800/60 text-slate-500 px-2 py-0.5 rounded border border-slate-700/50 font-bold hover:text-slate-300 transition-colors"
                >
                  {company}
                </span>
              ))}
            </div>
          </section>
        )}

        {/* Example Section - Grid balance for 75% scale */}
        <section className="space-y-3">
          <div className="flex items-center gap-2 text-slate-500 uppercase text-[9px] font-black tracking-widest">
            <Hash size={12} />
            <span>Example 1</span>
          </div>

          <div className="grid grid-cols-1 gap-2.5">
            <div className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl space-y-1.5">
              <p className="text-[8px] text-indigo-400/70 font-black uppercase tracking-tighter">
                Input
              </p>
              <code className="text-[11px] font-mono text-slate-300 block break-all bg-slate-950/50 p-1.5 rounded-md">
                {typeof q.testCases[0].input === "object"
                  ? JSON.stringify(q.testCases[0].input)
                  : q.testCases[0].input}
              </code>
            </div>

            <div className="bg-slate-900/40 border border-slate-800/60 p-3 rounded-xl space-y-1.5">
              <p className="text-[8px] text-emerald-400/70 font-black uppercase tracking-tighter">
                Expected Output
              </p>
              <code className="text-[11px] font-mono text-emerald-400/80 block break-all bg-slate-950/50 p-1.5 rounded-md">
                {Array.isArray(q.testCases[0].ex_output)
                  ? `[${q.testCases[0].ex_output.join(", ")}]`
                  : q.testCases[0].ex_output}
              </code>
            </div>
          </div>
        </section>

        {/* Constraints - More Compact List */}
        <section className="bg-slate-900/20 border border-slate-800/40 p-4 rounded-xl">
          <h4 className="text-[9px] text-slate-500 font-black uppercase tracking-widest mb-3">
            Constraints
          </h4>
          <ul className="space-y-1.5">
            {q.constraints.map((item, i) => (
              <li
                key={i}
                className="flex items-start gap-2 text-[11px] text-slate-500"
              >
                <span className="mt-1 w-1 h-1 rounded-full bg-indigo-500/30 flex-shrink-0" />
                <span className="leading-tight">{item}</span>
              </li>
            ))}
          </ul>
        </section>
      </div>
    </div>
  );
};

export default ProblemCard;

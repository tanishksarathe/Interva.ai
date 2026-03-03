import React, { useState } from "react";
import { BookOpen, Hash, AlignLeft } from "lucide-react";

const ProblemCard = ({ title, statement, input, output, difficulty, constraints, sequenceExample }) => {
  const [count, setCount] = useState(0);

  return (
    <div className="w-full max-w-3xl mx-auto bg-[#0f172a] text-slate-200 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      {/* Header */}
      <div className="bg-linear-to-r from-indigo-500/10 to-transparent p-6 border-b border-slate-800">
        <div className="flex items-center gap-3">
          <div className="p-2 bg-indigo-500/20 rounded-lg">
            <BookOpen className="w-5 h-5 text-indigo-400" />
          </div>
          <div className="flex justify-between items-center w-full">
            <p className="text-xs text-indigo-400 uppercase font-bold tracking-widest">
              Problem Statement
            </p>
            <h2 className={`text-2xl font-extrabold ${difficulty === "Easy" ? "text-green-500" : difficulty === "Medium" ? "text-amber-300" : "text-red-500"}`}>
              {difficulty}
            </h2>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-6">
        {/* Problem Statement */}
        <div>
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2 flex items-center gap-2">
              <AlignLeft size={14} />
              {title}
            </h3>
            <p className="text-sm text-slate-300 leading-relaxed">
              {statement[0]}{" "}
            </p>
            <p className="text-sm text-slate-400 mt-3">
              {statement[1]}{" "}
            </p>
          </section>

          {/* Example Section */}
          <section className="my-5 bg-slate-800/30 border border-slate-800 p-4 rounded-2xl">
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-3 flex items-center gap-2">
              <Hash size={14} />
              Sequence Example
            </h3>
            <code className="text-indigo-300 font-mono text-sm">
              {sequenceExample}
            </code>
          </section>

          {/* Constraints */}
          <section>
            <h3 className="text-sm font-bold text-slate-400 uppercase tracking-widest mb-2">
              Constraints
            </h3>
            <ul className="text-sm text-slate-400 list-disc pl-5 space-y-1">
              {constraints.map((item, i) => (
                <li key={i}>{item}</li>
              ))}
            </ul>
          </section>

          {/* Input / Output */}
          <section className="grid grid-cols-1 md:grid-cols-2 gap-4 my-5">
            <div className="bg-slate-800/30 border border-slate-800 p-4 rounded-2xl">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                Input
              </p>
              <code className="text-indigo-300 text-sm">{input}</code>
            </div>

            <div className="bg-slate-800/30 border border-slate-800 p-4 rounded-2xl">
              <p className="text-xs text-slate-500 uppercase font-bold mb-1">
                Output
              </p>
              <code className="text-emerald-300 text-sm">{output}</code>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
};

export default ProblemCard;

// import { CheckCircle, Tag, Lock, Lightbulb } from "lucide-react";

// const ProblemCard = (props) => {
//   return (
//     <div className="max-w-4xl bg-neutral-900 text-gray-200 rounded-2xl p-6 border border-neutral-800">
//       {/* ===== Header ===== */}
//       <div className="flex items-start justify-between">
//         <div>
//           <h2 className="text-xl font-semibold">
//             {props.no}. {props.mini}
//           </h2>

//           <div className="flex gap-2 mt-3 flex-wrap">
//             <span
//               className={`px-3 py-1 rounded-full ${
//                 props.difficulty == "Medium"
//                   ? `text-yellow-400 bg-yellow-500/10`
//                   : props.difficulty == "Easy"
//                   ? `text-green-400 bg-green-500/10`
//                   : `text-red-600 bg-red-500/10`
//               } text-sm`}
//             >
//               {props.difficulty}
//             </span>

//             <span className="px-3 py-1 rounded-full bg-neutral-800 flex items-center gap-2 text-sm">
//               <Tag size={14} /> Topic
//             </span>

//             {/* <span className="px-3 py-1 rounded-full bg-neutral-800 flex items-center gap-2 text-sm">
//               <Lightbulb size={14} /> Hint
//             </span> */}
//           </div>
//         </div>

//         {/* <div className="flex items-center gap-2 text-green-400 text-sm">
//           <CheckCircle size={18} />
//           Solved
//         </div> */}
//       </div>

//       {/* ===== Problem Statement ===== */}
//       <div className="mt-6 text-gray-300 leading-relaxed">{props.question}</div>

//       {/* ===== Examples ===== */}
//       <div className="mt-8 space-y-6">
//         {[
//           {
//             input: "s = [b,a,b,a,d]",
//             output: '"bab"',
//             explanation: "bab is the longest string",
//           },
//           {
//             input: "s = [b,a,b,a,d]",
//             output: '"bab"',
//             explanation: "bab is the longest string",
//           },
//         ].map((item, idx) => (
//           <div key={idx} className="border-l-2 border-neutral-700 pl-4 leading-5">
//             <h4 className="font-medium mb-2">Example 1:</h4>

//             <p className="text-sm text-gray-300">
//               <strong>Input:</strong>{" "}
//               <span className="bg-neutral-800 px-2 py-0.5 rounded">
//                 {item.input}
//               </span>
//             </p>

//             <p className="text-sm text-gray-300 mt-1">
//               <strong>Output:</strong>{" "}
//               <span className="bg-neutral-800 px-2 py-0.5 rounded">
//                 {item.output}
//               </span>
//             </p>

//             <p className="text-sm text-gray-400 mt-1">
//               <strong>Explanation:</strong>
//               {item.explanation}.
//             </p>

//           </div>
//         ))}
//       </div>
//       {/* ===== Constraints ===== */}
//             <div className="mt-8">
//               <h4 className="font-medium mb-3">Constraints:</h4>

//               <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
//                 <li>{props.constraints}</li>
//               </ul>
//             </div>

//     </div>
//   );
// };

// export default ProblemCard;

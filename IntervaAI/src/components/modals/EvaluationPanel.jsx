import React from "react";
import { 
  CheckCircle2, 
  XCircle, 
  Zap, 
  Layers, 
  Activity, 
  AlertCircle, 
  Lightbulb,
  FileText
} from "lucide-react";

const QualityMetric = ({ label, value }) => {
  // Map descriptive quality to a percentage for the progress bar
  const getWidth = (val) => {
    const map = { High: "100%", Good: "75%", Medium: "50%", Low: "25%" };
    return map[val] || "50%";
  };

  return (
    <div className="space-y-1">
      <div className="flex justify-between text-xs font-medium text-gray-400 uppercase tracking-wider">
        <span>{label}</span>
        <span className="text-gray-200">{value}</span>
      </div>
      <div className="h-1.5 w-full bg-gray-800 rounded-full overflow-hidden">
        <div 
          className="h-full bg-indigo-500 rounded-full transition-all duration-500" 
          style={{ width: getWidth(value) }}
        />
      </div>
    </div>
  );
};

const EvaluationPanel = ({ codeout }) => {
  if (!codeout) return null;

  const isSuccess = codeout.isCorrect;
  const accentColor = isSuccess ? "text-emerald-400" : "text-rose-400";
  const bgColor = isSuccess ? "from-emerald-500/10" : "from-rose-500/10";

  return (
    <div className="w-full max-w-4xl mx-auto bg-[#0f172a] text-slate-200 rounded-3xl border border-slate-800 shadow-2xl overflow-hidden font-sans">
      
      {/* Top Banner / Header */}
      <div className={`bg-linear-to-r ${bgColor} to-transparent p-8 border-b border-slate-800`}>
        <div className="flex flex-col md:flex-row md:items-center justify-between gap-6">
          <div>
            <div className="flex items-center gap-2 mb-2">
              <div className="p-2 bg-indigo-500/20 rounded-lg">
                <Activity className="w-5 h-5 text-indigo-400" />
              </div>
              <h2 className="text-sm font-bold uppercase tracking-widest text-indigo-400">Analysis Report</h2>
            </div>
            <h1 className="text-3xl font-extrabold text-white">AI Code Evaluation</h1>
          </div>

          <div className="flex items-center gap-6">
            <div className="text-right">
              <p className="text-xs text-slate-500 uppercase font-bold tracking-tighter">Overall Score</p>
              <p className="text-4xl font-black text-white">
                {codeout.score}<span className="text-slate-600 text-xl">/10</span>
              </p>
            </div>
            <div className={`flex items-center gap-2 px-4 py-2 rounded-full border ${isSuccess ? 'border-emerald-500/30 bg-emerald-500/10' : 'border-rose-500/30 bg-rose-500/10'} ${accentColor}`}>
              {isSuccess ? <CheckCircle2 size={20} /> : <XCircle size={20} />}
              <span className="font-bold tracking-wide">{isSuccess ? "PASSED" : "FAILED"}</span>
            </div>
          </div>
        </div>
      </div>

      <div className="p-8 grid grid-cols-1 md:grid-cols-3 gap-8">
        
        {/* Left Column: Complexity & Quality */}
        <div className="md:col-span-1 space-y-8">
          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4 flex items-center gap-2">
              <Layers size={14} /> Efficiency
            </h3>
            <div className="space-y-3">
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Time Complexity</p>
                <code className="text-indigo-300 font-mono text-sm">{codeout.timeComplexity}</code>
              </div>
              <div className="bg-slate-800/40 p-3 rounded-xl border border-slate-700/50">
                <p className="text-[10px] text-slate-500 uppercase font-bold">Space Complexity</p>
                <code className="text-purple-300 font-mono text-sm">{codeout.spaceComplexity}</code>
              </div>
            </div>
          </section>

          <section>
            <h3 className="text-xs font-bold text-slate-500 uppercase tracking-widest mb-4">Code Quality</h3>
            <div className="space-y-4">
              <QualityMetric label="Readability" value={codeout.codeQuality.readability} />
              <QualityMetric label="Naming" value={codeout.codeQuality.naming} />
              <QualityMetric label="Structure" value={codeout.codeQuality.structure} />
            </div>
          </section>
        </div>

        {/* Right Column: Feedback & Issues */}
        <div className="md:col-span-2 space-y-6">
          
          {/* Summary Box */}
          <div className="bg-indigo-500/5 border border-indigo-500/20 p-5 rounded-2xl relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-20 transition-opacity">
               <FileText size={80} />
            </div>
            <h3 className="text-white font-bold mb-2 flex items-center gap-2">
              <Zap size={18} className="text-yellow-400" /> Summary
            </h3>
            <p className="text-slate-400 text-sm leading-relaxed relative z-10">
              {codeout.summary}
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            {/* Issues */}
            <div className="bg-slate-800/30 border border-slate-800 p-5 rounded-2xl">
              <h3 className="text-rose-400 font-bold text-sm mb-3 flex items-center gap-2">
                <AlertCircle size={16} /> Issues
              </h3>
              <ul className="space-y-2">
                {codeout.issues.map((issue, i) => (
                  <li key={i} className="text-xs text-slate-400 flex gap-2">
                    <span className="text-rose-500/50">•</span> {issue}
                  </li>
                ))}
              </ul>
            </div>

            {/* Optimizations */}
            <div className="bg-slate-800/30 border border-slate-800 p-5 rounded-2xl">
              <h3 className="text-emerald-400 font-bold text-sm mb-3 flex items-center gap-2">
                <Lightbulb size={16} /> Optimizations
              </h3>
              <ul className="space-y-2">
                {codeout.optimizations.map((opt, i) => (
                  <li key={i} className="text-xs text-slate-400 flex gap-2">
                    <span className="text-emerald-500/50">•</span> {opt}
                  </li>
                ))}
              </ul>
            </div>
          </div>

        </div>
      </div>
    </div>
  );
};

export default EvaluationPanel;

















// import React from "react";

// const EvaluationPanel = ({ codeout }) => {
//   if (!codeout) return null;

//   const statusColor = codeout.isCorrect
//     ? "text-green-500"
//     : "text-red-500";

//   return (
//     <div className="bg-[#111827] text-white p-6 rounded-2xl shadow-lg w-full max-w-3xl mx-auto space-y-6">
//       {/* Header */}
//       <div className="flex justify-between items-center">
//         <h2 className="text-xl font-bold">AI Code Evaluation</h2>
//         <span
//           className={`font-semibold text-lg ${statusColor}`}
//         >
//           {codeout.isCorrect ? "Correct" : "Incorrect"}
//         </span>
//       </div>

//       {/* Score */}
//       <div className="bg-[#1f2937] p-4 rounded-xl flex justify-between items-center">
//         <span className="text-gray-400">Score</span>
//         <span className="text-2xl font-bold">
//           {codeout.score}/10
//         </span>
//       </div>

//       {/* Complexity */}
//       <div className="grid grid-cols-2 gap-4">
//         <div className="bg-[#1f2937] p-4 rounded-xl">
//           <p className="text-gray-400 text-sm">Time Complexity</p>
//           <p className="text-lg font-semibold">
//             {codeout.timeComplexity}
//           </p>
//         </div>

//         <div className="bg-[#1f2937] p-4 rounded-xl">
//           <p className="text-gray-400 text-sm">Space Complexity</p>
//           <p className="text-lg font-semibold">
//             {codeout.spaceComplexity}
//           </p>
//         </div>
//       </div>

//       {/* Test Case Result */}
//       <div className="bg-[#1f2937] p-4 rounded-xl flex justify-between">
//         <span>Will Pass All Tests</span>
//         <span
//           className={
//             codeout.willPassAllTests
//               ? "text-green-400"
//               : "text-red-400"
//           }
//         >
//           {codeout.willPassAllTests ? "Yes" : "No"}
//         </span>
//       </div>

//       {/* Code Quality */}
//       <div className="bg-[#1f2937] p-4 rounded-xl">
//         <h3 className="font-semibold mb-2">Code Quality</h3>
//         <ul className="text-sm space-y-1">
//           <li>Readability: {codeout.codeQuality.readability}</li>
//           <li>Naming: {codeout.codeQuality.naming}</li>
//           <li>Structure: {codeout.codeQuality.structure}</li>
//           <li>Comments: {codeout.codeQuality.comments}</li>
//         </ul>
//       </div>

//       {/* Issues */}
//       <div className="bg-[#1f2937] p-4 rounded-xl">
//         <h3 className="font-semibold mb-2 text-red-400">Issues</h3>
//         <ul className="list-disc pl-5 text-sm space-y-1">
//           {codeout.issues.map((issue, i) => (
//             <li key={i}>{issue}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Optimizations */}
//       <div className="bg-[#1f2937] p-4 rounded-xl">
//         <h3 className="font-semibold mb-2 text-green-400">
//           Optimizations
//         </h3>
//         <ul className="list-disc pl-5 text-sm space-y-1">
//           {codeout.optimizations.map((opt, i) => (
//             <li key={i}>{opt}</li>
//           ))}
//         </ul>
//       </div>

//       {/* Summary */}
//       <div className="bg-[#1f2937] p-4 rounded-xl">
//         <h3 className="font-semibold mb-2">Summary</h3>
//         <p className="text-sm text-gray-300">
//           {codeout.summary}
//         </p>
//       </div>
//     </div>
//   );
// };

// export default EvaluationPanel;

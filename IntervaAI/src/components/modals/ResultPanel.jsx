import React from "react";
import { AlertCircle, CheckCircle2, XCircle, Terminal, ChevronRight } from "lucide-react";

export default function ResultPanel({ response }) {
  if (!response) return null;

  // Compilation Error - Red Theme
  if (response.type === "COMPILATION_ERROR") {
    return (
      <div className="rounded-xl border border-red-500/30 bg-red-500/5 overflow-hidden animate-in fade-in duration-300">
        <div className="flex items-center gap-2 px-4 py-2 bg-red-500/10 border-b border-red-500/20">
          <AlertCircle className="w-4 h-4 text-red-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-red-400">Compilation Error</span>
        </div>
        <div className="p-4">
          <pre className="text-[11px] font-mono text-red-300/80 whitespace-pre-wrap bg-slate-950/50 p-3 rounded-lg border border-red-500/10">
            {response.message}
          </pre>
        </div>
      </div>
    );
  }

  // Runtime Error - Amber Theme
  if (response.type === "RUNTIME_ERROR") {
    return (
      <div className="rounded-xl border border-amber-500/30 bg-amber-500/5 overflow-hidden animate-in fade-in duration-300">
        <div className="flex items-center gap-2 px-4 py-2 bg-amber-500/10 border-b border-amber-500/20">
          <Terminal className="w-4 h-4 text-amber-500" />
          <span className="text-[10px] font-black uppercase tracking-widest text-amber-400">Runtime Error</span>
        </div>
        <div className="p-4">
          <pre className="text-[11px] font-mono text-amber-200/80 whitespace-pre-wrap bg-slate-950/50 p-3 rounded-lg border border-amber-500/10">
            {response.message}
          </pre>
        </div>
      </div>
    );
  }

  const passed = response.results.filter((r) => r.passed).length;
  const total = response.results.length;
  const isAllPassed = passed === total;

  return (
    <div className="space-y-4 animate-in slide-in-from-bottom-2 duration-500">
      
      {/* Summary Header */}
      <div className="flex items-center justify-between p-4 rounded-xl bg-slate-900/50 border border-slate-800 shadow-xl">
        <div className="flex items-center gap-3">
          <div className={`p-2 rounded-lg ${isAllPassed ? "bg-emerald-500/10" : "bg-indigo-500/10"}`}>
            {isAllPassed ? (
              <CheckCircle2 className="w-5 h-5 text-emerald-500" />
            ) : (
              <Terminal className="w-5 h-5 text-indigo-400" />
            )}
          </div>
          <div>
            <h2 className="text-xs font-black text-white uppercase tracking-wider">Test Results</h2>
            <p className="text-[10px] text-slate-500 font-medium">Validation completed successfully</p>
          </div>
        </div>

        <div className={`px-3 py-1 rounded-full text-[10px] font-black tracking-tighter border ${
            isAllPassed
              ? "bg-emerald-500/10 text-emerald-400 border-emerald-500/20"
              : "bg-red-500/10 text-red-400 border-red-500/20"
          }`}
        >
          {passed} / {total} TESTCASES PASSED
        </div>
      </div>

      {/* Testcase List */}
      <div className="grid grid-cols-1 gap-3 max-h-[400px] overflow-y-auto pr-2 custom-scrollbar">
        {response.results.map((tc, index) => (
          <div
            key={index}
            className={`group relative overflow-hidden rounded-xl border transition-all duration-300 ${
              tc.passed
                ? "border-emerald-500/20 bg-emerald-500/5"
                : "border-red-500/20 bg-red-500/5"
            }`}
          >
            {/* Status Indicator Bar */}
            <div className={`absolute left-0 top-0 bottom-0 w-1 ${tc.passed ? "bg-emerald-500" : "bg-red-500"}`} />

            <div className="p-3 pl-5">
              <div className="flex justify-between items-center mb-3">
                <div className="flex items-center gap-2">
                  <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">Case {index + 1}</span>
                  {tc.passed ? (
                    <CheckCircle2 size={12} className="text-emerald-500" />
                  ) : (
                    <XCircle size={12} className="text-red-500" />
                  )}
                </div>
                <span className={`text-[9px] font-black ${tc.passed ? "text-emerald-500" : "text-red-500"}`}>
                  {tc.passed ? "PASSED" : "FAILED"}
                </span>
              </div>

              {/* Data Grid */}
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-2">
                <DataBlock label="Input" value={tc.input} color="slate" />
                <DataBlock label="Expected" value={tc.expected} color="indigo" />
                <DataBlock label="Actual" value={tc.output} color={tc.passed ? "emerald" : "red"} />
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

// Helper component for clean data display
const DataBlock = ({ label, value, color }) => {
  const colors = {
    slate: "text-slate-400 bg-slate-900/50",
    indigo: "text-indigo-400 bg-indigo-500/5",
    emerald: "text-emerald-400 bg-emerald-500/5",
    red: "text-red-400 bg-red-500/5"
  };

  return (
    <div className={`p-2 rounded-lg border border-slate-800/50 ${colors[color]}`}>
      <span className="block text-[8px] font-black uppercase tracking-tighter opacity-60 mb-1">{label}</span>
      <code className="text-[10px] font-mono block break-all leading-tight">
        {typeof value === "object" ? JSON.stringify(value) : String(value)}
      </code>
    </div>
  );
};
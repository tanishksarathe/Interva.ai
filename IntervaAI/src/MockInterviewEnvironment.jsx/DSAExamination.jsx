import { Editor } from "@monaco-editor/react";
import { AlignLeft, ArrowRight, Cog, FlaskConical } from "lucide-react";
import React, { useEffect, useState } from "react";
import ProblemCard from "../components/ProblemCard";
import { useLocation } from "react-router-dom";
import api from "../config/API";
import toast from "react-hot-toast";
import { runUserCode } from "../utils/runCode.js";
import { validateUserCode } from "../utils/codeValidator.js";
import ResultPanel from "../components/modals/ResultPanel.jsx";

const DSAExamination = () => {
  const location = useLocation();

  const { details } = location?.state || {};

  const [testCaseResult, setTestCaseResults] = useState(null);

  const [activeTab, setActiveTab] = useState("question"); // "question" or "cases"

  const [questions, setQuestions] = useState([]);

  const [loading, setLoading] = useState(false);

  const [result, setResult] = useState(null);

  const [count, setCount] = useState(0);

  // 1. Instructions ko ek constant mein bahar rakh lo (Clean Code)
  const getInstructions = (lang) => {
    const content = `Instructions for the Challenge
Single Function: You have to write only a single function that returns the final answer named solve.
No External Imports: Do not import any external library and do not write code for taking input.
Input Handling: You can directly use the function arguments for processing, and return the final answer.
Structure: You may have multiple helping functions inside your code but the main function should return the final answer.

function solve(input) {
   Your code here
  return answer;
}

Destructuring: Be careful while writing code; your code must destructure the test case inputs, as you have a single object input.
Getting Started: Clear your playground if you want after reading this and start writing code.
All the best!`;

    return lang === "python" ? `""" ${content} """` : `/* ${content} */`;
  };

  // 2. Component ke andar state aur effect
  const [custom, setCustom] = useState({
    language: "javascript",
    theme: "vs-dark",
    code: getInstructions("javascript"), // Initial call
  });

  // 3. Jab language badle, toh code update ho (Optional: agar aap chahte ho auto-update ho)
  useEffect(() => {
    setCustom((prev) => ({
      ...prev,
      code: getInstructions(prev.language),
    }));
  }, [custom.language]);

  const fetchDSAQuestions = async () => {
    try {
      const res = await api.post(`/user/get-live-questions`, details);
      setQuestions(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const executeCode = async (e) => {
    e.preventDefault();

    let userCode;
    try {
      if (custom?.language !== "javascript") {
        const res = await api.post("/service/convert-javascript", custom);
        userCode = res?.data?.data;
      } else {
        userCode = custom?.code;
      }

      const testCases = questions[count]?.testCases;

      const validator = await validateUserCode(userCode);

      if (!validator.valid) {
        toast.error("System Risk Detected, Please Review your code...");
        return;
      }

      const response = await runUserCode(userCode, testCases);

      console.log("Execution Result : ", response);

      toast.success("Code executed successfully! Check the results panel.");

      setTestCaseResults(response);
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setCustom((prev) => ({
      ...prev,
      code: value || "",
    }));
  };

  const HandleFinalSubmit = (e) => {
    e.preventDefault();
    // Logic to submit the final code for evaluation
    toast.success("Final code submitted for evaluation!");
  };

  useEffect(() => {
    fetchDSAQuestions();
  }, [details]);

  return (
    <>
      <div className="h-screen w-full bg-[#0f172a] flex overflow-hidden font-sans text-slate-400">
        {/* Left Section: Problem Card (More compact width to balance scaling) */}
        <div className="w-[38%] h-full border-r border-slate-800/60 bg-slate-950/40 overflow-y-auto flex flex-col">
          <div className="flex-1 flex items-center justify-center p-4">
            <div className="flex-1 flex flex-col h-full overflow-hidden">
              {/* Tab Navigation Area */}
              <div className="flex items-center gap-1 p-2 border-b border-slate-800/60 bg-slate-900/30">
                <button
                  onClick={() => setActiveTab("question")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all
        ${
          activeTab === "question"
            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
            : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
        }`}
                >
                  <AlignLeft size={12} />
                  Description
                </button>

                <button
                  onClick={() => setActiveTab("cases")}
                  className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-black uppercase tracking-widest transition-all relative
        ${
          activeTab === "cases"
            ? "bg-indigo-500/10 text-indigo-400 border border-indigo-500/30"
            : "text-slate-500 hover:text-slate-300 hover:bg-slate-800/50"
        }`}
                >
                  <FlaskConical size={12} />
                  Test Cases
                  {/* Red Dot if result is present and we are not on that tab */}
                  {testCaseResult !== null && activeTab !== "cases" && (
                    <span className="absolute top-1 right-1 w-1.5 h-1.5 bg-emerald-500 rounded-full animate-pulse" />
                  )}
                </button>
              </div>

              {/* Main Content Area - Center Aligned & Compact */}
              <div className="flex-1 flex items-start justify-center p-4 overflow-y-auto bg-slate-950/20">
                <div className="w-full scale-[0.95] transform-gpu origin-top transition-all duration-300">
                  {activeTab === "question" ? (
                    <div>
                      <ProblemCard questions={questions} count={count} />
                    </div>
                  ) : (
                    <div>
                      {testCaseResult !== null ? (
                        <ResultPanel response={testCaseResult} />
                      ) : (
                        <div className="flex flex-col items-center justify-center py-20 text-slate-600">
                          <FlaskConical size={40} className="mb-4 opacity-20" />
                          <p className="text-[11px] font-bold uppercase tracking-[0.2em]">
                            Run code to see test cases
                          </p>
                        </div>
                      )}
                    </div>
                  )}
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Right Section: Editor & Controls */}
        <div className="flex-1 h-full flex flex-col bg-[#0d1117]">
          {/* Editor Header / Toolbar - Slimmer (h-12 instead of h-14) */}
          <div className="h-12 border-b border-slate-800 bg-slate-900/40 backdrop-blur-md flex items-center justify-between px-5">
            <div className="flex items-center gap-3">
              <div className="flex items-center gap-2">
                <div className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-pulse" />
                <span className="text-[9px] font-black uppercase tracking-[0.2em] text-slate-500">
                  Playground v2.0
                </span>
              </div>

              {/* Compact Language Select */}
              <div className="relative group">
                <select
                  name="language"
                  value={custom.language}
                  onChange={handleChange}
                  className="appearance-none bg-slate-800/50 text-slate-300 text-[10px] font-bold px-3 py-1 rounded-md border border-slate-700/50 focus:outline-none focus:border-indigo-500/50 transition-all cursor-pointer pr-7"
                >
                  <option value="" disabled hidden>
                    --Select--
                  </option>
                  <option value="java">Java</option>
                  <option value="cpp">C++</option>
                  <option value="c">C</option>
                  <option value="python">Python</option>
                  <option value="javascript">JS</option>
                  <option value="typescript">TS</option>
                </select>
                <div className="absolute right-2 top-1/2 -translate-y-1/2 pointer-events-none text-slate-600">
                  <Cog
                    size={10}
                    className="group-hover:rotate-90 transition-transform duration-500"
                  />
                </div>
              </div>
            </div>

            {/* Action Buttons - Smaller padding & text */}
            <div className="flex items-center gap-2">
              <button
                onClick={executeCode}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/10 active:scale-95"
              >
                <div className="w-0 h-0 border-y-[3px] border-y-transparent border-l-[5px] border-l-white" />
                Run
              </button>
              <button className="px-3 py-1 rounded-md bg-slate-800/80 hover:bg-slate-700 text-slate-400 text-[10px] font-black uppercase tracking-wider transition-all border border-slate-700">
                Submit Code
              </button>
              <button
                type="button"
                onClick={HandleFinalSubmit}
                className="flex items-center gap-2 px-3 py-1 rounded-md bg-emerald-600 hover:bg-emerald-500 text-white text-[10px] font-black uppercase tracking-wider transition-all shadow-lg shadow-emerald-900/10 active:scale-95"
              >
                Submit All
              </button>
            </div>
          </div>

          {/* Monaco Editor Container */}
          <div className="flex-1 relative">
            <div className="absolute inset-0 border-b border-slate-800/50">
              <Editor
                height="100%"
                theme={custom.theme}
                language={custom.language}
                value={custom.code}
                name="code"
                onChange={handleEditorChange}
                options={{
                  fontSize: 12, // Reduced for 75% zoom feel
                  fontFamily: "JetBrains Mono, monospace",
                  minimap: { enabled: false },
                  lineNumbers: "on",
                  scrollBeyondLastLine: false,
                  automaticLayout: true,
                  padding: { top: 15 },
                  wordWrap: "on",
                  cursorSmoothCaretAnimation: "on",
                  renderLineHighlight: "all",
                  selectionHighlight: true,
                }}
              />
            </div>
          </div>

          {/* Navigation Footer - Slimmer (h-14) */}
          <div className="h-14 bg-slate-950/80 border-t border-slate-800/60 flex items-center justify-between px-6">
            <div className="flex items-center gap-2">
              <span className="text-[9px] font-bold text-slate-600 uppercase tracking-widest">
                Progress
              </span>
              <div className="h-1 w-24 bg-slate-800 rounded-full overflow-hidden">
                <div
                  className="h-full bg-indigo-500 transition-all duration-500"
                  style={{
                    width: `${((count + 1) / questions.length) * 100}%`,
                  }}
                />
              </div>
              <span className="text-[10px] font-mono text-indigo-400/70 ml-2">
                {count + 1}/{questions.length}
              </span>
            </div>

            <div className="flex items-center gap-2">
              <button
                onClick={() => {
                  if (count > 0) setCount(count - 1);
                }}
                disabled={count === 0}
                className={`flex items-center gap-2 px-4 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all
            ${
              count === 0
                ? "opacity-20 cursor-not-allowed text-slate-600"
                : "bg-slate-800/50 hover:bg-slate-700 text-slate-400 border border-slate-700/50"
            }`}
              >
                Prev
              </button>

              <button
                onClick={() => {
                  if (count < questions.length - 1) setCount(count + 1);
                }}
                disabled={count === questions.length - 1}
                className={`flex items-center gap-2 px-5 py-1.5 rounded-lg text-[10px] font-bold uppercase transition-all
            ${
              count === questions.length - 1
                ? "bg-slate-800/50 text-slate-600 cursor-not-allowed"
                : "bg-indigo-600 hover:bg-indigo-500 text-white shadow-lg shadow-indigo-900/20 transform hover:-translate-y-0.5"
            }`}
              >
                {count === questions.length - 1
                  ? "Finish Arena"
                  : "Next Problem"}
              </button>
            </div>
          </div>
        </div>
      </div>
      {result !== null && (
        <>
          <div className="fixed inset-0 z-[100] flex items-center justify-center bg-slate-950/80 backdrop-blur-md p-4">
            <div
              data-aos="zoom-in"
              className="relative w-full max-w-md overflow-hidden rounded-3xl border border-slate-800 bg-slate-900/90 shadow-2xl"
            >
              {/* Top Decorative Banner */}
              <div className="h-2 bg-gradient-to-r from-emerald-500 via-teal-500 to-emerald-500" />

              <div className="p-8 md:p-10 text-center">
                {/* Success Icon */}
                <div className="mb-6 inline-flex h-20 w-20 items-center justify-center rounded-full bg-emerald-500/10 border border-emerald-500/20 shadow-[0_0_30px_rgba(16,185,129,0.2)]">
                  <Trophy className="h-10 w-10 text-emerald-500" />
                </div>

                {/* Header */}
                <h2 className="text-2xl font-black text-white tracking-tight mb-2">
                  Assessment Completed!
                </h2>
                <p className="text-sm text-slate-400 mb-8 font-medium">
                  Great effort! Your performance has been recorded.
                </p>

                {/* Score Display Card */}
                <div className="mb-10 rounded-2xl bg-slate-800/50 border border-slate-700/50 p-6 backdrop-blur-sm">
                  <span className="block text-[10px] font-bold uppercase tracking-[0.2em] text-slate-500 mb-2">
                    Your Final Score
                  </span>
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-5xl font-black text-emerald-400">
                      {result}
                    </span>
                    <span className="text-slate-500 font-bold">PTS</span>
                  </div>
                </div>

                {/* Action Buttons */}
                <div className="space-y-4">
                  <button
                    onClick={() =>
                      navigate(`/interview-gauntlet/${details?.testId}`)
                    }
                    className="group relative flex w-full items-center justify-center gap-3 overflow-hidden rounded-2xl bg-indigo-600 px-8 py-4 text-sm font-bold text-white transition-all hover:bg-indigo-500 hover:shadow-[0_0_25px_rgba(79,70,229,0.4)] active:scale-95"
                  >
                    <ShieldCheck className="h-5 w-5" />
                    <span>Continue to Gauntlet</span>
                    <ArrowRight className="h-4 w-4 transition-transform group-hover:translate-x-1" />
                  </button>

                  <p className="flex items-center justify-center gap-2 text-[10px] font-semibold uppercase tracking-widest text-slate-500">
                    <CheckCircle2 className="h-3 w-3 text-emerald-500" />
                    Verified by Interva AI
                  </p>
                </div>
              </div>

              {/* Background Subtle Glow */}
              <div className="absolute -left-16 -top-16 h-32 w-32 bg-indigo-500/10 blur-[50px]" />
              <div className="absolute -right-16 -bottom-16 h-32 w-32 bg-emerald-500/10 blur-[50px]" />
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default DSAExamination;

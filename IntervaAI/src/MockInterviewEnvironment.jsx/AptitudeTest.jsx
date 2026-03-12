import React, { useState, useEffect } from "react";
import {
  ShieldCheck,
  BookOpenText,
  Clock,
  FileText,
  Trophy,
  ArrowRight,
  CheckCircle2,
} from "lucide-react";
import AOS from "aos";
import "aos/dist/aos.css";
import { useLocation, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/API";

const AptitudeTest = () => {
  const [selectedAnswers, setSelectedAnswers] = useState({});

  const [questionsData, setQuestionsData] = useState([]);

  const [result, setResults] = useState(null);

  const navigate = useNavigate();

  const location = useLocation();
  const { details } = location?.state || {};

  const fetchQuestionsAptitude = async () => {
    console.log("Received details in AptitudeTest component: ", details);

    try {
      const res = await api.post("/user/get-live-questions", details);
      //   console.log(res?.data?.data);
      setQuestionsData(res?.data?.data);
      //   toast.success("Successfully Fetched All Questions");
    } catch (error) {
      toast.error("Failed to fetch questions. Please try again later.");
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/user/evaluate-answers", {
        answers: selectedAnswers,
        testId: details.testId, // may be
      });
      setResults(res?.data?.score);
      //   console.log("Evaluation Result: ", res?.data?.score);

      console.log("Test ID sent for evaluation: ", details?.testId);

      //   toast.success("Answers submitted successfully!");
    } catch (error) {
      toast.error("Failed to submit answers. Please try again later.");
    }
  };

  useEffect(() => {
    AOS.init({ once: true, duration: 800 });
  }, []);

  const handleSelect = (qId, val) => {
    setSelectedAnswers((prev) => ({ ...prev, [qId]: val }));
  };

  useEffect(() => {
    fetchQuestionsAptitude();
  }, [details]);

  console.log("Result State : ", result);

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] text-slate-300 font-sans selection:bg-indigo-500/30">
        {/* Top Sticky Header */}
        <div className="sticky top-0 z-50 bg-[#0f172a]/80 backdrop-blur-md border-b border-slate-800 px-6 py-4">
          <div className="flex justify-between items-center w-full">
            <div className="flex items-center gap-4">
              <div className="p-2 bg-indigo-500/10 rounded-lg border border-indigo-500/20">
                <FileText className="text-indigo-500 w-5 h-5" />
              </div>
              <div>
                <h1 className="text-lg font-bold text-white leading-none">
                  Aptitude Final Assessment
                </h1>
                <p className="text-[10px] text-slate-500 uppercase tracking-[0.2em] mt-1 font-semibold">
                  Engineering Round • 2026
                </p>
              </div>
            </div>

            <div className="flex items-center gap-6">
              <div className="hidden md:flex flex-col items-end">
                <span className="text-[10px] text-slate-500 uppercase font-bold">
                  Progress
                </span>
                <span className="text-sm font-mono text-indigo-400">
                  {Object.keys(selectedAnswers).length} / {questionsData.length}
                </span>
              </div>
              <button
                onClick={handleSubmit}
                className="bg-indigo-600 hover:bg-indigo-500 text-white px-5 py-2 rounded-lg text-xs font-bold transition-all shadow-lg shadow-indigo-600/20"
              >
                Submit Test
              </button>
            </div>
          </div>
        </div>

        {/* Main Content Area - Full Width */}
        <main className="w-full px-4 md:px-12 py-10">
          <div className="grid grid-cols-1 gap-12">
            {questionsData?.map((q, index) => (
              <div
                key={q._id}
                data-aos="fade-up"
                className="group bg-slate-900/40 border border-slate-800/50 rounded-3xl p-6 md:p-10 transition-all hover:border-slate-700/50"
              >
                <div className="flex flex-col md:flex-row gap-6">
                  {/* Left Side: Question Meta */}
                  <div className="md:w-1/12">
                    <span className="text-4xl font-black text-slate-800 group-hover:text-indigo-500/20 transition-colors">
                      {(index + 1).toString().padStart(2, "0")}
                    </span>
                  </div>

                  {/* Right Side: Question & Options */}
                  <div className="md:w-11/12 space-y-8">
                    <div>
                      <div className="flex items-center gap-2 mb-3">
                        <span className="text-[10px] bg-indigo-500/10 text-indigo-400 border border-indigo-500/20 px-3 py-0.5 rounded-full font-bold uppercase tracking-tighter">
                          {q.topic.replace(/_/g, " ")}
                        </span>
                      </div>
                      <h2 className="text-lg md:text-xl text-slate-100 font-medium leading-relaxed">
                        {q.question}
                      </h2>
                    </div>

                    {/* Options Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                      {q.options?.map((option, i) => {
                        const isSelected = selectedAnswers[q._id] === option;
                        return (
                          <div
                            key={i}
                            onClick={() => handleSelect(q._id, option)}
                            className={`
                                                        cursor-pointer relative flex items-center justify-between p-5 rounded-2xl border-2 transition-all duration-300
                                                        ${
                                                          isSelected
                                                            ? "border-indigo-500 bg-indigo-500/5 ring-1 ring-indigo-500"
                                                            : "border-slate-800 bg-slate-800/20 hover:border-slate-700 hover:bg-slate-800/40"
                                                        }
                                                    `}
                          >
                            <div className="flex items-center gap-4">
                              <div
                                className={`
                                                            w-5 h-5 rounded-full border-2 flex items-center justify-center transition-all
                                                            ${isSelected ? "border-indigo-500 bg-indigo-500" : "border-slate-600"}
                                                        `}
                              >
                                {isSelected && (
                                  <div className="w-2 h-2 bg-white rounded-full" />
                                )}
                              </div>
                              <span
                                className={`text-sm ${isSelected ? "text-white font-semibold" : "text-slate-400 font-medium"}`}
                              >
                                {option}
                              </span>
                            </div>

                            {/* Alphabet indicator (A, B, C, D) */}
                            <span className="text-[10px] font-bold text-slate-600 uppercase">
                              Option {String.fromCharCode(65 + i)}
                            </span>
                          </div>
                        );
                      })}
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Footer Section */}
          <div className="mt-20 text-center py-10 border-t border-slate-800">
            <p className="text-slate-500 text-xs tracking-widest uppercase">
              End of Questions
            </p>
            <button
              onClick={handleSubmit}
              className="mt-6 inline-flex items-center gap-3 bg-indigo-600 hover:bg-indigo-500 text-white px-10 py-4 rounded-2xl font-bold text-sm transition-all shadow-2xl shadow-indigo-600/40 transform hover:-translate-y-1"
            >
              <ShieldCheck className="w-5 h-5" />
              Finalize & Submit Test
            </button>
          </div>
        </main>
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
                      {result?.score || 0}
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

export default AptitudeTest;

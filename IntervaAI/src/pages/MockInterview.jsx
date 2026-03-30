import { ArrowRight, Brain, Code2, Sparkles, Timer, Users } from "lucide-react";
import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import StartDriveModal from "../components/modals/StartDriveModal";
import api from "../config/API";
import { motion } from "framer-motion";
import { useAuth } from "../config/AuthContext";
import toast from "react-hot-toast";

const MockInterview = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const [openStartModel, setOpenStartModel] = useState(false);

  const [selectedLevel, setSelectedLevel] = useState(null);

  const handleLocalInterview = async () => {
    const finalDetails = {
      level: selectedLevel,
    };

    // console.log("Final details being sent for local interview creation: ", finalDetails);

    try {
      const res = await api.post(
        `${import.meta.env.VITE_CREATE_LOCAL_INTERVIEW}`,
        finalDetails,
      );

      console.log("Local Interview Creation Response : ", res?.data?.data);

      navigate(`/interview-gauntlet/${res?.data?.data?._id}`);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <>
      <div className="min-h-screen w-full bg-slate-950 text-white scroll-smooth">
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-6xl mx-auto px-6 pt-24 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-semibold leading-tight">
            Simulate real hiring interviews.
            <span className="block text-indigo-400 mt-2">
              Not just questions.
            </span>
          </h1>

          <p className="mt-6 text-lg text-slate-400 max-w-3xl mx-auto">
            A time-bound, multi-round mock interview experience designed to
            mirror real company hiring.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button
              onClick={() => navigate("/interview-page")}
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition flex items-center gap-2"
            >
              Start a Mock Interview <ArrowRight size={18} />
            </button>

            <button
              type="button"
              className="px-6 py-3 rounded-lg border border-slate-700 text-slate-300 hover:bg-slate-900 transition"
            >
              Learn How It Works
            </button>

            <button
              type="button"
              onClick={() => navigate("/previous-tests")}
              className="px-6 py-3 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition flex items-center gap-2"
            >
              Previously Created Tests <ArrowRight size={18} />
            </button>
          </div>
        </section>

        {/* ================= MOCK INTERVIEW CARDS ================= */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold text-center mb-4">
            What happens after you start?
          </h2>

          <p className="text-center text-slate-400 mb-12">
            Each mock interview follows a structured, real-world hiring flow.
          </p>

          {user.premium && (
            <div className="relative group p-0.5 overflow-hidden rounded-xl inline-block">
              {/* Animated Rotating Background */}
              <motion.div
                animate={{
                  rotate: [0, 360],
                }}
                transition={{
                  duration: 4,
                  repeat: Infinity,
                  ease: "linear",
                }}
                className="absolute inset-[-100%] z-0"
                style={{
                  background:
                    "conic-gradient(from 0deg, transparent 0deg, transparent 300deg, #7c3aed 360deg)",
                }}
              />

              <div className="flex px-2 py-1 font-bold">
                Premium <Sparkles size={20} />
              </div>

              {/* Static Glow (Violet-600 shadow effect) */}
              <div className="absolute inset-0 z-0 rounded-xl shadow-[0_0_15px_rgba(124,58,237,0.5)] border border-violet-600/50" />

              {/* Inner Content Box */}
              <div className="relative z-10 bg-slate-950 px-15 py-15 rounded-[10px] text-white ">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
                  {[
                    {
                      level: "Easy",
                      color: "green",
                      dsa: 25,
                      apti: 15,
                      hr: 10,
                    },
                    {
                      level: "Medium",
                      color: "amber",
                      dsa: 60,
                      apti: 25,
                      hr: 15,
                    },
                    { level: "Hard", color: "red", dsa: 120, apti: 40, hr: 20 },
                  ].map((item, idx) => (
                    <div key={idx} className="relative max-w-xl">
                      {/* Main Card */}
                      <div className="relative bg-slate-900/80 backdrop-blur-xl border border-indigo-700 rounded-3xl p-6 overflow-hidden">
                        {/* Header */}
                        <div className="flex items-start gap-4 mb-6">
                          <div className="bg-blue-500/20 rounded-xl p-3">
                            <div className="text-2xl">📊</div>
                          </div>

                          <div className="flex-1">
                            <h3 className="text-xl font-semibold text-white mb-2">
                              Full-Cycle Mock Interview
                            </h3>

                            <span
                              className={`inline-block text-${item.color}-400 text-xs font-medium px-3 py-1 rounded-full`}
                            >
                              {item.level}
                            </span>
                          </div>
                        </div>

                        {/* Rounds */}
                        <div className="space-y-3 mb-6">
                          <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 rounded-lg p-2">
                              <div className="text-sm">🧩</div>
                            </div>
                            <div className="flex-1 text-sm text-slate-200">
                              DSA Round
                              <span className="text-slate-400 ml-2">
                                · {item.dsa} mins
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="bg-green-500/20 rounded-lg p-2">
                              <div className="text-sm">🧠</div>
                            </div>
                            <div className="flex-1 text-sm text-slate-200">
                              Aptitude & Reasoning
                              <span className="text-slate-400 ml-2">
                                · {item.apti} mins
                              </span>
                            </div>
                          </div>

                          <div className="flex items-center gap-3">
                            <div className="bg-blue-500/20 rounded-lg p-2">
                              <div className="text-sm">👥</div>
                            </div>
                            <div className="flex-1 text-sm text-slate-200">
                              HR / Behavioral
                              <span className="text-slate-400 ml-2">
                                · {item.hr} mins
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Description */}
                        <p className="text-slate-400 text-sm italic">
                          Practice according to your job profile and the company
                          you are targeting.
                        </p>
                      </div>

                      {/* Inverted Floating Action Card */}
                      <div className="absolute -bottom-10 -right-3 bg-white text-slate-900 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                        <button
                          onClick={() => {
                            setOpenStartModel(true);
                            setSelectedLevel(item.level);
                          }}
                          className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-medium"
                        >
                          Enter Interview Simulation →
                        </button>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}

          {!user.premium && (
            <div className="relative z-10 bg-slate-950 px-15 py-15 rounded-[10px] text-white ">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {[
                  { level: "Easy", color: "green", dsa: 25, apti: 15, hr: 10 },
                  {
                    level: "Medium",
                    color: "amber",
                    dsa: 60,
                    apti: 25,
                    hr: 15,
                  },
                ].map((item, idx) => (
                  <div key={idx} className="relative max-w-xl">
                    {/* Main Card */}
                    <div className="relative bg-slate-900/80 backdrop-blur-xl border border-indigo-700 rounded-3xl p-6 overflow-hidden">
                      {/* Header */}
                      <div className="flex items-start gap-4 mb-6">
                        <div className="bg-blue-500/20 rounded-xl p-3">
                          <div className="text-2xl">📊</div>
                        </div>

                        <div className="flex-1">
                          <h3 className="text-xl font-semibold text-white mb-2">
                            Full-Cycle Mock Interview
                          </h3>

                          <span
                            className={`inline-block text-${item.color}-400 text-xs font-medium px-3 py-1 rounded-full`}
                          >
                            {item.level}
                          </span>
                        </div>
                      </div>

                      {/* Rounds */}
                      <div className="space-y-3 mb-6">
                        <div className="flex items-center gap-3">
                          <div className="bg-blue-500/20 rounded-lg p-2">
                            <div className="text-sm">🧩</div>
                          </div>
                          <div className="flex-1 text-sm text-slate-200">
                            DSA Round
                            <span className="text-slate-400 ml-2">
                              · {item.dsa} mins
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-green-500/20 rounded-lg p-2">
                            <div className="text-sm">🧠</div>
                          </div>
                          <div className="flex-1 text-sm text-slate-200">
                            Aptitude & Reasoning
                            <span className="text-slate-400 ml-2">
                              · {item.apti} mins
                            </span>
                          </div>
                        </div>

                        <div className="flex items-center gap-3">
                          <div className="bg-blue-500/20 rounded-lg p-2">
                            <div className="text-sm">👥</div>
                          </div>
                          <div className="flex-1 text-sm text-slate-200">
                            HR / Behavioral
                            <span className="text-slate-400 ml-2">
                              · {item.hr} mins
                            </span>
                          </div>
                        </div>
                      </div>

                      {/* Description */}
                      <p className="text-slate-400 text-sm">
                        Practice like it's the real interview day.
                      </p>
                    </div>

                    {/* Inverted Floating Action Card */}
                    <div className="absolute -bottom-10 -right-3 bg-white text-slate-900 rounded-2xl shadow-xl transition-all duration-300 hover:scale-105 hover:shadow-2xl">
                      <button
                        onClick={() => {
                          setSelectedLevel(item.level);
                          handleLocalInterview();
                        }}
                        className="bg-indigo-600 hover:bg-indigo-700 text-white px-6 py-4 rounded-2xl font-medium"
                      >
                        Enter Interview Simulation →
                      </button>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          <p className="text-center text-sm text-white mt-20">
            Each round unlocks sequentially — just like real interviews.
          </p>
        </section>

        {/* ================= COMPANY ROADMAPS ================= */}
        <section className="max-w-6xl mx-auto px-6 pb-24">
          <h2 className="text-2xl font-semibold text-center mb-2">
            Company-Wise Interview Roadmaps
          </h2>

          <p className="text-center text-slate-400 mb-10">
            Learn how different companies structure their hiring process.
          </p>

          {/* Tabs */}
          <div className="flex justify-center gap-4 mb-12">
            <button className="px-4 py-2 rounded-lg bg-slate-800 text-white">
              Product-Based
            </button>
            <button className="px-4 py-2 rounded-lg border border-slate-700 text-slate-400">
              Service-Based
            </button>
            <button className="px-4 py-2 rounded-lg border border-slate-700 text-slate-400">
              Startup
            </button>
          </div>

          {/* Timeline */}
          <div className="bg-slate-900 rounded-2xl border border-slate-800 p-8">
            <div className="flex items-center justify-between text-center">
              <div className="flex-1">
                <div className="text-indigo-400 font-semibold mb-2">1</div>
                <h4 className="font-medium">DSA Round</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Algorithms & problem solving
                </p>
              </div>

              <div className="flex-1">
                <div className="text-indigo-400 font-semibold mb-2">2</div>
                <h4 className="font-medium">Aptitude & Reasoning</h4>
                <p className="text-xs text-slate-400 mt-1">Speed & accuracy</p>
              </div>

              <div className="flex-1">
                <div className="text-indigo-400 font-semibold mb-2">3</div>
                <h4 className="font-medium">HR / Managerial</h4>
                <p className="text-xs text-slate-400 mt-1">
                  Communication & culture fit
                </p>
              </div>
            </div>

            <p className="text-center text-xs text-slate-500 mt-8">
              Each round unlocks sequentially — just like real interviews.
            </p>
          </div>
        </section>

        {/* ================= FINAL CTA ================= */}
        <section className="text-center pb-32 px-6">
          <h2 className="text-3xl font-semibold">
            Don’t just prepare — simulate the real thing.
          </h2>

          <p className="text-slate-400 mt-4 max-w-2xl mx-auto">
            Build confidence and learn from the complete interview process
            experience.
          </p>

          <button className="mt-10 px-8 py-4 rounded-lg bg-indigo-600 hover:bg-indigo-700 transition text-lg">
            Start Your Mock Interview
          </button>
        </section>
      </div>
      {openStartModel && (
        <StartDriveModal
          toughnes={selectedLevel}
          onClose={() => setOpenStartModel(false)}
        />
      )}
    </>
  );
};

export default MockInterview;

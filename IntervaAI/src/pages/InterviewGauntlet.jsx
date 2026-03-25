import React, { useState, useEffect } from "react";
import {
  Code2,
  BrainCircuit,
  UserCheck,
  Timer,
  Trophy,
  ShieldCheck,
  ArrowRight,
  CheckCircle2,
  Lock,
} from "lucide-react";
// Note: Ensure you run 'npm install aos' and import the CSS in your root file
import AOS from "aos";
import "aos/dist/aos.css";
import StartDriveModal from "../components/modals/StartDriveModal";
import { useNavigate, useParams } from "react-router-dom";
import toast from "react-hot-toast";
import api from "../config/API";

const InterviewGauntlet = () => {
  const { id } = useParams();

  const [assesement, setAssesement] = useState(null);

  const navigate = useNavigate();

  const [activeRound, setActiveRound] = useState(0);

  const fetchAssesement = async () => {
    try {
      const res = await api.get(`${import.meta.env.VITE_GET_LIVE_TEST}/${id}`);
      setAssesement(res?.data?.data);
      setActiveRound(res?.data?.data?.activeRound);
      console.log("Active Round from API: ", res?.data?.data?.activeRound);
    } catch (error) {
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  const handleTestStart = () => {
    let details;

    switch (activeRound) {
      case 0:
        details = {
          questionIds: assesement?.ques_bank?.apti,
          type: "apti",
          testId: assesement._id,
          timelimit: assesement?.timelimit?.apti,
        };

        navigate("/aptitude-test", { state: { details } });
        break;
      case 1:
        details = {
          questionIds: assesement?.ques_bank?.dsa,
          type: "dsa",
          testId: assesement._id,
          timelimit: assesement?.timelimit?.dsa,
        };
        navigate("/dsa-test", { state: { details } });

        break;

      case 2:
        details = {
          testId: assesement._id,
          type: "basic",
          timelimit: assesement?.timelimit?.hr,
          simulation: true,
        };
        navigate("/interview-page", { state: { details } });
        break;
      default:
        toast.error("There is no active round. Stay tuned!");
        break;
    }
  };

  useEffect(() => {
    AOS.init({ duration: 1000, once: false });
  }, []);

  useEffect(() => {
    fetchAssesement();
  }, [id]);

  console.log("Assesement : ", assesement);

  const rounds = [
    {
      id: 0,
      title: "Aptitude & Reasoning",
      subtitle: "Logical Deduction & Quantitative Analysis",
      icon: <BrainCircuit className="w-8 h-8" />,
      color: "emerald",
      marks: assesement?.maxMarks?.apti,
      duration: `${assesement?.timelimit?.apti} Minutes`,
      rules: [
        // "Negative marking of 0.25 for every wrong answer.",
        "Calculators are strictly prohibited.",
        "Once a section is submitted, you cannot go back.",
        "Keep your webcam active throughout the session.",
      ],
      description:
        "This round benchmarks your mental agility. Expect a mix of number crunching, pattern recognition, and logical fallacies.",
    },
    {
      id: 1,
      title: "DSA Mastery Round",
      subtitle: "Algorithmic Efficiency & Problem Solving",
      icon: <Code2 className="w-8 h-8" />,
      color: "indigo",
      marks: assesement?.maxMarks?.dsa,
      duration: `${assesement?.timelimit?.dsa} Minutes`,
      rules: [
        "Plagiarism results in immediate disqualification.",
        "Only three language switches allowed (C++, Java, Python).",
        "Optimized time complexity is prioritized over just 'getting it right'.",
        "Fullscreen mode is mandatory.",
      ],
      description:
        "Dive deep into the world of Data Structures. You'll be tested on your ability to optimize, refactor, and solve complex edge cases under pressure.",
    },
    {
      id: 2,
      title: "HR Behavioral Round",
      subtitle: "Culture Fit & Soft Skills Evaluation",
      icon: <UserCheck className="w-8 h-8" />,
      color: "rose",
      marks: assesement?.maxMarks?.hr,
      duration: `${assesement?.timelimit?.hr} Minutes`,
      rules: [
        "Professional attire is recommended.",
        "Join the meeting link 5 minutes prior.",
        "Ensure a noise-free environment.",
        "Be ready with your resume and project documentation.",
      ],
      description:
        "The final frontier. We want to know the person behind the code. Expect questions about conflict resolution, career goals, and cultural alignment.",
    },
  ];

  return (
    <>
      <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-12 font-sans selection:bg-indigo-500/30 overflow-hidden">
        {/* ================= PROGRESS TIMELINE ================= */}
        <div className="max-w-6xl mx-auto mb-16" data-aos="fade-down">
          <div className="relative flex justify-between items-center px-4 md:px-20">
            {/* Background Line */}
            <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-800 -translate-y-1/2 z-0" />
            {/* Active Progress Line */}
            <div
              className="absolute top-1/2 left-0 h-1 bg-gradient-to-r from-indigo-500 via-purple-500 to-emerald-500 -translate-y-1/2 z-0 transition-all duration-1000 ease-in-out"
              style={{ width: `${(activeRound / (rounds.length - 1)) * 100}%` }}
            />

            {rounds.map((round, idx) => (
              <div
                key={idx}
                className="relative z-10 flex flex-col items-center group"
              >
                <button
                  // onClick={() => setActiveRound(idx)}
                  className={`w-12 h-12 rounded-2xl flex items-center justify-center transition-all duration-500 border-4 ${
                    idx <= activeRound
                      ? "bg-slate-900 border-indigo-500 shadow-[0_0_20px_rgba(99,102,241,0.5)] scale-110"
                      : "bg-slate-900 border-slate-700 opacity-60 hover:opacity-100"
                  }`}
                >
                  {idx < activeRound ? (
                    <CheckCircle2 className="text-emerald-400" />
                  ) : (
                    <span className="font-bold">{idx + 1}</span>
                  )}
                </button>
                <span
                  className={`absolute -bottom-8 whitespace-nowrap text-xs font-bold uppercase tracking-tighter transition-colors ${idx <= activeRound ? "text-indigo-400" : "text-slate-500"}`}
                >
                  {round.title.split(" ")[0]}
                </span>
              </div>
            ))}
          </div>
        </div>

        {/* ================= ACTIVE ROUND DISPLAY ================= */}
        <main className="max-w-6xl mx-auto grid lg:grid-cols-12 gap-10 items-start">
          {/* Left Content: The Round Info */}
          <div className="lg:col-span-8 space-y-8" key={activeRound}>
            <div data-aos="fade-right">
              <h4 className="text-indigo-400 font-black uppercase tracking-[0.3em] mb-2">
                Phase 0{activeRound + 1}
              </h4>
              <h1 className="text-5xl md:text-7xl font-extrabold text-white leading-none mb-6">
                {rounds[activeRound].title}
              </h1>
              <p className="text-xl text-slate-400 max-w-2xl leading-relaxed">
                {rounds[activeRound].description}
              </p>
            </div>

            <div
              className="grid sm:grid-cols-2 gap-4"
              data-aos="zoom-in-up"
              data-aos-delay="200"
            >
              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl group hover:border-indigo-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-indigo-500/10 rounded-2xl text-indigo-400 group-hover:scale-110 transition-transform">
                    <Timer size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      Time Limit
                    </p>
                    <p className="text-2xl font-black text-white">
                      {rounds[activeRound].duration}
                    </p>
                  </div>
                </div>
              </div>

              <div className="bg-slate-900/50 border border-slate-800 p-6 rounded-3xl backdrop-blur-xl group hover:border-emerald-500/50 transition-all">
                <div className="flex items-center gap-4 mb-4">
                  <div className="p-3 bg-emerald-500/10 rounded-2xl text-emerald-400 group-hover:scale-110 transition-transform">
                    <Trophy size={28} />
                  </div>
                  <div>
                    <p className="text-xs text-slate-500 uppercase font-bold tracking-widest">
                      Total Weightage
                    </p>
                    <p className="text-2xl font-black text-white">
                      {rounds[activeRound].marks} Points
                    </p>
                  </div>
                </div>
              </div>
            </div>

            <div
              className="bg-white/[0.02] border border-white/10 rounded-[2.5rem] p-8 md:p-10"
              data-aos="fade-up"
              data-aos-delay="400"
            >
              <div className="flex items-center gap-3 mb-8">
                <ShieldCheck className="text-indigo-500" />
                <h3 className="text-2xl font-bold text-white tracking-tight">
                  Rules & Regulations
                </h3>
              </div>
              <ul className="grid md:grid-cols-2 gap-6">
                {rounds[activeRound].rules.map((rule, i) => (
                  <li key={i} className="flex gap-4 text-slate-400">
                    <span className="flex-shrink-0 w-6 h-6 rounded-full bg-slate-800 flex items-center justify-center text-[10px] font-bold text-indigo-400 border border-indigo-500/30">
                      {i + 1}
                    </span>
                    <span className="text-sm leading-relaxed">{rule}</span>
                  </li>
                ))}
              </ul>
            </div>

            <div
              className="p-8 bg-slate-900/50 border border-slate-800 rounded-2xl backdrop-blur-sm"
              data-aos="fade-up"
              data-aos-delay="600"
            >
              {/* Header Section */}
              <div className="flex items-center justify-between mb-8">
                <div className="flex items-center gap-3">
                  <div className="p-2 bg-indigo-500/10 rounded-lg">
                    <BrainCircuit className="text-indigo-500 w-6 h-6" />
                  </div>
                  <div>
                    <h3 className="text-2xl font-bold text-white tracking-tight">
                      {activeRound === 0
                        ? "Aptitude & Reasoning"
                        : activeRound === 1
                          ? "DSA Mastery Round"
                          : "HR Behavioral Round"}
                    </h3>
                    <p className="text-slate-500 text-sm">
                      Review your question set and topics
                    </p>
                  </div>
                </div>

                {/* Total Questions Badge - ques_bank.apti.length */}
                <div className="flex flex-col items-end">
                  <span className="text-slate-400 text-xs uppercase tracking-widest font-semibold">
                    Total Questions
                  </span>
                  <span className="text-3xl font-black text-indigo-400">
                    {activeRound === 0
                      ? assesement?.ques_bank?.apti?.length
                      : activeRound === 1
                        ? assesement?.ques_bank?.dsa?.length
                        : assesement?.ques_bank?.hr?.length}
                  </span>
                </div>
              </div>

              <hr className="border-slate-800 mb-8" />

              {/* Topics Section */}
              <div className="space-y-4">
                <div className="flex items-center gap-2 mb-4">
                  <div className="h-1 w-8 bg-indigo-500 rounded-full"></div>
                  <h4 className="text-slate-300 font-semibold uppercase text-xs tracking-wider">
                    Included Topics
                  </h4>
                </div>

                <ul className="grid md:grid-cols-2 lg:grid-cols-3 gap-4">
                  {(activeRound === 0
                    ? assesement?.topics?.apti
                    : activeRound === 1
                      ? assesement?.topics?.dsa
                      : assesement?.topics?.hr
                  )?.map((topic, i) => (
                    <li
                      key={i}
                      className="group flex items-center gap-4 p-3 rounded-xl bg-slate-800/40 border border-slate-700/50 hover:border-indigo-500/50 transition-all duration-300"
                    >
                      {/* Index Circle */}
                      <span className="flex-shrink-0 w-8 h-8 rounded-lg bg-slate-900 flex items-center justify-center text-[12px] font-bold text-indigo-400 border border-slate-700 group-hover:bg-indigo-500 group-hover:text-white transition-colors">
                        {i + 1}
                      </span>

                      {/* Topic Name - formatting underscores to spaces */}
                      <span className="text-slate-300 text-sm font-medium capitalize">
                        {topic.replace(/_/g, " ")}
                      </span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Footer info from your data */}
              <div className="mt-8 pt-4 border-t border-slate-800/50 flex justify-between items-center text-[10px] text-slate-600 uppercase tracking-widest">
                <span>ID: {assesement?._id}</span>
                <span>
                  Last Updated:{" "}
                  {new Date(assesement?.updatedAt).toLocaleDateString()}
                </span>
              </div>
            </div>
          </div>

          {/* Right Content: CTA & Iconography */}
          <div className="lg:col-span-4 sticky top-12 space-y-6">
            <div
              className="relative aspect-square rounded-[3rem] bg-indigo-600 flex items-center justify-center overflow-hidden group"
              data-aos="flip-left"
              data-aos-duration="1500"
            >
              {/* Animated Background Blobs */}
              <div className="absolute top-0 -left-10 w-40 h-40 bg-white/20 rounded-full blur-3xl animate-pulse" />
              <div className="absolute bottom-0 -right-10 w-40 h-40 bg-purple-500/30 rounded-full blur-3xl animate-bounce" />

              <div className="relative z-10 text-white transform group-hover:scale-125 transition-transform duration-700">
                {React.cloneElement(rounds[activeRound].icon, {
                  size: 120,
                  strokeWidth: 1,
                })}
              </div>
            </div>

            <button
              type="button"
              onClick={handleTestStart}
              data-aos="fade-up"
              data-aos-anchor-placement="bottom-bottom"
              className="w-full py-6 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-[2rem] text-white font-black text-xl flex items-center justify-center gap-3 shadow-[0_20px_50px_rgba(79,70,229,0.3)] hover:shadow-indigo-500/50 hover:-translate-y-1 transition-all active:scale-95 group"
            >
              START ROUND {activeRound + 1}
              <ArrowRight className="group-hover:translate-x-2 transition-transform" />
            </button>

            <div
              className="flex items-center justify-center gap-2 text-slate-500 text-xs font-bold uppercase tracking-widest"
              data-aos="fade-in"
            >
              <Lock size={12} /> Encrypted Session
            </div>
          </div>
        </main>
      </div>
    </>
  );
};

export default InterviewGauntlet;

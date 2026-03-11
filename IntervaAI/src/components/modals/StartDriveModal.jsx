import React, { useState } from "react";
import {
  X,
  Zap,
  Terminal,
  ShieldAlert,
  Rocket,
  Target,
  Quote,
} from "lucide-react";
import toast from "react-hot-toast";
import api from "../../config/API";
import { useNavigate } from "react-router-dom";

const StartDriveModal = ({
  onClose,
  toughnes,
  motivation = "Your only limit is your mind. Let's make this happen.",
  buttonText = "INITIATE SIMULATION",
}) => {
  const [details, setDetails] = useState({
    toughness:
      toughnes === "Medium"
        ? "Intermediate"
        : toughnes === "Easy"
          ? "Beginner"
          : "Advanced",
    jobdesc: "",
  });


  const navigate = useNavigate();

  const difficultyLevels = [
    {
      label: "Beginner",
      color: "bg-emerald-500",
      desc: "Fundamentals & Basics",
    },
    {
      label: "Intermediate",
      color: "bg-indigo-500",
      desc: "Standard Industry Prep",
    },
    {
      label: "Advanced",
      color: "bg-purple-500",
      desc: "Complex Logic & Scenarios",
    },
  ];

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/interview/test-generator", details);
      console.log("Generated Test : ", res?.data?.data?._id);
      toast.success(res?.data?.message || "Test Created");

      navigate(`/interview-gauntlet/${res?.data?.data?._id}`);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <>
      <div className="fixed inset-0 z-100 flex items-center justify-center backdrop-blur-2xl">
        {/* MODAL CONTAINER */}
          <button type="button" onClick={onClose} className="p-5 absolute top-0 right-0">
            <X color="white" size={20} />
          </button>
        <div className="relative w-full h-[90vh] overflow-y-auto max-w-2xl bg-slate-900 border border-white/10 rounded-[2.5rem] shadow-2xl overflow-hidden animate-in zoom-in-95 duration-300">
          {/* TOP GRADIENT BAR */}
          <div className="h-2 w-full bg-linear-to-r from-indigo-500 via-purple-500 to-rose-500" />


          <div className="p-8 md:p-12">
            {/* HEADER */}
            <div className="flex items-center gap-4 mb-10">
              <div className="p-4 bg-indigo-500/20 rounded-2xl text-indigo-400">
                <Terminal size={32} />
              </div>
              <div>
                <h2 className="text-3xl font-black text-white tracking-tight">
                  Configure Drive
                </h2>
                <p className="text-slate-400 font-medium">
                  Set your parameters for the session
                </p>
              </div>
            </div>

            <form className="space-y-8" onSubmit={handleSubmit}>
              {/* TOUGHNESS SELECTOR */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-indigo-400 mb-4">
                  <ShieldAlert size={14} /> Challenge Level
                </label>
                <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
                  {difficultyLevels.map((level) => (
                    <button
                      key={level.label}
                      type="button"
                      onClick={() =>
                        setDetails((prev) => ({
                          ...prev,
                          toughness: level.label,
                        }))
                      }
                      className={`relative p-4 rounded-2xl border-2 transition-all duration-300 text-left group ${
                        details.toughness === level.label
                          ? "border-indigo-500 bg-indigo-500/10"
                          : "border-white/5 bg-white/5 hover:border-white/20"
                      }`}
                    >
                      <div
                        className={`w-2 h-2 rounded-full mb-2 ${level.color}`}
                      />
                      <p
                        className={`font-bold text-sm ${details.toughness === level.label ? "text-white" : "text-slate-400"}`}
                      >
                        {level.label}
                      </p>
                      <p className={`text-[10px] text-slate-500 leading-tight mt-1 opacity-0 group-hover:opacity-100 ${details.toughness === level.label ? "opacity-100" : ""} transition-opacity`}>
                        {level.desc}
                      </p>
                    </button>
                  ))}
                </div>
              </div>

              {/* JOB DESCRIPTION TEXTAREA */}
              <div>
                <label className="flex items-center gap-2 text-xs font-black uppercase tracking-[0.2em] text-purple-400 mb-4">
                  <Target size={14} /> Target Job Description
                </label>
                <textarea
                  value={details.jobdesc}
                  onChange={(e) =>
                    setDetails((prev) => ({ ...prev, jobdesc: e.target.value }))
                  }
                  placeholder="Paste the JD here. Our AI will tailor the questions to match the required skills..."
                  className="w-full h-32 p-5 rounded-2xl bg-white/5 border border-white/10 text-slate-200 placeholder:text-slate-600 focus:outline-none focus:ring-2 focus:ring-purple-500/50 focus:border-purple-500/50 transition-all resize-none"
                  required
                />
              </div>

              {/* MOTIVATION SECTION */}
              <div className="relative p-6 rounded-3xl bg-indigo-500/5 border border-indigo-500/10 overflow-hidden group">
                <Quote
                  className="absolute -top-2 -left-2 text-indigo-500/10 group-hover:scale-150 transition-transform duration-700"
                  size={80}
                />
                <p className="relative z-10 text-center italic text-indigo-300 font-medium leading-relaxed">
                  "{motivation}"
                </p>
              </div>

              {/* START BUTTON */}
              <button
                type="submit"
                className="group relative w-full py-5 bg-white rounded-2xl overflow-hidden transition-all active:scale-95 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-indigo-600 via-purple-600 to-rose-600 opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
                <span className="relative z-10 flex items-center justify-center gap-3 font-black text-slate-900 group-hover:text-white transition-colors duration-300 tracking-widest">
                  <Rocket size={20} className="group-hover:animate-bounce" />
                  {buttonText}
                </span>
              </button>
            </form>
          </div>

          {/* BOTTOM DECORATION */}
          <div className="flex justify-center pb-6">
            <div className="flex gap-1">
              {[...Array(3)].map((_, i) => (
                <div
                  key={i}
                  className="w-1 h-1 rounded-full bg-slate-700 animate-pulse"
                  style={{ animationDelay: `${i * 0.2}s` }}
                />
              ))}
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default StartDriveModal;

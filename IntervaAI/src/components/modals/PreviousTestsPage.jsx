import React, { useEffect, useState } from "react";
import {
  History,
  RotateCcw,
  Clock,
  Trophy,
  ChevronRight,
  Calendar,
  Brain,
  Code2,
  UserCircle2,
  Tag,
} from "lucide-react";
import api from "../../config/API";
import toast from "react-hot-toast";
import { useNavigate } from "react-router-dom";

const PreviousTestsPage = () => {
  const [previous, setPrevious] = useState([]);
  // Agar data array nahi hai to handle karne ke liye (just in case)
  const tests = Array.isArray(previous) ? previous : [previous];

  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    });
  };

  const getDifficultyColor = (level) => {
    switch (level?.toLowerCase()) {
      case "easy":
        return "text-emerald-400 bg-emerald-500/10 border-emerald-500/20";
      case "medium":
        return "text-amber-400 bg-amber-500/10 border-amber-500/20";
      case "hard":
        return "text-rose-400 bg-rose-500/10 border-rose-500/20";
      default:
        return "text-indigo-400 bg-indigo-500/10 border-indigo-500/20";
    }
  };

  const fetchPreviousTests = async () => {
    try {
      const response = await api.get(import.meta.env.VITE_ALL_PREV_TESTS);
      console.log(response?.data?.data);
      setPrevious(response?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  useEffect(() => {
    fetchPreviousTests();
  }, []);

  return (
    <div className="min-h-screen bg-slate-950 text-slate-200 p-6 md:p-10 font-sans">
      <div className="max-w-7xl mx-auto">
        {/* ================= HEADER ================= */}
        <header className="flex flex-col md:flex-row md:items-center justify-between gap-4 mb-12 animate-in fade-in slide-in-from-top-4 duration-700">
          <div>
            <div className="flex items-center gap-3 mb-2">
              <div className="p-2 bg-indigo-500/20 rounded-lg text-indigo-400">
                <History size={28} />
              </div>
              <h1 className="text-3xl md:text-4xl font-black text-white tracking-tight">
                Assessment Archive
              </h1>
            </div>
            <p className="text-slate-400">
              Revisit and reattempt your previously generated custom tests.
            </p>
          </div>

          <div className="bg-slate-900/50 border border-slate-800 rounded-2xl px-6 py-3 backdrop-blur-md">
            <span className="text-slate-500 text-sm font-bold uppercase tracking-widest">
              Total Sessions
            </span>
            <p className="text-2xl font-black text-indigo-400">
              {tests.length}
            </p>
          </div>
        </header>

        {/* ================= TEST GRID ================= */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
          {tests.map((test, index) => (
            <div
              key={test._id || index}
              className="group relative bg-slate-900/40 border border-slate-800 rounded-[2rem] overflow-hidden hover:border-indigo-500/50 transition-all duration-500 hover:shadow-[0_20px_50px_rgba(79,70,229,0.15)] animate-in fade-in zoom-in-95 duration-700"
              style={{ animationDelay: `${index * 100}ms` }}
            >
              {/* Card Header */}
              <div className="p-6 md:p-8">
                <div className="flex justify-between items-start mb-6">
                  <div className="flex items-center gap-3">
                    <div
                      className={`px-4 py-1 rounded-full border text-xs font-black uppercase tracking-widest ${getDifficultyColor(test.difficulty)}`}
                    >
                      {test.difficulty}
                    </div>
                    <div className="flex items-center gap-1.5 text-slate-500 text-sm font-medium">
                      <Calendar size={14} />
                      {formatDate(test.createdAt)}
                    </div>
                  </div>
                  <button className="text-slate-600 hover:text-white transition-colors">
                    <Tag size={20} />
                  </button>
                </div>

                {/* Main Stats Grid */}
                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-800/30 rounded-2xl p-4 border border-white/5 group-hover:bg-indigo-500/5 transition-colors">
                    <div className="flex items-center gap-2 text-indigo-400 mb-1">
                      <Brain size={16} />
                      <span className="text-[10px] font-black uppercase tracking-tighter">
                        Aptitude
                      </span>
                    </div>
                    <p className="text-lg font-bold text-white">
                      {test.maxMarks?.apti} p{" "}
                      <span className="text-slate-500 text-xs">
                        / {test.timelimit?.apti}m
                      </span>
                    </p>
                  </div>

                  <div className="bg-slate-800/30 rounded-2xl p-4 border border-white/5 group-hover:bg-purple-500/5 transition-colors">
                    <div className="flex items-center gap-2 text-purple-400 mb-1">
                      <Code2 size={16} />
                      <span className="text-[10px] font-black uppercase tracking-tighter">
                        DSA
                      </span>
                    </div>
                    <p className="text-lg font-bold text-white">
                      {test.maxMarks?.dsa} p{" "}
                      <span className="text-slate-500 text-xs">
                        / {test.timelimit?.dsa}m
                      </span>
                    </p>
                  </div>

                  <div className="bg-slate-800/30 rounded-2xl p-4 border border-white/5 group-hover:bg-rose-500/5 transition-colors">
                    <div className="flex items-center gap-2 text-rose-400 mb-1">
                      <UserCircle2 size={16} />
                      <span className="text-[10px] font-black uppercase tracking-tighter">
                        HR
                      </span>
                    </div>
                    <p className="text-lg font-bold text-white">
                      {test.maxMarks?.hr} p{" "}
                      <span className="text-slate-500 text-xs">
                        / {test.timelimit?.hr}m
                      </span>
                    </p>
                  </div>
                </div>

                {/* Topics Preview */}
                <div className="space-y-4 mb-8">
                  <h4 className="text-xs font-black text-slate-500 uppercase tracking-widest">
                    Core Focus Topics
                  </h4>
                  <div className="flex flex-wrap gap-2">
                    {[...test.topics.apti, ...test.topics.dsa]
                      .slice(0, 6)
                      .map((topic, i) => (
                        <span
                          key={i}
                          className="px-3 py-1 bg-white/5 rounded-lg text-[11px] font-medium text-slate-400 border border-white/5"
                        >
                          {topic.replace("_", " ")}
                        </span>
                      ))}
                    {test.topics.apti.length + test.topics.dsa.length > 6 && (
                      <span className="px-3 py-1 bg-indigo-500/10 rounded-lg text-[11px] font-bold text-indigo-400">
                        +{test.topics.apti.length + test.topics.dsa.length - 6}{" "}
                        More
                      </span>
                    )}
                  </div>
                </div>

                {/* Action Button */}
                <button
                  className="w-full group/btn relative flex items-center justify-center gap-3 py-4 bg-indigo-600 hover:bg-indigo-500 text-white rounded-2xl font-black tracking-widest transition-all active:scale-95 shadow-lg shadow-indigo-900/20"
                  onClick={() => navigate(`/interview-gauntlet/${test._id}`)}
                >
                  <RotateCcw
                    size={18}
                    className="group-hover/btn:rotate-[-180deg] transition-transform duration-500"
                  />
                  REATTEMPT ASSESSMENT
                  <ChevronRight
                    size={18}
                    className="group-hover/btn:translate-x-1 transition-transform"
                  />
                </button>
              </div>

              {/* Decorative Background Element */}
              <div className="absolute -bottom-12 -right-12 w-32 h-32 bg-indigo-500/10 blur-3xl rounded-full group-hover:bg-indigo-500/20 transition-all duration-500" />
            </div>
          ))}

          {/* Empty State */}
          {tests.length === 0 && (
            <div className="col-span-full py-20 text-center bg-slate-900/20 border-2 border-dashed border-slate-800 rounded-[3rem]">
              <div className="inline-flex p-6 bg-slate-800 rounded-full text-slate-600 mb-4">
                <History size={48} />
              </div>
              <h3 className="text-xl font-bold text-white mb-2">
                No History Found
              </h3>
              <p className="text-slate-500">
                You haven't generated any tests yet. Start your first session
                now!
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default PreviousTestsPage;

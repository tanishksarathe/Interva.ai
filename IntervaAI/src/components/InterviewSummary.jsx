import React from "react";
import {
  User,
  Mail,
  Phone,
  GraduationCap,
  Calendar,
  Code2,
  BrainCircuit,
  Users,
  Clock,
  Award,
  ArrowUpRight,
  Download,
  CheckCircle2,
  XCircle,
} from "lucide-react";


const InterviewSummary = ({ user, summary }) => {
    // Helpers for formatting
  const formatDate = (dateStr) =>
    new Date(dateStr).toLocaleDateString("en-IN", {
      day: "numeric",
      month: "short",
      year: "numeric",
    });

  const stats = [
    {
      label: "Overall Percentile",
      value: `${summary.overallPercentile.toFixed(1)}%`,
      icon: Award,
      color: "text-indigo-400",
    },
    {
      label: "Total Time",
      value: `${summary.timeAnalysis.totalTimeTaken}m`,
      icon: Clock,
      color: "text-amber-400",
    },
    {
      label: "Difficulty",
      value: summary.difficulty,
      icon: BrainCircuit,
      color: "text-emerald-400",
    },
  ];

  return (
    <div className="min-h-screen bg-slate-950 p-4 md:p-8 font-sans text-slate-300 print:bg-white print:text-slate-900">
      {/* Report Container */}
      <div className="max-w-5xl mx-auto bg-slate-900/50 border border-slate-800 rounded-3xl overflow-hidden shadow-2xl print:border-none print:shadow-none">
        {/* Header / Banner */}
        <div className="relative bg-gradient-to-r from-indigo-600 to-violet-700 p-8 md:p-12">
          <div className="absolute top-0 right-0 p-8 opacity-10">
            <Award size={160} />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-8 relative z-10">
            <div className="relative">
              <img
                src={user.photo.url}
                alt={user.fullname}
                className="w-32 h-32 rounded-2xl object-cover border-4 border-white/20 shadow-2xl"
              />
              <div className="absolute -bottom-2 -right-2 bg-emerald-500 p-1.5 rounded-lg shadow-lg">
                <CheckCircle2 size={20} className="text-white" />
              </div>
            </div>

            <div className="text-center md:text-left space-y-2">
              <h1 className="text-4xl font-black text-white tracking-tight">
                {user.fullname}
              </h1>
              <p className="text-indigo-100 font-medium tracking-wide flex items-center justify-center md:justify-start gap-2">
                <GraduationCap size={18} /> {user.degree} • {user.branch} (
                {user.passout})
              </p>
              <div className="flex flex-wrap justify-center md:justify-start gap-4 pt-2">
                <span className="flex items-center gap-1.5 text-xs text-indigo-100/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <Mail size={12} /> {user.email}
                </span>
                <span className="flex items-center gap-1.5 text-xs text-indigo-100/80 bg-white/10 px-3 py-1 rounded-full backdrop-blur-md">
                  <Phone size={12} /> {user.phone}
                </span>
              </div>
            </div>
          </div>
        </div>

        {/* Quick Stats Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 border-b border-slate-800">
          {stats.map((stat, i) => (
            <div
              key={i}
              className="flex items-center gap-4 p-6 border-r border-slate-800 last:border-r-0"
            >
              <div className={`p-3 rounded-xl bg-slate-800/50 ${stat.color}`}>
                <stat.icon size={24} />
              </div>
              <div>
                <p className="text-[10px] font-black uppercase tracking-widest text-slate-500">
                  {stat.label}
                </p>
                <p className="text-xl font-bold text-white">{stat.value}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Main Content Body */}
        <div className="p-8 md:p-12 space-y-12">
          {/* Performance Overview */}
          <section className="space-y-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-indigo-500 border-l-4 border-indigo-500 pl-4">
              Performance Breakdown
            </h3>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
              {[
                {
                  name: "DSA Engineering",
                  score: summary.scores.dsa.score,
                  max: summary.maxScores.dsa,
                  icon: Code2,
                  perf: summary.performance.dsa,
                },
                {
                  name: "Aptitude Logic",
                  score: summary.scores.apti,
                  max: summary.maxScores.apti,
                  icon: BrainCircuit,
                  perf: summary.performance.apti,
                },
                {
                  name: "HR & Behavior",
                  score: summary.scores.hr,
                  max: summary.maxScores.hr,
                  icon: Users,
                  perf: summary.performance.hr,
                },
              ].map((item, i) => (
                <div
                  key={i}
                  className="bg-slate-800/30 rounded-2xl p-6 border border-slate-800 hover:border-slate-700 transition-colors"
                >
                  <div className="flex justify-between items-start mb-4">
                    <item.icon className="text-slate-500" size={20} />
                    <span className="text-[10px] font-bold text-slate-500 bg-slate-900 px-2 py-1 rounded">
                      ACCURACY: {item.perf.accuracy}%
                    </span>
                  </div>
                  <h4 className="font-bold text-white mb-1">{item.name}</h4>
                  <div className="flex items-baseline gap-2 mb-4">
                    <span className="text-3xl font-black text-indigo-400">
                      {item.score}
                    </span>
                    <span className="text-slate-600 font-bold text-sm">
                      / {item.max}
                    </span>
                  </div>
                  {/* Mini Progress Bar */}
                  <div className="h-1.5 w-full bg-slate-800 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-indigo-500 rounded-full"
                      style={{ width: `${(item.score / item.max) * 100}%` }}
                    />
                  </div>
                </div>
              ))}
            </div>
          </section>

          {/* Time & Feedback Row */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12 pt-6">
            {/* Time Analysis */}
            <section className="space-y-4">
              <h3 className="text-xs font-black uppercase tracking-widest text-slate-500">
                Time Utilization
              </h3>
              <div className="space-y-4">
                {[
                  {
                    label: "DSA Problems",
                    time: summary.timeAnalysis.dsaTime,
                    color: "bg-indigo-500",
                  },
                  {
                    label: "Aptitude",
                    time: summary.timeAnalysis.aptiTime,
                    color: "bg-amber-500",
                  },
                  {
                    label: "HR Interview",
                    time: summary.timeAnalysis.hrTime,
                    color: "bg-emerald-500",
                  },
                ].map((t, i) => (
                  <div key={i} className="space-y-1">
                    <div className="flex justify-between text-[10px] font-bold uppercase">
                      <span className="text-slate-400">{t.label}</span>
                      <span className="text-slate-300">{t.time} min</span>
                    </div>
                    <div className="h-1 w-full bg-slate-800 rounded-full">
                      <div
                        className={`h-full ${t.color} rounded-full`}
                        style={{
                          width: `${(t.time / summary.timeAnalysis.totalTimeTaken) * 100}%`,
                        }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </section>

            {/* AI Feedback */}
            <section className="bg-indigo-500/5 border border-indigo-500/20 p-6 rounded-2xl relative overflow-hidden">
              <div className="absolute -right-4 -bottom-4 opacity-5 rotate-12">
                <CheckCircle2 size={100} />
              </div>
              <h3 className="text-xs font-black uppercase tracking-widest text-indigo-400 mb-3">
                Interva AI Feedback
              </h3>
              <p className="text-slate-300 italic leading-relaxed font-medium">
                "{summary.feedback}"
              </p>
              <div className="mt-4 flex items-center gap-2 text-[10px] font-bold text-emerald-500 uppercase">
                <ArrowUpRight size={14} /> Performance: Stable (
                {summary.improvement.hrDiff})
              </div>
            </section>
          </div>

          {/* DSA Code Submissions Section */}
          <section className="space-y-6 pt-6">
            <h3 className="text-sm font-black uppercase tracking-[0.2em] text-slate-500">
              DSA Technical Submissions
            </h3>
            <div className="space-y-4">
              {summary?.scores?.dsa?.code?.map((codeObj, idx) => (
                <div
                  key={idx}
                  className="bg-slate-950 rounded-xl border border-slate-800 overflow-hidden"
                >
                  <div className="flex items-center justify-between px-5 py-3 bg-slate-900 border-b border-slate-800">
                    <span className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">
                      Submission #0{idx + 1}
                    </span>
                    <span className="text-[10px] text-indigo-400 font-mono">
                      ID: {codeObj?.questionId?.$oid?.slice(-6)}
                    </span>
                  </div>
                  <pre className="p-5 overflow-x-auto text-[11px] font-mono leading-relaxed text-slate-400 bg-[#0d1117]">
                    {codeObj.codeSubmitted}
                  </pre>
                </div>
              ))}
            </div>
          </section>
        </div>

        {/* Footer */}
        <div className="bg-slate-950/80 p-6 border-t border-slate-800 text-center">
          <p className="text-[9px] text-slate-600 font-black uppercase tracking-[0.3em]">
            Report Generated on {formatDate(summary.createdAt.$date)} • Interva
            AI Verification Engine
          </p>
        </div>
      </div>

      {/* Action Floating Button (Hidden on Print) */}
      <button
        onClick={() => window.print()}
        className="fixed bottom-8 right-8 bg-indigo-600 hover:bg-indigo-500 text-white p-4 rounded-full shadow-2xl transition-all hover:scale-110 active:scale-90 print:hidden"
      >
        <Download size={24} />
      </button>
    </div>
  );
};

export default InterviewSummary;

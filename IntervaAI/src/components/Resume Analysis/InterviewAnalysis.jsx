import React from "react";
import {Heart,
ShieldCheck,
UserCircle2,
MessageSquare,
Flag,
Zap,
TrendingUp,
AlertOctagon,
CheckCircle2,
HelpCircle,
Activity,
Brain,
ChevronRight,
Fingerprint,
Award,
BarChart3,
BookOpen,
Coffee,
Info,
Layout,
Microscope,
ShieldAlert,
Sparkles,
Target,
UserCircle,
XCircle,
Briefcase,
Users,
Scale,
BarChart,
ChessKnight,
AlertCircle,
User,
Trophy,
Lightbulb,
UserCheck,
Gauge,
Search,
MessageCircle,
AlertTriangle,
Star,
Compass,
ArrowRightCircle,
Code2,
Terminal,
Cpu,
Rocket,
Binary,
CheckCircle} from "lucide-react";

const InterviewAnalysis = (props) => {
  const data = props.content;

  const role = props.role;

  console.log("Data from Modal : ", data);
  console.log(role);

  const getGradeColor = (grade) => {
    if (grade === "A") return "text-green-600";
    if (grade === "B") return "text-blue-600";
    if (grade === "C") return "text-yellow-600";
    if (grade === "D") return "text-orange-600";
    return "text-red-600";
  };

  return (
    <>
    
      {role === "hr" && (
        <div className="min-h-screen bg-(--background) p-4 md:p-10 font-sans text-(--text-primary)">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* --- SECTION 1: THE CORE SIGNAL --- */}
            <header className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 bg-(--bgclr) rounded-[3rem] p-10 text-black shadow-2xl relative overflow-hidden group border border-white/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-5 py-1.5 rounded-full bg-black/20 backdrop-blur-md text-[10px] font-black border border-white/20 uppercase tracking-[0.2em]">
                      {data.summary.interview_type_detected || "Behavioral"}{" "}
                      Assessment
                    </span>
                    <span className="px-5 py-1.5 rounded-full bg-white/20 text-[10px] font-black border border-white/10 uppercase tracking-widest">
                      HR Readiness Signal
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-4 leading-none flex items-center gap-4">
                    Behavioral{" "}
                    <span className="opacity-70 font-light italic">DNA</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl border-l-4 border-white/30 pl-8 mt-8 italic leading-relaxed">
                    "{data.summary.verdict}"
                  </p>
                </div>
                {/* Grade Watermark */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-black opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  {data.summary.grade}
                </div>
              </div>

              <div className="bg-(--white) rounded-[3.5rem] p-8 shadow-xl border border-(--primary)/10 flex flex-col items-center justify-center text-center">
                <div className="relative mb-6">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="74"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-(--accent)/20"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="74"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={464.7}
                      strokeDashoffset={
                        464.7 - (464.7 * data.summary.overall_score) / 100
                      }
                      className="text-(--primary)"
                      strokeLinecap="round"
                    />
                  </svg>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-5xl font-black text-(--text-primary)">
                      {data.summary.overall_score}
                    </span>
                    <span className="text-[10px] font-black uppercase tracking-widest opacity-60">
                      EQ Score
                    </span>
                  </div>
                </div>
                <div className="p-4 bg-(--surface)/50 rounded-2xl w-full border border-(--primary)/5">
                  <p className="text-[10px] font-black text-(--text-secondary) uppercase mb-1">
                    Session Status
                  </p>
                  <p className="text-lg font-black text-(--primary)">
                    {data.hiring_recommendation.recommendation}
                  </p>
                </div>
              </div>
            </header>

            {/* --- SECTION 2: CANDIDATE BENTO BOX --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              <div className="bg-(--surface) rounded-[3rem] p-8 border border-white shadow-lg space-y-6">
                <h3 className="text-2xl font-black flex items-center gap-3 italic">
                  <Fingerprint className="text-(--primary)" /> Candidate
                  Persona
                </h3>
                <div className="space-y-4">
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <span className="text-[10px] font-black uppercase opacity-60">
                      Confidence
                    </span>
                    <span className="font-black text-(--primary)">
                      {data.candidate_profile.confidence_inferred}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <span className="text-[10px] font-black uppercase opacity-60">
                      Experience Level
                    </span>
                    <span className="font-black text-(--primary)">
                      {data.candidate_profile.experience_level_inferred}
                    </span>
                  </div>
                  <div className="flex justify-between items-center p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <span className="text-[10px] font-black uppercase opacity-60">
                      Comm. Style
                    </span>
                    <span className="font-black text-(--primary)">
                      {data.candidate_profile.communication_style}
                    </span>
                  </div>
                </div>
                <div className="p-5 bg-(--text-primary) rounded-4xl text-indigo-600">
                  <p className="text-[10px] font-black uppercase text-(--accent) mb-3 tracking-widest">
                    Psychological Pattern
                  </p>
                  <div className="grid grid-cols-2 gap-4">
                    {Object.entries(data.behavioral_patterns).map(
                      ([key, val]) => (
                        <div key={key}>
                          <p className="text-[8px] opacity-60 uppercase">
                            {key.replace(/_/g, " ")}
                          </p>
                          <p className="text-xs font-bold text-(--accent)">
                            {val}
                          </p>
                        </div>
                      ),
                    )}
                  </div>
                </div>
              </div>

              {/* Behavioral Radar Scoring */}
              <div className="lg:col-span-2 bg-(--white) rounded-[3rem] p-10 shadow-xl border border-(--primary)/5 relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-5">
                  <Brain size={140} />
                </div>
                <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                  <Activity className="text-(--primary)" /> Behavioral
                  Score Matrix
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {Object.entries(data.behavioral_scores).map(([key, val]) => (
                    <div key={key} className="space-y-2 group">
                      <div className="flex justify-between items-end">
                        <span className="text-[10px] font-black uppercase tracking-wider text-(--text-secondary) opacity-70 group-hover:opacity-100 transition-opacity">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-lg font-black text-(--primary)">
                          {val.score}%
                        </span>
                      </div>
                      <div className="h-2.5 bg-(--surface) rounded-full overflow-hidden p-0.5 border border-(--primary)/10">
                        <div
                          className="h-full bg-(--bgclr) rounded-full shadow-lg"
                          style={{ width: `${val.score}%` }}
                        ></div>
                      </div>
                      <p className="text-[11px] font-medium opacity-70 leading-relaxed italic truncate">
                        {val.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 3: QUESTION LOG & ANALYSIS --- */}
            <div className="space-y-6">
              <h3 className="text-3xl font-black tracking-tighter flex items-center gap-3">
                <MessageSquare className="text-(--primary)" /> Detailed Log
                Analysis
              </h3>
              <div className="grid grid-cols-1 gap-4">
                {data.question_analysis.map((q, i) => (
                  <div
                    key={i}
                    className="bg-white rounded-4xl p-8 shadow-md border border-(--primary)/5 hover:border-(--primary)/20 transition-all group"
                  >
                    <div className="flex flex-col lg:flex-row gap-8 items-start lg:items-center">
                      <div className="flex items-center gap-6 lg:w-1/4">
                        <div className="w-12 h-12 bg-(--text-primary) text-black/20 rounded-2xl flex items-center justify-center font-black text-xl shadow-lg">
                          {q.question_number}
                        </div>
                        <div>
                          <p className="text-[10px] font-black uppercase text-(--primary) tracking-widest">
                            Quality
                          </p>
                          <p className="font-bold text-(--text-primary)">
                            {q.answer_quality}
                          </p>
                        </div>
                      </div>
                      <div className="flex-1 bg-(--surface)/30 p-6 rounded-3xl border border-white">
                        <p className="text-[10px] font-black uppercase text-(--text-secondary) mb-2">
                          Behavioral Evidence
                        </p>
                        <p className="text-sm font-medium leading-relaxed italic opacity-80">
                          "{q.reason}"
                        </p>
                      </div>
                      <div className="lg:w-1/5 flex flex-col items-center justify-center bg-(--bgclr)/5 p-4 rounded-3xl border border-(--accent)/20">
                        <p className="text-[9px] font-black uppercase text-(--primary) mb-1">
                          Signal: {q.behavioral_signal}
                        </p>
                        <div className="text-2xl font-black text-(--primary)">
                          {q.relevance_score}%
                        </div>
                        <p className="text-[8px] font-bold opacity-40">
                          RELEVANCE
                        </p>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 4: STRENGTHS, WEAKNESSES & FLAGS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-white rounded-[3rem] p-10 shadow-lg border-b-8 border-green-500/10">
                <h4 className="text-xl font-black text-green-600 flex items-center gap-3 uppercase tracking-tighter mb-8">
                  <CheckCircle2 size={24} /> Validated Strengths
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {data.candidate_profile.strengths.map((s, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-green-50/50 border border-green-100 flex items-start gap-4"
                    >
                      <Award
                        className="text-green-600 mt-1 shrink-0"
                        size={18}
                      />
                      <p className="text-sm font-bold text-green-900 leading-snug">
                        {s}
                      </p>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-white rounded-[3rem] p-10 shadow-lg border-b-8 border-red-500/10">
                <h4 className="text-xl font-black text-red-500 flex items-center gap-3 uppercase tracking-tighter mb-8">
                  <Zap size={24} /> Observations & Gaps
                </h4>
                <div className="grid grid-cols-1 gap-4">
                  {data.candidate_profile.weaknesses.map((w, i) => (
                    <div
                      key={i}
                      className="p-5 rounded-2xl bg-red-50/50 border border-red-100 flex items-start gap-4"
                    >
                      <Activity
                        className="text-red-500 mt-1 shrink-0"
                        size={18}
                      />
                      <p className="text-sm font-bold text-red-900 leading-snug">
                        {w}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 5: RED FLAGS & SUGGESTIONS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="lg:col-span-2 bg-(--white) rounded-[3rem] p-10 shadow-xl border-l-8 border-red-500">
                <h3 className="text-2xl font-black mb-8 text-red-600 flex items-center gap-3">
                  <AlertOctagon size={28} /> Critical Behavioral Risk
                </h3>
                <div className="space-y-4">
                  {data.red_flags.map((flag, i) => (
                    <div
                      key={i}
                      className="flex gap-6 p-6 bg-red-50 rounded-3xl border border-red-100 items-center"
                    >
                      <div className="w-14 h-14 rounded-2xl bg-red-600 text-white shrink-0 flex items-center justify-center font-black shadow-xl">
                        !
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-red-700 mb-1 tracking-widest">
                          Question {flag.question_number} | {flag.type}
                        </p>
                        <p className="text-sm font-bold text-red-900 leading-relaxed">
                          {flag.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-(--text-primary) text-indigo-600 rounded-[3rem] p-10 shadow-2xl relative overflow-hidden">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3 text-(--accent)">
                  <TrendingUp /> Growth Path
                </h3>
                <div className="space-y-6 relative z-10">
                  {data.improvement.map((item, i) => (
                    <div key={i} className="flex gap-4 items-start">
                      <div className="w-6 h-6 rounded-full bg-(--accent) text-(--text-primary) flex items-center justify-center font-black text-[10px] shrink-0">
                        {i + 1}
                      </div>
                      <p className="text-sm font-medium opacity-90 leading-relaxed italic">
                        {item}
                      </p>
                    </div>
                  ))}
                </div>
                <div className="absolute bottom-[-20%] right-[-10%] w-48 h-48 bg-white/5 rounded-full blur-3xl"></div>
              </div>
            </div>

            {/* --- SECTION 6: THE HIRING VERDICT --- */}
            <div className="bg-white rounded-[4rem] p-12 shadow-2xl border-4 border-(--primary)/20 relative overflow-hidden flex flex-col lg:flex-row items-center justify-between gap-12">
              <div className="relative z-10 flex-1">
                <h3 className="text-2xl font-black mb-2 text-(--text-secondary) uppercase tracking-[0.2em] opacity-40">
                  Final HR Verdict
                </h3>
                <p className="text-6xl font-black text-(--primary) mb-6 leading-none tracking-tighter">
                  {data.hiring_recommendation.recommendation}
                </p>
                <div className="p-8 bg-(--surface) rounded-[2.5rem] border border-(--primary)/10">
                  <p className="text-sm font-bold text-(--text-primary) mb-2 italic">
                    Recommendation Context:
                  </p>
                  <p className="text-lg font-medium opacity-80 leading-relaxed">
                    {data.hiring_recommendation.reason}
                  </p>
                </div>
              </div>

              <div className="lg:w-1/3 space-y-8 relative z-10">
                <div className="p-10 bg-(--text-primary) text-black rounded-[3rem] shadow-2xl text-center group cursor-pointer">
                  <p className="text-[10px] font-black uppercase tracking-[0.3em] mb-4 text-(--accent)">
                    Composite EQ Match
                  </p>
                  <p className="text-6xl font-black tracking-tighter group-hover:scale-110 transition-transform">
                    {data.summary.overall_score}%
                  </p>
                </div>
                <div className="flex items-center justify-center gap-4 text-(--primary) font-black uppercase tracking-widest text-sm">
                  Review Complete <ShieldCheck size={20} />
                </div>
              </div>
            </div>

            {/* --- SECTION 7: MENTOR WRAP-UP --- */}
            <footer className="bg-(--white) rounded-[4rem] p-14 text-center relative overflow-hidden shadow-xl border border-(--primary)/10">
              <div className="relative z-10 max-w-4xl mx-auto">
                <Award
                  className="mx-auto text-(--primary) mb-8"
                  size={60}
                />
                <h2 className="text-5xl font-black text-(--text-primary) mb-8 tracking-tighter uppercase italic">
                  The Interva Perspective
                </h2>
                <p className="text-2xl text-(--text-secondary) font-medium leading-relaxed opacity-80 border-y border-(--accent)/30 py-10">
                  {data.overall_feedback}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--bgclr) opacity-5 rounded-full blur-[100px]"></div>
            </footer>
          </div>
        </div>
      )}

      {role === "tr" && (
        <div className="min-h-screen bg-[#0f172a] text-slate-300 p-6 font-mono">
          {/* --- TOP HEADER: OVERALL VERDICT --- */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-4 mb-6">
            <div className="lg:col-span-3 bg-slate-800/50 backdrop-blur-md p-8 rounded-2xl border border-slate-700/50 relative overflow-hidden">
              <div className="absolute top-0 right-0 p-4 opacity-10">
                <Terminal size={120} />
              </div>
              <div className="flex items-center gap-2 mb-4 text-sky-400">
                <BrainCircuit size={20} />
                <span className="text-xs font-bold tracking-widest uppercase italic">
                  Logic Audit Report
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-bold text-white mb-4">
                {data.summary.verdict}
              </h1>
              <p className="text-slate-400 leading-relaxed max-w-2xl border-l-2 border-sky-500 pl-4 bg-sky-500/5 py-2">
                {data.overall_feedback}
              </p>
            </div>

            <div className="bg-gradient-to-br from-slate-800 to-slate-900 p-8 rounded-2xl border border-slate-700 flex flex-col items-center justify-center text-center">
              <div className="text-5xl font-black text-white mb-2">
                {data.summary.grade}
              </div>
              <div className="text-[10px] font-bold tracking-[0.3em] text-slate-500 mb-4">
                OVERALL APTITUDE
              </div>
              <div className="w-full h-1 bg-slate-700 rounded-full overflow-hidden">
                <div
                  className="h-full bg-sky-500"
                  style={{ width: `${data.summary.overall_score}%` }}
                ></div>
              </div>
              <div className="mt-2 text-sky-400 font-bold">
                {data.summary.overall_score}%
              </div>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-6">
            {/* --- LEFT: TECHNICAL CORE METRICS --- */}
            <div className="lg:col-span-4 space-y-6">
              {/* Technical Patterns Grid */}
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
                <h2 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-tight">
                  <Cpu size={18} className="text-sky-400" /> Pattern Recognition
                </h2>
                <div className="space-y-4">
                  {Object.entries(data.technical_patterns).map(
                    ([key, value]) => (
                      <div
                        key={key}
                        className="flex justify-between items-center bg-slate-900/50 p-3 rounded-lg border border-slate-700/50"
                      >
                        <span className="text-[10px] uppercase font-bold text-slate-500">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span
                          className={`text-[11px] font-bold px-2 py-1 rounded ${
                            value === "Strong" || value === "Appropriate"
                              ? "text-emerald-400 bg-emerald-400/10"
                              : "text-amber-400 bg-amber-400/10"
                          }`}
                        >
                          {value}
                        </span>
                      </div>
                    ),
                  )}
                </div>
              </div>

              {/* Proficiency Bars */}
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
                <h2 className="text-sm font-bold text-white mb-6 flex items-center gap-2 uppercase tracking-tight">
                  <BarChart2 size={18} className="text-sky-400" /> Skill
                  Breakdown
                </h2>
                <div className="space-y-6">
                  {Object.entries(data.technical_scores).map(([key, obj]) => (
                    <div key={key} className="group cursor-help">
                      <div className="flex justify-between text-[10px] mb-2 font-bold uppercase tracking-wider">
                        <span>{key.replace(/_/g, " ")}</span>
                        <span className="text-white">{obj.score}%</span>
                      </div>
                      <div className="h-1.5 w-full bg-slate-700 rounded-full">
                        <div
                          className="h-full bg-sky-500 group-hover:bg-sky-400 transition-all"
                          style={{ width: `${obj.score}%` }}
                        ></div>
                      </div>
                      <p className="mt-1.5 text-[10px] text-slate-500 hidden group-hover:block leading-tight">
                        {obj.comment}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- CENTER: QUESTION FLOW & LOGIC --- */}
            <div className="lg:col-span-5 space-y-6">
              <h2 className="text-xs font-black text-slate-500 uppercase tracking-[0.3em]">
                Code & Algorithm Review
              </h2>
              {data.question_analysis.map((q, i) => (
                <div
                  key={i}
                  className="bg-slate-800/40 p-6 rounded-2xl border border-slate-700 relative hover:bg-slate-800/60 transition-all group"
                >
                  <div className="flex justify-between items-start mb-6">
                    <div className="flex items-center gap-4">
                      <div className="h-10 w-10 rounded-xl bg-slate-900 border border-slate-700 flex items-center justify-center text-sky-400 font-black">
                        0{q.question_number}
                      </div>
                      <div>
                        <div className="text-[10px] font-bold text-slate-500 uppercase">
                          Correctness
                        </div>
                        <div className="text-xs font-bold text-white">
                          {q.correctness}
                        </div>
                      </div>
                    </div>
                    <div
                      className={`text-[10px] px-3 py-1 rounded-full font-black uppercase ${
                        q.answer_quality === "Strong"
                          ? "bg-emerald-500/20 text-emerald-400"
                          : "bg-rose-500/20 text-rose-400"
                      }`}
                    >
                      {q.answer_quality}
                    </div>
                  </div>

                  <div className="grid grid-cols-2 gap-4 mb-4">
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-700/30">
                      <div className="text-[9px] text-slate-500 uppercase mb-1">
                        Algorithmic Reasoning
                      </div>
                      <div className="text-[11px] font-bold text-slate-300">
                        {q.algorithmic_reasoning}
                      </div>
                    </div>
                    <div className="bg-slate-900/40 p-3 rounded-lg border border-slate-700/30">
                      <div className="text-[9px] text-slate-500 uppercase mb-1">
                        Problem Understanding
                      </div>
                      <div className="text-[11px] font-bold text-slate-300">
                        {q.problem_understanding}
                      </div>
                    </div>
                  </div>

                  <p className="text-xs leading-relaxed text-slate-400 bg-black/20 p-3 rounded-lg italic">
                    "{q.reason}"
                  </p>
                </div>
              ))}
            </div>

            {/* --- RIGHT: FINAL DECISION & FLAGS --- */}
            <div className="lg:col-span-3 space-y-6">
              {/* Recommendation */}
              <div
                className={`p-6 rounded-2xl border-t-4 shadow-2xl ${
                  data.hiring_recommendation.recommendation === "Proceed"
                    ? "bg-emerald-950 border-emerald-500"
                    : data.hiring_recommendation.recommendation === "Borderline"
                      ? "bg-amber-950 border-amber-500"
                      : "bg-rose-950 border-rose-500"
                }`}
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.2em] text-white/50 mb-2">
                  Final Recommendation
                </h3>
                <div className="text-3xl font-black text-white mb-3 tracking-tighter">
                  {data.hiring_recommendation.recommendation}
                </div>
                <p className="text-[11px] text-white/70 leading-relaxed font-bold">
                  {data.hiring_recommendation.reason}
                </p>
              </div>

              {/* Profile Quick-Look */}
              <div className="bg-slate-800/30 p-6 rounded-2xl border border-slate-700">
                <div className="flex items-center gap-3 mb-6">
                  <div className="p-2 bg-sky-500/10 rounded-lg text-sky-400">
                    <Layers size={20} />
                  </div>
                  <div>
                    <div className="text-[10px] text-slate-500 uppercase font-bold tracking-widest">
                      Expertise Inferred
                    </div>
                    <div className="text-sm font-black text-white">
                      {data.candidate_profile.experience_level_inferred}
                    </div>
                  </div>
                </div>
                <div className="space-y-2">
                  <div className="text-[10px] font-bold text-slate-500 uppercase mb-1">
                    Key Strengths
                  </div>
                  {data.candidate_profile.strengths.map((s, idx) => (
                    <div
                      key={idx}
                      className="flex items-center gap-2 text-[10px] text-emerald-400 bg-emerald-400/5 p-2 rounded border border-emerald-400/20"
                    >
                      <CheckCircle2 size={12} /> {s}
                    </div>
                  ))}
                </div>
              </div>

              {/* Red Flags Terminal */}
              {data.red_flags.length > 0 && (
                <div className="bg-rose-950/20 p-6 rounded-2xl border border-rose-500/30">
                  <h3 className="text-rose-500 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertCircle size={16} /> Logic Exceptions Found
                  </h3>
                  {data.red_flags.map((flag, idx) => (
                    <div key={idx} className="mb-4 last:mb-0">
                      <div className="text-[10px] font-bold text-rose-400 underline mb-1">
                        Q{flag.question_number}: {flag.type}
                      </div>
                      <div className="text-[10px] text-rose-300 leading-snug font-mono uppercase">
                        {flag.detail}
                      </div>
                    </div>
                  ))}
                </div>
              )}

              {/* Improvement Logic */}
              <div className="bg-indigo-950/20 p-6 rounded-2xl border border-indigo-500/30">
                <h3 className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                  <Zap size={16} /> Optimization Path
                </h3>
                <ul className="space-y-3">
                  {data.improvement.map((tip, idx) => (
                    <li
                      key={idx}
                      className="text-[10px] text-slate-400 flex gap-2"
                    >
                      <span className="text-indigo-400">{">"}</span> {tip}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      )}

      {role === "mr" && (
        <div className="min-h-screen bg-[#f8fafc] p-4 md:p-8 font-sans text-slate-900">
          {/* Header: Score & Verdict */}
          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6 mb-8">
            <div className="lg:col-span-3 bg-white rounded-3xl p-8 shadow-sm border border-slate-200 flex flex-col justify-center">
              <div className="flex items-center gap-2 mb-3">
                <ShieldCheck className="text-indigo-600" size={24} />
                <span className="text-xs font-bold tracking-[0.2em] text-slate-400 uppercase">
                  Leadership Verdict
                </span>
              </div>
              <h1 className="text-2xl md:text-3xl font-black text-slate-800 leading-tight">
                {data.summary.verdict}
              </h1>
              <p className="mt-4 text-slate-500 leading-relaxed border-l-4 border-slate-100 pl-4">
                {data.overall_feedback}
              </p>
            </div>

            <div className="bg-slate-900 rounded-3xl p-8 shadow-xl flex flex-col items-center justify-center text-center text-white">
              <span
                className={`text-6xl font-black mb-1 ${gradeColor(data.summary.grade)}`}
              >
                {data.summary.grade}
              </span>
              <div className="w-full bg-slate-700 h-1.5 rounded-full mt-4 overflow-hidden">
                <div
                  className="h-full bg-indigo-400 transition-all duration-1000"
                  style={{ width: `${data.summary.overall_score}%` }}
                />
              </div>
              <span className="text-[10px] font-bold mt-2 tracking-widest opacity-60">
                OVERALL SCORE: {data.summary.overall_score}/100
              </span>
            </div>
          </div>

          <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-12 gap-8">
            {/* Left Column: Leadership Competencies (Radar/Bar Style) */}
            <div className="lg:col-span-5 space-y-6">
              <section className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <BarChart3 size={20} className="text-indigo-600" /> Competency
                  Mapping
                </h2>

                <div className="space-y-5">
                  {Object.keys(data.leadership_scores).map((key) => {
                    const item = data.leadership_scores[key];
                    const label = key.replace(/_/g, " ");
                    return (
                      <div key={key} className="group">
                        <div className="flex justify-between items-end mb-1">
                          <span className="text-xs font-bold capitalize text-slate-500">
                            {label}
                          </span>
                          <span className="text-xs font-black text-indigo-600">
                            {item.score}%
                          </span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500 group-hover:bg-indigo-400 transition-all"
                            style={{ width: `${item.score}%` }}
                          />
                        </div>
                        <p className="text-[11px] text-slate-400 mt-1 leading-tight hidden group-hover:block italic">
                          {item.comment}
                        </p>
                      </div>
                    );
                  })}
                </div>
              </section>

              {/* Hiring Recommendation Card */}
              <div
                className={`p-8 rounded-3xl shadow-lg transition-transform hover:scale-[1.02] ${
                  data.hiring_recommendation.recommendation === "Proceed"
                    ? "bg-emerald-600 text-white"
                    : data.hiring_recommendation.recommendation === "Borderline"
                      ? "bg-amber-500 text-white"
                      : "bg-rose-600 text-white"
                }`}
              >
                <h3 className="text-[10px] font-black uppercase tracking-[0.3em] mb-2 opacity-80">
                  Final Call
                </h3>
                <p className="text-4xl font-black mb-3">
                  {data.hiring_recommendation.recommendation}
                </p>
                <p className="text-sm font-medium leading-relaxed opacity-90 italic">
                  "{data.hiring_recommendation.reason}"
                </p>
              </div>
            </div>

            {/* Right Column: Q&A, Profile & Red Flags */}
            <div className="lg:col-span-7 space-y-8">
              {/* Candidate Profile Summary */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                <div className="bg-indigo-50 p-6 rounded-3xl border border-indigo-100">
                  <p className="text-[10px] font-black text-indigo-400 uppercase tracking-widest mb-1">
                    Inferred Role
                  </p>
                  <p className="text-xl font-bold text-indigo-900">
                    {data.candidate_profile.leadership_level_inferred}
                  </p>
                </div>
                <div className="bg-white p-6 rounded-3xl border border-slate-200 flex flex-col justify-center">
                  <div className="flex justify-between items-center text-xs font-bold text-slate-400">
                    <span>
                      Communication:{" "}
                      {data.candidate_profile.communication_clarity}
                    </span>
                    <span>
                      Confidence: {data.candidate_profile.confidence_inferred}
                    </span>
                  </div>
                </div>
              </div>

              {/* Question Analysis */}
              <section className="space-y-4">
                <h2 className="text-lg font-bold flex items-center gap-2">
                  <Briefcase size={20} className="text-indigo-600" /> Critical
                  Incident Review
                </h2>
                {data.question_analysis.map((q, i) => (
                  <div
                    key={i}
                    className="bg-white p-6 rounded-3xl border border-slate-200 hover:shadow-md transition-shadow"
                  >
                    <div className="flex justify-between items-start mb-4">
                      <div className="flex items-center gap-3">
                        <div className="h-8 w-8 bg-slate-900 text-white rounded-xl flex items-center justify-center font-bold text-sm">
                          {q.question_number}
                        </div>
                        <div>
                          <p className="text-xs font-black text-slate-400 uppercase tracking-tighter">
                            Response Quality
                          </p>
                          <p className="text-sm font-bold">
                            {q.answer_quality}
                          </p>
                        </div>
                      </div>
                      <div
                        className={`px-3 py-1 rounded-lg text-[10px] font-black uppercase ${
                          q.leadership_signal === "Strong"
                            ? "bg-emerald-100 text-emerald-700"
                            : "bg-slate-100 text-slate-500"
                        }`}
                      >
                        {q.leadership_signal} Signal
                      </div>
                    </div>
                    <p className="text-slate-600 text-sm leading-relaxed mb-4">
                      {q.reason}
                    </p>
                    <div className="flex items-center gap-2">
                      <div className="h-1 flex-1 bg-slate-100 rounded-full overflow-hidden">
                        <div
                          className="h-full bg-slate-400"
                          style={{ width: `${q.relevance_score}%` }}
                        />
                      </div>
                      <span className="text-[10px] font-bold text-slate-400">
                        {q.relevance_score}% Relevance
                      </span>
                    </div>
                  </div>
                ))}
              </section>

              {/* Red Flags & Improvements */}
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {/* Red Flags */}
                <div className="bg-white p-6 rounded-3xl border-2 border-rose-50 shadow-sm">
                  <h3 className="text-rose-600 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <AlertCircle size={16} /> Behavioral Risk
                  </h3>
                  <div className="space-y-4">
                    {data.red_flags.map((flag, i) => (
                      <div key={i} className="border-l-2 border-rose-200 pl-3">
                        <p className="text-xs font-bold text-slate-800">
                          {flag.type}
                        </p>
                        <p className="text-[11px] text-slate-500 leading-snug">
                          {flag.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>

                {/* Improvements */}
                <div className="bg-slate-900 p-6 rounded-3xl shadow-xl text-white">
                  <h3 className="text-indigo-400 font-black text-xs uppercase tracking-widest mb-4 flex items-center gap-2">
                    <Target size={16} /> Growth Plan
                  </h3>
                  <ul className="space-y-3">
                    {data.improvement.map((tip, i) => (
                      <li
                        key={i}
                        className="flex gap-2 text-[11px] leading-relaxed text-slate-300"
                      >
                        <ChevronRight
                          size={14}
                          className="text-indigo-400 shrink-0"
                        />
                        {tip}
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}

      {role === "basic" && (
        <div className="max-w-6xl mx-auto p-6 bg-slate-50 min-h-screen">
          {/* --- TOP SUMMARY SECTION --- */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <div className="md:col-span-3 bg-white p-8 rounded-3xl shadow-sm border border-slate-200">
              <div className="flex items-center gap-2 mb-4">
                <Target className="text-indigo-500" size={20} />
                <span className="text-xs font-bold uppercase tracking-widest text-slate-400">
                  Executive Verdict
                </span>
              </div>
              <h1 className="text-3xl font-extrabold text-slate-900 mb-4">
                {data.summary.verdict}
              </h1>
              <p className="text-slate-600 leading-relaxed border-l-4 border-indigo-500 pl-4 italic">
                {data.overall_feedback}
              </p>
            </div>

            <div className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200 flex flex-col items-center justify-center">
              <div className="relative inline-flex">
                {/* Progress Circle */}
                <svg className="w-32 h-32 transform -rotate-90">
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    className="text-slate-100"
                  />
                  <circle
                    cx="64"
                    cy="64"
                    r="58"
                    stroke="currentColor"
                    strokeWidth="8"
                    fill="transparent"
                    strokeDasharray={364.4}
                    strokeDashoffset={
                      364.4 - (364.4 * data.summary.overall_score) / 100
                    }
                    className="text-indigo-600 transition-all duration-1000"
                  />
                </svg>
                <div className="absolute inset-0 flex flex-col items-center justify-center">
                  <span
                    className={`text-4xl font-black ${getGradeColor(data.summary.grade)}`}
                  >
                    {data.summary.grade}
                  </span>
                  <span className="text-[10px] font-bold text-slate-400">
                    {data.summary.overall_score}% SCORE
                  </span>
                </div>
              </div>
            </div>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* --- LEFT COLUMN: PROFILE & QUESTIONS --- */}
            <div className="lg:col-span-2 space-y-8">
              {/* Candidate Profile Stats */}
              <div className="bg-white rounded-3xl p-6 shadow-sm border border-slate-200">
                <h2 className="text-lg font-bold text-slate-800 mb-6 flex items-center gap-2">
                  <User className="text-indigo-500" size={22} /> Candidate
                  Insights
                </h2>

                <div className="grid grid-cols-3 gap-4 mb-8">
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Communication
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      {data.candidate_profile.communication_clarity}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Confidence
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      {data.candidate_profile.confidence_inferred}
                    </p>
                  </div>
                  <div className="bg-slate-50 p-4 rounded-2xl text-center">
                    <p className="text-[10px] font-bold text-slate-400 uppercase">
                      Expertise
                    </p>
                    <p className="text-lg font-bold text-slate-800">
                      {data.candidate_profile.experience_level_inferred}
                    </p>
                  </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-green-600 uppercase tracking-widest">
                      Strengths
                    </h4>
                    {data.candidate_profile.strengths.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-700 bg-green-50 p-3 rounded-xl border border-green-100"
                      >
                        <CheckCircle
                          size={16}
                          className="text-green-500 shrink-0"
                        />{" "}
                        {item}
                      </div>
                    ))}
                  </div>
                  <div className="space-y-3">
                    <h4 className="text-xs font-black text-red-600 uppercase tracking-widest">
                      Areas for Growth
                    </h4>
                    {data.candidate_profile.weaknesses.map((item, idx) => (
                      <div
                        key={idx}
                        className="flex items-center gap-2 text-sm text-slate-700 bg-red-50 p-3 rounded-xl border border-red-100"
                      >
                        <AlertTriangle
                          size={16}
                          className="text-red-500 shrink-0"
                        />{" "}
                        {item}
                      </div>
                    ))}
                  </div>
                </div>
              </div>

              {/* Detailed Question Analysis */}
              <div className="space-y-4">
                <h2 className="text-lg font-bold text-slate-800 flex items-center gap-2">
                  <MessageSquare className="text-indigo-500" size={22} />{" "}
                  Response Breakdown
                </h2>
                {data.question_analysis.map((q, index) => (
                  <div
                    key={index}
                    className="bg-white p-6 rounded-3xl shadow-sm border border-slate-200"
                  >
                    <div className="flex justify-between items-center mb-4">
                      <span className="text-xs font-black px-3 py-1 bg-slate-900 text-white rounded-full">
                        QUESTION {q.question_number}
                      </span>
                      <span
                        className={`text-xs font-bold px-4 py-1 rounded-full ${q.answer_quality === "Good" ? "bg-green-100 text-green-700" : "bg-orange-100 text-orange-700"}`}
                      >
                        {q.answer_quality.toUpperCase()}
                      </span>
                    </div>
                    <p className="text-slate-700 text-[15px] mb-6 leading-relaxed">
                      {q.reason}
                    </p>
                    <div className="grid grid-cols-2 gap-8">
                      <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">
                          <span>Relevance</span>{" "}
                          <span>{q.relevance_score}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-indigo-500"
                            style={{ width: `${q.relevance_score}%` }}
                          ></div>
                        </div>
                      </div>
                      <div>
                        <div className="flex justify-between text-[10px] font-bold text-slate-400 mb-2 uppercase">
                          <span>Clarity</span> <span>{q.clarity_score}%</span>
                        </div>
                        <div className="h-2 bg-slate-100 rounded-full overflow-hidden">
                          <div
                            className="h-full bg-blue-400"
                            style={{ width: `${q.clarity_score}%` }}
                          ></div>
                        </div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* --- RIGHT COLUMN: ACTIONS & FLAGS --- */}
            <div className="space-y-8">
              {/* Hiring Decision Card */}
              <div
                className={`p-8 rounded-3xl shadow-lg text-white ${
                  data.hiring_recommendation.recommendation === "Proceed"
                    ? "bg-indigo-600"
                    : data.hiring_recommendation.recommendation === "Borderline"
                      ? "bg-amber-500"
                      : "bg-rose-600"
                }`}
              >
                <h3 className="text-xs font-bold uppercase tracking-[0.2em] mb-2 opacity-80">
                  Final Recommendation
                </h3>
                <p className="text-4xl font-black mb-4">
                  {data.hiring_recommendation.recommendation}
                </p>
                <p className="text-sm leading-relaxed opacity-90 italic">
                  "{data.hiring_recommendation.reason}"
                </p>
              </div>

              {/* Red Flags Section */}
              {data.red_flags.length > 0 && (
                <div className="bg-white p-6 rounded-3xl shadow-sm border-2 border-rose-100">
                  <h2 className="text-rose-600 font-bold mb-4 flex items-center gap-2 uppercase text-sm tracking-widest">
                    <AlertTriangle size={18} /> Critical Red Flags
                  </h2>
                  <div className="space-y-4">
                    {data.red_flags.map((flag, i) => (
                      <div key={i} className="bg-rose-50 p-3 rounded-2xl">
                        <p className="text-xs font-bold text-rose-700 mb-1">
                          Q{flag.question_number} • {flag.type}
                        </p>
                        <p className="text-xs text-rose-600 leading-snug">
                          {flag.detail}
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              )}

              {/* Actionable Improvement */}
              <div className="bg-slate-900 p-8 rounded-3xl shadow-xl text-slate-100">
                <h2 className="text-lg font-bold mb-6 flex items-center gap-2">
                  <TrendingUp className="text-emerald-400" size={22} /> Roadmap
                  to Success
                </h2>
                <div className="space-y-4">
                  {data.improvement.map((tip, i) => (
                    <div key={i} className="flex gap-4">
                      <div className="h-6 w-6 shrink-0 bg-emerald-500/20 text-emerald-400 flex items-center justify-center rounded-lg text-xs font-bold">
                        {i + 1}
                      </div>
                      <p className="text-sm text-slate-300 leading-relaxed">
                        {tip}
                      </p>
                    </div>
                  ))}
                </div>
                <button className="w-full mt-8 py-3 bg-emerald-500 hover:bg-emerald-600 text-slate-900 font-bold rounded-2xl transition-colors">
                  Share Feedback with Candidate
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

    </>
  );
};

export default InterviewAnalysis;

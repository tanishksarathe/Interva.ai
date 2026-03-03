import React from "react";
import {
  Activity,
Award,
BarChart3,
BookOpen,
CheckCircle2,
Coffee,
Flag,
HelpCircle,
Info,
Layout,
MessageSquare,
Microscope,
ShieldAlert,
Sparkles,
Target,
TrendingUp,
UserCircle,
XCircle,
Briefcase,
Users,
Scale,
ShieldCheck,
Zap,
AlertOctagon,
BarChart,
ChessKnight,
ChevronRight,
AlertCircle,
User,
Trophy,
Lightbulb,
UserCheck,
Gauge,
Search,
Heart,
Brain,
MessageCircle,
AlertTriangle,
Star,
Compass,
ArrowRightCircle,
Code2,
Terminal,
Cpu,
Rocket,
Binary
} from "lucide-react";

const InterviewAnalysis = (props) => {
  const data = props.content;

  const role = props.role;

  console.log("Data from Modal : " ,data)
  console.log(role);

  return (
    <>
      {role === "hr" && (
        <div className="min-h-screen bg-(--background) p-6 md:p-12 font-sans text-(--text-primary)">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* --- HEADER: THE VERDICT --- */}
            <header className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 bg-(--bgclr) rounded-[3rem] p-10 text-black shadow-2xl relative overflow-hidden group">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold border border-white/10 uppercase tracking-widest">
                      {data.summary.interview_type_detected} Round Report
                    </span>
                    <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-xs font-bold border border-white/10">
                      {data.summary.total_questions_analyzed} Questions Analyzed
                    </span>
                  </div>
                  <h1 className="text-4xl md:text-6xl font-black tracking-tighter mb-4 leading-none">
                    HR Readiness:{" "}
                    <span className="opacity-80 italic">Assessment</span>
                  </h1>
                  <p className="text-xl md:text-2xl font-medium opacity-90 max-w-2xl border-l-4 border-white/30 pl-6 my-8 leading-relaxed">
                    "{data.summary.verdict}"
                  </p>
                </div>
                {/* Grade Stamp */}
                <div className="absolute right-8 bottom-[-20px] text-[18rem] font-black opacity-10 select-none group-hover:scale-110 transition-transform duration-1000">
                  {data.summary.grade}
                </div>
              </div>

              <div className="bg-(--white) rounded-[3rem] p-8 shadow-xl border border-(--primary)/10 flex flex-col items-center justify-center text-center relative">
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
                    <span className="text-[10px] font-black uppercase tracking-[0.2em] opacity-60">
                      HR Score
                    </span>
                  </div>
                </div>
                {/* <div className="space-y-1">
               <p className="text-xs font-bold text-(--text-secondary) opacity-60 uppercase">Session Time</p>
               <p className="text-lg font-black">{data.summary.interview_duration_estimate}</p>
            </div> */}
              </div>
            </header>

            {/* --- SECTION 2: SOFT SKILLS & PSYCHOLOGY --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-(--surface) rounded-[2.5rem] p-8 border border-(--white) shadow-lg space-y-6">
                <h3 className="text-2xl font-black flex items-center gap-3">
                  <Brain className="text-(--primary)" /> Candidate Profile
                </h3>
                <div className="grid grid-cols-2 gap-4">
                  <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Emotional Intel
                    </p>
                    <p className="font-bold text-sm">
                      {data.candidate_profile.emotional_intelligence}
                    </p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Self Awareness
                    </p>
                    <p className="font-bold text-sm">
                      {data.candidate_profile.self_awareness}
                    </p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Experience
                    </p>
                    <p className="font-bold text-sm">
                      {data.candidate_profile.experience_level_inferred}
                    </p>
                  </div>
                  <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Confidence
                    </p>
                    <p className="font-bold text-sm">
                      {data.candidate_profile.confidence_level}
                    </p>
                  </div>
                </div>
                <div className="pt-4 border-t border-(--primary)/10">
                  <p className="text-[10px] font-black uppercase text-(--primary) mb-2 tracking-widest">
                    Voice Analysis
                  </p>
                  <p className="text-sm font-medium italic opacity-80 leading-relaxed">
                    "{data.candidate_profile.communication_style}"
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 bg-(--white) rounded-[2.5rem] p-8 shadow-xl border border-(--primary)/5">
                <h3 className="text-2xl font-black mb-8 flex items-center gap-3">
                  <Heart className="text-(--primary)" /> Behavioral Competencies
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                  {Object.entries(data.scores).map(([key, val]) => (
                    <div key={key} className="space-y-3">
                      <div className="flex justify-between items-end">
                        <span className="text-xs font-black uppercase tracking-wider text-(--text-secondary)">
                          {key.replace(/_/g, " ")}
                        </span>
                        <span className="text-lg font-black text-(--primary)">
                          {val.score}%
                        </span>
                      </div>
                      <div className="h-3 bg-(--surface) rounded-full overflow-hidden p-0.5 border border-(--primary)/10">
                        <div
                          className="h-full bg-(--bgclr) rounded-full"
                          style={{ width: `${val.score}%` }}
                        ></div>
                      </div>
                      <p className="text-[11px] font-medium opacity-70 leading-snug">
                        "{val.comment}"
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 3: BEHAVIORAL PATTERNS --- */}
            <div className="bg-(--text-primary) text-black rounded-[3rem] p-10 shadow-2xl">
              <h3 className="text-3xl font-black mb-10 flex items-center gap-4 text-(--accent) tracking-tighter">
                <Compass size={32} /> Behavioral Pattern Mapping
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                {Object.entries(data.behavioral_patterns).map(([key, val]) => (
                  <div
                    key={key}
                    className="relative group p-6 rounded-[2rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all"
                  >
                    <div className="absolute top-[-10px] left-6 px-3 py-1 bg-(--bgclr) rounded-full text-[10px] font-black uppercase tracking-widest">
                      {key.replace(/_/g, " ")}
                    </div>
                    <p className="text-sm font-medium leading-relaxed opacity-90 mt-2">
                      {val}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 4: LANGUAGE & RED FLAGS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
              <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg border-2 border-(--accent)/20">
                <h3 className="text-xl font-black mb-6 flex items-center gap-3 text-(--secondary)">
                  <MessageCircle /> Communication Nuances
                </h3>
                <div className="space-y-5">
                  <div className="flex justify-between items-center py-3 border-b border-(--accent)/10">
                    <span className="text-xs font-black uppercase opacity-60">
                      Tone
                    </span>
                    <span className="text-sm font-bold text-(--primary)">
                      {data.language_analysis.tone}
                    </span>
                  </div>
                  <div className="flex justify-between items-center py-3 border-b border-(--accent)/10">
                    <span className="text-xs font-black uppercase opacity-60">
                      Answer Length
                    </span>
                    <span className="text-sm font-bold text-(--primary)">
                      {data.language_analysis.avg_answer_length}
                    </span>
                  </div>
                  <div className="bg-(--surface)/40 p-5 rounded-2xl">
                    <p className="text-[10px] font-black uppercase mb-3 opacity-60">
                      Filler Word Impact (
                      {data.language_analysis.filler_word_count} total)
                    </p>
                    <div className="flex flex-wrap gap-2">
                      {data.language_analysis.filler_words_detected.map(
                        (word, i) => (
                          <span
                            key={i}
                            className="px-3 py-1 bg-white rounded-lg text-xs font-bold text-red-500 border border-red-100 italic"
                          >
                            "{word}"
                          </span>
                        ),
                      )}
                    </div>
                  </div>
                  <div className="flex items-center gap-4 pt-2">
                    <div
                      className={`flex items-center gap-1 text-[10px] font-black ${data.language_analysis.use_of_examples ? "text-green-600" : "text-red-400"}`}
                    >
                      {data.language_analysis.use_of_examples ? (
                        <CheckCircle2 size={12} />
                      ) : (
                        <XCircle size={12} />
                      )}{" "}
                      USES EXAMPLES
                    </div>
                    <div className="w-[1px] h-4 bg-slate-200"></div>
                    <div className="text-[10px] font-black opacity-40 uppercase tracking-widest">
                      Vocab: {data.language_analysis.vocabulary_richness}
                    </div>
                  </div>
                </div>
              </div>

              <div className="lg:col-span-2 bg-(--white) rounded-[2.5rem] p-8 shadow-lg border-l-8 border-red-500">
                <h3 className="text-2xl font-black mb-6 text-red-600 flex items-center gap-3">
                  <AlertTriangle /> Behavioral Risks & Red Flags
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.red_flags.map((flag, i) => (
                    <div
                      key={i}
                      className="p-5 bg-red-50 rounded-[1.5rem] border border-red-100 flex gap-4"
                    >
                      <div className="w-10 h-10 rounded-full bg-red-500 text-black shrink-0 flex items-center justify-center font-black">
                        !
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-red-700 mb-1">
                          Q{flag.question_number} | {flag.type}
                        </p>
                        <p className="text-xs font-medium text-red-600 leading-relaxed">
                          {flag.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 5: HIRING & IMPROVEMENTS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              <div className="bg-(--white) rounded-[3rem] p-10 shadow-2xl border-4 border-(--primary)/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-3xl font-black mb-2 text-(--secondary) tracking-tighter uppercase">
                    Final Recommendation
                  </h3>
                  <p className="text-4xl font-black text-(--primary) mb-8">
                    {data.hiring_recommendation.recommendation}
                  </p>
                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-[10px] font-black uppercase text-(--text-secondary) mb-3 tracking-widest">
                        Ideal Career Paths
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.hiring_recommendation.suitable_roles.map(
                          (r, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-(--accent)/20 text-(--primary) rounded-xl text-xs font-bold border border-(--primary)/10"
                            >
                              {r}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="p-6 bg-(--surface)/30 rounded-3xl border border-(--primary)/10">
                      <p className="text-sm font-bold text-(--secondary) mb-2">
                        Next Step Action Plan:
                      </p>
                      <p className="text-sm font-medium opacity-80">
                        {data.hiring_recommendation.next_steps}
                      </p>
                    </div>
                  </div>
                </div>
                <div className="flex items-center gap-6 p-6 bg-(--text-primary) rounded-[2rem] text-black">
                  <div className="text-4xl font-black text-(--accent)">
                    {data.hiring_recommendation.readiness_score}%
                  </div>
                  <div className="text-xs font-bold opacity-60 uppercase tracking-widest leading-tight">
                    Total HR Readiness <br /> Benchmark
                  </div>
                </div>
              </div>

              <div className="space-y-6">
                <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg border border-(--primary)/10">
                  <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Target className="text-(--primary)" /> Actionable
                    Improvements
                  </h4>
                  <div className="space-y-4">
                    {data.improvement_areas.map((area, i) => (
                      <div
                        key={i}
                        className="p-4 rounded-2xl bg-(--surface)/40 border border-white flex justify-between items-start gap-4"
                      >
                        <div>
                          <div className="flex items-center gap-2 mb-1">
                            <span className="text-[10px] font-black text-(--primary) uppercase tracking-tighter">
                              {area.area}
                            </span>
                            <span
                              className={`text-[8px] font-bold px-2 py-0.5 rounded-full ${area.priority === "High" ? "bg-red-500 text-black" : "bg-(--accent) text-(--text-primary)"}`}
                            >
                              {area.priority} Priority
                            </span>
                          </div>
                          <p className="text-xs font-medium opacity-80">
                            {area.suggestion}
                          </p>
                        </div>
                        <ArrowRightCircle
                          className="shrink-0 text-(--primary) opacity-40"
                          size={20}
                        />
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-(--bgclr) rounded-[2.5rem] p-8 text-black shadow-xl">
                  <h4 className="text-xl font-black mb-4 flex items-center gap-2">
                    <Zap size={20} /> Interva Recommended
                  </h4>
                  <div className="space-y-3">
                    {data.recommended_resources.map((res, i) => (
                      <div
                        key={i}
                        className="bg-white/20 p-4 rounded-2xl border border-white/10 hover:bg-white/30 transition-all cursor-pointer group"
                      >
                        <p className="text-[10px] font-black uppercase mb-1 opacity-70 tracking-widest">
                          {res.topic}
                        </p>
                        <p className="text-lg font-black italic group-hover:translate-x-1 transition-transform">
                          "{res.resource}"
                        </p>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            </div>

            {/* --- FINAL FOOTER: THE MENTOR --- */}
            <footer className="bg-(--text-primary) rounded-[3.5rem] p-12 text-center relative overflow-hidden">
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-block p-4 rounded-3xl bg-(--bgclr) text-black mb-8 shadow-2xl rotate-3">
                  <Star size={32} fill="white" />
                </div>
                <h2 className="text-4xl font-black text-black mb-6 tracking-tighter">
                  Your HR Growth Journey
                </h2>
                <p className="text-xl text-(--accent) font-medium leading-relaxed italic opacity-95">
                  {data.motivational_feedback}
                </p>
              </div>
              <div className="absolute top-0 right-0 w-64 h-64 bg-(--primary) blur-[120px] opacity-20"></div>
              <div className="absolute bottom-0 left-0 w-64 h-64 bg-(--accent) blur-[120px] opacity-10"></div>
            </footer>
          </div>
        </div>
      )}

      {role === "tr" && (
        <div className="min-h-screen bg-(--background) p-4 md:p-10 font-sans text-(--text-primary)">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* --- HEADER: PERFORMANCE SUMMARY --- */}
            <header className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              <div className="lg:col-span-3 bg-(--bgclr) rounded-[2.5rem] p-10 text-black shadow-2xl relative overflow-hidden group border border-white/20">
                <div className="relative z-10">
                  <div className="flex items-center gap-3 mb-6">
                    <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black border border-white/20 uppercase tracking-[0.2em]">
                      {data.summary.interview_type_detected} Assessment
                    </span>
                    <span className="px-4 py-1 rounded-full bg-black/20 text-[10px] font-black border border-white/10 uppercase tracking-widest">
                      Analysed: {data.summary.total_questions_analyzed} Segments
                    </span>
                  </div>
                  <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-none flex items-center gap-4">
                    Technical{" "}
                    <span className="opacity-70 font-light italic">
                      Readiness
                    </span>
                  </h1>
                  <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl border-l-2 border-white/50 pl-6 mt-6 leading-relaxed">
                    {data.summary.verdict}
                  </p>
                </div>
                {/* Background Grade Watermark */}
                <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-black opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
                  {data.summary.grade}
                </div>
              </div>

              <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-xl border border-(--primary)/10 flex flex-col items-center justify-center text-center">
                <div className="relative mb-6">
                  <svg className="w-40 h-40 transform -rotate-90">
                    <circle
                      cx="80"
                      cy="80"
                      r="72"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      className="text-(--accent)/20"
                    />
                    <circle
                      cx="80"
                      cy="80"
                      r="72"
                      stroke="currentColor"
                      strokeWidth="12"
                      fill="transparent"
                      strokeDasharray={452.4}
                      strokeDashoffset={
                        452.4 - (452.4 * data.summary.overall_score) / 100
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
                      Accuracy
                    </span>
                  </div>
                </div>
                {/* <div className="p-4 bg-(--surface)/50 rounded-2xl w-full border border-(--primary)/5">
               <p className="text-[10px] font-black text-(--text-secondary) uppercase mb-1">Session Duration</p>
               <p className="text-xl font-black text-(--primary)">{data.summary.interview_duration_estimate}</p>
            </div> */}
              </div>
            </header>

            {/* --- SECTION 2: TECHNICAL PATTERNS & PROFILE --- */}
            <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
              {/* Candidate Profile Card */}
              <div className="bg-(--surface) rounded-[2.5rem] p-8 shadow-lg border border-white/50 space-y-6">
                <h3 className="text-2xl font-black flex items-center gap-3">
                  <Cpu className="text-(--primary)" /> System Persona
                </h3>
                <div className="space-y-4">
                  <div className="p-5 bg-white/60 rounded-3xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Inferred Tier
                    </p>
                    <p className="font-bold text-lg">
                      {data.candidate_profile.experience_level_inferred}
                    </p>
                  </div>
                  <div className="p-5 bg-white/60 rounded-3xl border border-(--primary)/5">
                    <p className="text-[10px] font-black uppercase text-(--primary) mb-1">
                      Problem Solving Style
                    </p>
                    <p className="text-sm font-medium leading-relaxed italic opacity-80">
                      "{data.candidate_profile.problem_solving_style}"
                    </p>
                  </div>
                </div>
                <div className="grid grid-cols-2 gap-4">
                  <div className="text-center p-3 bg-white/40 rounded-2xl">
                    <p className="text-[10px] font-black uppercase opacity-40">
                      Confidence
                    </p>
                    <p className="font-black text-(--text-primary)">
                      {data.candidate_profile.confidence_level}
                    </p>
                  </div>
                  <div className="text-center p-3 bg-(--bgclr) rounded-2xl text-black shadow-lg">
                    <p className="text-[10px] font-black uppercase opacity-70">
                      Grade
                    </p>
                    <p className="font-black text-xl">{data.summary.grade}</p>
                  </div>
                </div>
              </div>

              {/* Technical Pattern Grid */}
              <div className="lg:col-span-2 bg-(--text-primary) text-black rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
                <div className="absolute top-0 right-0 p-8 opacity-10">
                  <Binary size={120} />
                </div>
                <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-(--accent) relative z-10">
                  <Terminal /> Technical Pattern Analysis
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                  {Object.entries(data.technical_patterns).map(([key, val]) => (
                    <div
                      key={key}
                      className="p-5 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors"
                    >
                      <p className="text-[10px] font-black uppercase text-(--accent) mb-2 tracking-widest">
                        {key.replace(/_/g, " ")}
                      </p>
                      <p className="text-sm font-medium opacity-90 leading-relaxed">
                        {val}
                      </p>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 3: DEEP SCORE MATRIX --- */}
            <div className="bg-(--white) rounded-[3rem] p-10 shadow-xl border border-(--primary)/5">
              <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                <BarChart3 className="text-(--primary)" /> Granular
                Technical Scoring
              </h3>
              <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
                {Object.entries(data.scores).map(([key, val]) => (
                  <div key={key} className="group">
                    <div className="flex justify-between items-end mb-3">
                      <span className="text-[10px] font-black uppercase tracking-widest text-(--text-secondary)">
                        {key.replace(/_/g, " ")}
                      </span>
                      <span className="text-xl font-black text-(--primary) group-hover:scale-110 transition-transform">
                        {val.score}%
                      </span>
                    </div>
                    <div className="h-4 bg-(--surface) rounded-full overflow-hidden p-1 border border-(--primary)/5 shadow-inner">
                      <div
                        className="h-full bg-(--bgclr) rounded-full transition-all duration-1000 ease-out"
                        style={{ width: `${val.score}%` }}
                      />
                    </div>
                    <p className="mt-3 text-[11px] font-medium opacity-70 border-l-2 border-(--accent) pl-3 italic">
                      {val.comment}
                    </p>
                  </div>
                ))}
              </div>
            </div>

            {/* --- SECTION 4: RED FLAGS & HIGHLIGHTS --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Red Flags - Critical Section */}
              <div className="bg-red-50/50 rounded-[2.5rem] p-8 border-2 border-red-100 shadow-lg">
                <h3 className="text-2xl font-black mb-6 text-red-600 flex items-center gap-3">
                  <ShieldAlert /> High-Priority Red Flags
                </h3>
                <div className="space-y-4">
                  {data.red_flags.map((flag, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-white rounded-3xl shadow-sm border border-red-100"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-red-600 text-black shrink-0 flex items-center justify-center font-black shadow-lg shadow-red-200">
                        !
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-red-600 mb-1">
                          Segment {flag.question_number} | {flag.type}
                        </p>
                        <p className="text-sm font-bold text-slate-800 leading-snug">
                          {flag.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Technical Highlights */}
              <div className="bg-green-50/50 rounded-[2.5rem] p-8 border-2 border-green-100 shadow-lg">
                <h3 className="text-2xl font-black mb-6 text-green-700 flex items-center gap-3">
                  <Rocket /> Technical Highlights
                </h3>
                <div className="space-y-4">
                  {data.highlights.map((item, i) => (
                    <div
                      key={i}
                      className="flex gap-4 p-5 bg-white rounded-3xl shadow-sm border border-green-100"
                    >
                      <div className="w-12 h-12 rounded-2xl bg-green-600 text-black shrink-0 flex items-center justify-center font-black shadow-lg shadow-green-200">
                        <CheckCircle2 />
                      </div>
                      <div>
                        <p className="text-[10px] font-black uppercase text-green-600 mb-1">
                          Segment {item.question_number} | Breakthrough
                        </p>
                        <p className="text-sm font-bold text-slate-800 leading-snug">
                          {item.detail}
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 5: SNAPSHOTS (STRENGTHS/WEAKNESSES) --- */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
              <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg">
                <h4 className="text-lg font-black mb-6 text-(--secondary) uppercase tracking-tighter">
                  Observed Strengths
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {data.candidate_profile.strengths_snapshot.map((s, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-(--surface)/30 rounded-2xl border border-white font-bold text-sm"
                    >
                      <CheckCircle2 size={16} className="text-green-600" /> {s}
                    </div>
                  ))}
                </div>
              </div>
              <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg">
                <h4 className="text-lg font-black mb-6 text-(--secondary) uppercase tracking-tighter">
                  Critical Gaps
                </h4>
                <div className="grid grid-cols-1 gap-3">
                  {data.candidate_profile.weakness_snapshot.map((w, i) => (
                    <div
                      key={i}
                      className="flex items-center gap-3 p-4 bg-red-50 rounded-2xl border border-red-50 font-bold text-sm"
                    >
                      <AlertCircle size={16} className="text-red-500" /> {w}
                    </div>
                  ))}
                </div>
              </div>
            </div>

            {/* --- SECTION 6: LANGUAGE ANALYSIS --- */}
            <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg border border-(--primary)/5">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-(--text-secondary) uppercase">
                <MessageCircle /> Technical Communication Analysis
              </h3>
              <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-6">
                <div className="p-4 bg-(--surface)/30 rounded-2xl text-center">
                  <p className="text-[10px] font-black opacity-40 uppercase mb-2 tracking-widest">
                    Clarity (Pressure)
                  </p>
                  <p className="font-black text-(--primary)">
                    {data.language_analysis.clarity_under_pressure}
                  </p>
                </div>
                <div className="p-4 bg-(--surface)/30 rounded-2xl text-center">
                  <p className="text-[10px] font-black opacity-40 uppercase mb-2 tracking-widest">
                    Vocab Quality
                  </p>
                  <p className="font-black text-(--primary)">
                    {data.language_analysis.vocabulary_richness}
                  </p>
                </div>
                <div className="p-4 bg-(--surface)/30 rounded-2xl text-center">
                  <p className="text-[10px] font-black opacity-40 uppercase mb-2 tracking-widest">
                    Answer length
                  </p>
                  <p className="font-black text-(--primary)">
                    {data.language_analysis.avg_answer_length}
                  </p>
                </div>
                <div className="lg:col-span-2 p-4 bg-(--text-primary) rounded-2xl text-black">
                  <p className="text-[10px] font-black opacity-60 uppercase mb-3 tracking-widest">
                    Fillers Detected ({data.language_analysis.filler_word_count}
                    )
                  </p>
                  <div className="flex flex-wrap gap-2">
                    {data.language_analysis.filler_words_detected.map(
                      (word, i) => (
                        <span
                          key={i}
                          className="px-2 py-0.5 bg-white/10 rounded-md text-[10px] font-bold border border-white/5"
                        >
                          "{word}"
                        </span>
                      ),
                    )}
                  </div>
                </div>
              </div>
            </div>

            {/* --- SECTION 7: ACTION PLAN & RECOMMENDATION --- */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {/* Hiring Card */}
              <div className="bg-(--white) rounded-[3rem] p-10 shadow-2xl border-4 border-(--primary)/20 flex flex-col justify-between">
                <div>
                  <h3 className="text-2xl font-black mb-2 text-(--secondary) tracking-tighter uppercase">
                    Final Technical Verdict
                  </h3>
                  <p className="text-4xl font-black text-(--primary) mb-8">
                    {data.hiring_recommendation.recommendation}
                  </p>

                  <div className="space-y-6 mb-8">
                    <div>
                      <p className="text-[10px] font-black uppercase text-(--text-secondary) mb-3 tracking-widest">
                        Alignment Roles
                      </p>
                      <div className="flex flex-wrap gap-2">
                        {data.hiring_recommendation.suitable_roles.map(
                          (r, i) => (
                            <span
                              key={i}
                              className="px-4 py-2 bg-(--accent)/20 text-(--primary) rounded-xl text-xs font-bold border border-(--primary)/10"
                            >
                              {r}
                            </span>
                          ),
                        )}
                      </div>
                    </div>
                    <div className="p-6 bg-(--bgclr) text-black rounded-[2rem] shadow-xl relative overflow-hidden group">
                      <p className="text-xs font-black uppercase opacity-60 mb-2 relative z-10">
                        Next Evaluation Phase
                      </p>
                      <p className="text-xl font-black relative z-10 flex items-center gap-2">
                        {data.hiring_recommendation.next_steps}{" "}
                        <ChevronRight className="group-hover:translate-x-1 transition-transform" />
                      </p>
                      <div className="absolute top-0 right-0 p-4 opacity-10">
                        <Activity size={80} />
                      </div>
                    </div>
                  </div>
                </div>

                <div className="flex items-center gap-6 p-6 bg-(--text-primary) rounded-[2.5rem] text-black">
                  <div className="text-5xl font-black text-(--accent)">
                    {data.hiring_recommendation.readiness_score}%
                  </div>
                  <div className="text-xs font-bold opacity-60 uppercase tracking-widest leading-tight">
                    Calculated Technical <br /> Bench Readiness
                  </div>
                </div>
              </div>

              {/* Growth Path */}
              <div className="space-y-6">
                <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg border border-(--primary)/10">
                  <h4 className="text-xl font-black mb-6 flex items-center gap-2">
                    <Target className="text-(--primary)" /> Targeted
                    Refactoring Areas
                  </h4>
                  <div className="space-y-4">
                    {data.improvement_areas.map((item, i) => (
                      <div
                        key={i}
                        className="p-5 rounded-2xl bg-(--surface)/30 border border-white shadow-sm flex items-start gap-4"
                      >
                        <div
                          className={`p-2 rounded-xl text-black ${item.priority === "High" ? "bg-red-500" : "bg-(--primary)"}`}
                        >
                          <Binary size={18} />
                        </div>
                        <div>
                          <div className="flex items-center gap-3 mb-1">
                            <span className="text-[11px] font-black text-(--primary) uppercase">
                              {item.area}
                            </span>
                            <span className="text-[8px] font-black px-2 py-0.5 bg-white rounded-full border border-(--primary)/10 text-(--primary)">
                              {item.priority}
                            </span>
                          </div>
                          <p className="text-xs font-bold text-(--text-secondary) opacity-80">
                            {item.suggestion}
                          </p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

                <div className="bg-(--text-primary) rounded-[2.5rem] p-8 text-black shadow-xl relative overflow-hidden">
                  <h4 className="text-xl font-black mb-6 flex items-center gap-2 relative z-10">
                    <BookOpen size={24} className="text-(--accent)" />{" "}
                    Study Curriculum
                  </h4>
                  <div className="space-y-3 relative z-10">
                    {data.recommended_resources.map((res, i) => (
                      <div
                        key={i}
                        className="bg-white/5 backdrop-blur-md p-4 rounded-2xl border border-white/10 hover:bg-white/15 transition-all cursor-pointer group flex justify-between items-center"
                      >
                        <div>
                          <p className="text-[10px] font-black uppercase mb-1 text-(--accent) tracking-widest">
                            {res.topic}
                          </p>
                          <p className="text-lg font-black italic tracking-tight group-hover:translate-x-1 transition-transform">
                            "{res.resource}"
                          </p>
                        </div>
                        <ArrowRightCircle className="opacity-20 group-hover:opacity-100 transition-opacity" />
                      </div>
                    ))}
                  </div>
                  <div className="absolute top-0 right-0 w-64 h-64 bg-(--primary) blur-[120px] opacity-10 pointer-events-none"></div>
                </div>
              </div>
            </div>

            {/* --- FINAL FOOTER: THE TECHNICAL MENTOR --- */}
            <footer className="bg-(--white) rounded-[3.5rem] p-12 text-center relative overflow-hidden shadow-2xl border border-(--primary)/10">
              <div className="relative z-10 max-w-4xl mx-auto">
                <div className="inline-block p-5 rounded-3xl bg-(--bgclr) text-black mb-8 shadow-2xl -rotate-3 hover:rotate-0 transition-transform cursor-help">
                  <Lightbulb size={40} fill="white" />
                </div>
                <h2 className="text-4xl font-black text-(--text-primary) mb-6 tracking-tighter uppercase">
                  Interva AI: Career Refactoring
                </h2>
                <p className="text-xl text-(--text-secondary) font-black leading-relaxed italic opacity-80 max-w-3xl mx-auto">
                  {data.motivational_feedback}
                </p>
              </div>
              {/* Abstract Decorative Elements */}
              <div className="absolute bottom-0 right-0 w-1/3 h-1/2 bg-(--surface) opacity-40 rounded-tl-full"></div>
              <div className="absolute top-0 left-0 w-32 h-32 bg-(--accent) blur-[80px] opacity-20"></div>
            </footer>
          </div>
        </div>
      )}

      {role === "mr" && (
        <div className="min-h-screen bg-(--background) p-6 md:p-12 font-sans text-(--text-primary)">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* --- SECTION 1: EXECUTIVE SUMMARY --- */}
        <header className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-(--bgclr) rounded-[3.5rem] p-10 text-black shadow-2xl relative overflow-hidden group border border-white/20">
            <div className="relative z-10">
              <div className="flex items-center gap-3 mb-6">
                <span className="px-5 py-1.5 rounded-full bg-black/30 backdrop-blur-xl text-[10px] font-black border border-white/20 uppercase tracking-[0.2em]">
                  {data.summary.interview_type_detected} Assessment
                </span>
                <span className="px-5 py-1.5 rounded-full bg-white/20 text-[10px] font-black border border-white/10 uppercase tracking-widest">
                  {data.summary.total_questions_analyzed} Strategic Segments
                </span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter mb-6 leading-none">
                Leadership <span className="opacity-70 font-light italic">Maturity</span>
              </h1>
              <p className="text-xl md:text-2xl font-medium opacity-90 max-w-3xl border-l-4 border-(--accent) pl-8 my-8 leading-relaxed">
                "{data.summary.verdict}"
              </p>
            </div>
            {/* Executive Grade Watermark */}
            <div className="absolute right-12 -bottom-7.5 text-[22rem] font-black opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000 leading-none">
              {data.summary.grade}
            </div>
          </div>

          <div className="bg-(--white) rounded-[3.5rem] p-8 shadow-xl border border-(--primary)/10 flex flex-col items-center justify-center text-center relative overflow-hidden">
            <div className="relative mb-6">
              <svg className="w-44 h-44 transform -rotate-90">
                <circle cx="88" cy="88" r="80" stroke="currentColor" strokeWidth="14" fill="transparent" className="text-(--accent)/20" />
                <circle cx="88" cy="88" r="80" stroke="currentColor" strokeWidth="14" fill="transparent" 
                  strokeDasharray={502.6} strokeDashoffset={502.6 - (502.6 * data.summary.overall_score) / 100}
                  className="text-(--primary)" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-6xl font-black text-(--text-primary)">{data.summary.overall_score}</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Readiness</span>
              </div>
            </div>
            {/* <div className="space-y-1">
               <p className="text-xs font-black text-(--text-secondary) opacity-40 uppercase tracking-tighter">Evaluation Time</p>
               <p className="text-xl font-black">{data.summary.interview_duration_estimate}</p>
            </div> */}
          </div>
        </header>

        {/* --- SECTION 2: LEADERSHIP PROFILE --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Profile Card */}
          <div className="bg-(--surface) rounded-[3rem] p-10 border border-(--white) shadow-lg space-y-8">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <Briefcase className="text-(--primary)" /> Management DNA
            </h3>
            <div className="space-y-5">
              <div className="p-6 bg-white/60 rounded-3xl border border-(--primary)/5">
                <p className="text-[10px] font-black uppercase text-(--primary) mb-2 tracking-widest">Leadership Style</p>
                <p className="font-bold text-lg leading-tight">{data.candidate_profile.leadership_style}</p>
              </div>
              <div className="p-6 bg-white/60 rounded-3xl border border-(--primary)/5">
                <p className="text-[10px] font-black uppercase text-(--primary) mb-2 tracking-widest">Decision Framework</p>
                <p className="font-bold text-lg leading-tight">{data.candidate_profile.decision_making_style}</p>
              </div>
            </div>
            <div className="flex justify-between items-center p-5 bg-(--text-primary) rounded-3xl text-black">
               <div className="text-center flex-1">
                  <p className="text-[9px] font-black opacity-50 uppercase mb-1">Inferred Tier</p>
                  <p className="text-xs font-black uppercase tracking-tighter">{data.candidate_profile.experience_level_inferred}</p>
               </div>
               <div className="w-px h-8 bg-white/20"></div>
               <div className="text-center flex-1">
                  <p className="text-[9px] font-black opacity-50 uppercase mb-1">Confidence</p>
                  <p className="text-xs font-black uppercase tracking-tighter">{data.candidate_profile.confidence_level}</p>
               </div>
            </div>
          </div>

          {/* Competency Score Matrix */}
          <div className="lg:col-span-2 bg-(--white) rounded-[3rem] p-10 shadow-xl border border-(--primary)/5">
             <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
                <Scale className="text-(--primary)" /> Core Leadership Competencies
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-x-12 gap-y-8">
                {Object.entries(data.scores).map(([key, val]) => (
                  <div key={key} className="space-y-3 group">
                    <div className="flex justify-between items-end">
                      <span className="text-[10px] font-black uppercase tracking-wider text-(--text-secondary) opacity-70 group-hover:opacity-100 transition-opacity">
                        {key.replace(/_/g, ' ')}
                      </span>
                      <span className="text-xl font-black text-(--primary)">{val.score}%</span>
                    </div>
                    <div className="h-3 bg-(--surface) rounded-full overflow-hidden p-0.5 border border-(--primary)/10">
                      <div className="h-full bg-(--bgclr) rounded-full shadow-lg" style={{width: `${val.score}%`}}></div>
                    </div>
                    <p className="text-[11px] font-medium opacity-70 leading-relaxed italic border-l-2 border-(--accent) pl-3">
                      "{val.comment}"
                    </p>
                  </div>
                ))}
             </div>
          </div>
        </div>

        {/* --- SECTION 3: MANAGERIAL PATTERNS --- */}
        <div className="bg-(--text-primary) text-black rounded-[3.5rem] p-12 shadow-2xl relative overflow-hidden">
          <div className="absolute -bottom-5 -right-5 opacity-10">
             <ChessKnight size={240} />
          </div>
          <h3 className="text-3xl font-black mb-12 flex items-center gap-4 text-(--accent) tracking-tighter relative z-10">
            <Target size={32} /> Operational & Strategic Patterns
          </h3>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 relative z-10">
            {Object.entries(data.managerial_patterns).map(([key, val]) => (
              <div key={key} className="relative p-7 rounded-[2.5rem] bg-white/5 border border-white/10 hover:bg-white/10 transition-all group">
                <div className="absolute -top-3 left-8 px-4 py-1.5 bg-(--bgclr) rounded-full text-[9px] font-black uppercase tracking-[0.2em] shadow-lg">
                   {key.replace(/_/g, ' ')}
                </div>
                <p className="text-sm font-medium leading-relaxed opacity-90 mt-4">
                  {val}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* --- SECTION 4: STRENGTHS & WEAKNESSES BENTO --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
           <div className="bg-white rounded-[3rem] p-10 shadow-lg border-b-8 border-green-500/20">
              <h4 className="text-xl font-black text-green-600 flex items-center gap-3 uppercase tracking-tighter mb-8">
                <Sparkles size={24} /> Leadership Strengths
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.candidate_profile.strengths_snapshot.map((s, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-green-50/50 border border-green-100 flex items-start gap-4">
                    <CheckCircle2 className="text-green-600 shrink-0" size={20} />
                    <p className="text-sm font-bold text-green-900 leading-snug">{s}</p>
                  </div>
                ))}
              </div>
           </div>
           <div className="bg-white rounded-[3rem] p-10 shadow-lg border-b-8 border-red-500/20">
              <h4 className="text-xl font-black text-red-500 flex items-center gap-3 uppercase tracking-tighter mb-8">
                <Flag size={24} /> Development Gaps
              </h4>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                {data.candidate_profile.weakness_snapshot.map((w, i) => (
                  <div key={i} className="p-5 rounded-2xl bg-red-50/50 border border-red-100 flex items-start gap-4">
                    <AlertCircle className="text-red-500 shrink-0" size={20} />
                    <p className="text-sm font-bold text-red-900 leading-snug">{w}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* --- SECTION 5: CRITICAL FEEDBACK (RED FLAGS/HIGHLIGHTS) --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           <div className="lg:col-span-2 bg-(--white) rounded-[3rem] p-10 shadow-xl border-l-8 border-red-500">
              <h3 className="text-2xl font-black mb-8 text-red-600 flex items-center gap-3">
                <AlertOctagon size={28}/> Managerial Red Flags
              </h3>
              <div className="space-y-4">
                {data.red_flags.map((flag, i) => (
                  <div key={i} className="flex gap-6 p-6 bg-red-50 rounded-3xl border border-red-100 items-center">
                    <div className="w-14 h-14 rounded-2xl bg-red-600 text-black shrink-0 flex items-center justify-center font-black shadow-xl">!</div>
                    <div>
                      <p className="text-[10px] font-black uppercase text-red-700 mb-1 tracking-widest">Round Segment {flag.question_number} | {flag.type}</p>
                      <p className="text-sm font-bold text-red-900 leading-relaxed">{flag.detail}</p>
                    </div>
                  </div>
                ))}
              </div>
           </div>

           <div className="bg-(--white) rounded-[3rem] p-10 shadow-xl border border-(--primary)/10">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-(--text-secondary)">
                <MessageSquare /> Language & Presence
              </h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center pb-4 border-b border-(--accent)/10">
                    <span className="text-[10px] font-black uppercase opacity-40">Presence</span>
                    <span className="text-sm font-black text-(--primary)">{data.language_analysis.executive_presence}</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-(--accent)/10">
                    <span className="text-[10px] font-black uppercase opacity-40">Pressure Clarity</span>
                    <span className="text-sm font-black text-(--primary)">{data.language_analysis.clarity_under_pressure}</span>
                 </div>
                 <div className="bg-(--surface)/40 p-5 rounded-2xl border border-white">
                    <p className="text-[9px] font-black uppercase mb-3 opacity-50 tracking-[0.2em]">Filler Usage ({data.language_analysis.filler_word_count})</p>
                    <div className="flex flex-wrap gap-2">
                      {data.language_analysis.filler_words_detected.map((word, i) => (
                        <span key={i} className="px-3 py-1 bg-white rounded-lg text-[10px] font-bold text-red-400 border border-red-50 italic">"{word}"</span>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- SECTION 6: FINAL HIRING RECOMMENDATION --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           <div className="bg-(--white) rounded-[3.5rem] p-12 shadow-2xl border-4 border-(--primary)/20 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-3xl font-black mb-4 text-(--secondary) tracking-tighter uppercase">Board Recommendation</h3>
                <p className="text-5xl font-black text-(--primary) mb-10 leading-tight tracking-tighter">{data.hiring_recommendation.recommendation}</p>
                
                <div className="space-y-8 mb-10">
                   <div>
                      <p className="text-[10px] font-black uppercase text-(--text-secondary) mb-4 tracking-widest opacity-60">Suitable Vertical Roles</p>
                      <div className="flex flex-wrap gap-3">
                        {data.hiring_recommendation.suitable_roles.map((r, i) => <span key={i} className="px-5 py-2.5 bg-(--accent)/20 text-(--primary) rounded-2xl text-xs font-black border border-(--primary)/10 shadow-sm">{r}</span>)}
                      </div>
                   </div>
                   <div className="p-8 bg-(--text-primary) text-black rounded-[2.5rem] shadow-2xl group cursor-pointer hover:bg-(--secondary) transition-colors">
                      <p className="text-[10px] font-black uppercase text-(--accent) mb-3 tracking-[0.2em]">Next Strategic Phase</p>
                      <p className="text-2xl font-black flex items-center justify-between">
                        {data.hiring_recommendation.next_steps} <ChevronRight className="group-hover:translate-x-2 transition-transform" />
                      </p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-7 bg-(--surface) rounded-[2.5rem] border border-white">
                 <div className="text-5xl font-black text-(--primary)">{data.hiring_recommendation.readiness_score}%</div>
                 <div className="text-[10px] font-black opacity-60 uppercase tracking-widest leading-relaxed italic">Leadership Readiness <br/> Aggregate Score</div>
              </div>
           </div>

           <div className="space-y-8">
              <div className="bg-(--white) rounded-[3rem] p-10 shadow-lg border border-(--primary)/10">
                <h4 className="text-2xl font-black mb-8 flex items-center gap-3">
                   <TrendingUp className="text-(--primary)" /> Leadership Development Road
                </h4>
                <div className="space-y-5">
                  {data.improvement_areas.map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-(--surface)/30 border border-white flex items-start gap-5 group">
                      <div className={`p-3 rounded-2xl text-black shadow-lg ${item.priority === 'High' ? 'bg-red-500' : 'bg-(--primary)'}`}>
                         <Flag size={20}/>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-xs font-black text-(--text-primary) uppercase tracking-tight">{item.area}</span>
                           <span className="text-[9px] font-black px-3 py-1 bg-white rounded-full border border-(--primary)/10 text-(--primary) uppercase">{item.priority}</span>
                        </div>
                        <p className="text-sm font-bold text-(--text-secondary) opacity-70 leading-relaxed italic">"{item.suggestion}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-(--bgclr) rounded-[3rem] p-10 text-black shadow-2xl relative overflow-hidden">
                 <h4 className="text-2xl font-black mb-6 flex items-center gap-3 relative z-10">
                   <BookOpen size={28} className="text-black"/> Executive Curriculum
                 </h4>
                 <div className="space-y-4 relative z-10">
                   {data.recommended_resources.map((res, i) => (
                     <div key={i} className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group">
                        <p className="text-[10px] font-black uppercase mb-1 text-(--accent) tracking-widest opacity-80">{res.topic}</p>
                        <p className="text-lg font-black italic tracking-tight group-hover:translate-x-2 transition-transform">"{res.resource}"</p>
                     </div>
                   ))}
                 </div>
                 <div className="absolute top-[-20%] right-[-10%] w-64 h-64 bg-white/10 rounded-full blur-[100px]"></div>
              </div>
           </div>
        </div>

        {/* --- SECTION 7: MENTOR FEEDBACK --- */}
        <footer className="bg-(--text-primary) rounded-[4rem] p-14 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-4xl bg-(--bgclr) text-black mb-10 shadow-2xl -rotate-6 hover:rotate-0 transition-transform cursor-help">
                 <Award size={48} fill="white"/>
              </div>
              <h2 className="text-5xl font-black text-black mb-8 tracking-tighter uppercase">Interva AI: Executive Mentorship</h2>
              <p className="text-2xl text-(--accent) font-medium leading-relaxed italic opacity-95 tracking-tight border-y border-white/10 py-8">
                {data.motivational_feedback}
              </p>
           </div>
           {/* Abstract Strategic Elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-(--primary) blur-[140px] opacity-20"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--accent) blur-[160px] opacity-10"></div>
        </footer>

      </div>
    </div>
      )}

      {role === "basic" && (
        <div className="min-h-screen bg-(--background) p-4 md:p-10 font-sans text-(--text-primary)">
      <div className="max-w-7xl mx-auto space-y-8">
        
        {/* --- SECTION 1: CORE SUMMARY --- */}
        <header className="grid grid-cols-1 lg:grid-cols-4 gap-6">
          <div className="lg:col-span-3 bg-(--bgclr) rounded-[2.5rem] p-10 text-black shadow-2xl relative overflow-hidden group border border-white/20">
            <div className="relative z-10">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1 rounded-full bg-white/20 backdrop-blur-md text-[10px] font-black border border-white/20 uppercase tracking-[0.2em]">
                  {data.summary.interview_type_detected} Evaluation
                </span>
                <span className="px-4 py-1 rounded-full bg-black/20 text-[10px] font-black border border-white/10 uppercase tracking-widest">
                  Total Analyzed: {data.summary.total_questions_analyzed} Segments
                </span>
              </div>
              <h1 className="text-5xl md:text-6xl font-black tracking-tighter mb-4 leading-none italic">
                Interview <span className="opacity-70 font-light not-italic">Snapshot</span>
              </h1>
              <p className="text-lg md:text-xl font-medium opacity-90 max-w-2xl border-l-2 border-white/50 pl-6 mt-6 leading-relaxed">
                {data.summary.verdict}
              </p>
            </div>
            {/* Background Grade Watermark */}
            <div className="absolute right-10 top-1/2 -translate-y-1/2 text-[20rem] font-black opacity-10 select-none pointer-events-none group-hover:scale-110 transition-transform duration-1000">
              {data.summary.grade}
            </div>
          </div>

          <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-xl border border-(--primary)/10 flex flex-col items-center justify-center text-center">
            <div className="relative mb-6">
              <svg className="w-40 h-40 transform -rotate-90">
                <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="12" fill="transparent" className="text-(--accent)/20" />
                <circle cx="80" cy="80" r="72" stroke="currentColor" strokeWidth="12" fill="transparent" 
                  strokeDasharray={452.4} strokeDashoffset={452.4 - (452.4 * data.summary.overall_score) / 100}
                  className="text-(--primary)" strokeLinecap="round" />
              </svg>
              <div className="absolute inset-0 flex flex-col items-center justify-center">
                <span className="text-5xl font-black text-(--text-primary)">{data.summary.overall_score}</span>
                <span className="text-[10px] font-black uppercase tracking-widest opacity-60">Readiness</span>
              </div>
            </div>
            <div className="p-4 bg-(--surface)/50 rounded-2xl w-full border border-(--primary)/5">
               <p className="text-[10px] font-black text-(--text-secondary) uppercase mb-1">Duration Estimate</p>
               <p className="text-xl font-black text-(--primary)">{data.summary.interview_duration_estimate}</p>
            </div>
          </div>
        </header>

        {/* --- SECTION 2: PROFILE & BEHAVIORAL PATTERNS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
          
          {/* Candidate Profile Card */}
          <div className="bg-(--surface) rounded-[2.5rem] p-8 shadow-lg border border-white/50 space-y-6">
            <h3 className="text-2xl font-black flex items-center gap-3">
              <UserCircle className="text-(--primary)" /> Candidate Profile
            </h3>
            <div className="space-y-4">
              <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                <p className="text-[10px] font-black uppercase text-(--primary) mb-1">Inferred Level</p>
                <p className="font-bold text-lg">{data.candidate_profile.experience_level_inferred}</p>
              </div>
              <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                <p className="text-[10px] font-black uppercase text-(--primary) mb-1">Maturity Index</p>
                <p className="font-bold text-lg">{data.candidate_profile.professional_maturity}</p>
              </div>
              <div className="p-4 bg-white/60 rounded-2xl border border-(--primary)/5">
                <p className="text-[10px] font-black uppercase text-(--primary) mb-1">Voice & Style</p>
                <p className="text-sm font-medium leading-relaxed italic opacity-80">"{data.candidate_profile.communication_style}"</p>
              </div>
            </div>
          </div>

          {/* Response Pattern Matrix */}
          <div className="lg:col-span-2 bg-(--text-primary) text-black rounded-[2.5rem] p-8 shadow-2xl relative overflow-hidden">
             <div className="absolute -bottom-10 -right-10 opacity-10">
                <Microscope size={220} />
             </div>
             <h3 className="text-2xl font-black mb-10 flex items-center gap-3 text-(--accent) relative z-10">
                <Activity /> Interview Response Patterns
             </h3>
             <div className="grid grid-cols-1 md:grid-cols-2 gap-6 relative z-10">
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase text-(--accent) tracking-widest">Answer Structure</p>
                  <p className="text-sm font-bold">{data.response_patterns.answer_structure}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase text-(--accent) tracking-widest">Answer Consistency</p>
                  <p className="text-sm font-bold">{data.response_patterns.consistency_across_answers}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase text-(--accent) tracking-widest">Depth Level</p>
                  <p className="text-sm font-bold">{data.response_patterns.depth_level}</p>
                </div>
                <div className="p-5 rounded-2xl bg-white/5 border border-white/10 flex items-center justify-between">
                  <p className="text-[10px] font-black uppercase text-(--accent) tracking-widest">Evidence/Examples</p>
                  <p className="text-sm font-bold uppercase tracking-widest">{data.response_patterns.use_of_examples ? "Yes" : "No"}</p>
                </div>
             </div>
             <div className="mt-8 p-6 bg-white/10 rounded-3xl border border-white/5 flex items-center gap-4">
                <div className="p-3 bg-(--accent) rounded-full text-(--text-primary)">
                  <Sparkles size={20} />
                </div>
                <p className="text-sm font-medium opacity-90 leading-relaxed">
                  Candidate demonstrates <span className="text-(--accent) font-bold">{data.candidate_profile.confidence_level} confidence</span> while delivering foundational concepts.
                </p>
             </div>
          </div>
        </div>

        {/* --- SECTION 3: DETAILED SCORE MATRIX --- */}
        <div className="bg-(--white) rounded-[3rem] p-10 shadow-xl border border-(--primary)/5">
           <h3 className="text-2xl font-black mb-10 flex items-center gap-3">
              <BarChart3 className="text-(--primary)" /> Competency Breakdown
           </h3>
           <div className="grid grid-cols-1 lg:grid-cols-2 gap-x-16 gap-y-10">
              {Object.entries(data.scores).map(([key, val]) => (
                <div key={key} className="group">
                  <div className="flex justify-between items-end mb-3">
                    <span className="text-[10px] font-black uppercase tracking-widest text-(--text-secondary)">{key.replace(/_/g, ' ')}</span>
                    <span className="text-xl font-black text-(--primary)">{val.score}/100</span>
                  </div>
                  <div className="h-4 bg-(--surface) rounded-full overflow-hidden p-1 border border-(--primary)/5 shadow-inner">
                    <div 
                      className="h-full bg-(--bgclr) rounded-full transition-all duration-1000 ease-out" 
                      style={{width: `${val.score}%`}}
                    />
                  </div>
                  <p className="mt-3 text-[11px] font-medium opacity-70 italic border-l-2 border-(--accent) pl-3">
                    {val.comment}
                  </p>
                </div>
              ))}
           </div>
        </div>

        {/* --- SECTION 4: STRENGTHS & WEAKNESSES BENTO --- */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
           <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border-b-8 border-green-500/10">
              <h4 className="text-xl font-black text-green-600 flex items-center gap-3 uppercase tracking-tighter mb-8">
                <Sparkles size={20} /> Core Strengths
              </h4>
              <div className="space-y-3">
                {data.candidate_profile.strengths_snapshot.map((s, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-green-50/50 rounded-2xl border border-green-100/50">
                    <CheckCircle2 size={18} className="text-green-600 shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-green-900">{s}</p>
                  </div>
                ))}
              </div>
           </div>
           <div className="bg-white rounded-[2.5rem] p-8 shadow-lg border-b-8 border-red-500/10">
              <h4 className="text-xl font-black text-red-500 flex items-center gap-3 uppercase tracking-tighter mb-8">
                <Flag size={20} /> Identified Gaps
              </h4>
              <div className="space-y-3">
                {data.candidate_profile.weakness_snapshot.map((w, i) => (
                  <div key={i} className="flex items-start gap-4 p-4 bg-red-50/50 rounded-2xl border border-red-100/50">
                    <XCircle size={18} className="text-red-500 shrink-0 mt-0.5" />
                    <p className="text-sm font-bold text-red-900">{w}</p>
                  </div>
                ))}
              </div>
           </div>
        </div>

        {/* --- SECTION 5: HIGHLIGHTS & LANGUAGE ANALYSIS --- */}
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
           {/* Highlights & Red Flags Column */}
           <div className="lg:col-span-2 space-y-6">
              <div className="bg-(--white) rounded-[2.5rem] p-8 shadow-lg">
                <h3 className="text-xl font-black mb-6 text-(--secondary) flex items-center gap-3 uppercase tracking-tighter">
                  <Star className="text-(--accent)" /> Interview Highlights
                </h3>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {data.highlights.map((item, i) => (
                    <div key={i} className="p-5 bg-(--surface)/30 rounded-3xl border border-white flex gap-4 items-center">
                       <div className="w-10 h-10 bg-(--bgclr) rounded-2xl text-black flex items-center justify-center font-black">
                         {item.question_number}
                       </div>
                       <p className="text-sm font-bold opacity-80 leading-snug">{item.detail}</p>
                    </div>
                  ))}
                </div>
              </div>

              {data.red_flags.length > 0 && (
                <div className="bg-red-50/50 rounded-[2.5rem] p-8 border border-red-100">
                  <h3 className="text-xl font-black mb-6 text-red-600 flex items-center gap-3 uppercase tracking-tighter">
                    <ShieldAlert size={20} /> Critical Concerns
                  </h3>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {data.red_flags.map((flag, i) => (
                      <div key={i} className="p-4 bg-white rounded-2xl border border-red-100 flex gap-4">
                        <div className="p-2 h-fit rounded-lg bg-red-100 text-red-600 font-black text-xs">Q{flag.question_number}</div>
                        <div>
                          <p className="text-[10px] font-black uppercase text-red-500 mb-1">{flag.type}</p>
                          <p className="text-xs font-bold leading-relaxed">{flag.detail}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              )}
           </div>

           {/* Language & Communication Profile */}
           <div className="bg-(--text-primary) text-black rounded-[2.5rem] p-8 shadow-xl">
              <h3 className="text-xl font-black mb-8 flex items-center gap-3 text-(--accent) uppercase tracking-tighter">
                <MessageSquare /> Communication Profile
              </h3>
              <div className="space-y-6">
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-[10px] font-black uppercase opacity-40">Tone</span>
                    <span className="text-sm font-black text-(--accent)">{data.language_analysis.tone}</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-[10px] font-black uppercase opacity-40">Answer Length</span>
                    <span className="text-sm font-black text-(--accent)">{data.language_analysis.avg_answer_length}</span>
                 </div>
                 <div className="flex justify-between items-center pb-4 border-b border-white/10">
                    <span className="text-[10px] font-black uppercase opacity-40">Vocabulary</span>
                    <span className="text-sm font-black text-(--accent)">{data.language_analysis.vocabulary_richness}</span>
                 </div>
                 <div className="bg-white/5 p-5 rounded-2xl border border-white/5">
                    <p className="text-[9px] font-black uppercase mb-3 opacity-50 tracking-[0.2em]">Filler Frequency ({data.language_analysis.filler_word_count})</p>
                    <div className="flex flex-wrap gap-2">
                      {data.language_analysis.filler_words_detected.map((word, i) => (
                        <span key={i} className="px-2 py-1 bg-white/10 rounded-md text-[10px] font-bold border border-white/5">"{word}"</span>
                      ))}
                    </div>
                 </div>
              </div>
           </div>
        </div>

        {/* --- SECTION 6: HIRING & ACTION PLAN --- */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10">
           {/* Recommendation Card */}
           <div className="bg-(--white) rounded-[3rem] p-10 shadow-2xl border-4 border-(--primary)/20 flex flex-col justify-between relative overflow-hidden">
              <div className="relative z-10">
                <h3 className="text-2xl font-black mb-2 text-(--secondary) tracking-tighter uppercase">Interva Recommendation</h3>
                <p className="text-5xl font-black text-(--primary) mb-10 leading-tight tracking-tighter">{data.hiring_recommendation.recommendation}</p>
                
                <div className="space-y-8 mb-10">
                   <div>
                      <p className="text-[10px] font-black uppercase text-(--text-secondary) mb-4 tracking-widest opacity-60">Ideal Career Alignment</p>
                      <div className="flex flex-wrap gap-2">
                        {data.hiring_recommendation.suitable_roles.map((r, i) => <span key={i} className="px-4 py-2 bg-(--accent)/20 text-(--primary) rounded-xl text-xs font-black border border-(--primary)/10">{r}</span>)}
                      </div>
                   </div>
                   <div className="p-8 bg-(--text-primary) text-black rounded-[2.5rem] shadow-2xl group cursor-pointer hover:bg-(--secondary) transition-colors">
                      <p className="text-[10px] font-black uppercase text-(--accent) mb-3 tracking-[0.2em]">Suggested Next Step</p>
                      <p className="text-xl font-black flex items-center justify-between">
                        {data.hiring_recommendation.next_steps} <ChevronRight size={24} className="group-hover:translate-x-2 transition-transform" />
                      </p>
                   </div>
                </div>
              </div>

              <div className="flex items-center gap-6 p-7 bg-(--surface) rounded-[2.5rem] border border-white">
                 <div className="text-5xl font-black text-(--primary)">{data.hiring_recommendation.readiness_score}%</div>
                 <div className="text-[10px] font-black opacity-60 uppercase tracking-widest leading-relaxed italic">Composite Readiness <br/> Benchmark</div>
              </div>
           </div>

           {/* Growth Road & Resources */}
           <div className="space-y-8">
              <div className="bg-(--white) rounded-[3rem] p-10 shadow-lg border border-(--primary)/10">
                <h4 className="text-xl font-black mb-8 flex items-center gap-3">
                   <TrendingUp className="text-(--primary)" /> Personalized Action Plan
                </h4>
                <div className="space-y-5">
                  {data.improvement_areas.map((item, i) => (
                    <div key={i} className="p-6 rounded-3xl bg-(--surface)/30 border border-white flex items-start gap-5 group">
                      <div className={`p-3 rounded-2xl text-black shadow-lg ${item.priority === 'High' ? 'bg-red-500' : 'bg-(--primary)'}`}>
                         <Target size={18}/>
                      </div>
                      <div>
                        <div className="flex items-center gap-3 mb-2">
                           <span className="text-xs font-black text-(--text-primary) uppercase tracking-tight">{item.area}</span>
                           <span className="text-[8px] font-black px-3 py-1 bg-white rounded-full border border-(--primary)/10 text-(--primary) uppercase">{item.priority}</span>
                        </div>
                        <p className="text-sm font-bold text-(--text-secondary) opacity-70 leading-relaxed italic">"{item.suggestion}"</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              <div className="bg-(--bgclr) rounded-[3rem] p-10 text-black shadow-2xl relative overflow-hidden">
                 <h4 className="text-xl font-black mb-6 flex items-center gap-3 relative z-10">
                   <BookOpen size={24} className="text-black"/> Recommended Path
                 </h4>
                 <div className="space-y-4 relative z-10">
                   {data.recommended_resources.map((res, i) => (
                     <div key={i} className="bg-white/10 backdrop-blur-xl p-5 rounded-3xl border border-white/20 hover:bg-white/20 transition-all cursor-pointer group flex justify-between items-center">
                        <div>
                           <p className="text-[10px] font-black uppercase mb-1 text-(--accent) tracking-widest opacity-80">{res.topic}</p>
                           <p className="text-lg font-black italic tracking-tight group-hover:translate-x-2 transition-transform">"{res.resource}"</p>
                        </div>
                        <ArrowRightCircle className="opacity-20 group-hover:opacity-100 transition-opacity" />
                     </div>
                   ))}
                 </div>
              </div>
           </div>
        </div>

        {/* --- SECTION 7: MOTIVATIONAL FEEDBACK --- */}
        <footer className="bg-(--text-primary) rounded-[4rem] p-14 text-center relative overflow-hidden shadow-2xl">
           <div className="relative z-10 max-w-4xl mx-auto">
              <div className="inline-block p-6 rounded-[2rem] bg-(--bgclr) text-black mb-10 shadow-2xl rotate-6">
                 <Award size={40} />
              </div>
              <h2 className="text-4xl font-black text-black mb-8 tracking-tighter uppercase italic">Unlock Your Full Potential</h2>
              <p className="text-2xl text-(--accent) font-medium leading-relaxed opacity-95 tracking-tight border-y border-white/10 py-8">
                {data.motivational_feedback}
              </p>
           </div>
           {/* Abstract Strategic Elements */}
           <div className="absolute top-0 left-0 w-64 h-64 bg-(--primary) blur-[140px] opacity-20"></div>
           <div className="absolute bottom-0 right-0 w-96 h-96 bg-(--accent) blur-[160px] opacity-10"></div>
        </footer>

      </div>
    </div>
      )}
    </>
  );
};

export default InterviewAnalysis;

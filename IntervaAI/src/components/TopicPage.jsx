import {
  Clock,
  Bookmark,
  RotateCcw,
  CheckCircle,
  Star,
  BookOpen,
  AlertTriangle,
  MessageSquare,
  Database,
  CircleDashed,
  Brain,
  Layers,
  Sparkles,
  ArrowLeft,
  PenTool,
} from "lucide-react";

export default function TopicPage(props) {
  props = props.content;

  if (!props) {
    return (
      <div className="h-[80vh] flex items-center justify-center rounded-2xl bg-slate-800 border border-white/10 p-10">
        <div className="max-w-xl text-center flex flex-col items-center gap-6">
          {/* Icon */}
          <div className="p-4 rounded-full bg-indigo-500 border border-indigo-400">
            <Brain size={40} className="text-indigo-300" />
          </div>

          {/* Heading */}
          <h1 className="text-3xl font-bold text-indigo-300">
            Structured Learning. One Topic at a Time.
          </h1>

          {/* Description */}
          <p className="text-slate-400 leading-relaxed">
            Choose any topic from the left panel to unlock
            <span className="text-indigo-300 font-medium">
              {" "}
              clear explanations, concepts, patterns
            </span>
            , and interview-focused insights — all organized for focused
            preparation.
          </p>

          {/* Highlights */}
          <div className="grid grid-cols-2 gap-4 mt-4 text-sm">
            {[
              {
                icon: BookOpen,
                text: "Concept-first explanations",
              },
              {
                icon: Layers,
                text: "Pattern-based coverage",
              },
              {
                icon: Sparkles,
                text: "Interview relevance",
              },
              {
                icon: ArrowLeft,
                text: "Pick a topic to begin",
              },
            ].map(({ icon: Icon, text }, idx) => (
              <div
                key={idx}
                className="flex items-center gap-3 rounded-xl bg-slate-900/60 px-4 py-3 border border-white/5"
              >
                <Icon size={18} className="text-indigo-300" />
                <span className="text-slate-300">{text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
    );
  }

  return (
    <>
      <div className="min-h-screen bg-slate-50/50 p-4 md:p-8 lg:p-12 font-sans antialiased">
        <div className="max-w-4xl mx-auto space-y-10">
          {/* ================= HEADER SECTION ================= */}
          <header className="relative overflow-hidden rounded-3xl bg-white border border-slate-200 shadow-2xl shadow-indigo-100/50 p-8 md:p-10">
            <div className="absolute top-0 right-0 -mt-10 -mr-10 w-64 h-64 bg-indigo-50 rounded-full blur-3xl opacity-60" />

            <div className="relative">
              <div className="flex flex-wrap items-center gap-3 mb-6">
                <span className="px-4 py-1.5 rounded-full bg-indigo-600 text-white text-xs font-bold uppercase tracking-wider shadow-lg shadow-indigo-200">
                  {props.meta.topic}
                </span>
                <span className="px-4 py-1.5 rounded-full bg-amber-100 text-amber-700 text-xs font-bold uppercase tracking-wider">
                  {props.meta.difficulty}
                </span>
                <div className="flex items-center gap-1.5 text-slate-500 text-sm ml-auto">
                  <Clock size={16} className="text-indigo-400" />
                  <span className="font-medium">{props.meta.learningTime}</span>
                </div>
              </div>

              <h1 className="text-4xl md:text-5xl font-extrabold text-slate-900 tracking-tight mb-6">
                {props.meta.title}
              </h1>

              <p className="text-lg text-slate-600 leading-relaxed max-w-2xl">
                {props.meta.explanation}
              </p>
            </div>
          </header>

          {/* ================= FLOATING PROGRESS BAR ================= */}
          <div className="z-30 flex flex-wrap items-center justify-between gap-6 bg-white/80 backdrop-blur-md border border-white shadow-xl rounded-2xl px-8 py-5">
            <div className="flex-1 min-w-[200px]">
              <div className="flex justify-between mb-2">
                <span className="text-sm font-bold text-slate-700">
                  Topic Mastery
                </span>
                <span className="text-sm font-bold text-indigo-600">
                  {Math.round(
                    (props.userstate.completedSections /
                      props.userstate.totalSections) *
                      100,
                  )}
                  %
                </span>
              </div>
              <div className="w-full bg-slate-100 h-2.5 rounded-full overflow-hidden">
                <div
                  className="bg-indigo-600 h-full transition-all duration-700 ease-out"
                  style={{
                    width: `${(props.userstate.completedSections / props.userstate.totalSections) * 100}%`,
                  }}
                />
              </div>
            </div>

            <div className="flex items-center gap-6 border-l border-slate-100 pl-6">
              <button
                className={`flex items-center gap-2 font-bold transition-colors ${props.userstate.isCompleted ? "text-emerald-600" : "text-slate-400 hover:text-emerald-500"}`}
              >
                {props.userstate.isCompleted ? (
                  <CheckCircle size={20} weight="fill" />
                ) : (
                  <CircleDashed size={20} />
                )}
                <span className="hidden sm:inline">Done</span>
              </button>

              <button className="flex items-center gap-2 font-bold text-slate-400 hover:text-indigo-600 transition-colors">
                <Bookmark
                  size={20}
                  weight={props.userstate.isBookmarked ? "fill" : "regular"}
                  className={
                    props.userstate.isBookmarked ? "text-indigo-600" : ""
                  }
                />
                <span className="hidden sm:inline">Save</span>
              </button>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    size={18}
                    weight={
                      i < props.userstate.confidenceRating ? "fill" : "regular"
                    }
                    className={
                      i < props.userstate.confidenceRating
                        ? "text-amber-400"
                        : "text-slate-200"
                    }
                  />
                ))}
              </div>
            </div>
          </div>

          {/* ================= CONTENT SECTIONS ================= */}
          <div className="relative space-y-12 pb-12">
            {/* Visual Connection Line */}
            <div className="absolute left-[31px] top-4 bottom-4 w-0.5 bg-gradient-to-b from-indigo-100 via-indigo-200 to-transparent hidden md:block" />

            {props.sections.map((section, idx) => (
              <div
                key={idx}
                className={`group relative pl-0 md:pl-16 transition-all duration-300 ${section.highlight ? "scale-[1.02]" : ""}`}
              >
                {/* Section Indicator */}
                <div className="absolute left-0 top-0 hidden md:flex items-center justify-center w-16 h-16">
                  <div className="w-8 h-8 rounded-full bg-white border-4 border-indigo-600 z-10 shadow-md group-hover:scale-110 transition-transform" />
                </div>

                <div
                  className={`rounded-3xl border border-slate-200 bg-white p-8 shadow-sm group-hover:shadow-xl group-hover:border-indigo-100 transition-all ${section.highlight || ""}`}
                >
                  <div className="flex items-center justify-between mb-6">
                    <div className="flex items-center gap-4">
                      <span className="text-4xl font-black text-slate-100 group-hover:text-indigo-50 transition-colors">
                        {String(section.id).padStart(2, "0")}
                      </span>
                      <h2 className="text-2xl font-bold text-slate-800 tracking-tight">
                        {section.title}
                      </h2>
                    </div>
                    <div className="text-indigo-500 p-2 bg-indigo-50 rounded-xl">
                      {section.icon || <div className="w-6 h-6" />}
                    </div>
                  </div>

                  <div className="relative">
                    <pre className="whitespace-pre-wrap font-sans text-slate-600 leading-relaxed text-[17px] outline-none">
                      {section.content.text}
                    </pre>
                  </div>

                  {section.extraAction?.label && (
                    <div className="mt-8 pt-6 border-t border-slate-50">
                      <button className="text-sm font-bold text-indigo-600 hover:text-indigo-700 underline underline-offset-4">
                        {section.extraAction.label}
                      </button>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* ================= INSIGHTS SECTION ================= */}
          <div className="relative">
            <div className="absolute inset-0 bg-indigo-600 rounded-[2rem] transform rotate-1 scale-[1.01] opacity-10" />
            <div className="relative bg-white border border-indigo-100 rounded-[2rem] p-8 md:p-10 shadow-xl">
              <div className="flex items-center gap-3 mb-6">
                <div className="p-3 bg-indigo-600 rounded-2xl shadow-lg shadow-indigo-200 text-white">
                  <PenTool size={24} />
                </div>
                <h2 className="text-2xl font-bold text-slate-900">
                  Personal Insights
                </h2>
              </div>

              <textarea
                className="w-full min-h-[160px] p-6 rounded-2xl bg-slate-50 border-none focus:ring-2 focus:ring-indigo-500 text-slate-700 placeholder:text-slate-400 resize-none transition-all mb-6 text-lg"
                placeholder="Take a moment to explain what you've learned in your own words. Saving it now creates a shortcut for your future self..."
                defaultValue={props.personalInsight.message}
              />

              <div className="flex justify-end">
                <button
                  className={`px-8 py-3 rounded-xl font-bold text-white transition-all shadow-lg ${props.personalInsight.saved ? "bg-emerald-500 shadow-emerald-200" : "bg-indigo-600 hover:bg-indigo-700 shadow-indigo-200 active:scale-95"}`}
                >
                  {props.personalInsight.saved ? (
                    <span className="flex items-center gap-2">
                      <Check size={18} /> Thought Saved
                    </span>
                  ) : (
                    "Capture Insight"
                  )}
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

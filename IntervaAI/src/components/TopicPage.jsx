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
} from "lucide-react";

export default function TopicPage(props) {
  props = props.content;

  console.log(props.sections);

  return (
    <div className="max-w-full bg-indigo-200 p-5 rounded-2xl py-8 space-y-6">
      {/* ================= HEADER ================= */}
      <div className="rounded-2xl bg-linear-to-r from-blue-50 to-indigo-50 p-6 shadow-sm border">
        <h1 className="text-3xl font-semibold text-gray-900">
          {props.meta.title}
        </h1>

        <div className="flex flex-wrap items-center gap-3 mt-3 text-sm">
          <span className="px-3 py-1 rounded-full bg-blue-100 text-blue-700 font-medium">
            {props.meta.topic}
          </span>
          <span className="px-3 py-1 rounded-full bg-yellow-100 text-yellow-700 font-medium">
            Difficulty: {props.meta.difficulty}
          </span>
          <span className="flex items-center gap-1 text-gray-600">
            <Clock size={14} /> ~{props.meta.learningTime}
          </span>
        </div>

        <p className="mt-4 text-gray-700">{props.meta.explanation}</p>
      </div>
      {/* ================= USER STATE BAR ================= */}
      <div className="flex flex-wrap items-center justify-between gap-4 bg-white border rounded-xl px-6 py-4 shadow-sm">
        <span className="text-sm text-gray-600">
          {props.userstate.completedSections} / {props.userstate.totalSections}{" "}
          Sections Completed
        </span>

        <div className="flex items-center gap-4 text-sm">
          <button
            onClick={() => {}}
            className="flex items-center gap-1 text-green-600 font-medium"
          >
            {props.userstate.isCompleted ? (
              <CheckCircle size={16} />
            ) : (
              <CircleDashed />
            )}{" "}
            Mark as Done
          </button>
          <button className="flex items-center gap-1 text-indigo-600">
            {props.userstate.isBookmarked ? (
              <Bookmark size={16} color="indigo" fill="indigo" />
            ) : (
              <Bookmark size={16} color="indigo" />
            )}
            Save
          </button>
          <button className="flex items-center gap-1 text-gray-600">
            <RotateCcw size={16} /> Revisit
          </button>
          <div className="flex items-center gap-1 text-yellow-400">
            {[...Array(5)].map((_, i) => (
              <div key={i}>
                {i < props.userstate.confidenceRating ? (
                  <Star size={16} fill="currentColor" />
                ) : (
                  <Star size={16} className="text-gray-300" />
                )}
              </div>
            ))}
          </div>
        </div>
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[0].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[0].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[0].title}
          </h2>
          {props.sections[0].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[0].content.text}
        </div>

        {props.sections[0].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[1].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[1].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[1].title}
          </h2>
          {props.sections[1].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[1].content.text}
        </div>

        {props.sections[1].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[2].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[2].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[2].title}
          </h2>
          {props.sections[2].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[2].content.text}
        </div>

        {props.sections[2].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[3].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[3].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[3].title}
          </h2>
          {props.sections[3].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[3].content.text}
        </div>

        {props.sections[3].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[4].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[4].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[4].title}
          </h2>
          {props.sections[4].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[4].content.text}
        </div>

        {props.sections[4].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[5].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[5].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[5].title}
          </h2>
          {props.sections[5].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[5].content.text}
        </div>

        {props.sections[5].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[6].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[6].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[6].title}
          </h2>
          {props.sections[6].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[6].content.text}
        </div>

        {props.sections[6].extraAction?.label || ""}
      </div>{" "}
      <div
        className={`rounded-xl max-h-50 overflow-y-scroll border p-6 shadow-sm bg-white ${
          props.sections[0].highlight || ""
        }`}
      >
        <div className="flex items-center gap-2 mb-3">
          <span className="w-7 h-7 flex items-center justify-center rounded-md bg-blue-600 text-white text-sm font-semibold">
            {props.sections[7].id}
          </span>
          <h2 className="text-lg font-semibold text-gray-800">
            {props.sections[7].title}
          </h2>
          {props.sections[7].icon || ""}
        </div>

        <div className="text-gray-700 text-sm leading-relaxed">
          {props.sections[7].content.text}
        </div>

        {props.sections[7].extraAction?.label || ""}
      </div>
      <div className="border p-5  w-full rounded-2xl bg-white">
        <h1 className="font-semibold">Personal Insights</h1>
        <textarea
          className="p-5 w-full max-h-50 overflow-y-scroll"
          placeholder="Take a moment to explain what you've learned in your own words. Saving it now creates a shortcut for your future self—because no one explains it better to you than you."
        >
          {props.personalInsight.message}
        </textarea>
        <button className="px-4 py-2 border rounded-xl bg-green-500 shadow-2xl text-white">
          {props.personalInsight.saved ? "Saved" : "Save"}
        </button>
      </div>
    </div>
  );
}

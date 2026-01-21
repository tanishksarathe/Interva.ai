import {
  CheckCircle,
  XCircle,
  AlertTriangle,
  TrendingUp,
  BookOpen,
} from "lucide-react";

export default function ResumeAnalysis({ data }) {
  const {
    ats_score,
    overall_match_summary,
    pros_against_job_description,
    shortcomings_against_job_description,
    missing_keywords,
    missing_skills,
    improvement_tips,
  } = data;

  return (
    <div className="max-w-6xl mx-auto p-6 space-y-6 rounded-2xl">

      {/* Header */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">

        {/* ATS Score */}
        <div className="bg-white rounded-2xl shadow p-6 flex flex-col items-center justify-center">
          <div className="relative w-28 h-28">
            <svg className="w-full h-full -rotate-90">
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="#E5E7EB"
                strokeWidth="10"
                fill="none"
              />
              <circle
                cx="56"
                cy="56"
                r="50"
                stroke="#6366F1"
                strokeWidth="10"
                fill="none"
                strokeDasharray="314"
                strokeDashoffset={314 - (314 * ats_score) / 100}
                strokeLinecap="round"
              />
            </svg>
            <span className="absolute inset-0 flex items-center justify-center text-2xl font-bold text-indigo-600">
              {ats_score}%
            </span>
          </div>
          <p className="mt-4 font-semibold text-gray-700">ATS Match Score</p>
        </div>

        {/* Summary */}
        <div className="md:col-span-2 bg-white rounded-2xl shadow p-6">
          <h2 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
            <TrendingUp className="text-indigo-500" />
            Overall Match Summary
          </h2>
          <p className="mt-3 text-gray-600 leading-relaxed">
            {overall_match_summary}
          </p>
        </div>
      </div>

      {/* Pros & Cons */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        {/* Pros */}
        <Card title="Strengths" icon={<CheckCircle className="text-green-500" />}>
          {pros_against_job_description.map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </Card>

        {/* Shortcomings */}
        <Card
          title="Gaps Against Job Description"
          icon={<XCircle className="text-red-500" />}
        >
          {shortcomings_against_job_description.map((item, i) => (
            <ListItem key={i} text={item} />
          ))}
        </Card>
      </div>

      {/* Missing Keywords & Skills */}
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6">

        <Card
          title="Missing Keywords"
          icon={<AlertTriangle className="text-yellow-500" />}
        >
          <TagList items={missing_keywords} />
        </Card>

        <Card
          title="Missing Skills"
          icon={<AlertTriangle className="text-orange-500" />}
        >
          <TagList items={missing_skills} />
        </Card>
      </div>

      {/* Improvement Tips */}
      <Card
        title="Actionable Improvement Tips"
        icon={<BookOpen className="text-indigo-500" />}
      >
        <ol className="space-y-3 list-decimal list-inside text-gray-700">
          {improvement_tips.map((tip, i) => (
            <li key={i}>{tip}</li>
          ))}
        </ol>
      </Card>
    </div>
  );
}

/* ------------------ Reusable Components ------------------ */

function Card({ title, icon, children }) {
  return (
    <div className="bg-white rounded-2xl shadow p-6">
      <h3 className="text-lg font-semibold flex items-center gap-2 text-gray-800">
        {icon}
        {title}
      </h3>
      <div className="mt-4 space-y-2">{children}</div>
    </div>
  );
}

function ListItem({ text }) {
  return (
    <div className="flex items-start gap-2 text-gray-700">
      <span className="mt-1 w-2 h-2 bg-indigo-500 rounded-full" />
      <p>{text}</p>
    </div>
  );
}

function TagList({ items }) {
  return (
    <div className="flex flex-wrap gap-2">
      {items.map((item, i) => (
        <span
          key={i}
          className="px-3 py-1 rounded-full text-sm bg-indigo-100 text-indigo-700"
        >
          {item}
        </span>
      ))}
    </div>
  );
}

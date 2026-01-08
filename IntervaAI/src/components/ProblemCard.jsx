import { CheckCircle, Tag, Lock, Lightbulb } from "lucide-react";

const ProblemCard = (props) => {
  return (
    <div className="max-w-4xl bg-neutral-900 text-gray-200 rounded-2xl p-6 border border-neutral-800">
      {/* ===== Header ===== */}
      <div className="flex items-start justify-between">
        <div>
          <h2 className="text-xl font-semibold">
            {props.no}. {props.mini}
          </h2>

          <div className="flex gap-2 mt-3 flex-wrap">
            <span
              className={`px-3 py-1 rounded-full ${
                props.difficulty == "Medium"
                  ? `text-yellow-400 bg-yellow-500/10`
                  : props.difficulty == "Easy"
                  ? `text-green-400 bg-green-500/10`
                  : `text-red-600 bg-red-500/10`
              } text-sm`}
            >
              {props.difficulty}
            </span>

            <span className="px-3 py-1 rounded-full bg-neutral-800 flex items-center gap-2 text-sm">
              <Tag size={14} /> Topic
            </span>

            {/* <span className="px-3 py-1 rounded-full bg-neutral-800 flex items-center gap-2 text-sm">
              <Lightbulb size={14} /> Hint
            </span> */}
          </div>
        </div>

        {/* <div className="flex items-center gap-2 text-green-400 text-sm">
          <CheckCircle size={18} />
          Solved
        </div> */}
      </div>

      {/* ===== Problem Statement ===== */}
      <div className="mt-6 text-gray-300 leading-relaxed">{props.question}</div>

      {/* ===== Examples ===== */}
      <div className="mt-8 space-y-6">
        {[
          {
            input: "s = [b,a,b,a,d]",
            output: '"bab"',
            explanation: "bab is the longest string",
          },
          {
            input: "s = [b,a,b,a,d]",
            output: '"bab"',
            explanation: "bab is the longest string",
          },
        ].map((item, idx) => (
          <div key={idx} className="border-l-2 border-neutral-700 pl-4 leading-5">
            <h4 className="font-medium mb-2">Example 1:</h4>

            <p className="text-sm text-gray-300">
              <strong>Input:</strong>{" "}
              <span className="bg-neutral-800 px-2 py-0.5 rounded">
                {item.input}
              </span>
            </p>

            <p className="text-sm text-gray-300 mt-1">
              <strong>Output:</strong>{" "}
              <span className="bg-neutral-800 px-2 py-0.5 rounded">
                {item.output}
              </span>
            </p>

            <p className="text-sm text-gray-400 mt-1">
              <strong>Explanation:</strong>
              {item.explanation}.
            </p>

          </div>
        ))}
      </div>
      {/* ===== Constraints ===== */}
            <div className="mt-8">
              <h4 className="font-medium mb-3">Constraints:</h4>

              <ul className="list-disc list-inside text-sm text-gray-400 space-y-1">
                <li>{props.constraints}</li>
              </ul>
            </div>

    </div>
  );
};

export default ProblemCard;

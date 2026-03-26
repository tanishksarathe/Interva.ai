import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import {
  ArrowUpDown,
  Brain,
  Cog,
  Compass,
  GitCompare,
  Layers,
  ListOrdered,
  Network,
  Puzzle,
  Shapes,
  Shuffle,
} from "lucide-react";
import ProblemCard from "../components/ProblemCard";
import api from "../config/API";
import EvaluationPanel from "../components/modals/EvaluationPanel";
import toast from "react-hot-toast";

const DataStructures = () => {
  const topics = [
    { name: "Arrays", icon: Shuffle, value: "arrays" },
    { name: "Tree", icon: Network, value: "trees" },
    { name: "Backtracking", icon: Compass, value: "Backtracking" },
    { name: "Recursion", icon: ArrowUpDown, value: "Recursion" },
    { name: "Graph", icon: GitCompare, value: "graphs" },
    { name: "Stack", icon: Layers, value: "stack" },
    { name: "Linked List", icon: ListOrdered, value: "linked_list" },
    { name: "Queue", icon: Brain, value: "queue" },
    { name: "Two Pointer", icon: Shapes, value: "two_pointer_technique" },
    { name: "Strings", icon: Puzzle, value: "strings" },
  ];

  const [questions, setQuestions] = useState([]);

  const [codeOut, setCodeOut] = useState();

  const [count, setCount] = useState(0);
  const [custom, setCustom] = useState({
    language: "java",
    theme: "vs-dark",
    code: "",
    question: "Write the code for fibonacci sequence",
  });

  const [selectedTopic, setSelectedTopic] = useState("Arrays");

  const encoded = encodeURIComponent(selectedTopic);

  const fetchDSAQuestions = async () => {
    try {
      const res = await api.get(
        `${import.meta.env.VITE_PRACTICE_TOPICS_DSA}/${encoded.toLowerCase()}`,
      );

      console.log("DSA", res?.data?.data);

      setQuestions(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRun = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post(import.meta.env.VITE_EVALUATE_DSA, custom);

      console.log(res?.data);

      setCodeOut(res?.data);

      toast.success("Evaluated");
    } catch (error) {
      toast.error(error);
    }
  };

  const handleChange = (e) => {
    const { name, value } = e.target;

    setCustom((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleEditorChange = (value) => {
    setCustom((prev) => ({
      ...prev,
      code: value || "",
    }));
  };

  useEffect(() => {
    fetchDSAQuestions();
  }, [selectedTopic]);

  return (
    <>
      <div className="min-h-screen bg-[#0f172a] rounded-2xl px-10 py-12 text-slate-100">
        {/* Header */}
        <header className="text-center mb-12">
          <h1 className="text-4xl font-bold text-indigo-300">
            DSA Practice Topics
          </h1>
          <p className="mt-2 text-slate-400">
            Select a topic to begin your practice
          </p>
        </header>

        {/* Grid */}
        <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
          {topics.map(({ name, icon: Icon, value }) => {
            const isActive = selectedTopic === name;

            return (
              <div
                key={name}
                onClick={() => setSelectedTopic(value)}
                className={`cursor-pointer rounded-2xl border p-6 backdrop-blur-xl transition-all duration-200
                ${
                  isActive
                    ? "bg-linear-to-br from-indigo-500 to-indigo-600 text-white border-indigo-400 shadow-xl shadow-indigo-500/30 scale-[1.03]"
                    : "bg-slate-800/50 border-white/10 hover:-translate-y-1 hover:border-indigo-400 hover:bg-indigo-500/10"
                }`}
              >
                <div className="flex flex-col items-center gap-4 text-center">
                  <Icon
                    size={32}
                    className={isActive ? "text-white" : "text-indigo-300"}
                  />
                  <span className="font-medium">{name}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Selected Topic */}
        {selectedTopic && (
          <div className="mt-12 text-center text-slate-400">
            Selected Topic:&nbsp;
            <span className="font-semibold text-indigo-300">
              {selectedTopic}
            </span>
          </div>
        )}
      </div>

        <div className="my-5"></div>

      <div className="flex h-screen">
        {/* Right Section Editor */}
        <div className="w-7/12 flex flex-col p-2">
          <div className="bg-[#1E1E1E] flex justify-around items-center rounded-md w-full p-4 h-1/12">
            <div className="text-white font-semibold">
              Your Coding Playground
            </div>
            <div>
              <select
                name="language"
                value={custom.language}
                className="text-sm w-50 appearance-auto bg-[#1E1E1E] text-white px-2 py-1 rounded-lg border border-slate-700 focus:outline-none focus:ring focus:ring-white"
                onChange={handleChange}
              >
                <option value="" disabled hidden>
                  --Select your language(Java Default)--
                </option>
                <option value="java">Java (Default)</option>
                <option value="cpp">C++</option>
                <option value="c">C</option>
                <option value="python">Python</option>
                <option value="javascript">JavaScript</option>
                <option value="typescript">TypeScript</option>
                <option value="go">Go</option>
                <option value="rust">Rust</option>
              </select>
            </div>

            <button
              onClick={handleRun}
              className="text-white font-bold text-sm border rounded-xl bg-red-600 px-3 py-1"
            >
              Run
            </button>
            <button className="text-white font-bold text-sm border rounded-xl bg-green-600 px-3 py-1">
              Save
            </button>

            <div>
              <Cog color="white" className="hover:rotate-20" />
            </div>
          </div>
          <div className="w-full h-11/12 pt-2 z-0 rounded-2xl flex flex-col">
            <Editor
              height="100%"
              theme={custom.theme}
              language={custom.language}
              value={custom.code}
              name="code"
              onChange={handleEditorChange}
              options={{
                fontSize: 14,
                fontFamily: "JetBrains Mono, monospace",
                minimap: { enabled: false },
                lineNumbers: "on",
                scrollBeyondLastLine: false,
                automaticLayout: true,
                wordWrap: "on",
                tabSize: 2,
                insertSpaces: true,
                autoIndent: "full",
                formatOnPaste: true,
                formatOnType: true,
                renderLineHighlight: "line",
                quickSuggestions: true,
              }}
            />
            <div className="flex justify-end gap-4 my-3 items-center">
              <button
                onClick={() => {
                  if (count > 0) {
                    setCount(count - 1);
                  }
                }}
                className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_5px_5px_#000] active:translate-y-1.25 active:shadow-none transition-all"
              >
                Previous
              </button>
              <button
                onClick={() => {
                  if (count < questions.length - 1) {
                    setCount(count + 1);
                  }
                }}
                className="bg-indigo-600 text-white font-semibold px-6 py-3 rounded-lg shadow-[0_5px_5px_#000] active:translate-y-1.25 active:shadow-none transition-all"
              >
                Next
              </button>
            </div>
          </div>
        </div>
        {/* Left Section Problem */}
        <div className="w-5/12 flex flex-col justify-center items-center h-full">
          <ProblemCard questions={questions} count={count} />
        </div>
      </div>

      <div>{codeOut && <EvaluationPanel codeout={codeOut} />}</div>
    </>
  );
};

export default DataStructures;

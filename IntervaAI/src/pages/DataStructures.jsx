import React, { useEffect, useState } from "react";
import Editor from "@monaco-editor/react";
import { Cog } from "lucide-react";
import ProblemCard from "../components/ProblemCard";
import api from "../config/API";
import EvaluationPanel from "../components/modals/EvaluationPanel";
import toast from "react-hot-toast";

const DataStructures = () => {

   const questions = [
    {
      id: 1,
      title: "Print the Fibonacci Sequence",
      statement: [
        "Write a program that prints the first N numbers of the Fibonacci sequence.",
        "The Fibonacci sequence is a series of numbers where each number is the sum of the two preceding ones, starting from 0 and 1.",
      ],
      sequenceExample: "0, 1, 1, 2, 3, 5, 8, 13, 21, ...",
      constraints: ["1 ≤ N ≤ 50", "Use efficient time and space complexity"],
      input: "N = 5",
      output: "0 1 1 2 3",
      difficulty: "Easy",
      topic: "Arrays",
    },
    {
      id: 2,
      title: "Check Palindrome String",
      statement: [
        "Write a program to check whether a given string is a palindrome.",
        "A palindrome is a string that reads the same forward and backward.",
      ],
      sequenceExample: "madam → palindrome",
      constraints: [
        "1 ≤ length of string ≤ 10^5",
        "Ignore spaces and case sensitivity",
      ],
      input: 's = "madam"',
      output: "true",
      difficulty: "Easy",
      topic: "Strings",
    },
    {
      id: 3,
      title: "Find the Maximum Element",
      statement: [
        "Given an array of integers, find the maximum element.",
        "Return the largest value present in the array.",
      ],
      sequenceExample: "[3, 7, 2, 9, 5] → 9",
      constraints: ["1 ≤ array length ≤ 10^5", "-10^9 ≤ element ≤ 10^9"],
      input: "arr = [3, 7, 2, 9, 5]",
      output: "9",
      difficulty: "Easy",
      topic: "Arrays",
    },
    {
      id: 4,
      title: "Reverse an Array",
      statement: [
        "Write a program to reverse the elements of an array.",
        "The reversed array should contain elements in opposite order.",
      ],
      sequenceExample: "[1, 2, 3, 4] → [4, 3, 2, 1]",
      constraints: ["1 ≤ array length ≤ 10^5", "Do it in-place if possible"],
      input: "arr = [1, 2, 3, 4]",
      output: "[4, 3, 2, 1]",
      difficulty: "Easy",
      topic: "Arrays",
    },
    {
      id: 5,
      title: "Sum of First N Natural Numbers",
      statement: [
        "Write a program to calculate the sum of the first N natural numbers.",
        "The result should be the total sum from 1 to N.",
      ],
      sequenceExample: "N = 5 → 1+2+3+4+5 = 15",
      constraints: ["1 ≤ N ≤ 10^7", "Optimize for large N"],
      input: "N = 5",
      output: "15",
      difficulty: "Easy",
      topic: "Math",
    },
  ];

  
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
      const res = await api.get(`/user/get-practice-topic-dsa/${encoded}`);

      console.log("DSA", res?.data?.data);

      setSelectedTopic(res?.data?.data);
    } catch (error) {
      console.log(error);
    }
  };

  const handleRun = async (e) => {
    e.preventDefault();
    try {
      const res = await api.post("/service/evaluate-dsa", custom);

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
    // fetchDSAQuestions();
  }, [selectedTopic]);

  return (
    <>
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
          <ProblemCard
           questions={questions} count={count}
          />
         
        </div>
         
      </div>
      <div>{codeOut && <EvaluationPanel codeout={codeOut} />}</div>
    </>
  );
};

export default DataStructures;

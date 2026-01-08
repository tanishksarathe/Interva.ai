import React, { useState } from "react";
import Editor from "@monaco-editor/react";
import { Cog } from "lucide-react";
import ProblemCard from "../components/ProblemCard";

const DataStructures = () => {
  const [custom, setCustom] = useState({
    language: "java",
    theme: "vs-dark",
  });

  const [code, setCode] = useState("");

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

            <button className="text-white font-bold text-sm border rounded-xl bg-red-600 px-3 py-1">Run</button>
            <button className="text-white font-bold text-sm border rounded-xl bg-green-600 px-3 py-1">Save</button>

            <div>
              <Cog color="white" className="hover:rotate-20" />
            </div>
          </div>
          <div className="w-full h-11/12 pt-2 z-0 rounded-2xl">
            <Editor
              height="100%"
              theme={custom.theme}
              language={custom.language}
              value={code}
              onChange={(value) => setCode(value)}
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
          </div>
        </div>
        {/* Left Section Problem */}
        <div className="w-5/12 flex justify-center items-center h-full">
        
        <ProblemCard no="5" mini="Longest Palindromic Substring" question="You have to find out the longest palindromic substring from the given string." difficulty="Medium" constraints="solve it with the space complexity O(1)"/>

        </div>

      </div>
    </>
  );
};

export default DataStructures;

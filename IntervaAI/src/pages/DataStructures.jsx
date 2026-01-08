import React, { useState } from "react";
import Editor from "@monaco-editor/react";

const DataStructures = () => {
  const [custom, setCustom] = useState({
    language: "java",
    theme: "vs-dark",
  });

  const [code, setCode] = useState("");

  return (
    <>
      <div className="flex border h-screen">
        <div className="w-5/12 border"></div>
        <div className="w-7/12 flex flex-col">
          <div className="bg-[#1E1E1E] flex rounded-md w-full h-1/12 px-2">

            <select name="language" value={custom.language}>
              <option value="java">Java</option>
              <option value="c++">C++</option>
              <option value="java">Java</option>
              <option value="java">Java</option>
            </select>

          
          </div>
          <div className="w-full h-11/12 pt-2 rounded-2xl">
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
      </div>
    </>
  );
};

export default DataStructures;

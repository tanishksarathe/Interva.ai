import React from "react";
import { validateUserCode } from "../utils/codeValidator.js";
import toast from "react-hot-toast";
import { runUserCode } from "../utils/runCode.js";

// let arr = Array.isArray(input) ? input : input.split(",").map(Number); // global for array or string input

const MachineCoding = () => {
  const executeCode = async () => {
    const userCode = `
function solve(input) {\n let arr = Array.isArray(input) ? input : input.split(",").map(Number);\n let max = arr[0];\n for (let i = 1; i < arr.length; i++) {\n if (arr[i] > max) {\n max = arr[i];\n }\n }\n return max;\n}
`

const testCases = [
      
      {
        input: [0, 100, 50, 75],
        ex_output: 100
      },
      {
        input: [-1000000000, 1000000000],
        ex_output: "1000000000"
      }
    ]
    const validator = await validateUserCode(userCode);

    if (!validator.valid) {
      toast.error("System Risk Detected, Please Review your code...");
      return;
    }

    try {
      const response = await runUserCode(userCode, testCases);

      console.log("Execution Result : ", response);
    } catch (error) {
      toast.error(error);
    }
  };

  return (
    <>
      <div>
        {/* <button className="px-2 py-1 border rounded-xl" onClick={executeCode}>
          {" "}
          Excecute Code Here
        </button> */}
      </div>
    </>
  );
};

export default MachineCoding;

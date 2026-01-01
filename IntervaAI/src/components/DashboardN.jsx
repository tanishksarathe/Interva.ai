import React from "react";

function DashboardN() {
  return (
    <div className="">
      <h1 className="ml-5 font-semibold text-sm mb-2 border-b border-b-indigo-700 w-fit">
        Your Interview Progress Overview
      </h1>

      <div className="flex gap-2">
        <div className="flex flex-col">
          <div className="flex">
            <div className="border w-100 h-50 m-5 rounded-2xl bg-pink-500">DSA Analysis</div>
            <div className="border mt-5 w-105 h-50 rounded-2xl bg-green-400">Interview Analysis</div>
          </div>
          <div className="flex gap-5 pl-5">
            <div className="h-40 w-38 border rounded-2xl bg-blue-700">Company Rounds</div>
            <div className="h-40 w-38 border rounded-2xl bg-blue-500">Resume Analysis</div>
            <div className="h-40 w-38 border rounded-2xl bg-blue-400">
              Communication Proficiency
            </div>
            <div className="h-40 w-81 border rounded-2xl bg-blue-500">
              Aptitude and Reasoning questions solved
            </div>
          </div>
        </div>
        <div className="border w-100 mt-5 rounded-2xl h-95 bg-red-500">Summary Area
          Suggestions, Try Comapny wise questions.
        </div>
      </div>
    </div>
  );
}

export default DashboardN;

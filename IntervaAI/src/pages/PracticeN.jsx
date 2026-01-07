import React from "react";
import TextOnebyOneAnimation from "../components/TextOnebyOneAnimation";

const PracticeN = () => {
  const headerContent = [
    "Sharpen your mental edge.",
    "Optimizing logic, one byte at a time.",
    "Build production-ready components.",
    "Test your instincts on CS fundamentals.",
    "Master the art of the technical pitch.",
  ];

  return (
    <div>
      {/* Page Title */}
      <h1 className="text-4xl font-semibold text-gray-800 flex flex-col items-center justify-center transition-all px-5 ease-in-out gap-15 max-w-screen">
        <div className="font-bold text-3xl my-8">
            What you'll build with each practice track
        </div>
        <TextOnebyOneAnimation content={headerContent}/>
        <div className="text-4xl leading-relaxed text-center font-semibold">
          Focused practice leads to real progress.
          Work through Aptitude, DSA, Machine Coding, Rapid Fire, and Communication to build interview-ready skills.
        </div>
        <div className="text-2xl font-bold mb-10">
            Use the sections above to practice aptitude, coding, logic, and communication—one skill at a time.
        </div>
      </h1>
    </div>
  );
};

export default PracticeN;

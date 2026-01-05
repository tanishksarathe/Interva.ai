import { FileText, Info } from "lucide-react";
import React, { useRef, useState } from "react";
import toast from "react-hot-toast";

function ResumeAnalyze() {
  const max_file_size = 5 * 1024 * 1024;

  const fileReference = useRef(null);

  const [file, setFile] = useState(null);

  const [isDragging, setIsDragging] = useState(false);

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size <= max_file_size) setFile(droppedFile);
      else toast.error("Upload file of at most 5MB");
    }

    // console.log(e); debug
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0]; // it must be an array
    if (selectedFile) {
      if (selectedFile.size <= max_file_size) setFile(selectedFile);
      else toast.error("Upload file of at most 5MB");
    }
    // console.log(e); debug
  };

  return (
    <>
      <div className="min-h-screen w-full flex flex-col items-center justify-start bg-linear-to-br from-pink-100 via-blue-100 to-indigo-200 px-6 py-16">
        {/* Heading Section */}
        <div className="text-center max-w-3xl">
          <h1 className="text-4xl md:text-5xl font-semibold text-gray-800 leading-tight">
            Track Your Applications & <br />
            Resume Ratings
          </h1>
          <p className="mt-4 text-gray-600 text-lg">
            Review your submissions and check AI-powered feedback.
          </p>
        </div>

        {/* Resume Card */}
        <div className="mt-16 bg-white rounded-2xl shadow-xl w-full max-w-md p-6 relative">
          {/* Header */}
          <div className="flex items-start justify-between">
            <div>
              <h2 className="text-xl font-semibold text-gray-800">Virtusa</h2>
              <p className="text-sm text-gray-500 mt-1">Frontend Developer</p>
            </div>

            {/* Score Circle */}
            <div className="relative w-14 h-14 rounded-full bg-linear-to-tr from-purple-500 to-indigo-500 flex items-center justify-center">
              <div className="absolute inset-1 bg-white rounded-full flex items-center justify-center">
                <span className="text-xs font-semibold text-gray-800">
                  78/100
                </span>
              </div>
            </div>
          </div>

          {/* Resume Preview */}
          <div className="mt-6 bg-gray-50 border rounded-xl p-4">
            {/* Resume Header */}
            <div className="flex items-center gap-3 mb-4">
              <FileText className="w-6 h-6 text-indigo-500" />
              <div>
                <h3 className="font-semibold text-gray-800">GINA JONES</h3>
                <p className="text-xs text-indigo-500">React Developer</p>
              </div>
            </div>

            {/* Resume Content */}
            <div className="space-y-4 text-xs text-gray-600 leading-relaxed">
              <div>
                <p className="font-semibold text-gray-700">Work Experience</p>
                <p className="mt-1">Airbnb – Frontend Developer</p>
                <p className="text-gray-500">
                  Built reusable UI components and optimized performance across
                  web applications.
                </p>
              </div>

              <div>
                <p>Netflix – Frontend Engineer</p>
                <p className="text-gray-500">
                  Worked on scalable React architecture and collaborated with
                  cross-functional teams.
                </p>
              </div>

              <div>
                <p>Adobe – UI Developer</p>
                <p className="text-gray-500">
                  Developed pixel-perfect interfaces following modern design
                  systems.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Form  */}

        <div className="w-full max-w-3xl mt-20">
          {/* Header */}
          <div className="text-center mb-12">
            <h1 className="text-4xl font-semibold text-gray-800">
              Smart feedback for your dream job
            </h1>
            <p className="mt-3 text-gray-600 text-lg">
              Drop your resume for an ATS score and improvement tips
            </p>
          </div>

          {/* Form Card */}
          <div className="space-y-8">
            {/* Company Name */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Company Name
              </label>
              <input
                type="text"
                value="TechNova Solutions"
                className="w-full rounded-xl bg-white/80 backdrop-blur-md px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
              />
            </div>

            {/* Job Title */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Job Title
              </label>
              <input
                type="text"
                value="Frontend Developer"
                // readOnly
                className="w-full rounded-xl bg-blue-100/70 backdrop-blur-md px-4 py-3 text-gray-700 shadow-sm focus:outline-none"
              />
            </div>

            {/* Job Description */}
            <div>
              <label className="block text-sm text-gray-600 mb-2">
                Job Description
              </label>
              <textarea
                rows={5}
                // readOnly
                className="w-full rounded-xl bg-white/80 backdrop-blur-md px-4 py-3 text-gray-700 shadow-sm resize-none focus:outline-none"
              >
                Familiarity with RESTful APIs and frontend build tools. Good
                understanding of responsive design and cross-browser
                compatibility. Strong problem-solving skills and attention to
                detail.
              </textarea>
            </div>

            {/* Upload Resume */}
            <div>
              <label className="block text-sm text-gray-600 mb-3">
                Upload Resume
              </label>

              <input
                type="file"
                className="hidden"
                ref={fileReference}
                accept=".pdf,.doc"
                onChange={handleFileChange}
              />

              <div
                role="button"
                aria-label="Upload pdf/doc file"
                tabIndex={0}
                onClick={() => fileReference.current.click()}
                onKeyDown={(e) => {
                  if (e.key === "Enter" || e.key === " ") {
                    fileReference.current.click();
                  }
                }}
                onDragOver={(e) => {
                  e.preventDefault();
                  setIsDragging(true);
                }}
                onDragLeave={() => setIsDragging(false)}
                onDrop={handleDrop}
                className={`flex flex-col items-center justify-center
          border-2 border-dashed rounded-lg p-6 cursor-pointer
          transition-all
          ${isDragging ? "border-indigo-500 bg-indigo-50" : "border-gray-300"}
        `}
              >
                <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center mb-4">
                  <Info className="w-6 h-6 text-gray-600" />
                </div>

                {/* Text */}
                <p className="text-gray-700 font-medium">
                  Click to upload or drag and drop
                </p>

                <p className="text-sm text-gray-500 mt-1">PDF (max 20 MB)</p>

                {/* Selected file */}
                {file && (
                  <p className="text-sm text-green-600 mt-3">
                    Selected file:{" "}
                    <span className="font-medium">{file.name}</span>
                  </p>
                )}
              </div>
            </div>

            {/* Submit Button */}
            <div className="pt-6">
              <button className="w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 font-semibold shadow-lg">
                Analyse Resume
              </button>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default ResumeAnalyze;

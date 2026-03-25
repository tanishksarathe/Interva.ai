import { Info } from "lucide-react";
import React, { useEffect, useRef, useState } from "react";
import toast from "react-hot-toast";
import api from "../config/API";
import ResumeAnalysis from "../components/Resume Analysis/ResumeOutcomes";

const ResumeAnalyze = () => {
  const max_file_size = 5 * 1024 * 1024;

  const [company, setCompany] = useState("");

  const [jobTitle, setJobTitle] = useState("");

  const fileReference = useRef(null);

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const [parsed, setParsed] = useState({
    ats_score: "",
    overall_match_summary: "",
    pros_against_job_description: [],
    shortcomings_against_job_description: [],
    missing_keywords: [],
    missing_skills: [],
    improvement_tips: [],
  });

  const [file, setFile] = useState(null);

  const [jobDescription, setJobDescription] = useState("");

  const [isDragging, setIsDragging] = useState(false);

  const HandleAnalyze = async (e) => {
    e.preventDefault();
    if(!file || !jobDescription){
      toast.error(`Please ${

        (!jobDescription && ! file) ? "Enter Job Description and Upload your Resume" :
        (!file) ? "Upload your Resume Also" : "Enter your Job Description Also"

      }`)
      return;
    }
    setLoading(true);

    try {
      const formData = new FormData();

      if (file != null && jobDescription != null) {
        formData.append("resume", file);
        console.log(file);
        formData.append("jobDescription", jobDescription);
        console.log(jobDescription);
      }

      console.log("Check 1 for resume : ", formData);

      const response = await api.post(import.meta.env.VITE_RESUME_ANALYZE, formData);

      console.log(response.data);
      setParsed(response?.data);
      setShow(true);
      toast.success("Resume Analyzed Successfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.data?.message || "Unknown error while analysis");
    } finally {
      setLoading(false);
    }
  };

  const handleDrop = (e) => {
    e.preventDefault();
    setIsDragging(false);

    const droppedFile = e.dataTransfer.files[0];
    if (droppedFile) {
      if (droppedFile.size <= max_file_size) {
        setFile(droppedFile);
        toast.success("Uploaded Successfully");
      } else toast.error("Upload file of at most 5MB");
    }

    // console.log(e); debug
  };

  const handleFileChange = (e) => {
    e.preventDefault();

    const selectedFile = e.target.files[0]; // it must be an array
    if (selectedFile) {
      if (selectedFile.size <= max_file_size) {
        setFile(selectedFile);
        toast.success("Uploaded Successfully");
      } else toast.error("Upload file of at most 5MB");
    }
    // console.log(e); debug
  };

  const pdfPreviewUrl = file ? URL.createObjectURL(file) : null;

  const arr = [1, 3, 4, 5, 6, 7, 8, 1, 3, 4, 5, 6, 7, 8,1, 3, 4, 5, 6, 7, 8, 1, 3, 4, 5, 6, 7, 8];

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
        <div className="mt-16 rounded-2xl w-full max-w-md p-6 relative flex justify-center gap-5 transition-all spin-horizontal ">
          {/* Resume Preview */}

          <div className="animate-carousel-scroll pause-on-hover flex justify-center w-max">
            {arr.map((item, idx) => (
              <img
                key={`a-${idx}`}
                src={`/src/assets/resumeAssets/resume(${item}).jpg`}
                className="h-100 w-90 shadow-xl rounded-2xl mx-3"
                alt="resume"
              />
            ))}
          </div>
        </div>

        {/* Form  */}

        <section>
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
                  value={company}
                  onChange={(e) => setCompany(e.target.value)}
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
                  value={jobTitle}
                  onChange={(e) => setJobTitle(e.target.value)}
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
                  required
                  value={jobDescription}
                  onChange={(e) => setJobDescription(e.target.value)}
                  placeholder="Paste the Job Description here (e.g., Role, Responsibilities, and Required Technical Skills...)"
                  className="w-full rounded-xl bg-white/80 backdrop-blur-md px-4 py-3 text-gray-700 shadow-sm resize-none focus:outline-none"
                ></textarea>
              </div>

              {/* Upload Resume */}
              <div>
                <label className="block text-sm text-gray-600 mb-3">
                  Upload Resume
                </label>

                <input
                  type="file"
                  required
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
                <button
                  onClick={HandleAnalyze}
                  className="w-full rounded-xl bg-linear-to-r from-indigo-500 to-purple-500 text-white py-3 font-semibold shadow-lg"
                >
                  Analyse Resume
                </button>
              </div>
            </div>
          </div>
        </section>

        <section>
          {/* Main Content */}
          <div className="flex w-full">
            {/* Left Resume Preview */}

            {pdfPreviewUrl && show && (
              <iframe
                src={pdfPreviewUrl}
                className="w-100 h-120"
                frameBorder="0"
              ></iframe>
            )}

            {/* Right Review Panel */}
            {show && <ResumeAnalysis data={parsed} />}
          </div>
        </section>
      </div>
    </>
  );
};

export default ResumeAnalyze;

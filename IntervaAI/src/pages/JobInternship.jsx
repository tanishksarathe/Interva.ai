import { Briefcase, Clock, MapPin } from "lucide-react";
import React from "react";
import JobCard from "../components/JobCard";

const JobInternship = () => {
  return (
    <>
      <div className="min-h-screen w-full bg-linear-to-br from-pink-100 via-blue-100 to-indigo-200 px-10 py-14">
        {/* ================= HERO ================= */}
        <div className="max-w-6xl mx-auto text-center mb-14">
          <h1 className="text-5xl font-bold text-gray-900 leading-tight">
            Jobs & Internships <br />
            <span className="text-indigo-600">
              aligned with the skills you’re building
            </span>
          </h1>

          <p className="mt-6 text-gray-600 text-lg max-w-3xl mx-auto">
            Curated opportunities for candidates who are actively preparing —
            not random listings, not mass portals. Every role here is mapped to
            real interview expectations.
          </p>

          <div className="flex justify-center gap-3 mt-6">
            <span className="px-4 py-1.5 rounded-full bg-white/70 text-sm text-gray-700 shadow">
              Skill-aligned roles
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/70 text-sm text-gray-700 shadow">
              Fresher & early-career focused
            </span>
            <span className="px-4 py-1.5 rounded-full bg-white/70 text-sm text-gray-700 shadow">
              Updated regularly
            </span>
          </div>
        </div>

        {/* ================= FEATURED ================= */}
        <div className="max-w-6xl mx-auto mb-14">
          <h2 className="text-2xl font-semibold text-gray-800 mb-1">
            Featured Opportunities
          </h2>
          <p className="text-gray-600 mb-6">
            Handpicked roles that closely match common preparation patterns.
          </p>

          <div className="space-y-4">
            {/* Object Mapping Here */}


            <JobCard type="Full Time" company="Google" location="Banglore" applyLink="#" role="Software Developer" desc="MERN Stack developer with experience in React.js/Next.js" experience="Freshers"/>
            {/* Card 2 */}
          </div>
        </div>

        {/* ================= ALL OPPORTUNITIES ================= */}
        <div className="max-w-6xl mx-auto">
          <h2 className="text-2xl font-semibold text-gray-800 mb-6">
            All Opportunities
          </h2>

          <div className="space-y-4">
            {/* Item 1 */}
            <JobCard type="Full Time" company="Google" location="Banglore" applyLink="#" role="Software Developer" desc="MERN Stack developer with experience in React.js/Next.js" experience="Freshers"/>
            {/* Item 2 */}

            {/* Item 3 */}
            
          </div>
        </div>

        {/* ================= SOFT CTA ================= */}
        <div className="max-w-6xl mx-auto mt-16 bg-white rounded-2xl p-10 shadow text-center">
          <h3 className="text-2xl font-semibold text-gray-800">
            Opportunities come and go. Preparation stays with you.
          </h3>
          <p className="text-gray-600 mt-3">
            Consistent skill-building increases your chances — even when
            listings are limited.
          </p>

          <div className="flex justify-center gap-4 mt-6">
            <button className="px-6 py-2 rounded-xl bg-indigo-600 text-white font-medium hover:bg-indigo-700 transition">
              Continue practicing skills
            </button>
            <button className="px-6 py-2 rounded-xl bg-gray-100 text-gray-700 font-medium hover:bg-gray-200 transition">
              Explore interview preparation
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default JobInternship;

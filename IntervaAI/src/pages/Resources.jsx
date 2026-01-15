import React from "react";
import SkillCard from "../components/SkillCard";
import { Brain, CirclePile, SquarePen } from "lucide-react";
import InvertedCard from "../components/InvertedCard";
import logo from "../assets/whiteLogo2.png";
import TopicPage from "../components/TopicPage";
import { useNavigate } from "react-router-dom";
const Resources = () => {

  const navigate = useNavigate();

  return (
    <>
      <div className="w-full text-gray-800">
        {/* ================= HERO SECTION ================= */}
        <section className="max-w-6xl mx-auto px-6 pt-10 pb-20 text-center">
          <h1 className="text-4xl md:text-5xl font-bold leading-tight">
            Everything you need to prepare
            <span className="block text-indigo-600">
              organized, explained, and built for practice.
            </span>
          </h1>

          <p className="mt-6 text-lg text-gray-600 max-w-3xl mx-auto">
            A structured learning and practice platform with questions,
            concepts, solutions, explanations, and real-world examples across
            Aptitude, DSA, Machine Coding, Communication, and Core CS & AI
            fundamentals.
          </p>

          <p className="mt-4 text-gray-500 max-w-2xl mx-auto">
            Remove guesswork so you always know what to study, why it matters,
            and how to practice effectively.
          </p>

          {/* CTA Buttons */}
          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Start Practicing Skills
            </button>

            <button onClick={() => (navigate('/dashboard/studymaterial'))} className="px-6 py-3 rounded-lg border border-indigo-600 text-gray-700 font-semibold hover:bg-indigo-600 hover:text-white transition">
              Explore Study Material →
            </button>
          </div>
        </section>

        {/* ================= CAPABILITY OVERVIEW ================= */}
        <section className="max-w-6xl mx-auto px-6 py-14 bg-white rounded-4xl">
          <h2 className="text-xl font-semibold text-center mb-10">
            A complete preparation ecosystem, not isolated resources.
          </h2>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-3">
            {[
              {
                title: "Aptitude & Reasoning",
                desc: "Sharpen your logical thinking",
                nav: "/dashboard/practice/aptitude",
              },
              {
                title: "Data Structures & Algorithms",
                desc: "Master essential coding skills",
                nav: "/dashboard/practice/dsa",
              },
              {
                title: "Machine Coding",
                desc: "Build real-world projects",
                nav: "/dashboard/practice/machinecod",
              },
              {
                title: "Communication Skills",
                desc: "Ace your interviews",
                nav: "/dashboard/practice/communication",
              },
              {
                title: "Core CS & AI Fundamentals",
                desc: "Learn key CS concepts",
                nav: "/dashboard/practice/rapidfire",
              },
            ].map((item, idx) => (
              <InvertedCard
                key={idx}
                title={item.title}
                navigationlink={item.nav}
                description={item.desc}
                quote={"Let's go"}
              />
            ))}
          </div>
        </section>

        {/* ================= HOW IT WORKS ================= */}
        <section className="py-20">
          <div className="max-w-6xl mx-auto px-6">
            <h2 className="text-4xl font-bold text-center">
              How This Platform Works
            </h2>
            <p className="text-center text-gray-500 mt-2 text-xl">
              Learn and practice in three simple steps.
            </p>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-12">
              <SkillCard
                title="Choose Your Focus"
                desc="Pick a skill area to dive into based on what you want to improve."
                Icon={Brain}
              />
              <SkillCard
                title="Learn With Context"
                desc="Understand questions and solutions with explanations and examples."
                Icon={CirclePile}
              />
              <SkillCard
                title="Practice With Purpose"
                desc="Apply what you learn and refine skills that matter in interviews."
                Icon={SquarePen}
              />
            </div>
          </div>
        </section>

        {/* ================= CLARITY SECTION ================= */}
        <section className="max-w-4xl mx-auto px-6 pb-20 pt-10 text-center">
          <h2 className="text-4xl font-bold mb-4">Clarity Over Clutter</h2>

          <p className="text-gray-600 text-xl mt-10">
            No random PDFs or scattered links. Everything is organized,
            explained, and easy to follow.
          </p>

          <p className="mt-4 text-gray-500 text-xl">
            Whether revising concepts, practicing questions, or preparing for
            interviews, you’re in the right place.
          </p>

          <div className="mt-10 flex justify-center gap-4">
            <button className="px-6 py-3 rounded-lg bg-indigo-600 text-white font-semibold hover:bg-indigo-700 transition">
              Begin Practice →
            </button>

            <button className="px-6 py-3 rounded-lg border border-indigo-600 text-gray-700 font-semibold hover:bg-gray-100 transition">
              Browse Study Resources →
            </button>
          </div>
        </section>
      </div>
    </>
  );
};

export default Resources;

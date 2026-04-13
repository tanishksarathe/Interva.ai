import React, { useEffect, useState } from "react";
import AOS from "aos";
import "aos/dist/aos.css";
import {
  CirclePlay,
  Star,
  Dot,
  CircleArrowOutUpRight,
  ArrowDownNarrowWide,
  CheckCircle2,
  PhoneForwarded,
  MapPin,
  ChevronUp,
} from "lucide-react";
import { useAuth } from "../config/AuthContext";

// Components
import Navbar from "./Navbar";
import Footer from "./Footer";
import { useNavigate } from "react-router-dom";
import Login from "./Login&SignUp/Login";

const Home = () => {
  const { user } = useAuth();

  const [openLogin, setOpenLogin] = useState(false);

  const navigate = useNavigate();

  const { login } = useAuth();

  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: false,
      mirror: true,
      easing: "ease-in-out",
    });
  }, []);

  return (
    <>
      <div className="bg-[#f8fafc] text-[#1e293c] overflow-x-hidden">
        {/* --- HERO SECTION --- */}
        <section className="relative min-h-screen bg-gradient-to-br from-[#fce7f3] via-[#dbeafe] to-[#e0e7ff] flex flex-col">
          <Navbar />

          <div className="flex-1 flex flex-col lg:flex-row items-center justify-between px-10 lg:px-24 py-10 gap-12">
            {/* Left Content */}
            <div className="w-full lg:w-1/2 space-y-6" data-aos="fade-right">
              <div className="inline-flex items-center gap-2 bg-white/50 backdrop-blur-md px-4 py-2 rounded-full border border-white/20 shadow-sm">
                <Star size={16} fill="#6366f1" className="text-[#020617]" />
                <span className="text-sm font-bold text-[#020617]">
                  Top Rated AI Interview Platform
                </span>
              </div>

              <h1 className="text-5xl lg:text-7xl font-extrabold leading-[1.1] text-[#1e296d]">
                Ace Your Next <br />
                <span className="text-[#020617]">Interview</span> with AI
              </h1>

              <p className="text-lg text-[#334155] max-w-lg leading-relaxed">
                Hey{" "}
                <span className="font-bold text-[#020617]">
                  {user ? user.fullname : "Future Achiever"}
                </span>
                , practice realistic interviews and get instant feedback to land
                your dream job.
              </p>

              <div className="flex flex-wrap gap-4 pt-4">
                <button
                  onClick={
                login ? () => navigate("dashboard/mockint") : () => setOpenLogin(true)
              }
                  className="px-8 py-4 bg-[#020617] text-white rounded-2xl font-bold shadow-lg hover:bg-[#4f46e5] transition-all transform hover:-translate-y-1"
                >
                  Start Mock Interview
                </button>
                {/* <button className="px-8 py-4 bg-white text-[#1e293c] border border-gray-200 rounded-2xl font-bold flex items-center gap-2 hover:bg-gray-50 transition-all">
                <CirclePlay size={20} /> Watch Demo
              </button> */}
              </div>

              {/* Social Proof */}
              <div className="flex items-center gap-4 pt-6">
                <div className="flex -space-x-3">
                  {[1, 2, 3, 4].map((i) => (
                    <img
                      key={i}
                      src="blackLogo.png"
                      className="w-10 h-10 rounded-full border-2 border-white bg-white p-1 object-contain"
                      alt="logo"
                    />
                  ))}
                </div>
                <p className="text-sm font-semibold text-[#020617]">
                  {/* 18,000+ Students Trust Interva.ai */}
                  for Students, Freshers and Working Professionals
                </p>
              </div>
            </div>

            {/* Right Image (Minimalist & Floating) */}
            <div
              className="w-full lg:w-1/2 flex justify-center relative"
              data-aos="zoom-in"
            >
              <div className="absolute inset-0 bg-indigo-400/20 blur-[100px] rounded-full scale-75 animate-pulse"></div>
              <img
                src="ssss.png"
                alt="Hero Illustration"
                className="relative z-10 w-full rounded-2xl  max-w-md drop-shadow-2xl"
              />
            </div>
          </div>
        </section>

        {/* --- COMPANY LOGOS (Clean Marquee Style) --- */}
        {/* <section className="py-12 bg-white border-y border-gray-100 flex flex-wrap justify-center items-center gap-12 px-10">
        <span className="text-gray-400 font-bold uppercase tracking-widest text-xs w-full text-center mb-4">
          Trusted by students at
        </span>
        {["meta", "amazon", "apple", "netflix", "google"].map(
          (company, idx) => (
            <img
              key={idx}
              src={`src/assets/image${idx === 0 ? " copy 4" : idx === 1 ? "" : " copy " + idx}.png`}
              alt={company}
              className="h-8 lg:h-10 grayscale hover:grayscale-0 transition-all opacity-60 hover:opacity-100"
            />
          ),
        )}
      </section> */}

        {/* --- HOW IT WORKS (Modern Split) --- */}
        <section className="py-32 px-10 lg:px-24 bg-[#f8fafc] relative overflow-hidden">
          {/* Background Decorative Circles */}
          <div className="absolute top-0 left-0 w-[400px] h-[400px] bg-indigo-100/50 blur-[120px] rounded-full -z-0"></div>
          <div className="absolute bottom-0 right-0 w-[300px] h-[300px] bg-pink-100/40 blur-[100px] rounded-full -z-0"></div>

          <div className="max-w-7xl mx-auto relative z-10">
            {/* Section Header */}
            <div className="text-center mb-20" data-aos="fade-up">
              <h4 className="text-[#020617] font-black tracking-[0.3em] uppercase text-xs mb-4">
                The Workflow
              </h4>
              <h2 className="text-4xl lg:text-6xl font-extrabold text-[#1e293c] leading-tight">
                From Preparation to{" "}
                <span className="text-[#020617]">Placement</span>
              </h2>
              <div className="h-1.5 w-24 bg-[#020617] mx-auto mt-6 rounded-full"></div>
            </div>

            {/* The Bento Grid Flow */}
            <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
              {/* STEP 1: RESUME */}
              <div
                data-aos="fade-up"
                data-aos-delay="0"
                className="lg:col-span-2 group relative p-1 rounded-[2.5rem] bg-gradient-to-br from-indigo-100 to-transparent hover:from-[#020617] transition-all duration-500"
              >
                <div className="bg-white rounded-[2.4rem] p-8 h-full flex flex-col justify-between">
                  <div>
                    <span className="text-5xl font-black text-indigo-50 opacity-10 group-hover:opacity-100 group-hover:text-indigo-100 transition-all absolute top-6 right-8">
                      01
                    </span>
                    <h3 className="text-2xl font-bold text-[#1e293c] mb-4">
                      Smart Resume Analysis
                    </h3>
                    <p className="text-gray-500 leading-relaxed">
                      Upload your resume and let our AI sync it with
                      industry-standard Job Descriptions to find your perfect
                      match score.
                    </p>
                  </div>
                  <div className="mt-8 flex items-center gap-4">
                    <div className="px-4 py-2 bg-indigo-50 text-[#020617] text-xs font-bold rounded-full">
                      ATS Optimization
                    </div>
                    <div className="px-4 py-2 bg-pink-50 text-pink-500 text-xs font-bold rounded-full">
                      Skill Mapping
                    </div>
                  </div>
                </div>
              </div>

              {/* STEP 2: ROLE */}
              <div
                data-aos="fade-up"
                data-aos-delay="100"
                className="group relative p-1 rounded-[2.5rem] bg-indigo-50 hover:bg-[#020617] transition-all duration-500"
              >
                <div className="bg-white rounded-[2.4rem] p-8 h-full">
                  <span className="text-4xl font-black text-gray-100 group-hover:text-indigo-100 transition-all block mb-6">
                    02
                  </span>
                  <h3 className="text-xl font-bold text-[#1e293c] mb-3">
                    Target Your Role
                  </h3>
                  <p className="text-sm text-gray-400">
                    Select from SDE, Data Analyst, or PM roles to tailor your
                    interview questions.
                  </p>
                </div>
              </div>

              {/* STEP 3: MOCK */}
              <div
                data-aos="fade-up"
                data-aos-delay="200"
                className="group relative p-1 rounded-[2.5rem] bg-indigo-50 hover:bg-[#020617] transition-all duration-500"
              >
                <div className="bg-white rounded-[2.4rem] p-8 h-full">
                  <span className="text-4xl font-black text-gray-100 group-hover:text-indigo-100 transition-all block mb-6">
                    03
                  </span>
                  <h3 className="text-xl font-bold text-[#1e293c] mb-3">
                    AI Mock Session
                  </h3>
                  <p className="text-sm text-gray-400">
                    Experience a high-pressure, voice-based technical interview
                    simulation.
                  </p>
                </div>
              </div>

              {/* STEP 4: FEEDBACK (Full Width Bottom or Right) */}
              <div
                data-aos="fade-up"
                data-aos-delay="300"
                className="lg:col-span-4 group relative p-1 rounded-[2.5rem] bg-gradient-to-r from-indigo-50 via-white to-indigo-50 hover:from-[#020617] hover:to-[#4f46e5] transition-all duration-700"
              >
                <div className="bg-white rounded-[2.4rem] p-8 flex flex-col md:flex-row items-center justify-between gap-8">
                  <div className="flex-1">
                    <span className="text-xs font-bold text-[#020617] uppercase tracking-widest mb-2 block">
                      Final Step
                    </span>
                    <h3 className="text-3xl font-bold text-[#1e293c] mb-4">
                      Deep Performance Analytics
                    </h3>
                    <p className="text-gray-500 max-w-xl">
                      Receive a detailed breakdown of your technical accuracy,
                      fluency, and sentiment analysis. AI generates your
                      personalized roadmap to master your weak areas.
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <button 
                     onClick={
                login ? () => navigate("dashboard") : () => setOpenLogin(true)
              }
                    className="px-10 py-4 bg-[#1e293c] text-white rounded-2xl font-bold hover:bg-[#020617] transition-all shadow-xl group-hover:shadow-indigo-500/20">
                      Explore Analytics 04
                    </button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* --- ADVANCED FEATURES GRID --- */}
        <section className="py-24 px-10 lg:px-24 bg-[#0f172a] relative overflow-hidden">
          {/* Background Decoration */}
          <div className="absolute top-0 right-0 w-[500px] h-[500px] bg-[#020617]/10 blur-[120px] rounded-full -z-0"></div>

          <div className="relative z-10">
            <div
              className="text-center max-w-3xl mx-auto mb-20"
              data-aos="fade-up"
            >
              <h4 className="text-[#a5b4fc] font-bold tracking-widest uppercase text-sm mb-4">
                Precision Tools
              </h4>
              <h2 className="text-4xl lg:text-5xl font-bold text-white mb-6">
                Smart Features for{" "}
                <span className="text-[#fff]">AI-Driven</span> Success
              </h2>
              <p className="text-[#94a3b8] text-lg">
                Everything you need to bridge the gap between "Preparing" and
                "Getting Hired" in one unified platform.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              {[
                {
                  title: "AI Voice Assistant",
                  desc: "Real-time voice-based mock interviews with speech-to-text evaluation and fluency analysis.",
                  icon: <PhoneForwarded className="text-white" />,
                  delay: 0,
                },
                {
                  title: "Smart Resume Scorer",
                  desc: "Upload your resume and get an ATS compatibility score against specific Job Descriptions (JD).",
                  icon: <MapPin className="text-white" />, // Placeholder icon from your imports
                  delay: 100,
                },
                {
                  title: "DSA Prep Engine",
                  desc: "Integrated Monaco Editor to practice coding rounds with real-time AI logic verification.",
                  icon: <CirclePlay className="text-white" />,
                  delay: 200,
                },
                {
                  title: "Adaptive Roadmaps",
                  desc: "Dynamic career paths that update based on your strengths and weaknesses in mock tests.",
                  icon: <ArrowDownNarrowWide className="text-white" />,
                  delay: 300,
                },
                {
                  title: "Performance Analytics",
                  desc: "Deep-dive charts and metrics to track your progress across Aptitude, DSA, and HR rounds.",
                  icon: <ChevronUp className="text-white" />,
                  delay: 400,
                },
                {
                  title: "Company Specific Prep",
                  desc: "Practice using previous year patterns and questions from top tech giants like TCS, Google, and Meta.",
                  icon: <CircleArrowOutUpRight className="text-white" />,
                  delay: 500,
                },
              ].map((feature, index) => (
                <div
                  key={index}
                  data-aos="fade-up"
                  data-aos-delay={feature.delay}
                  className="group p-8 rounded-[32px] bg-[#1e293c]/50 border border-white/5 backdrop-blur-xl hover:border-[#020617]/50 transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl hover:shadow-[#020617]/10"
                >
                  <div className="w-14 h-14 rounded-2xl bg-gradient-to-br from-[#020617] to-[#4f46e5] flex items-center justify-center mb-6 shadow-lg shadow-indigo-500/20 group-hover:scale-110 transition-transform">
                    {feature.icon}
                  </div>
                  <h3 className="text-xl font-bold text-white mb-3">
                    {feature.title}
                  </h3>
                  <p className="text-[#94a3b8] leading-relaxed text-sm">
                    {feature.desc}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* --- TESTIMONIALS: THE VOICE OF SUCCESS --- */}
        <section
          id="testimonials"
          className="py-24 bg-white relative overflow-hidden"
        >
          {/* Soft background accents */}
          <div className="absolute top-1/2 left-0 w-72 h-72 bg-blue-50 blur-[100px] rounded-full -z-0"></div>

          <div className="max-w-7xl mx-auto px-10 lg:px-24 relative z-10">
            <div className="text-center mb-16" data-aos="fade-up">
              <h4 className="text-[#020617] font-bold tracking-[0.2em] text-xs mb-4 uppercase">
                Success Stories
              </h4>
              <h2 className="text-4xl lg:text-5xl font-extrabold text-[#1e293c]">
                What Our Users Say
              </h2>
              <p className="text-gray-500 mt-6 max-w-2xl mx-auto text-lg">
                Join thousands of students who transformed their interview
                anxiety into career-defining job offers.
              </p>
            </div>

            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {[
                {
                  name: "Sanjana Vishwakarma",
                  role: "Full Stack Developer",
                  company: "Fresher",
                  img: "blackLogo.png",
                  content:
                    "Interva.ai's voice assistant felt so real. It helped me clear my technical rounds with 100% confidence. The AI feedback is a game changer!",
                  delay: 0,
                },
                {
                  name: "Tanishk Sarathe",
                  role: "Full Stack Developer",
                  company: "Fresher",
                  img: "blackLogo.png",
                  content:
                    "The Resume Analyzer pointed out exactly what was missing in my profile. I got shortlisted in my dream company within a week!",
                  delay: 100,
                },
                {
                  name: "Aryan Gupta",
                  role: "Full Stack Dev",
                  company: "Fresher",
                  img: "blackLogo.png",
                  content:
                    "The structured multi-round preparation (Apti + DSA + HR) is brilliant. It’s like having a personal mentor 24/7.",
                  delay: 200,
                },
              ].map((testi, idx) => (
                <div
                  key={idx}
                  data-aos="fade-up"
                  data-aos-delay={testi.delay}
                  className="group relative p-8 rounded-[2.5rem] bg-[#f8fafc] border border-transparent hover:border-[#020617]/20 hover:bg-white hover:shadow-2xl hover:shadow-indigo-500/10 transition-all duration-500"
                >
                  {/* Quote Icon */}
                  <div className="absolute top-6 right-8 text-indigo-100 group-hover:text-indigo-500/20 transition-colors">
                    <svg
                      width="40"
                      height="40"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                    >
                      <path d="M14.017 21L14.017 18C14.017 16.8954 14.9124 16 16.017 16H19.017C19.5693 16 20.017 15.5523 20.017 15V9C20.017 8.44772 19.5693 8 19.017 8H15.017C14.4647 8 14.017 8.44772 14.017 9V12C14.017 12.5523 13.5693 13 13.017 13H11.017C10.4647 13 10.017 12.5523 10.017 12V9C10.017 6.79086 11.8079 5 14.017 5H19.017C21.2261 5 23.017 6.79086 23.017 9V15C23.017 18.866 19.883 22 16.017 22H14.017V21ZM1 15V9C1 6.79086 2.79086 5 5 5H10C12.2091 5 14 6.79086 14 9V12C14 12.5523 13.5523 13 13 13H11C10.4477 13 10 12.5523 10 12V9C10 8.44772 9.55228 8 9 8H5C4.44772 8 4 8.44772 4 9V15C4 15.5523 4.44772 16 5 16H8C8.55228 16 9 15.5523 9 15V12C9 11.4477 9.44772 11 10 11H12C12.5523 11 13 11.4477 13 12V15C13 18.866 9.86599 22 6 22H4V21L4 18C4 16.8954 4.89543 16 6 16H9C9.55228 16 10 15.5523 10 15V12"></path>
                    </svg>
                  </div>

                  <p className="text-gray-500 leading-relaxed italic mb-8 relative z-10">
                    "{testi.content}"
                  </p>

                  <div className="flex items-center gap-4">
                    <div className="relative">
                      <img
                        src={testi.img}
                        alt={testi.name}
                        className="w-12 h-12 rounded-full border-2 border-white shadow-md bg-white p-1"
                      />
                      <div className="absolute -bottom-1 -right-1 w-4 h-4 bg-green-500 border-2 border-white rounded-full"></div>
                    </div>
                    <div>
                      <h4 className="font-bold text-[#1e293c]">{testi.name}</h4>
                      <p className="text-xs font-bold text-[#020617] uppercase">
                        {testi.role} @ {testi.company}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section className="py-16 bg-white border-y border-gray-50 overflow-hidden">
          <div className="max-w-7xl mx-auto px-10">
            {/* Heading */}
            <div className="flex items-center gap-4 mb-10 opacity-50">
              <div className="h-[1px] flex-1 bg-gradient-to-r from-transparent to-gray-300"></div>
              <span className="text-gray-500 font-black uppercase tracking-[0.3em] text-[10px] whitespace-nowrap">
                Empowering Students For Global Tech Giants
              </span>
              <div className="h-[1px] flex-1 bg-gradient-to-l from-transparent to-gray-300"></div>
            </div>

            {/* Logos Container with Animation */}
            <div className="relative flex overflow-x-hidden group">
              <div className="flex animate-marquee whitespace-nowrap items-center gap-20 py-4">
                {[
                  { name: "Meta", src: "/assets/image copy 4.png" },
                  { name: "Amazon", src: "/assets/image.png" },
                  { name: "Apple", src: "/assets/image copy 2.png" },
                  { name: "Netflix", src: "/assets/image copy 5.png" },
                  { name: "Google", src: "/assets/image copy.png" },
                ]
                  .concat([
                    { name: "Meta", src: "/assets/image copy 4.png" },
                    { name: "Amazon", src: "/assets/image.png" },
                    { name: "Apple", src: "/assets/image copy 2.png" },
                    { name: "Netflix", src: "/assets/image copy 5.png" },
                    { name: "Google", src: "/assets/image copy.png" },
                  ])
                  .map((company, idx) => (
                    <img
                      key={idx}
                      src={company.src}
                      alt={company.name}
                      className="h-8 lg:h-10  hover:grayscale-0 hover:opacity-100 transition-all duration-500 cursor-pointer transform hover:scale-110"
                    />
                  ))}
              </div>

              {/* Side Fades for Smooth Look */}
              <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-white to-transparent z-10"></div>
              <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-white to-transparent z-10"></div>
            </div>
          </div>

          {/* CSS for Marquee Animation */}
          <style jsx>{`
            @keyframes marquee {
              0% {
                transform: translateX(0);
              }
              100% {
                transform: translateX(-50%);
              }
            }
            .animate-marquee {
              animation: marquee 30s linear infinite;
            }
            .group:hover .animate-marquee {
              animation-play-state: paused;
            }
          `}</style>
        </section>

        {/* --- CTA SECTION (Glass Card) --- */}
        <section className="px-6 lg:px-24 py-16" data-aos="zoom-in">
          {/* Compact Glass Container */}
          <div className="bg-[#0f172a] rounded-[2rem] p-8 lg:p-12 relative overflow-hidden border border-white/5 shadow-2xl">
            {/* Subtle Background Glow */}
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-[#020617]/20 blur-[80px] rounded-full animate-pulse"></div>

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-8">
              {/* Left: Punchy Text */}
              <div className="text-center lg:text-left space-y-3 max-w-xl">
                <h2 className="text-3xl lg:text-4xl font-black text-white leading-tight">
                  Ready to Lead Your <br />
                  <span className="text-[#a5b4fc]">Dream Career?</span>
                </h2>
                <p className="text-[#94a3b8] text-sm lg:text-base leading-relaxed">
                  Simulate real interviews, get instant AI feedback, and{" "}
                  <br className="hidden lg:block" />
                  bridge the gap to your next big opportunity today.
                </p>
              </div>

              {/* Right: Focused Action Area */}
              <div className="flex flex-col items-center lg:items-end gap-4 min-w-fit">
                <button
                  onClick={
                    login
                      ? () => navigate("/dashboard")
                      : () => setOpenLogin(true)
                  }
                  className="group relative px-10 py-4 bg-[#020617] text-white rounded-xl font-bold text-lg overflow-hidden transition-all hover:scale-105 active:scale-95 shadow-xl shadow-indigo-500/20"
                >
                  <span className="relative z-10 flex items-center gap-2">
                    Get Started{" "}
                    <CircleArrowOutUpRight
                      size={20}
                      className="group-hover:translate-x-1 group-hover:-translate-y-1 transition-transform"
                    />
                  </span>
                  {/* Shine effect */}
                  <div className="absolute inset-0 w-full h-full bg-gradient-to-r from-transparent via-white/10 to-transparent -translate-x-full group-hover:translate-x-full transition-transform duration-700"></div>
                </button>

                {/* Minimal Social Proof */}
                <div className="flex items-center gap-3 opacity-60">
                  <div className="flex -space-x-2">
                    {[1, 2, 3].map((i) => (
                      <img
                        key={i}
                        src="blackLogo.png"
                        className="w-5 h-5 rounded-full border border-[#0f172a] bg-white p-0.5"
                      />
                    ))}
                  </div>
                  <p className="text-[10px] text-white font-medium tracking-widest uppercase">
                   Can Handle 1000+ users
                  </p>
                </div>
              </div>
            </div>
          </div>
        </section>

        <Footer />
      </div>

      {openLogin && <Login setOpenLogin={setOpenLogin} />}
    </>
  );
};

export default Home;

import React, { useEffect } from 'react';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { Terminal, Code2, BrainCircuit, Activity } from 'lucide-react';

const About = () => {
  useEffect(() => {
    AOS.init({ duration: 800, once: true, easing: 'ease-out-quad' });
  }, []);

  return (
    <div className="bg-[#0f172a] text-[#f8fafc] font-sans selection:bg-[#6366f1]/30">
      
      {/* --- HERO SECTION --- */}
      <section className="pt-32 pb-20 px-6 overflow-hidden">
        {/* Subtle background mesh grid */}
        <div className="absolute inset-0 opacity-[0.03] pointer-events-none bg-[url('https://www.transparenttextures.com/patterns/carbon-fibre.png')]"></div>
        
        <div className="max-w-6xl mx-auto text-center relative z-10">
          <div data-aos="zoom-in">
             <span className="px-3 py-1 text-xs font-mono border border-[#6366f1]/40 rounded-full text-[#a5b4fc] bg-[#1e293b]/50">
               SYSTEM_ORIGIN: INTERVA_CORE_V1.0
             </span>
          </div>

          <h1 
            data-aos="fade-up" 
            className="mt-8 text-5xl md:text-7xl font-black tracking-tighter leading-[1.1]"
          >
            We build the <br />
            <span className="bg-gradient-to-br from-[#fce7f3] via-[#dbeafe] to-[#e0e7ff] bg-clip-text text-transparent italic">
              Interview Intelligence.
            </span>
          </h1>

          <p data-aos="fade-up" data-aos-delay="200" className="mt-8 max-w-2xl mx-auto text-[#94a3b8] text-lg font-light leading-relaxed">
            Interva.AI is a full-stack ecosystem engineered to bridge the gap between academic DSA mastery and real-world career readiness.
          </p>
        </div>
      </section>

      {/* --- CORE ARCHITECTURE (The "About" Content) --- */}
      <section className="py-20 px-6 max-w-7xl mx-auto overflow-hidden">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          
          {/* Main Card: The Mission */}
          <div 
            data-aos="fade-right"
            className="lg:col-span-2 p-10 rounded-3xl bg-[rgba(30,41,59,0.5)] backdrop-blur-xl border border-white/5 relative group overflow-hidden"
          >
            {/* Corner Accent */}
            <div className="absolute top-0 right-0 w-32 h-32 bg-gradient-to-br from-[#6366f1]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500"></div>
            
            <h2 className="text-3xl font-bold mb-6 text-[#f8fafc]">The Mission</h2>
            <div className="space-y-4 text-[#94a3b8] text-lg leading-relaxed">
              <p>
                Founded on the principle of <span className="text-[#6366f1]">Iterative Growth</span>, Interva.AI addresses the lack of high-fidelity simulations in modern prep platforms. 
              </p>
              <p>
                We provide a sandbox where the pressure of a placement drive meets the precision of AI feedback. It’s not just about getting the answer right; it’s about the <span className="text-[#a5b4fc]">logic, the efficiency, and the delivery</span>.
              </p>
            </div>
          </div>

          {/* Side Card: Technical Pillars */}
          <div 
            data-aos="fade-left"
            className="p-8 rounded-3xl bg-[#1e293b] border border-white/10 flex flex-col justify-between"
          >
            <div>
              <Terminal className="w-10 h-10 text-[#6366f1] mb-6" />
              <h3 className="text-xl font-bold mb-2">Dev-First Engine</h3>
              <p className="text-sm text-[#94a3b8]">
                Integrated Monaco Editor, Web Worker-based execution, and JWT-secured persistence.
              </p>
            </div>
            <div className="mt-8 pt-8 border-t border-white/5">
              <div className="flex items-center gap-4 mb-4">
                <div className="h-2 w-full bg-[#0f172a] rounded-full overflow-hidden">
                  <div className="h-full bg-[#6366f1] w-[85%]"></div>
                </div>
                <span className="text-xs font-mono">85% READY</span>
              </div>
            </div>
          </div>
        </div>

        {/* --- FEATURE GRID --- */}
        <div className="mt-8 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {[
            { icon: <BrainCircuit />, title: "AI Evaluator", desc: "Contextual feedback on code quality." },
            { icon: <Activity />, title: "Live Gauntlet", desc: "Sequential multi-round test logic." },
            { icon: <Code2 />, title: "DSA Sandbox", desc: "Monaco-powered coding environment." },
            { icon: <Terminal />, title: "Resume Sync", desc: "JD-to-Resume matching algorithms." }
          ].map((feat, idx) => (
            <div 
              key={idx}
              data-aos="fade-up"
              data-aos-delay={idx * 100}
              className="p-6 rounded-2xl bg-[rgba(30,41,59,0.5)] border border-white/5 hover:border-[#6366f1]/40 transition-all duration-200 group"
            >
              <div className="w-12 h-12 flex items-center justify-center rounded-xl bg-[#0f172a] text-[#6366f1] group-hover:bg-[#6366f1] group-hover:text-white transition-all">
                {feat.icon}
              </div>
              <h4 className="mt-4 font-bold text-[#f8fafc]">{feat.title}</h4>
              <p className="mt-2 text-sm text-[#94a3b8]">{feat.desc}</p>
            </div>
          ))}
        </div>
      </section>

      {/* --- CTA / FOOTER --- */}
      <footer className="py-20 text-center border-t border-white/5">
        <div data-aos="zoom-in">
          <p className="text-[#94a3b8] mb-6">Ready to initiate the protocol?</p>
          <button className="px-8 py-3 rounded-lg font-bold bg-[#6366f1] hover:bg-[#4f46e5] text-white transition-all transform hover:scale-105 active:scale-95 shadow-lg shadow-[#6366f1]/20">
            Start Your Journey
          </button>
        </div>
      </footer>
    </div>
  );
};

export default About;
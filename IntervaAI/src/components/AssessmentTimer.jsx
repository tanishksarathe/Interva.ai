import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Clock, AlertCircle } from "lucide-react";
import toast from "react-hot-toast";
import { useDraggable } from "@dnd-kit/core";

const AssessmentTimer = ({ limitInMinutes, onTimeUp }) => {
  const totalSeconds = limitInMinutes ? limitInMinutes * 60 : 25 * 60;
  const [timeLeft, setTimeLeft] = useState(totalSeconds);

   const { attributes, listeners, setNodeRef } = useDraggable({
    id: "timer",
  });

  useEffect(() => {
    if (timeLeft <= 0) {
      toast.error("Time's up! Submitting your answers...", {
        icon: "⏳",
        style: { borderRadius: "10px", background: "#1e293b", color: "#fff" },
      });
      onTimeUp();
      return;
    }

    const timer = setInterval(() => {
      setTimeLeft((prev) => prev - 1);
    }, 1000);

    return () => clearInterval(timer);
  }, [timeLeft, onTimeUp]);

  // Formatting seconds to MM:SS
  const minutes = Math.floor(timeLeft / 60);
  const seconds = timeLeft % 60;
  const percentage = (timeLeft / totalSeconds) * 100;

  // Urgent color change (last 2 minutes)
  const isUrgent = timeLeft < 120;

  return (
    <div ref={setNodeRef} {...listeners} {...attributes}>
      <div className="z-[60] flex flex-col items-center gap-2 backdrop-blur-3xl">
        <motion.div
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className={`relative flex items-center justify-center p-4 rounded-3xl border backdrop-blur-xl transition-colors duration-500 ${
            isUrgent
              ? "bg-red-500/10 border-red-500/50"
              : "bg-slate-900/80 border-slate-800"
          }`}
        >
          {/* Circular Progress SVG */}
          <svg className="w-16 h-16 transform -rotate-90">
            <circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              className="text-slate-800"
            />
            <motion.circle
              cx="32"
              cy="32"
              r="28"
              stroke="currentColor"
              strokeWidth="3"
              fill="transparent"
              strokeDasharray="175.9" // 2 * Math.PI * 28
              initial={{ strokeDashoffset: 0 }}
              animate={{ strokeDashoffset: 175.9 - (175.9 * percentage) / 100 }}
              className={`${isUrgent ? "text-red-500" : "text-indigo-500"}`}
            />
          </svg>

          {/* Digital Clock Text */}
          <div className="absolute inset-0 flex flex-col items-center justify-center">
            <motion.span
              key={timeLeft}
              initial={{ scale: 0.9, opacity: 0.8 }}
              animate={{ scale: 1, opacity: 1 }}
              className={`text-xs font-mono font-bold ${isUrgent ? "text-red-400" : "text-indigo-400"}`}
            >
              {String(minutes).padStart(2, "0")}:
              {String(seconds).padStart(2, "0")}
            </motion.span>
          </div>

          {/* Pulsing Warning Icon for Urgent state */}
          <AnimatePresence>
            {isUrgent && (
              <motion.div
                initial={{ opacity: 0, scale: 0 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0 }}
                className="absolute -top-1 -right-1"
              >
                <div className="relative">
                  <div className="absolute inset-0 animate-ping rounded-full bg-red-500 opacity-75"></div>
                  <AlertCircle className="relative w-4 h-4 text-red-500 bg-slate-900 rounded-full" />
                </div>
              </motion.div>
            )}
          </AnimatePresence>
        </motion.div>

        {/* Subtle Label */}
        <span className="text-[10px] text-center font-bold text-slate-500 uppercase tracking-widest">
          Time Left <br /> <span className="text-[7px]">You can shift me</span>
        </span>
      </div>
    </div>
  );
};

export default AssessmentTimer;

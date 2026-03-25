// import React, { useEffect, useRef, useState } from "react";
// import {
//   BasicInterviewQuestions,
//   hrRoundQuestions,
//   technicalRoundQuestions,
//   managerialRoundQuestions,
// } from "../assets/interviewQuestionsStack.js";
// import InterviewAnalysis from "../components/Resume Analysis/InterviewAnalysis.jsx";
// import toast from "react-hot-toast";
// import api from "../config/API.jsx";
// import { useLocation } from "react-router-dom";
// import AssessmentTimer from "../components/AssessmentTimer.jsx";

// const InterviewPage = () => {
//   const interviewOptions = [
//     { name: "Basic Interview", val: BasicInterviewQuestions, role: "basic" },
//     { name: "HR Round", val: hrRoundQuestions, role: "hr" },
//     { name: "Technical Round", val: technicalRoundQuestions, role: "tr" },
//     { name: "Managerial Round", val: managerialRoundQuestions, role: "mr" },
//   ];

//   const [currentIndex, setCurrentIndex] = useState(0);
//   const [conversation, setConversation] = useState([]);
//   const [role, setRole] = useState(null);
//   const [analyzedResponse, setAnalyzedResponse] = useState(null);
//   const [status, setStatus] = useState("idle");
//   const [started, setStarted] = useState(false);
//   const [voices, setVoices] = useState([]);
//   const [selectedVoice, setSelectedVoice] = useState(null);
//   const [interviewQuestions, setInterviewQuestions] = useState([]);

//   //   console.log(interviewQuestions);

//   const recognitionRef = useRef(null);
//   const currentIndexRef = useRef(0);
//   const questionsRef = useRef([]);
//   // interview Simulation material

//   const location = useLocation();

//   const { details } = location.state || {};

//   const [simulation, setSimulation] = useState(details?.simulation || false);

//   // if (simulation) {
//   //   const [finalDetails, setFinalDetails] = useState({
//   //     score: 0,
//   //     timeTaken: 0,
//   //     round: "hr",
//   //     testId: details.testId,
//   //     feedback: "",
//   //     totalQues: interviewQuestions.length,
//   //   });
//   // }
//   const [startTime, setStartTime] = useState(null);

//   useEffect(() => {
//     setStartTime(Date.now());
//   }, []);

//   const [interviewTypeForSimulation, setInterviewTypeForSimulation] =
//     useState(null);

//   useEffect(() => {
//     if (details && simulation) {
//       let interviewQs =
//         interviewOptions.find((item) => item.role === details.type) ||
//         interviewOptions[0];

//       setInterviewTypeForSimulation(interviewQs.name);

//       setInterviewQuestions(interviewQs.val || []);
//     }
//   }, [details]);

//   useEffect(() => {
//     const loadVoices = () => {
//       const availableVoice = speechSynthesis.getVoices();
//       setVoices(availableVoice);

//       // select english voice default

//       const englishVoice = availableVoice.find((v) => v.lang.includes("en"));

//       if (englishVoice) setSelectedVoice(englishVoice);
//     };

//     loadVoices();

//     speechSynthesis.onvoiceschanged = loadVoices;
//   }, []);

//   //   console.log(voices);

//   // Setup Speech Recognition once
//   useEffect(() => {
//     const SpeechRecognition =
//       window.SpeechRecognition || window.webkitSpeechRecognition;

//     if (!SpeechRecognition) {
//       alert("Speech Recognition not supported");
//       return;
//     }

//     const recognition = new SpeechRecognition();
//     recognition.lang = "en-US";
//     recognition.continuous = true; // IMPORTANT
//     recognition.interimResults = true; // IMPORTANT

//     let finalTranscript = "";
//     let silenceTimer;

//     recognition.onresult = (event) => {
//       clearTimeout(silenceTimer);

//       let interimTranscript = "";

//       for (let i = event.resultIndex; i < event.results.length; i++) {
//         const transcript = event.results[i][0].transcript;

//         if (event.results[i].isFinal) {
//           finalTranscript += transcript + " ";
//         } else {
//           interimTranscript += transcript;
//         }
//       }

//       // Silence detection (2 seconds)
//       silenceTimer = setTimeout(() => {
//         recognition.stop();
//       }, 2000);
//     };

//     recognition.onend = () => {
//       if (finalTranscript.trim() !== "") {
//         setConversation((prev) => [
//           ...prev,
//           {
//             question: interviewQuestions[currentIndex],
//             answer: finalTranscript.trim(),
//           },
//         ]);

//         setStatus("processing");

//         setTimeout(() => {
//           goToNextQuestion();
//         }, 800);
//       }
//     };

//     recognitionRef.current = recognition;
//   }, [currentIndex]);

//   const speak = (text, callback) => {
//     speechSynthesis.cancel();
//     const utterance = new SpeechSynthesisUtterance(text);
//     utterance.lang = "en-US";

//     if (selectedVoice) {
//       utterance.voice = selectedVoice;
//     }

//     setStatus("speaking");

//     utterance.onend = () => {
//       if (callback) callback();
//     };

//     speechSynthesis.speak(utterance);
//   };

//   const startListening = () => {
//     setStatus("listening");
//     recognitionRef.current.start();
//   };

//   const startInterview = () => {
//     setStarted(true);
//     setCurrentIndex(0);

//     speak("Nice to meet you. Let's begin your interview.", () => {
//       speak(interviewQuestions[0], startListening);
//     });
//   };

//   const goToNextQuestion = () => {
//     const nextIndex = currentIndex + 1;
//     console.log(nextIndex);
//     console.log(interviewQuestions.length); // 0 why?
//     if (nextIndex < interviewQuestions.length) {
//       setCurrentIndex(nextIndex);

//       speak(interviewQuestions[nextIndex], startListening);
//     } else {
//       endInterview();
//     }
//   };

//   const endInterview = () => {
//     speak(
//       "Thank you for your thoughtful responses. That concludes our interview.",
//       () => {
//         setStatus("completed");
//       },
//     );
//   };

//   useEffect(() => {
//     if (status === "completed" && conversation.length > 0) {
//       fetchAnalyzedMock(conversation);
//     }
//   }, [status]);

//   const fetchAnalyzedMock = async (transcript) => {
//     try {
//       const res = await api.post(`/service/interview-analysis/${role}`, {
//         transcript,
//       }); // it always wants req.body so direct sending data may be unappropriate, so sending it after wrapping it into an object will be appropriate..
//       console.log("Analyzed Response : ", res);

//       setAnalyzedResponse(res?.data?.data);
//     } catch (error) {
//       toast.error(
//         error?.response?.data?.message || "Error Analyzing Mock Interview",
//       );
//       console.log(error);
//     }
//   };

//   useEffect(() => {
//     if (status === "completed" && conversation.length > 0) {
//       fetchAnalyzedMock(conversation);
//     }
//   }, [status]);

//   const handleFinalSubmit = async (e) => {
//     e.preventDefault();

//     const endTime = Date.now();

//     const durationMs = endTime - startTime;

//     const durationMinutes = Math.floor(durationMs / 60000);

//     console.log("Duration:", durationMinutes);

//     try {
//       const detailSubmitted = {
//         ...finalDetails,
//         timeTaken: durationMinutes,
//         score: analyzedResponse?.summary?.overall_score || 0,
//       };

//       const res = await api.patch("/user/interview-summary", detailSubmitted);
//       console.log("Final submission response: ", res?.data?.data);
//       toast.success("Final details submitted successfully");
//     } catch (error) {
//       toast.error("Error submitting final details");
//     }
//   };

//   return (
//     <>
//       <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
//         <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6">
//           {/* LEFT PANEL - Interview Info */}
//           <div className="col-span-1 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-6 border border-white/10 shadow-2xl">
//             <h2 className="text-xl font-semibold mb-6 text-indigo-400">
//               Interview Status
//             </h2>

//             <div className="space-y-6">
//               {/* Progress */}
//               <div>
//                 <p className="text-sm text-slate-400 mb-2">Progress</p>
//                 <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
//                   <div
//                     className="bg-indigo-500 h-3 transition-all duration-500"
//                     style={{
//                       width: `${(conversation.length / interviewQuestions.length) * 100}%`,
//                     }}
//                   ></div>
//                 </div>
//                 <p className="text-sm text-slate-300 mt-2">
//                   {conversation.length} / {interviewQuestions.length} Questions
//                 </p>
//               </div>

//               {simulation && (
//                 <AssessmentTimer
//                   limitInMinutes={details?.timelimit}
//                   onTimeUp={handleFinalSubmit}
//                 />
//               )}

//               {!started && (
//                 <>
//                   <div className="mt-6">
//                     <label className="text-sm text-slate-400">
//                       Select Interviewer
//                     </label>

//                     <select
//                       className="w-full mt-2 p-2 rounded-lg bg-slate-700 text-slate-100 border border-white/10"
//                       onChange={(e) => {
//                         const voice = voices.find(
//                           (v) => v.name === e.target.value,
//                         );
//                         setSelectedVoice(voice);
//                       }}
//                     >
//                       {voices
//                         .filter((v) => v.lang.includes("en"))
//                         .map((voice, index) => (
//                           <option key={index} value={voice.name}>
//                             {voice.name}
//                           </option>
//                         ))}
//                     </select>
//                   </div>
//                   <div>
//                     <div className="mt-6">
//                       <label className="text-sm text-slate-400">
//                         Select Interview Type
//                       </label>

//                       <select
//                         className="w-full mt-2 p-3 rounded-xl bg-slate-700 text-slate-100 border border-white/10 outline-none focus:ring-2 focus:ring-(--primary)"
//                         onChange={(e) => {
//                           const selectedIndex = e.target.value;
//                           const selectedItem = interviewOptions[selectedIndex];

//                           if (selectedItem) {
//                             setInterviewQuestions(selectedItem.val); // Questions set ho gaye
//                             setRole(selectedItem.role); // Role bhi set ho gaya! 🚀
//                           }
//                         }}
//                         required
//                         disabled={simulation} // Disable if it's a simulation
//                       >
//                         <option value="" disabled selected>
//                           {simulation
//                             ? interviewTypeForSimulation
//                             : "--Select Interview Type--"}
//                         </option>
//                         {interviewOptions.map((item, index) => (
//                           <option
//                             key={index}
//                             value={index}
//                             className="capitalize"
//                           >
//                             {item.name}
//                           </option>
//                         ))}
//                       </select>
//                     </div>
//                   </div>
//                 </>
//               )}

//               {/* Status Indicator */}
//               <div className="text-center mt-6">
//                 {status === "speaking" && (
//                   <p className="text-indigo-300 animate-pulse">
//                     🔊 Interviewer Speaking...
//                   </p>
//                 )}

//                 {status === "listening" && (
//                   <div className="flex flex-col items-center">
//                     <div className="w-16 h-16 rounded-full bg-red-500 animate-ping absolute opacity-30"></div>
//                     <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center relative">
//                       🎤
//                     </div>
//                     <p className="mt-3 text-red-400">Listening...</p>
//                   </div>
//                 )}

//                 {status === "processing" && (
//                   <p className="text-yellow-400 animate-pulse">
//                     ⏳ Processing...
//                   </p>
//                 )}

//                 {status === "completed" && (
//                   <p className="text-green-400 font-semibold">
//                     ✅ Interview Completed
//                   </p>
//                 )}
//               </div>

//               {/* Restart */}
//               {status === "completed" && (
//                 <button
//                   onClick={() => window.location.reload()}
//                   className="w-full mt-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
//                 >
//                   Restart Interview
//                 </button>
//               )}

//               {simulation &&
//                 analyzedResponse != null &&
//                 (toast.success(
//                   "Simulation completed! You can see the analysis below and give your valuable feedback to us.Please submit the round to save your performance details.",
//                 ),
//                 (
//                   <>
//                     <button
//                       type="button"
//                       onClick={handleFinalSubmit}
//                       className="w-full mt-6 py-2 rounded-xl bg-green-500 hover:bg-green-600 transition"
//                     >
//                       Submit Round
//                     </button>
//                     <textarea
//                       name="feedback"
//                       value={finalDetails.feedback}
//                       onChange={(e) =>
//                         setFinalDetails((prev) => ({
//                           ...prev,
//                           feedback: e.target.value,
//                         }))
//                       }
//                       placeholder="Please give us your valuable feedback..."
//                     ></textarea>
//                   </>
//                 ))}
//             </div>
//           </div>

//           {/* RIGHT PANEL - Transcript */}
//           <div className="col-span-2 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col">
//             {!started ? (
//               <div className="flex flex-col items-center justify-center h-full text-center">
//                 <h1 className="text-3xl font-bold text-indigo-400 mb-6">
//                   🎤 AI Interview Simulation
//                 </h1>

//                 <p className="text-slate-400 mb-8 max-w-md">
//                   Experience a realistic voice-driven mock interview session.
//                   Step into a high-fidelity voice simulation powered by Interva
//                   AI. Perfect your tone, pace, and logic in a stress-free
//                   environment.
//                 </p>

//                 <button
//                   onClick={startInterview}
//                   disabled={!interviewQuestions.length}
//                   className="px-10 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition transform disabled:cursor-not-allowed hover:scale-105 shadow-xl font-semibold"
//                 >
//                   Start Interview
//                 </button>
//               </div>
//             ) : (
//               <>
//                 <h2 className="text-xl font-semibold mb-6 text-indigo-300">
//                   Live Transcript
//                 </h2>

//                 <div className="flex-1 overflow-y-auto space-y-6 pr-2">
//                   {conversation.map((item, index) => (
//                     <div
//                       key={index}
//                       className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-md"
//                     >
//                       <p className="text-indigo-400 font-semibold mb-2">
//                         Q{index + 1}
//                       </p>
//                       <p className="mb-4 text-slate-200">{item.question}</p>

//                       <p className="text-green-400 font-semibold mb-2">
//                         A{index + 1}
//                       </p>
//                       <p className="text-slate-300">{item.answer}</p>
//                     </div>
//                   ))}
//                 </div>
//               </>
//             )}
//           </div>
//         </div>
//       </div>

//       {analyzedResponse != null && (
//         <>
//           <InterviewAnalysis content={analyzedResponse} role={role} />
//         </>
//       )}
//     </>
//   );
// };

// export default InterviewPage;

import React, { useEffect, useRef, useState, useCallback } from "react";
import {
  BasicInterviewQuestions,
  hrRoundQuestions,
  technicalRoundQuestions,
  managerialRoundQuestions,
} from "../assets/interviewQuestionsStack.js";
import InterviewAnalysis from "../components/Resume Analysis/InterviewAnalysis.jsx";
import toast from "react-hot-toast";
import api from "../config/API.jsx";
import { useLocation, useNavigate } from "react-router-dom";
import AssessmentTimer from "../components/AssessmentTimer.jsx";
import { useAuth } from "../config/AuthContext.jsx";

const interviewOptions = [
  { name: "Basic Interview", val: BasicInterviewQuestions, role: "basic" },
  { name: "HR Round", val: hrRoundQuestions, role: "hr" },
  { name: "Technical Round", val: technicalRoundQuestions, role: "tr" },
  { name: "Managerial Round", val: managerialRoundQuestions, role: "mr" },
];

const InterviewPage = () => {
  const navigate = useNavigate();

  const { user } = useAuth();

  const location = useLocation();
  const { details } = location.state || {};
  const isSimulation = details?.simulation || false;

  // ─── Core state ───────────────────────────────────────────────────────────
  const [interviewQuestions, setInterviewQuestions] = useState([]);
  const [role, setRole] = useState(null);
  const [currentIndex, setCurrentIndex] = useState(0);
  const [conversation, setConversation] = useState([]);
  const [status, setStatus] = useState("idle"); // idle | speaking | listening | processing | completed
  const [started, setStarted] = useState(false);
  const [analyzedResponse, setAnalyzedResponse] = useState(null);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [startTime, setStartTime] = useState(null);
  const [interviewTypeLabel, setInterviewTypeLabel] = useState(null);
  const [analysisFetched, setAnalysisFetched] = useState(false);

  // Simulation-only state
  const [finalDetails, setFinalDetails] = useState({
    score: 0,
    timeTaken: 0,
    round: details?.type || "hr",
    testId: details?.testId || null,
    feedback: "",
    totalQues: 0,
  });

  // ─── Refs (avoid stale-closure problems) ──────────────────────────────────
  const recognitionRef = useRef(null);
  const currentIndexRef = useRef(0); // always in sync with currentIndex
  const questionsRef = useRef([]); // always in sync with interviewQuestions
  const roleRef = useRef(null); // always in sync with role
  const conversationRef = useRef([]); // always in sync with conversation
  const selectedVoiceRef = useRef(null);
  const isRecognitionActive = useRef(false);
  // Stable refs to latest speakText / endInterview so recognition onend can call them
  const speakTextRef = useRef(null);
  const endInterviewRef = useRef(null);

  // Keep refs in sync
  useEffect(() => {
    currentIndexRef.current = currentIndex;
  }, [currentIndex]);
  useEffect(() => {
    questionsRef.current = interviewQuestions;
  }, [interviewQuestions]);
  useEffect(() => {
    roleRef.current = role;
  }, [role]);
  useEffect(() => {
    conversationRef.current = conversation;
  }, [conversation]);
  useEffect(() => {
    selectedVoiceRef.current = selectedVoice;
  }, [selectedVoice]);

  // ─── Init: start time ─────────────────────────────────────────────────────
  useEffect(() => {
    setStartTime(Date.now());
  }, []);

  // ─── Init: simulation preset ──────────────────────────────────────────────
  useEffect(() => {
    if (details && isSimulation) {
      const match =
        interviewOptions.find((o) => o.role === details.type) ??
        interviewOptions[0];
      setInterviewTypeLabel(match.name);
      setInterviewQuestions(match.val || []);
      setRole(match.role);
      setFinalDetails((prev) => ({
        ...prev,
        round: match.role,
        totalQues: match.val?.length || 0,
      }));
    }
  }, [details]); // eslint-disable-line react-hooks/exhaustive-deps

  // ─── Load voices ──────────────────────────────────────────────────────────
  useEffect(() => {
    const loadVoices = () => {
      const available = speechSynthesis?.getVoices();
      setVoices(available);
      const engVoice = available.find((v) => v.lang.startsWith("en"));
      if (engVoice) setSelectedVoice(engVoice);
    };
    loadVoices();
    speechSynthesis.onvoiceschanged = loadVoices;
    return () => {
      speechSynthesis.onvoiceschanged = null;
    };
  }, []);

  // ─── Build recognition ONCE ───────────────────────────────────────────────
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;
    if (!SpeechRecognition) {
      alert("Speech Recognition is not supported in this browser.");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = false; // one utterance per question — clean & simple
    recognition.interimResults = true;

    let finalTranscript = "";
    let silenceTimer;
    let noSpeechRetries = 0;
    const MAX_NO_SPEECH_RETRIES = 3;

    recognition.onstart = () => {
      isRecognitionActive.current = true;
      finalTranscript = "";
    };

    recognition.onresult = (event) => {
      clearTimeout(silenceTimer);

      let transcript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        transcript += event.results[i][0].transcript;
      }

      finalTranscript = transcript;

      silenceTimer = setTimeout(() => {
        if (isRecognitionActive.current) recognition.stop();
      }, 3000);
    };

    recognition.onend = () => {
      clearTimeout(silenceTimer);
      isRecognitionActive.current = false;

      const answer = finalTranscript.trim();
      if (!answer) {
        // Nothing captured — re-prompt silently (up to MAX_NO_SPEECH_RETRIES)
        finalTranscript = "";
        if (noSpeechRetries < MAX_NO_SPEECH_RETRIES) {
          setStatus("listening");
          recognition.start();
        } else {
          // Give up after repeated silence — skip to next question
          noSpeechRetries = 0;
          toast("No response detected — moving to next question.", {
            icon: "⏭️",
          });
          const nextIdx = currentIndexRef.current + 1;
          if (nextIdx < questionsRef.current.length) {
            setCurrentIndex(nextIdx);
            speakTextRef.current(questionsRef.current[nextIdx], () => {
              noSpeechRetries = 0;
              setStatus("listening");
              recognition.start();
            });
          } else {
            endInterviewRef.current(recognition);
          }
        }
        return;
      }

      // Successful capture — reset retry counter
      noSpeechRetries = 0;

      // Use refs so we never have a stale closure
      const idx = currentIndexRef.current;
      const question = questionsRef.current[idx];

      setConversation((prev) => {
        const updated = [...prev, { question, answer }];
        conversationRef.current = updated;
        return updated;
      });

      setStatus("processing");

      // Short pause then move on
      setTimeout(() => {
        const nextIdx = currentIndexRef.current + 1;
        if (nextIdx < questionsRef.current.length) {
          setCurrentIndex(nextIdx);
          speakTextRef.current(questionsRef.current[nextIdx], () =>
            startListening(recognition),
          );
        } else {
          endInterviewRef.current(recognition);
        }
      }, 2000);
    };

    recognition.onerror = (e) => {
      isRecognitionActive.current = false;

      switch (e.error) {
        case "no-speech":
          // Browser fires this before onend — let onend handle the retry logic
          noSpeechRetries++;
          break;

        case "aborted":
          // Intentional abort (e.g. interview ended) — do nothing
          break;

        case "audio-capture":
          toast.error("Microphone not found. Please check your device.");
          setStatus("idle");
          break;

        case "not-allowed":
          toast.error(
            "Microphone access denied. Please allow microphone permission.",
          );
          setStatus("idle");
          break;

        case "network":
          toast.error("Network error during speech recognition. Retrying…");
          // Brief delay then retry
          setTimeout(() => {
            if (isRecognitionActive.current === false) {
              setStatus("listening");
              recognition.start();
            }
          }, 1500);
          break;

        default:
          console.error("SpeechRecognition error:", e.error);
          setStatus("idle");
      }
    };

    recognitionRef.current = recognition;

    return () => {
      clearTimeout(silenceTimer);
      recognition.abort();
    };
  }, []); // ← created ONCE, uses refs for fresh data

  // ─── Speak helper ─────────────────────────────────────────────────────────
  const speakText = useCallback((text, onDone) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";
    if (selectedVoiceRef.current) utterance.voice = selectedVoiceRef.current;
    utterance.onend = () => onDone?.();
    setStatus("speaking");
    speechSynthesis.speak(utterance);
  }, []);

  // ─── Start listening helper ────────────────────────────────────────────────
  const startListening = useCallback((recognition) => {
    const rec = recognition ?? recognitionRef.current;
    if (!rec || isRecognitionActive.current) return;
    setStatus("listening");
    rec.start();
  }, []);

  // ─── Start interview ───────────────────────────────────────────────────────
  const startInterview = useCallback(() => {
    if (!questionsRef.current.length) return;

    speechSynthesis.resume();

    setStarted(true);
    setCurrentIndex(0);
    speakText("Nice to meet you. Let's begin your interview.", () => {
      speakText(questionsRef.current[0], () => startListening());
    });
  }, [speakText, startListening]);

  // ─── End interview ────────────────────────────────────────────────────────
  const endInterview = useCallback(
    (recognition) => {
      recognition?.abort();
      speakText(
        "Thank you for your thoughtful responses. That concludes our interview.",
        () => setStatus("completed"),
      );
    },
    [speakText],
  );

  // Keep function refs fresh so recognition onend can always call the latest version
  useEffect(() => {
    speakTextRef.current = speakText;
  }, [speakText]);
  useEffect(() => {
    endInterviewRef.current = endInterview;
  }, [endInterview]);

  // ─── Fetch analysis — fires ONCE when completed ───────────────────────────
  useEffect(() => {
    if (status !== "completed" || analysisFetched) return;
    if (!conversationRef.current.length) return;

    setAnalysisFetched(true);
    fetchAnalyzedMock(conversationRef.current, roleRef.current);
  }, [status]); // eslint-disable-line react-hooks/exhaustive-deps

  const fetchAnalyzedMock = async (transcript, currentRole) => {
    try {
      const res = await api.post(`/service/interview-analysis/${currentRole}`, {
        transcript,
      });
      setAnalyzedResponse(res?.data?.data);
      if (isSimulation) {
        setFinalDetails((prev) => ({
          ...prev,
          score: res?.data?.data?.summary?.overall_score || 0,
          totalQues: transcript.length,
        }));
      }
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error analyzing mock interview",
      );
      console.error(error);
    }
  };

  // ─── Simulation: show toast once when analysis arrives ────────────────────
  const analysisToastShown = useRef(false);
  useEffect(() => {
    if (isSimulation && analyzedResponse && !analysisToastShown.current) {
      analysisToastShown.current = true;
      toast.success(
        "Simulation complete! Review your analysis and submit the round to save your performance.",
      );
    }
  }, [analyzedResponse, isSimulation]);

  // ─── Final submit (simulation only) ──────────────────────────────────────
  const handleFinalSubmit = async (e) => {
    e?.preventDefault();

    const durationMinutes = Math.floor((Date.now() - startTime) / 60000);

    try {
      const detailSubmitted = {
        ...finalDetails,
        timeTaken: durationMinutes,
        totalQues: interviewQuestions?.length,
        score: analyzedResponse?.summary?.overall_score,
      };

      console.log("HR before submitting : ", detailSubmitted);

      const res = await api.patch("/user/interview-summary", detailSubmitted);
      console.log("Submission response:", res?.data?.data);
      toast.success("Round submitted successfully!");

      navigate(`/interview-report`, { state: {user:user, summary:res?.data?.data, conversation:conversation} });
    } catch (error) {
      toast.error("Error submitting round details.");
      console.error(error);
    }
  };

  // ─── Derived ──────────────────────────────────────────────────────────────
  const progress = interviewQuestions.length
    ? (conversation.length / interviewQuestions.length) * 100
    : 0;

  // ─── Render ───────────────────────────────────────────────────────────────


  return (
    <>
      <div className="min-h-screen bg-gradient-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6">
          {/* ── LEFT PANEL ── */}
          <div className="col-span-1 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-6 border border-white/10 shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 text-indigo-400">
              Interview Status
            </h2>

            <div className="space-y-6">
              {/* Progress bar */}
              <div>
                <p className="text-sm text-slate-400 mb-2">Progress</p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-500 h-3 transition-all duration-500"
                    style={{ width: `${progress}%` }}
                  />
                </div>
                <p className="text-sm text-slate-300 mt-2">
                  {conversation.length} / {interviewQuestions.length} Questions
                </p>
              </div>

              {/* Timer (simulation only) */}
              {isSimulation && started && (
                <AssessmentTimer
                  limitInMinutes={details?.timelimit}
                  onTimeUp={handleFinalSubmit}
                />
              )}

              {/* Pre-start controls */}
              {!started && (
                <>
                  {/* Voice selector */}
                  <div>
                    <label className="text-sm text-slate-400">
                      Select Interviewer Voice
                    </label>
                    <select
                      className="w-full mt-2 p-2 rounded-lg bg-slate-700 text-slate-100 border border-white/10"
                      value={selectedVoice?.name || ""}
                      onChange={(e) => {
                        const voice = voices.find(
                          (v) => v.name === e.target.value,
                        );
                        setSelectedVoice(voice || null);
                      }}
                    >
                      {voices
                        .filter((v) => v.lang.startsWith("en"))
                        .map((voice) => (
                          <option key={voice.name} value={voice.name}>
                            {voice.name}
                          </option>
                        ))}
                    </select>
                  </div>

                  {/* Interview type selector */}
                  <div>
                    <label className="text-sm text-slate-400">
                      Select Interview Type
                    </label>
                    <select
                      className="w-full mt-2 p-3 rounded-xl bg-slate-700 text-slate-100 border border-white/10 outline-none focus:ring-2 focus:ring-indigo-500 disabled:opacity-60"
                      disabled={isSimulation}
                      defaultValue=""
                      onChange={(e) => {
                        const item = interviewOptions[Number(e.target.value)];
                        if (item) {
                          setInterviewQuestions(item.val);
                          setRole(item.role);
                          setFinalDetails((prev) => ({
                            ...prev,
                            round: item.role,
                            totalQues: item.val.length,
                          }));
                        }
                      }}
                    >
                      <option value="" disabled>
                        {isSimulation
                          ? interviewTypeLabel
                          : "-- Select Interview Type --"}
                      </option>
                      {interviewOptions.map((item, idx) => (
                        <option key={item.role} value={idx}>
                          {item.name}
                        </option>
                      ))}
                    </select>
                  </div>
                </>
              )}

              {/* Status indicator */}
              <div className="text-center mt-4">
                {status === "speaking" && (
                  <p className="text-indigo-300 animate-pulse">
                    🔊 Interviewer Speaking…
                  </p>
                )}
                {status === "listening" && (
                  <div className="flex flex-col items-center gap-3">
                    <div className="relative w-16 h-16 flex items-center justify-center">
                      <div className="absolute w-16 h-16 rounded-full bg-red-500 opacity-30 animate-ping" />
                      <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center text-2xl z-10">
                        🎤
                      </div>
                    </div>
                    <p className="text-red-400 font-medium">Listening…</p>
                  </div>
                )}
                {status === "processing" && (
                  <p className="text-yellow-400 animate-pulse">
                    ⏳ Processing…
                  </p>
                )}
                {status === "completed" && (
                  <p className="text-green-400 font-semibold">
                    ✅ Interview Completed
                  </p>
                )}
              </div>

              {/* Restart button (practice mode) */}
              {status === "completed" && !isSimulation && (
                <button
                  onClick={() => window.location.reload()}
                  className="w-full mt-4 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition font-medium"
                >
                  Restart Interview
                </button>
              )}

              {/* Submit round + feedback (simulation mode) */}
              {isSimulation && analyzedResponse && (
                <div className="space-y-3 mt-4">
                  <textarea
                    className="w-full p-3 rounded-xl bg-slate-700 text-slate-100 border border-white/10 outline-none focus:ring-2 focus:ring-green-500 resize-none"
                    rows={3}
                    placeholder="Share your feedback about this simulation…"
                    value={finalDetails.feedback}
                    onChange={(e) =>
                      setFinalDetails((prev) => ({
                        ...prev,
                        feedback: e.target.value,
                      }))
                    }
                  />
                  <button
                    type="button"
                    onClick={handleFinalSubmit}
                    className="w-full py-2 rounded-xl bg-green-500 hover:bg-green-600 transition font-medium"
                  >
                    Submit Round
                  </button>
                </div>
              )}
            </div>
          </div>

          {/* ── RIGHT PANEL ── */}
          <div className="col-span-2 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col">
            {!started ? (
              <div className="flex flex-col items-center justify-center h-full text-center gap-6">
                <h1 className="text-3xl font-bold text-indigo-400">
                  🎤 AI Interview Simulation
                </h1>
                <p className="text-slate-400 max-w-md">
                  Experience a realistic voice-driven mock interview. Perfect
                  your tone, pace, and logic in a stress-free environment
                  powered by Interva AI.
                </p>
                <button
                  onClick={startInterview}
                  disabled={!interviewQuestions.length}
                  className="px-10 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition hover:scale-105 disabled:opacity-50 disabled:cursor-not-allowed shadow-xl font-semibold"
                >
                  Start Interview
                </button>
              </div>
            ) : (
              <>
                <h2 className="text-xl font-semibold mb-6 text-indigo-300">
                  Live Transcript
                </h2>
                <div className="flex-1 overflow-y-auto space-y-6 pr-2">
                  {conversation.map((item, index) => (
                    <div
                      key={index}
                      className="bg-white/5 p-5 rounded-2xl border border-white/10 shadow-md"
                    >
                      <p className="text-indigo-400 font-semibold mb-1">
                        Q{index + 1}
                      </p>
                      <p className="mb-4 text-slate-200">{item.question}</p>
                      <p className="text-green-400 font-semibold mb-1">
                        A{index + 1}
                      </p>
                      <p className="text-slate-300">{item.answer}</p>
                    </div>
                  ))}

                  {/* Current question being asked */}
                  {started && status === "speaking" && (
                    <div className="bg-indigo-500/10 p-5 rounded-2xl border border-indigo-500/30 shadow-md animate-pulse">
                      <p className="text-indigo-400 font-semibold mb-1">
                        Q{conversation.length + 1}
                      </p>
                      <p className="text-slate-300">
                        {interviewQuestions[currentIndex]}
                      </p>
                    </div>
                  )}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {/* Analysis section */}
      {analyzedResponse && (
        <InterviewAnalysis content={analyzedResponse} role={role} />
      )}
    </>
  );
};

export default InterviewPage;

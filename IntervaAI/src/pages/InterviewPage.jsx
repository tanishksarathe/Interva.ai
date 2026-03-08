import React, { useEffect, useRef, useState } from "react";
import {
  BasicInterviewQuestions,
  hrRoundQuestions,
  technicalRoundQuestions,
  managerialRoundQuestions,
} from "../assets/interviewQuestionsStack.js";
import InterviewAnalysis from "../components/Resume Analysis/InterviewAnalysis.jsx";
import toast from "react-hot-toast";
import api from "../config/API.jsx";

const InterviewPage = () => {
  const interviewOptions = [
    { name: "Basic Interview", val: BasicInterviewQuestions, role: "basic" },
    { name: "HR Round", val: hrRoundQuestions, role: "hr" },
    { name: "Technical Round", val: technicalRoundQuestions, role: "tr" },
    { name: "Managerial Round", val: managerialRoundQuestions, role: "mr" },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);
  const [conversation, setConversation] = useState([]);
  const [role, setRole] = useState(null);
  const [analyzedResponse, setAnalyzedResponse] = useState(null);
  const [status, setStatus] = useState("idle");
  const [started, setStarted] = useState(false);
  const [voices, setVoices] = useState([]);
  const [selectedVoice, setSelectedVoice] = useState(null);
  const [interviewQuestions, setInterviewQuestions] = useState([]);

  //   console.log(interviewQuestions);

  const recognitionRef = useRef(null);

  useEffect(() => {
    const loadVoices = () => {
      const availableVoice = speechSynthesis.getVoices();
      setVoices(availableVoice);

      // select english voice default

      const englishVoice = availableVoice.find((v) => v.lang.includes("en"));

      if (englishVoice) setSelectedVoice(englishVoice);
    };

    loadVoices();

    speechSynthesis.onvoiceschanged = loadVoices;
  }, []);

  //   console.log(voices);

  // Setup Speech Recognition once
  useEffect(() => {
    const SpeechRecognition =
      window.SpeechRecognition || window.webkitSpeechRecognition;

    if (!SpeechRecognition) {
      alert("Speech Recognition not supported");
      return;
    }

    const recognition = new SpeechRecognition();
    recognition.lang = "en-US";
    recognition.continuous = true; // IMPORTANT
    recognition.interimResults = true; // IMPORTANT

    let finalTranscript = "";
    let silenceTimer;

    recognition.onresult = (event) => {
      clearTimeout(silenceTimer);

      let interimTranscript = "";

      for (let i = event.resultIndex; i < event.results.length; i++) {
        const transcript = event.results[i][0].transcript;

        if (event.results[i].isFinal) {
          finalTranscript += transcript + " ";
        } else {
          interimTranscript += transcript;
        }
      }

      // Silence detection (2 seconds)
      silenceTimer = setTimeout(() => {
        recognition.stop();
      }, 2000);
    };

    recognition.onend = () => {
      if (finalTranscript.trim() !== "") {
        setConversation((prev) => [
          ...prev,
          {
            question: interviewQuestions[currentIndex],
            answer: finalTranscript.trim(),
          },
        ]);

        setStatus("processing");

        setTimeout(() => {
          goToNextQuestion();
        }, 800);
      }
    };

    recognitionRef.current = recognition;
  }, [currentIndex, interviewQuestions]);

  const speak = (text, callback) => {
    speechSynthesis.cancel();
    const utterance = new SpeechSynthesisUtterance(text);
    utterance.lang = "en-US";

    if (selectedVoice) {
      utterance.voice = selectedVoice;
    }

    setStatus("speaking");

    utterance.onend = () => {
      if (callback) callback();
    };

    speechSynthesis.speak(utterance);
  };

  const startListening = () => {
    setStatus("listening");
    recognitionRef.current.start();
  };

  const startInterview = () => {
    setStarted(true);
    setCurrentIndex(0);

    speak("Nice to meet you. Let's begin your interview.", () => {
      speak(interviewQuestions[0], startListening);
    });
  };

  const goToNextQuestion = () => {
    const nextIndex = currentIndex + 1;
    console.log(nextIndex);
    console.log(interviewQuestions.length); // 0 why?
    if (nextIndex < interviewQuestions.length) {
      setCurrentIndex(nextIndex);

      speak(interviewQuestions[nextIndex], startListening);
    } else {
      endInterview();
    }
  };

  const endInterview = () => {
    speak(
      "Thank you for your thoughtful responses. That concludes our interview.",
      () => {
        setStatus("completed");
      },
    );
  };

  useEffect(() => {
    if (status === "completed" && conversation.length > 0) {
      fetchAnalyzedMock(conversation);
    }
  }, [status]);

  const fetchAnalyzedMock = async (transcript) => {
    try {
      const res = await api.post(`/service/interview-analysis/${role}`, {
        transcript,
      }); // it always wants req.body so direct sending data may be unappropriate, so sending it after wrapping it into an object will be appropriate..
      console.log("Analyzed Response : ", res);

      setAnalyzedResponse(res?.data?.data);
    } catch (error) {
      toast.error(
        error?.response?.data?.message || "Error Analyzing Mock Interview",
      );
      console.log(error);
    }
  };

  return (
    <>
      <div className="min-h-screen bg-linear-to-br from-slate-900 via-slate-800 to-slate-900 flex items-center justify-center p-6">
        <div className="w-full max-w-6xl grid md:grid-cols-3 gap-6">
          {/* LEFT PANEL - Interview Info */}
          <div className="col-span-1 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-6 border border-white/10 shadow-2xl">
            <h2 className="text-xl font-semibold mb-6 text-indigo-400">
              Interview Status
            </h2>

            <div className="space-y-6">
              {/* Progress */}
              <div>
                <p className="text-sm text-slate-400 mb-2">Progress</p>
                <div className="w-full bg-slate-700 h-3 rounded-full overflow-hidden">
                  <div
                    className="bg-indigo-500 h-3 transition-all duration-500"
                    style={{
                      width: `${(conversation.length / interviewQuestions.length) * 100}%`,
                    }}
                  ></div>
                </div>
                <p className="text-sm text-slate-300 mt-2">
                  {conversation.length} / {interviewQuestions.length} Questions
                </p>
              </div>

              {!started && (
                <>
                  <div className="mt-6">
                    <label className="text-sm text-slate-400">
                      Select Interviewer
                    </label>

                    <select
                      className="w-full mt-2 p-2 rounded-lg bg-slate-700 text-slate-100 border border-white/10"
                      onChange={(e) => {
                        const voice = voices.find(
                          (v) => v.name === e.target.value,
                        );
                        setSelectedVoice(voice);
                      }}
                    >
                      {voices
                        .filter((v) => v.lang.includes("en"))
                        .map((voice, index) => (
                          <option key={index} value={voice.name}>
                            {voice.name}
                          </option>
                        ))}
                    </select>
                  </div>
                  <div>
                    <div className="mt-6">
                      <label className="text-sm text-slate-400">
                        Select Interview Type
                      </label>

                      <select
                        className="w-full mt-2 p-3 rounded-xl bg-slate-700 text-slate-100 border border-white/10 outline-none focus:ring-2 focus:ring-(--primary)"
                        onChange={(e) => {
                          const selectedIndex = e.target.value;
                          const selectedItem = interviewOptions[selectedIndex];

                          if (selectedItem) {
                            setInterviewQuestions(selectedItem.val); // Questions set ho gaye
                            setRole(selectedItem.role); // Role bhi set ho gaya! 🚀
                          }
                        }}
                        required
                      >
                        <option value="" disabled selected>
                          Choose a round...
                        </option>
                        {interviewOptions.map((item, index) => (
                          <option
                            key={index}
                            value={index}
                            className="capitalize"
                          >
                            {item.name}
                          </option>
                        ))}
                      </select>
                    </div>
                  </div>
                </>
              )}

              {/* Status Indicator */}
              <div className="text-center mt-6">
                {status === "speaking" && (
                  <p className="text-indigo-300 animate-pulse">
                    🔊 Interviewer Speaking...
                  </p>
                )}

                {status === "listening" && (
                  <div className="flex flex-col items-center">
                    <div className="w-16 h-16 rounded-full bg-red-500 animate-ping absolute opacity-30"></div>
                    <div className="w-16 h-16 rounded-full bg-red-500 flex items-center justify-center relative">
                      🎤
                    </div>
                    <p className="mt-3 text-red-400">Listening...</p>
                  </div>
                )}

                {status === "processing" && (
                  <p className="text-yellow-400 animate-pulse">
                    ⏳ Processing...
                  </p>
                )}

                {status === "completed" && (
                  <p className="text-green-400 font-semibold">
                    ✅ Interview Completed
                  </p>
                )}
              </div>

              {/* Restart */}
              {status === "completed" && (
                <button
                  onClick={() => window.location.reload()}
                  className="w-full mt-6 py-2 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition"
                >
                  Restart Interview
                </button>
              )}
            </div>
          </div>

          {/* RIGHT PANEL - Transcript */}
          <div className="col-span-2 backdrop-blur-xl bg-slate-800/60 rounded-3xl p-8 border border-white/10 shadow-2xl flex flex-col">
            {!started ? (
              <div className="flex flex-col items-center justify-center h-full text-center">
                <h1 className="text-3xl font-bold text-indigo-400 mb-6">
                  🎤 AI Interview Simulation
                </h1>

                <p className="text-slate-400 mb-8 max-w-md">
                  Experience a realistic voice-driven mock interview session.
                  Step into a high-fidelity voice simulation powered by Interva
                  AI. Perfect your tone, pace, and logic in a stress-free
                  environment.
                </p>

                <button
                  onClick={startInterview}
                  disabled={!interviewQuestions.length}
                  className="px-10 py-3 rounded-xl bg-indigo-500 hover:bg-indigo-600 transition transform disabled:cursor-not-allowed hover:scale-105 shadow-xl font-semibold"
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
                      <p className="text-indigo-400 font-semibold mb-2">
                        Q{index + 1}
                      </p>
                      <p className="mb-4 text-slate-200">{item.question}</p>

                      <p className="text-green-400 font-semibold mb-2">
                        A{index + 1}
                      </p>
                      <p className="text-slate-300">{item.answer}</p>
                    </div>
                  ))}
                </div>
              </>
            )}
          </div>
        </div>
      </div>

      {analyzedResponse != null && (
        <>
          <InterviewAnalysis content={analyzedResponse} role={role} />
        </>
      )}
    </>
  );
};

export default InterviewPage;

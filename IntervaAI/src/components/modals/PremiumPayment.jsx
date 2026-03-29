import React, { useState } from "react";
import { motion } from "framer-motion";
import { X } from "lucide-react";
import api from "../../config/API";
import { useAuth } from "../../config/AuthContext";
import toast from "react-hot-toast";

const PremiumPayment = ({ onClose }) => {
  const { user, setUser } = useAuth();

  const [details, setDetails] = useState({
    amount: 499,
    currency: "INR",
    receipt: `interva_receipt_${Date.now()}`,
  });

  const handlePayment = async (e) => {
    const res = await api.post(import.meta.env.VITE_PAYMENT_ORDER, details);
    console.log("Payment Order Response : ", res?.data?.order);

    const orderId = res?.data?.order?.id;

    const razorpay_key = res?.data?.key;

    var options = {
      key: razorpay_key, // Enter the Key ID generated from the Dashboard
      amount: details.amount, // Amount is in currency subunits.
      currency: "INR",
      name: "IntervaAI",
      method: {
        upi: true,
      }, //your business name
      description: "Premium Payment Transaction",
      image: "blackLogo.png",
      order_id: orderId, //This is a sample Order ID. Pass the `id` obtained in the response of Step 1
      handler: async function (response) {
        const verificationRes = await api.post(
          import.meta.env.VITE_PAYMENT_VERIFY,
          {
            razorpay_order_id: response.razorpay_order_id,
            razorpay_payment_id: response.razorpay_payment_id,
            razorpay_signature: response.razorpay_signature,
            userId: user._id,
          },
        );

        console.log("Payment Verification Response : ", verificationRes?.data);

        if (verificationRes?.data?.success) {
          toast.success(
            verificationRes?.data?.message ||
              "Payment Successful and Verified!",
          );
          setUser(verificationRes?.data?.data);
          onClose();
        } else {
          toast.error(
            verificationRes?.data?.message || "Payment Verification Failed!",
          );
        }
      },
      prefill: {
        //We recommend using the prefill parameter to auto-fill customer's contact information, especially their phone number
        name: user.fullName, //your customer's name
        email: user.email,
        contact: user.phone, //Provide the customer's phone number for better conversion rates
      },
      notes: {
        address: "Razorpay Corporate Office",
      },
      theme: {
        color: "#3399cc",
      },
    };
    var rzp1 = new Razorpay(options);
    rzp1.on("payment.failed", function (response) {
      alert(response.error.code);
      alert(response.error.description);
      alert(response.error.source);
      alert(response.error.step);
      alert(response.error.reason);
      alert(response.error.metadata.order_id);
      alert(response.error.metadata.payment_id);
    });
    rzp1.open();
    e.preventDefault();

    // alert("Redirecting to payment gateway...");
  };

  return (
    <div className="fixed inset-0  my-2 z-10 items-center justify-center mx-auto">
      <div className="flex items-center justify-center px-4 backdrop-blur-sm">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="w-3xl max-w-3xl rounded-3xl p-8 shadow-2xl"
          style={{ background: "var(--bg-main)" }}
        >
          {/* HEADER */}
          <div className="text-center mb-10 relative">
            <X
              color="white"
              className="absolute top-0 right-0 cursor-pointer"
              onClick={onClose}
            />
            <h1
              className="text-4xl font-bold mb-3"
              style={{ color: "var(--text-main)" }}
            >
              🚀 Upgrade to Premium
            </h1>
            <p style={{ color: "var(--text-sub)" }}>
              Unlock AI-powered interview mastery with Interva.AI
            </p>
          </div>

          {/* CARD */}
          <div className="grid md:grid-cols-2 gap-8">
            {/* LEFT - FEATURES */}
            <div className="space-y-5">
              <h2
                className="text-2xl font-semibold"
                style={{ color: "var(--accent-sparkle)" }}
              >
                What You Get
              </h2>

              {[
                "AI Mock Interviews (Apti + DSA + HR)",
                "Advanced Resume Analysis & Score",
                "Personalized Career Roadmap",
                "Detailed Performance Analytics",
                "Company-Specific Preparation",
                "Priority AI Evaluation Engine",
              ].map((item, i) => (
                <div key={i} className="flex items-center gap-3">
                  <span className="text-green-400">✔</span>
                  <p style={{ color: "var(--text-main)" }}>{item}</p>
                </div>
              ))}
            </div>

            {/* RIGHT - PRICING */}
            <div className="flex flex-col justify-center items-center text-center p-6 rounded-2xl bg-slate-900/40 border border-indigo-500/30">
              <h2
                className="text-3xl font-bold mb-2"
                style={{ color: "var(--text-main)" }}
              >
                ₹499
              </h2>
              <p className="mb-6" style={{ color: "var(--text-sub)" }}>
                One-time access
              </p>

              <button
                onClick={handlePayment}
                className="w-full py-3 rounded-xl font-semibold text-white transition-all"
                style={{
                  background: "var(--primary)",
                }}
                onMouseOver={(e) =>
                  (e.target.style.background = "var(--primary-hover)")
                }
                onMouseOut={(e) =>
                  (e.target.style.background = "var(--primary)")
                }
              >
                💳 Buy Premium Now
              </button>

              <p className="mt-4 text-sm" style={{ color: "var(--text-sub)" }}>
                Secure payment via Razorpay
              </p>
            </div>
          </div>

          {/* FOOTER */}
          <div className="text-center mt-10">
            <p style={{ color: "var(--text-sub)" }}>
              ⚡ Crack interviews faster with AI-driven preparation
            </p>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default PremiumPayment;

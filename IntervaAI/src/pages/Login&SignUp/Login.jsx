import { Lock, LogIn, Mail, RotateCcw, UserPlus, X } from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/API";
import { useAuth } from "../../config/AuthContext";

const Login = ({ setOpenLogin, setOpenRegister }) => {
  const { user, setLogin, setUser, login } = useAuth();

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/login", details);
      setUser(response.data.data);

      setLogin(true);
      setOpenLogin(false);
      sessionStorage.setItem("IntervaAI", JSON.stringify(response.data.data));
      toast.success("User Logged in Succesfully");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      <div className="fixed bg-black/80 inset-0 flex items-center justify-center">
        <div className="w-full max-w-md rounded-2xl bg-(--surface-card) backdrop-blur-xl border border-white/10 shadow-2xl p-8 animate-fade-in">
          <button
            className="absolute text-white top-0 right-0 p-2"
            onClick={() => setOpenLogin(false)}
          >
            <X />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-(--text-main)">
              Welcome Back
            </h2>
            <p className="text-sm text-(--text-sub) mt-2">
              Login to get started...
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type="email"
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/20 text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                name="email"
                value={details.email}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            {/* Password */}
            <div className="relative">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type="password"
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/20 text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                name="password"
                value={details.password}
                onChange={handleChange}
                disabled={loading}
                required
              />
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-white py-3 font-semibold transition transform hover:scale-[1.02] active:scale-95"
              >
                <LogIn className="w-5 h-5" />
                {loading ? "Processing" : "Login"}
              </button>
            </div>
          </form>

          <div className="text-sm mr-2 text-center text-(--text-sub)">
            Don't have an account?
            <button
              onClick={() => {
                setOpenLogin(false);
                setOpenRegister(true);
              }}
              className="ml-1 text-(--primary) hover:text-(--primary-hover) mt-2"
            >
              Signup
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

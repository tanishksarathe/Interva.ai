import { Lock, Mail, X } from "lucide-react";
import React, { useState } from "react";
import api from '../../config/API'
import toast from "react-hot-toast";

const Login = ({ login, onClose, setOnClose, setLogin, setSignIn, signIn }) => {
  const [loading, setLoading] = useState(false);

  const [details, setDetails] = useState({
    email: "",
    password: "",
  });

  const handleChange = (e) => {

    const {name, value} = e.target;

    setDetails((prev) => ({...prev, [name]: value}))

  };

  const handleLogin = async(e) => {
    e.preventDefault();
    setLoading(true);
    try {
      
      const response = await api.post("/auth/login", details);

      console.log(response.data);

      toast.success(response?.data?.message || "User Logged In");

    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }finally{
      handleClearForm();
      setLoading(false);
    }

  }

  const handleClearForm = () => {
    setDetails({
      email:"",
      password:"",
    })
  }

  return (
    <>
      <div>
        <div className="relative w-full max-w-md rounded-2xl bg-white/70 backdrop-blur-lg shadow-2xl p-8">
          {/* Close Button */}
          <button
            onClick={() => {
              setOnClose(!onClose);
              setSignIn(false);
              setLogin(false);
            }}
            className="absolute top-4 right-4 text-indigo-600 hover:text-indigo-800 transition"
          >
            <X size={22} />
          </button>

          {/* Header */}
          <h2 className="mb-6 text-center text-3xl font-bold text-indigo-700">
            Welcome Back
          </h2>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleLogin}>
            {/* Email */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Email Address
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
                <Mail className="text-indigo-500" size={18} />
                <input
                  type="email"
                  name="email"
                  onChange={handleChange}
                  value={details.email}
                  placeholder="example@email.com"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Password */}
            <div>
              <label className="text-sm font-medium text-gray-700">
                Password
              </label>
              <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
                <Lock className="text-indigo-500" size={18} />
                <input
                  type="password"
                  name="password"
                  value={details.password}
                  onChange={handleChange}
                  placeholder="••••••••"
                  className="w-full outline-none text-gray-700 placeholder-gray-400"
                />
              </div>
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="w-full rounded-lg bg-linear-to-r from-indigo-500 to-blue-500 py-2 font-semibold text-white hover:opacity-90 transition"
            >
              {loading ? "Logging in...." : "Login"}
            </button>
          </form>
          <div className="text-center mt-5">
            Don't have an account?{" "}
            <button
              onClick={() => {
                setLogin(false);
                setSignIn(true);
              }}
              className="text-indigo-700"
            >
              SignUp
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Login;

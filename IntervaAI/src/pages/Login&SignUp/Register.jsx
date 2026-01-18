import { Lock, Mail, Phone, Send, User, X, XCircle } from "lucide-react";
import React, { useState } from "react";
import api from "../../config/API";
import toast from "react-hot-toast";

const Register = ({
  signIn,
  setSignIn,
  setLogin,
  login,
  setOnClose,
  onClose,
}) => {

  const [loading, setLoading] = useState(false);

  const [formData, setFormData] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({ ...prev, [name]: value }));
  };

  const handleRegister = async (e) => {
    e.preventDefault();
    setLoading(true);

    console.log("Check 1 :", formData);

    try {
      const response = await api.post("/auth/register", formData);
      console.log("Check 2 :", response.data);

      toast.success(response?.data?.message);
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    } finally {
      setLoading(false);
      handleReset();
    }
  };

  const handleReset = () => {
    setFormData({
      fullname: "",
      email: "",
      password: "",
      phone: "",
    });
  };

  return (
    <>
      <div className="w-full max-w-md bg-white/70 backdrop-blur-lg rounded-2xl shadow-xl p-8">
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
        <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
          Create Account
        </h2>

        {/* Form */}
        <form
          className="space-y-5"
          onSubmit={handleRegister}
          onReset={handleReset}
        >
          {/* Name */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Full Name
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
              <User className="text-indigo-500" size={18} />
              <input
                type="text"
                name="fullname"
                value={formData.fullname}
                onChange={handleChange}
                placeholder="Enter your name"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

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
                value={formData.email}
                onChange={handleChange}
                placeholder="example@email.com"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Phone */}
          <div>
            <label className="text-sm font-medium text-gray-700">
              Phone Number
            </label>
            <div className="mt-1 flex items-center gap-2 rounded-lg border border-indigo-200 bg-white px-3 py-2 focus-within:ring-2 focus-within:ring-indigo-300">
              <Phone className="text-indigo-500" size={18} />
              <input
                type="tel"
                name="phone"
                value={formData.phone}
                onChange={handleChange}
                placeholder="9876543210"
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
                value={formData.password}
                onChange={handleChange}
                placeholder="••••••••"
                className="w-full outline-none text-gray-700 placeholder-gray-400"
              />
            </div>
          </div>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            <button
              type="submit"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg bg-linear-to-r from-indigo-500 to-blue-500 text-white py-2 font-semibold hover:opacity-90 transition"
            >
              <Send size={18} />
              {loading ? "Registering" : "Register"}
            </button>

            <button
              type="reset"
              className="flex-1 flex items-center justify-center gap-2 rounded-lg border border-indigo-400 text-indigo-600 py-2 font-semibold hover:bg-indigo-50 transition"
            >
              <XCircle size={18} />
              Clear
            </button>
          </div>
        </form>
        <div className="text-center mt-5">
          Already have an account?{" "}
          <button
            onClick={() => {
              setSignIn(false);
              setLogin(true);
            }}
            className="text-indigo-700"
          >
            Login
          </button>
        </div>
      </div>
    </>
  );
};

export default Register;

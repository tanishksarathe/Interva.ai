import {
  Eye,
  EyeOff,
  Loader,
  Lock,
  Mail,
  Phone,
  RotateCcw,
  User,
  UserPlus,
  UserRoundPlus,
  X,
} from "lucide-react";
import React, { useState } from "react";
import toast from "react-hot-toast";
import api from "../../config/API";

const Register = ({ setOpenRegister, setOpenLogin }) => {
  const [details, setDetails] = useState({
    fullname: "",
    email: "",
    phone: "",
    password: "",
  });

  const [show, setShow] = useState(false);

  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setDetails((prev) => ({ ...prev, [name]: value }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const response = await api.post("/auth/register", details);

      console.log(response.data);

      toast.success("User Registered Succesfully");
      setOpenRegister(false);
    } catch (error) {
      console.log(error?.response?.data?.message || "Unknown Error");
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
            onClick={() => setOpenRegister(false)}
          >
            <X />
          </button>

          {/* Header */}
          <div className="text-center mb-8">
            <h2 className="text-3xl font-bold text-(--text-main)">
              Create Account
            </h2>
            <p className="text-sm text-(--text-sub) mt-2">
              Join us and get started
            </p>
          </div>

          {/* Form */}
          <form className="space-y-5" onSubmit={handleSubmit}>
            {/* Name */}
            <div className="relative">
              <User className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type="text"
                name="fullname"
                onChange={handleChange}
                value={details.fullname}
                placeholder="Full Name"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/20 text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                disabled={loading}
                required
              />
            </div>

            {/* Email */}
            <div className="relative">
              <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type="email"
                name="email"
                onChange={handleChange}
                value={details.email}
                placeholder="Email Address"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/20 text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                disabled={loading}
                required
              />
            </div>

            {/* Phone */}
            <div className="relative">
              <Phone className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type="tel"
                name="phone"
                onChange={handleChange}
                value={details.phone}
                placeholder="Phone Number"
                className="w-full pl-12 pr-4 py-3 rounded-xl bg-transparent border border-white/20 text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                disabled={loading}
                required
              />
            </div>

            {/* Password */}
            <div className="relative flex gap-2 justify-center items-center border border-white/20 rounded-xl">
              <Lock className="absolute left-4 top-1/2 -translate-y-1/2 text-(--accent-sparkle) w-5 h-5" />
              <input
                type={show ? "text" : "password"}
                name="password"
                onChange={handleChange}
                value={details.password}
                placeholder="Password"
                className="w-full pl-12 pr-4 py-3 bg-transparent text-(--text-main) placeholder-(--text-sub) focus:outline-none focus:border-(--primary) transition"
                disabled={loading}
                required
              />
              <div onClick={() => setShow(!show)} className="px-4">
                {show ? <Eye color="white" /> : <EyeOff color="white" />}
              </div>
            </div>

            {/* Buttons */}
            <div className="flex gap-4 pt-4">
              <button
                type="submit"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl bg-(--primary) hover:bg-(--primary-hover) text-white py-3 font-semibold transition transform hover:scale-[1.02] active:scale-95"
              >
                {loading ? (
                  <div className="flex gap-2">
                    <span className="animate-spin transition-all">
                      <Loader />{" "}
                    </span>{" "}
                    Processing
                  </div>
                ) : (
                  <span className="flex gap-2">
                    <UserRoundPlus /> Register{" "}
                  </span>
                )}
              </button>

              <button
                type="reset"
                className="flex-1 flex items-center justify-center gap-2 rounded-xl border border-white/20 text-(--text-main) hover:bg-white/10 py-3 font-semibold transition transform hover:scale-[1.02] active:scale-95"
              >
                <RotateCcw className="w-5 h-5" />
                Clear
              </button>
            </div>
          </form>
          <div className="text-sm mr-2 text-center text-(--text-sub)">
            Already have an account?
            <button
              onClick={() => {
                setOpenRegister(false);
                setOpenLogin(true);
              }}
              className="ml-1 text-(--primary) hover:text-(--primary-hover) mt-2"
            >
              Login
            </button>
          </div>
        </div>
      </div>
    </>
  );
};

export default Register;

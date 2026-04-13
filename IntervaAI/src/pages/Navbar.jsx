import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../../public/whiteLogo.png";
import toast from "react-hot-toast";
import { useAuth } from "../config/AuthContext";
import Login from "./Login&SignUp/Login";
import Register from "./Login&SignUp/Register";
import api from "../config/API";
import PremiumPayment from "../components/modals/PremiumPayment";

const Navbar = () => {
  const [onClose, setOnClose] = useState(false);

  const [paymentOpen, setPaymentOpen] = useState(false);

  const navigate = useNavigate();

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const { setLogin, login, setUser, user } = useAuth();

  const handleLogout = async () => {
    try {
      const res = await api.get(import.meta.env.VITE_AUTH_LOGOUT);
      setUser("");
      setLogin(false);
      sessionStorage.removeItem("IntervaAI");
      toast.success("Logout Successful");
    } catch (error) {
      console.log(error);
      toast.error(error?.response?.data?.message || "Unknown Error");
    }
  };

  return (
    <>
      <nav className="w-full py-2 bg-[#020617] border-b border-slate-800/60 sticky top-0 z-10 font-sans">
        <div className="max-w-[1600px] mx-auto px-6 h-14 flex justify-between items-center">
          {/* 1. Brand Section */}
          <div className="flex items-center gap-8">
            <Link
              to="/"
              className="flex items-center hover:opacity-80 transition-opacity"
            >
              <img
                src={logo}
                alt="Interva AI"
                className="h-7 w-auto object-contain scale-170 rounded-sm"
              />
              {/* Agar text logo hai toh yahan span add kar sakte ho */}
            </Link>

            {/* Subtle Vertical Divider */}
            <div className="hidden md:block w-[1px] h-4 bg-slate-800" />

            {/* Main Navigation - Tight & Minimal */}
            <div className="hidden md:flex items-center gap-6">
              {[
                { name: "Home", path: "/" },
                { name: "Solutions", path: "/about" },
                { name: "Support", path: "/contact" },
              ].map((link) => (
                <Link
                  key={link.name}
                  to={link.path}
                  className="text-[10px] font-black uppercase tracking-[0.2em] text-slate-500 hover:text-indigo-400 transition-colors duration-300"
                >
                  {link.name}
                </Link>
              ))}
            </div>
          </div>

          {/* 2. Right Action Silo */}
          <div className="flex items-center gap-4">
            {/* Dashboard - Conditional link with 'Pulse' dot */}
            <button
              onClick={
                login ? () => navigate("/dashboard") : () => setOpenLogin(true)
              }
              className="group flex items-center gap-2 text-[10px] font-black uppercase tracking-[0.2em] text-slate-400 hover:text-white transition-all"
            >
              <div className="w-1 h-1 rounded-full bg-indigo-500 animate-pulse" />
              Platform
            </button>

            {/* Vertical Divider */}
            <div className="w-[1px] h-4 bg-slate-800 mx-2" />

            {/* Premium CTA - Sharp & Professional */}
            <button
              onClick={() => setPaymentOpen(!paymentOpen)}
              className="flex items-center gap-2 px-4 py-1.5 bg-indigo-500/5 border border-indigo-500/20 rounded-md text-[9px] font-black uppercase tracking-widest text-indigo-400 hover:bg-indigo-500 hover:text-white transition-all shadow-lg shadow-indigo-950/20"
            >
              {user?.premium ? "Pro":"Access Pro"}<Sparkles size={12} strokeWidth={3} />
            </button>

            {/* Auth Logic - Compact Buttons */}
            <div className="flex items-center gap-1 pl-2">
              {!login ? (
                <>
                  <button
                    onClick={() => setOpenLogin(true)}
                    className="px-4 py-1.5 text-[10px] font-black uppercase tracking-widest text-slate-400 hover:text-white transition-all"
                  >
                    Log In
                  </button>
                  <button
                    onClick={() => setOpenRegister(true)}
                    className="px-5 py-1.5 bg-white text-black text-[10px] font-black uppercase tracking-widest rounded-md hover:bg-slate-200 transition-all active:scale-95"
                  >
                    Join Now
                  </button>
                </>
              ) : (
                <button
                  onClick={handleLogout}
                  className="group flex items-center gap-2 px-4 py-1.5 border border-slate-800 rounded-md hover:border-red-500/50 transition-all"
                >
                  <span className="text-[10px] font-black uppercase tracking-widest text-slate-500 group-hover:text-red-500">
                    Sign Out
                  </span>
                </button>
              )}
            </div>
          </div>
        </div>

        {/* Background Glow Effect - Very subtle */}
        <div className="absolute top-0 left-1/2 -translate-x-1/2 w-1/2 h-[1px] bg-gradient-to-r from-transparent via-indigo-500/20 to-transparent pointer-events-none" />
      </nav>
      <div>
        {openRegister && (
          <Register
            setOpenRegister={setOpenRegister}
            setOpenLogin={setOpenLogin}
          />
        )}

        {openLogin && (
          <Login
            setOpenRegister={setOpenRegister}
            setOpenLogin={setOpenLogin}
          />
        )}

        {paymentOpen && (
          <PremiumPayment onClose={() => setPaymentOpen(false)} />
        )}
      </div>
    </>
  );
};

export default Navbar;

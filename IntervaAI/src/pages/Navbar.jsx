import { Sparkles } from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/whiteLogo2.png";
import toast from "react-hot-toast";
import { useAuth } from "../config/AuthContext";
import Login from "./Login&SignUp/Login";
import Register from "./Login&SignUp/Register";
import api from '../config/API'

const Navbar = () => {
  const [onClose, setOnClose] = useState(false);

  const [openLogin, setOpenLogin] = useState(false);
  const [openRegister, setOpenRegister] = useState(false);

  const { setLogin, login, setUser } = useAuth();

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
      <div className="flex justify-between items-center pr-10 font-semibold">
        <Link to="/" id="logoImage">
          <img src={logo} alt="Logo" className="object-cover h-30" />
        </Link>
        <section
          className="flex border p-4 w-2xl justify-evenly rounded-4xl bg-black/90 text-white shadow-2xl backdrop-blur-lg"
          id="links"
        >
          <Link to="/">Home</Link>
          <Link to="/about">About</Link>
          <Link to="/contact">Contact</Link>
          <Link to="/dashboard">Dashboard</Link>
        </section>
        <section className="flex justify-center items-center gap-6" id="silo">
          <button className="py-2 flex gap-1 px-3 border rounded-3xl border-y-indigo-500">
            Premium <Sparkles fill="indigo" />
          </button>
          {!login && (
            <button
              onClick={() => setOpenLogin(true)}
              className="py-2 border-y-indigo-500 px-3 border rounded-3xl"
            >
              Login
            </button>
          )}

          {!login && (
            <button
              onClick={() => setOpenRegister(true)}
              className="py-2 border-y-indigo-500 px-3 border rounded-3xl"
            >
              SignUp
            </button>
          )}
          {login && (
            <button
              onClick={handleLogout}
              className="py-2 border-y-indigo-500 px-3 border rounded-3xl"
            >
              Logout
            </button>
          )}
        </section>
      </div>

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
      </div>
    </>
  );
};

export default Navbar;



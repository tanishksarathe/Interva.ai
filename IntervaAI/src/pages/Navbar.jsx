import {
  Sparkles,
} from "lucide-react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import logo from "../assets/whiteLogo2.png";
// import toast from "react-hot-toast";
import Login from "./Login&SignUp/Login";
import Register from "./Login&SignUp/Register";

const Navbar = () => {
  const [onClose, setOnClose] = useState(false);

  const [signIn, setSignIn] = useState(false);

  const [login, setLogin] = useState(false);

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
          <button
            onClick={() => setSignIn(true)}
            className="py-2 border-y-indigo-500 px-3 border rounded-3xl"
          >
            Login/SignUp
            {/* {signIn ? "Log Out" : "Login/SignUp"} */}
          </button>
        </section>
      </div>

      {(signIn || login) && !onClose && (
        <div className="backdrop-blur-sm flex justify-center items-center fixed h-screen w-screen top-0 z-10">
          {signIn && !login && !onClose && (
            <Register
              onClose={onClose}
              login={login}
              setLogin={setLogin}
              setOnClose={setOnClose}
              signIn={signIn}
              setSignIn={setSignIn}
            />
          )}
          {/* Login */}
          {!signIn && login && !onClose && (
            <Login
              login={login}
              onClose={onClose}
              setLogin={setLogin}
              signIn={signIn}
              setOnClose={setOnClose}
              setSignIn={setSignIn}
            />
          )}
        </div>
      )}
    </>
  );
};

export default Navbar;

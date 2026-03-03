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
      const res = await api.get("/auth/logout");
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


// import { Sparkles, LogOut, UserPlus, LogIn } from "lucide-react";
// import { useState } from "react";
// import { Link } from "react-router-dom";
// import logo from "../assets/whiteLogo2.png";
// import toast from "react-hot-toast";
// import { useAuth } from "../config/AuthContext";
// import Login from "./Login&SignUp/Login";
// import Register from "./Login&SignUp/Register";
// import api from '../config/API';

// const Navbar = () => {
//   const [openLogin, setOpenLogin] = useState(false);
//   const [openRegister, setOpenRegister] = useState(false);
//   const { setLogin, login, setUser } = useAuth();

//   const handleLogout = async () => {
//     try {
//       await api.get("/auth/logout");
//       setUser("");
//       setLogin(false);
//       sessionStorage.removeItem("IntervaAI");
//       toast.success("Logout Successful");
//     } catch (error) {
//       console.error(error);
//       toast.error(error?.response?.data?.message || "Logout failed");
//     }
//   };

//   return (
//     <>
//       <nav className="sticky top-0 z-50 flex items-center justify-between px-8 py-4 bg-(--background)/80 backdrop-blur-md border-b border-(--accent)/30">
        
//         {/* Logo Section */}
//         <Link to="/" className="transition-transform hover:scale-105" id="logoImage">
//           <img src={logo} alt="Interva AI Logo" className="h-12 w-auto object-contain" />
//         </Link>

//         {/* Central Navigation Pills */}
//         <section 
//           className="hidden md:flex items-center gap-8 px-8 py-3 rounded-full bg-(--text-primary) shadow-xl border border-(--primary)/20 text-sm font-medium"
//           id="links"
//         >
//           {["Home", "About", "Contact", "Dashboard"].map((item) => (
//             <Link 
//               key={item}
//               to={item === "Home" ? "/" : `/${item.toLowerCase()}`}
//               className="text-(--accent) hover:text-(--white) transition-colors duration-200"
//             >
//               {item}
//             </Link>
//           ))}
//         </section>

//         {/* Action Buttons */}
//         <section className="flex items-center gap-4" id="silo">
//           <button className="flex items-center gap-2 px-5 py-2 rounded-full bg-(--text-primary) text-white font-semibold text-sm shadow-md hover:opacity-90 transition-all hover:shadow-(--primary)/20 active:scale-95">
//             Premium <Sparkles size={16} fill="white" className="animate-pulse" />
//           </button>

//           {!login ? (
//             <div className="flex gap-3">
//               <button
//                 onClick={() => setOpenLogin(true)}
//                 className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-(--primary) text-(--text-primary) font-bold text-sm hover:bg-(--primary) hover:text-white transition-all duration-300"
//               >
//                 <LogIn size={16} /> Login
//               </button>
//               <button
//                 onClick={() => setOpenRegister(true)}
//                 className="flex items-center gap-2 px-5 py-2 rounded-full bg-(--text-primary) text-white font-bold text-sm hover:opacity-90 transition-all shadow-lg"
//               >
//                 <UserPlus size={16} /> Sign Up
//               </button>
//             </div>
//           ) : (
//             <button
//               onClick={handleLogout}
//               className="flex items-center gap-2 px-5 py-2 rounded-full border-2 border-[#ff4d4d]/50 text-[#d32f2f] font-bold text-sm hover:bg-[#d32f2f] hover:text-white transition-all"
//             >
//               <LogOut size={16} /> Logout
//             </button>
//           )}
//         </section>
//       </nav>

//       {/* Modals Container */}
//       <div className="relative z-100">
//         {openRegister && (
//           <Register
//             setOpenRegister={setOpenRegister}
//             setOpenLogin={setOpenLogin}
//           />
//         )}

//         {openLogin && (
//           <Login
//             setOpenRegister={setOpenRegister}
//             setOpenLogin={setOpenLogin}
//           />
//         )}
//       </div>
//     </>
//   );
// };

// export default Navbar;
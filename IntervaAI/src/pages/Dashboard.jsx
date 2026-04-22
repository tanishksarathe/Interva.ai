import {
  Award,
  CalendarClock,
  ChevronsDown,
  ClockCheck,
  Code2,
  FileBracesCorner,
  FileCodeCorner,
  GraduationCap,
  LayoutDashboard,
  Link2,
  MessagesSquare,
  Navigation,
  Sparkles,
  SquareCode,
  UserRound,
  UserRoundPen,
} from "lucide-react";
import React, { useEffect, useState } from "react";
import {
  NavLink,
  Outlet,
  useLocation,
  Link,
  useNavigate,
} from "react-router-dom";
import logo from "../assets/whiteLogo2.png";
import blackLogo from "../assets/blackLogo.png";
import { useAuth } from "../config/AuthContext";
import EditProfileModal from "../components/ProfileComponents/EditProfileModal";
import UserImage from "../assets/user/userimage.png";
import PremiumPayment from "../components/modals/PremiumPayment";
import Login from "./Login&SignUp/Login";

const Dashboard = () => {
  const { user } = useAuth();

  const [openEditModal, setOpenEditModal] = useState(false);

  const [openPayment, setPaymentOpen] = useState(false);

  const [openLoginModel, setLoginModel] = useState(false);

  const location = useLocation();

  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    activity: false,
    profilers: false,
  });

  console.log(user);

  const renderHeader = () => {
    switch (location.pathname) {
      case "/dashboard/resumea":
        return (
          <div className="text-4xl font-bold flex items-center">
            Resume Analyzer
          </div>
        );
      case "/dashboard/practice":
        return (
          <div className="text-4xl font-bold flex items-center">
            Practice Section
          </div>
        );
      case "/dashboard/mockint":
        return (
          <div className="text-4xl font-bold flex items-center">
            Mock Interview
          </div>
        );
      case "/dashboard/resources":
        return (
          <div className="text-4xl font-bold flex items-center">Resources</div>
        );
      case "/dashboard/jobsintern":
        return (
          <div className="text-4xl font-bold flex items-center">
            Jobs & Internships
          </div>
        );

      default:
        return (
          <div className="text-4xl font-bold flex items-center">
            Welcome, {user.fullname}
          </div>
        );
    }
  };

  const handleEditProfile = () => {};

  useEffect(() => {
    if (!user) {
      setLoginModel(true);
    }
  }, []);

  return (
    <>
      {openLoginModel && (
        <Login
          onClose={() => {
            setLoginModel(false);
          }}
        />
      )}
      <div className="bg-linear-to-br from-pink-100 via-blue-100 to-indigo-200">
        <div className="flex justify-between pt-2 backdrop-blur-3xl">
          <Link onClick={() => navigate("/")}>
            <img src={logo} alt="logo" className="w-30 h-20" />
          </Link>

          <div className="flex-1 ml-5 flex justify-start">{renderHeader()}</div>
          <div className="bg-black px-5 gap-5 rounded-l-full text-white flex items-center">
            <ul className="flex gap-3 font-semibold">
              <NavLink
                className={`flex gap-2 rounded-2xl justify-center items-center px-3`}
                onMouseEnter={() =>
                  setMenu((prev) => ({ ...prev, activity: true }))
                }
                onMouseLeave={() =>
                  setMenu((prev) => ({ ...prev, activity: false }))
                }
              >
                Activity
                {menu.activity && (
                  <div
                    className={`w-70 z-10 absolute bg-white right-53 top-16 text-black border rounded-2xl p-4`}
                  >
                    <NavLink
                      to={"/dashboard"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-indigo-700 flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                          : "flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <LayoutDashboard />
                      Dashboard
                    </NavLink>

                    <NavLink
                      to={"resumea"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white bg-indigo-700 flex font-semibold gap-2 rounded-lg p-3 hover:bg-indigo-300"
                          : "flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <FileBracesCorner />
                      Resume Analysis
                    </NavLink>

                    <NavLink
                      to={"practice"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white bg-indigo-700 flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300"
                          : "rounded-lg flex font-semibold gap-2 p-3 hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <CalendarClock />
                      Practice
                    </NavLink>

                    <NavLink
                      to={"mockint"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white bg-indigo-700 flex font-semibold gap-2 p-3 rounded-lg  hover:bg-indigo-300"
                          : "flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <MessagesSquare />
                      Mock Interviews
                    </NavLink>

                    <NavLink
                      to={"resources"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white bg-indigo-700 flex font-semibold gap-2 p-3 rounded-lg  hover:bg-indigo-300"
                          : "flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <SquareCode />
                      Resources
                    </NavLink>

                    <NavLink
                      to={"jobsintern"}
                      className={({ isActive }) =>
                        isActive
                          ? "text-white bg-indigo-700 flex font-semibold gap-2 p-3 rounded-lg  hover:bg-indigo-300"
                          : "flex font-semibold gap-2 p-3 rounded-lg hover:bg-indigo-300 hover:transition-all hover:scale-[1.1]"
                      }
                    >
                      <GraduationCap />
                      Jobs & Internships
                    </NavLink>
                  </div>
                )}
              </NavLink>
              <button
                type="button"
                onClick={() => setPaymentOpen(true)}
                className={`flex gap-2 rounded-2xl py-1 px-3`}
                disabled={user?.premium}
              >
                Premium <Sparkles />
              </button>
            </ul>

            <div>
              <NavLink
                onMouseEnter={() =>
                  setMenu((prev) => ({ ...prev, profilers: true }))
                }
                onMouseLeave={() =>
                  setMenu((prev) => ({ ...prev, profilers: false }))
                }
              >
                <div className="rounded-full bg-linear-to-tr from-purple-500 to-indigo-500 p-0.5">
                  <img
                    src={blackLogo}
                    alt="profile"
                    className="h-10 w-10 rounded-full cursor-pointer"
                  />
                </div>

                {menu.profilers && (
                  <div className="flex z-9999 rounded-2xl pt-5 text-white absolute top-17 right-10 h-100 overflow-y-scroll backdrop-blur-3xl">
                    <div className="max-w-md w-full h-fit rounded-2xl bg-black/90 backdrop-blur-xl border border-white/10 shadow-xl p-6 text-white">
                      {/* Header */}
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-4">
                          <div className="w-24 h-24 rounded-full flex items-center justify-center mb-4 relative">
                            <img
                              src={user?.photo?.url || UserImage}
                              alt="avatar"
                              className="object-cover rounded-full"
                            />
                          </div>
                          <div>
                            <h2 className="text-xl font-semibold">
                              {user.fullname}
                            </h2>
                            <p className="text-sm text-gray-400">
                              {user.careerStage === "fresher"
                                ? "Fresher"
                                : user.careerStage === "student"
                                  ? "Student"
                                  : ""}
                            </p>
                          </div>
                        </div>
                        <div
                          role="button"
                          className="p-2 bg-white rounded-full"
                          onClick={() => setOpenEditModal(true)}
                        >
                          <UserRoundPen color="black" />
                        </div>
                      </div>

                      {/* Role */}
                      <div className="mt-5">
                        <p className="text-sm text-gray-400">Target Role</p>
                        <p className="font-medium">
                          ·{" "}
                          <span className="text-indigo-400">
                            {user.targetRole}
                          </span>
                        </p>
                      </div>

                      {/* Education */}
                      <div className="mt-4">
                        <p className="text-sm text-gray-400">Education</p>
                        <p className="font-medium">
                          {user.degree} ({user.branch}) · {user.passout}
                        </p>
                      </div>

                      {/* Skills */}
                      <div className="mt-4">
                        <p className="text-sm text-gray-400 mb-2">
                          Programming Languages
                        </p>
                        <div className="flex flex-wrap gap-2">
                          {user.programmingLanguages.map((lang) => (
                            <span
                              key={lang}
                              className="px-3 py-1 rounded-full bg-indigo-500/10 text-indigo-300 text-sm border border-indigo-500/20"
                            >
                              {lang}
                            </span>
                          ))}
                        </div>
                      </div>

                      {/* Coding Profiles */}
                      <div className="mt-6 flex gap-4">
                        <a
                          href={user.github}
                          target="_blank"
                          rel="noopener noreferrer"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
                        >
                          <Link2 size={18} />
                          <span className="text-sm">GitHub</span>
                        </a>

                        <a
                          href={user.leetcode}
                          target="_blank"
                          className="flex items-center gap-2 px-4 py-2 rounded-xl bg-white/5 hover:bg-white/10 transition border border-white/10"
                        >
                          <Code2 size={18} />
                          <span className="text-sm">LeetCode</span>
                        </a>
                        <p className="flex items-center gap-2 px-4 py-2 rounded-xl transition">
                          <button className="text-sm flex gap-2 text-blue-700 hover:animate-pulse">
                            View more <ChevronsDown />
                          </button>
                        </p>
                      </div>
                    </div>
                  </div>
                )}
              </NavLink>
            </div>
          </div>
        </div>
        {openEditModal && (
          <EditProfileModal onClose={() => setOpenEditModal(false)} />
        )}
        <div className="min-h-screen min-w-screen">
          <Outlet />
        </div>
      </div>
      {openPayment && <PremiumPayment onClose={() => setPaymentOpen(false)} />}
    </>
  );
};

export default Dashboard;

import {
  Award,
  CalendarClock,
  ClockCheck,
  FileBracesCorner,
  FileCodeCorner,
  GraduationCap,
  LayoutDashboard,
  MessagesSquare,
  Navigation,
  Sparkles,
  SquareCode,
  UserRound,
} from "lucide-react";
import React, { useState } from "react";
import { NavLink, Outlet, useLocation, Link, useNavigate } from "react-router-dom";
import logo from "../assets/whiteLogo2.png";
import blackLogo from "../assets/blackLogo.png";
import { useAuth } from "../config/AuthContext";

const Dashboard = () => {

  const {user} = useAuth();

  const location = useLocation();

  const navigate = useNavigate();

  const [menu, setMenu] = useState({
    activity: false,
    profilers: false,
  });

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
            Welcome, {user.data.fullname}
          </div>
        );
    }
  };

  return (
    <div className="bg-linear-to-br from-pink-100 via-blue-100 to-indigo-200">
      <div className="flex justify-between pt-2 backdrop-blur-3xl">
        <Link onClick={() => navigate('/')}>
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
                  className={`w-70 z-9 absolute bg-white right-53 top-16 text-black border rounded-2xl p-4`}
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
            <NavLink className={`flex gap-2 rounded-2xl py-1 px-3`}>
              Premium <Sparkles />
            </NavLink>
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
                <div className="flex z-9 rounded-2xl pt-5 text-white absolute top-17 right-10 h-100 overflow-y-scroll bg-black backdrop-blur-3xl">
                  <div className="flex flex-col px-3">
                    <h1 className="text-lg text-center font-bold px-5 pb-3 border-b border-b-indigo-700">
                      Profile Summary
                    </h1>

                    <img
                      src={blackLogo}
                      alt="Profile Icon"
                      className="h-25 w-25 my-5 rounded-full mx-auto"
                    />

                    <h1 className="text-sm mb-1 text-center font-semibold px-5">
                      Tanishk Sarathe
                    </h1>

                    <h1 className="text-sm pb-3 border-b text-center border-b-indigo-700 font-light px-5">
                      Software Developer Engineer
                    </h1>

                    <ul className="text-[12px] space-y-2 pb-5 text-white pt-3 pl-5">
                      <li className="flex gap-1">
                        <UserRound size={15} />
                        Role : Software Engineer
                      </li>
                      <li className="flex gap-1">
                        <FileCodeCorner size={15} />
                        Level : Full Stack Developer
                      </li>
                      <li className="flex gap-1">
                        <Navigation size={15} />
                        Location : Bengaluru, India
                      </li>
                      <li className="flex gap-1">
                        <ClockCheck size={15} />
                        Member Since : Jan 2026
                      </li>
                    </ul>
                  </div>
                  <div className="flex flex-col items-center">
                    <h1 className="text-md font-bold pt-5 px-5 pb-3 border-b border-b-indigo-700">
                      Skills
                    </h1>

                    <div className="w-55 m-3 text-white flex gap-2 text-[12px] cursor-default flex-wrap">
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Reactjs
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Nodejs
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Expressjs
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Mongodb
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Java
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        C
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        C++
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Python
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        SQL
                      </span>
                      <span className="rounded-full border px-2 py-1 text-white hover:text-white border-indigo-800 hover:bg-indigo-700 font-semibold">
                        Next.js
                      </span>
                    </div>

                    <div>
                      <h1 className="text-md font-bold text-center px-5 pb-3 border-b border-b-indigo-700">
                        Achievements
                      </h1>

                      <ul className="text-[12px] space-y-2 pb-5 w-55 text-white pt-3 ">
                        <li className="flex gap-1">
                          <Award size={20} />
                          Won India's Biggest Hackathon, Smart India Hackathon
                          2025
                        </li>
                        <li className="flex gap-1">
                          <Award size={20} />
                          Won India's Biggest Hackathon, Smart India Hackathon
                          2025
                        </li>
                        <li className="flex gap-1">
                          <Award size={20} />
                          Won India's Biggest Hackathon, Smart India Hackathon
                          2025
                        </li>
                      </ul>
                    </div>
                  </div>
                </div>
              )}
            </NavLink>
          </div>
        </div>
      </div>

      <div className="min-h-screen min-w-screen">
        <Outlet />
      </div>
    </div>
  );
};

export default Dashboard;

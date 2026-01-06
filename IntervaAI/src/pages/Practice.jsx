import { Boxes, Brain, Mic, Monitor, Zap } from "lucide-react";
import { NavLink, Outlet } from "react-router-dom";

const Practice = () => {
  
  return (
    <>
      <div className="min-h-screen w-full px-10 py-14">

        {/* Icon Rail */}
        <div className="max-w-6xl mx-auto bg-white/60 backdrop-blur-xl rounded-2xl shadow-md px-4 py-3 flex items-center justify-between gap-2">
          {/* Active Item */}
          <NavLink to={'aptitude'}
            className="flex items-center gap-2 px-5 py-2 rounded-xl bg-white shadow text-purple-600 font-medium cursor-pointer
                        transition-all duration-300 ease-out
                        hover:scale-[1.03] hover:shadow-lg"
          >
            <Brain className="w-5 h-5" />
            <span>Aptitude</span>
          </NavLink>

          {/* Divider */}
          <div className="w-px h-6 bg-gray-300" />

          {/* DSA */}
          <NavLink to={'dsa'}
            className={({isActive}) => isActive ? "flex items-center gap-2 px-5 py-2 rounded-xl text-gray-600 cursor-pointer transition-all duration-300 ease-out hover:bg-white hover:text-blue-600 hover:shadow hover:scale-[1.03]": ""}
                        >
            <Boxes className="w-5 h-5" />
            <span>DSA</span>
          </NavLink>

          <div className="w-px h-6 bg-gray-300" />

          {/* Machine Coding */}
          <NavLink to={'machinecod'}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-gray-600 cursor-pointer
                        transition-all duration-300 ease-out
                        hover:bg-white hover:text-amber-600 hover:shadow hover:scale-[1.03]"
          >
            <Monitor className="w-5 h-5" />
            <span>Machine Coding</span>
          </NavLink>

          <div className="w-px h-6 bg-gray-300" />

          {/* Rapid Fire */}
          <NavLink to={'rapidfire'}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-gray-600 cursor-pointer
                        transition-all duration-300 ease-out
                        hover:bg-white hover:text-orange-500 hover:shadow hover:scale-[1.03]"
          >
            <Zap className="w-5 h-5" />
            <span>Rapid Fire</span>
          </NavLink>

          <div className="w-px h-6 bg-gray-300" />

          {/* Communication */}
          <NavLink to={'communication'}
            className="flex items-center gap-2 px-5 py-2 rounded-xl text-gray-600 cursor-pointer
                        transition-all duration-300 ease-out
                        hover:bg-white hover:text-green-600 hover:shadow hover:scale-[1.03]"
          >
            <Mic className="w-5 h-5" />
            <span>Communication</span>
          </NavLink>
        </div>

        {/* Practice Workspace */}
        <div
          className="max-w-6xl mx-auto mt-10 rounded-2xl min-h-120
                      transition-all duration-500 ease-out
                      hover:shadow-xl"
        >
          {/* White space where content will be rendered */}
        
          <Outlet/>

        </div>
      </div>
    </>
  );
}

export default Practice;

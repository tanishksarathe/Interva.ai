import { Briefcase, MapPin } from "lucide-react";
import React from "react";
import { useNavigate } from "react-router-dom";

const JobCard = (props) => {

    const navigate = useNavigate();

    const handleApply = (e) => {
        e.preventDefault();

        navigate(`${props.applyLink}`)

    }

    const handlePopUp = (e) => {
        e.preventDefault();

        alert("Pop Up has been reflected here");

    }

  return (
    <>
      <div role="button" onClick={(e) => handlePopUp(e)} className="bg-white rounded-2xl p-6 shadow transition-all duration-300 hover:shadow-xl">
        <div className="flex justify-between items-start">
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              {props.role} - {props.experience}
            </h3>
            <p className="text-gray-600">{props.company}</p>
          </div>
          <button onClick={handleApply} className="px-4 py-1.5 rounded-lg bg-indigo-100 text-indigo-700 font-medium hover:bg-indigo-200 transition">
            Apply
          </button>
        </div>

        <div className="flex items-center gap-4 text-sm text-gray-500 mt-3">
          <span className="flex items-center gap-1">
            <MapPin className="w-4 h-4" /> {props.location}
          </span>
          <span className="flex items-center gap-1">
            <Briefcase className="w-4 h-4" /> {props.type}
          </span>
        </div>

        <span className="inline-block mt-3 px-3 py-1 rounded-full bg-indigo-50 text-indigo-700 text-xs">
          {props.desc}
        </span>
      </div>
    </>
  );
};

export default JobCard;

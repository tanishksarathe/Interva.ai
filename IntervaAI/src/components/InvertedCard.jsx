import { ArrowRightCircle } from "lucide-react";
import { useNavigate } from "react-router-dom";

const InvertedCard = ({ title, description, quote, navigationlink }) => {

    const navigate = useNavigate();

    const handleNavigate = (e) => {
        e.preventDefault();

        navigate(`${navigationlink}`)
    }

    return (
    <div className="relative max-w-6xl mx-auto p-2">
      {/* Main Card */}
      <div className="relative bg-indigo-900 rounded-3xl flex justify-center items-center overflow-hidden">
        
        {/* Text Section */}
        <div className="w-50 h-50 pt-5 pl-5 pb-5 text-white relative">
          <p className="text-lg font-bold leading-relaxed opacity-90">{title}</p>
          <p className="text-md pt-3 pr-3 pb-3 leading-relaxed opacity-90">{description}</p>
        </div>
      </div>

      {/* Inverted Quote Box */}
      <div
        className="
        absolute 
        bottom-5 right-0 translate-y-1/2
        bg-white text-black
        px-2 py-2 rounded-2xl
        max-w-sm
        hover:shadow-xl
        transition-all
        duration-100
        hover:scale-110
      "
      >
        <button onClick={handleNavigate} className="border bg-indigo-900 text-white p-4 rounded-2xl flex my-auto gap-1">{quote}<ArrowRightCircle/></button>
      </div>
    </div>
  );
};

export default InvertedCard;

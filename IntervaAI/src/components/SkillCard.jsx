import { Brain } from "lucide-react";

const SkillCard = ({title, desc, Icon}) => {
  return (
    <div className="relative group w-full max-w-sm">
      {/* Card Container */}
      <div
        className="
          relative h-48 p-6
          bg-black text-white
          rounded-2xl
          overflow-hidden
          transition-all duration-300
          hover:scale-[1.02]
        "
        style={{
          clipPath: "polygon(8% 100%,0 88%, 0 0, 90% 0, 100% 12%, 100% 100%)",
        }}
      >
        {/* Content */}
        <div className="relative z-10 flex flex-col h-full justify-between">
          {/* Icon */}
          <div className="w-10 h-10 flex items-center justify-center rounded-xl bg-white/10">
            {<Icon/>}
          </div>

          {/* Text */}
          <div>
            <h3 className="text-lg font-semibold tracking-wide">{title}</h3>
            <p className="text-sm text-gray-400 mt-1">{desc}</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SkillCard;

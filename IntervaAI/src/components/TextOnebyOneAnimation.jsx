import React, { useEffect, useState } from "react";

const TextOnebyOneAnimation = (props) => {

    let [index, setIndex] = useState(0);

  const randomRGB = () => {
    let r = `${Math.floor(0 + Math.random() * 255)}`;
    let g = `${Math.floor(0 + Math.random() * 255)}`;
    let b = `${Math.floor(0 + Math.random() * 255)}`;

    return `rgb(${r},${g},${b})`;
  };

  const [color, setColor] = useState(randomRGB);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIndex((prevIndex) => (prevIndex + 1) % props.content.length);
      setColor(randomRGB());
    }, 2000);

    return () => clearTimeout(timer);
  }, [index]);

  return (
    <>
      <div
        className={`transition-all text-6xl font-bold text-center ease-in-out animate-${props.animation}`}
        style={{ color }}
      >
        {props.content[index]}
      </div>
    </>
  );
};

export default TextOnebyOneAnimation;

// "use client";
import React, { useEffect, useState } from "react";
import { motion, useMotionValue, animate } from "framer-motion";

interface Titleprop {
  total: string;
  title: string;
  icon: React.ReactNode;
}

const AboutCard: React.FC<Titleprop> = ({ total, title, icon }) => {
  const count = useMotionValue(0);
  const [displayCount, setDisplayCount] = useState(0);

  useEffect(() => {
    const controls = animate(count, parseInt(total), {
      duration: 5, // animation speed (seconds)
      ease: "easeOut",
      onUpdate: (latest) => setDisplayCount(Math.floor(latest)),
    });

    return controls.stop; // cleanup on unmount
  }, [total, count]);

  return (
    <div
      className="
        w-64 h-36
        rounded-2xl 
        p-4 
        bg-opacity-30 
        backdrop-blur-md
        border
        border-gray-400 
        shadow-lg 
        flex 
        flex-col 
        justify-between 
        relative
      "
    >
      {/* Gold Circle Icon */}
      <div
        className="
          absolute 
          top-[-35px] 
          left-[20px] 
          w-20 h-20 
          rounded-full 
          bg-primary 
          shadow-xl 
          flex 
          justify-center 
          items-center
        "
      >
        <div className="text-3xl text-black">{icon}</div>
      </div>

      {/* Content Area */}
      <div className="flex flex-col justify-end h-full mt-4">
        <p className="text-white text-4xl cursor-pointer lg:text-5xl hover:text-primary duration-200 ease-out hover:scale-110 poppins-bold mb-2 self-end">
          {displayCount}
        </p>
        <p className="text-white text-xl poppins-medium self-end">{title}</p>
      </div>
    </div>
  );
};

export default AboutCard;

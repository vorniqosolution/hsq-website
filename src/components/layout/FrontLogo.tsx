import React from "react";
import { motion } from "framer-motion";

function FrontLogo() {
  return (
    <div className="bg-black flex justify-center items-center w-full h-screen">
      <motion.img
        src="./public/Frontlogo.svg"
        alt="HSQLOGO"
        className="w-28 h-28"
        initial={{ opacity: 0, scale: 0 }} // start invisible & small
        animate={{
          opacity: [0, 1, 1, 0], // fade in → hold → fade out
          scale: [0, 1.2, 1, 0.8], // zoom in → normal → zoom out
        }}
        transition={{
          duration: 3, // total animation time
          ease: "easeInOut",
          repeat: Infinity,
        }}
      />
    </div>
  );
}

export default FrontLogo;

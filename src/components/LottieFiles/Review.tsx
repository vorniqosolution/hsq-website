import React from "react";
import Success from "../../assets/Weather/Success.json";
import Lottie from "lottie-react";
function Tick() {
  return (
    <div className="w-64 h-64  opacity-60">
      <Lottie animationData={Success} loop={true}></Lottie>
    </div>
  );
}
export default Tick;

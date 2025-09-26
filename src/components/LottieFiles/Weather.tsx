import React from "react";
import Lottie from "lottie-react";
import WeatherLogo from "../../assets/Weather/WeatherLogo.json";
function WeatherAnimation() {
  return (
    <div className="w-64 h-64">
      <Lottie animationData={WeatherLogo} loop={true}></Lottie>
    </div>
  );
}

export default WeatherAnimation;

import React from "react";
import Lottie from "lottie-react";
import WeatherLogo from "../../../public/Weather/WeatherLogo.json";

function WeatherAnimation() {
  return (
    <Lottie animationData={WeatherLogo} loop={true} className="w-20"></Lottie>
  );
}

export default WeatherAnimation;

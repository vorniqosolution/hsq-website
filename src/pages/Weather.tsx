import React, { useEffect } from "react";
import Mainimage from "../assets/Weather/Mainimage.png";
// import WeatherLogo from "../assets/Weather/WeatherLogo.json";
import WeatherAnimation from "../components/LottieFiles/Weather";
import weather2 from "../assets/Weather/weather2.png";
import Footer from "@/components/layout/Footer";
import { Thermometer, CloudSun, Droplets } from "lucide-react";
// import
import axios from "axios";
import fower_01 from "../assets/BG/fower_01.svg";
import fower_02 from "../assets/BG/fower_01.svg";
function Weather() {
  // import axios from "axios";

  const fetchWeatherData = async () => {
    const API_KEY = "1ce2abc9cc978c98ce2a238de7e18eb2"; // replace with your actual key
    const response = await axios.get(
      `https://api.openweathermap.org/data/2.5/forecast?lat=33.911935&lon=73.404679&cnt=4&appid=${API_KEY}&units=metric`
    );
    console.log(response.data);
    return response.data;
  };

  useEffect(() => {
    console.log("response", fetchWeatherData());
  }, []);

  return (
    <>
      <div>
        {/* main section  */}
        <div className="relative w-full h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${Mainimage})` }}
          />

          {/* Black shade overlay */}
          <div className="absolute inset-0 bg-black/50" />

          {/* Content */}
          <div className="relative flex flex-col items-center justify-center h-full space-y-4 pt-15">
            <h1 className="text-primary font-bold text-5xl">Murree Forecast</h1>
            <WeatherAnimation />
            <p className="text-white text-sm sm:text-xl">
              From Sunshine to Snowfall — See What’s Ahead in Murree
            </p>
          </div>
        </div>
        {/* Second Section*/}
        <div className="relative w-full">
          <img
            className="bg-cover w-full md:h-[70vh] lg:h-screen bg-center "
            src={weather2}
            alt="weatherimage"
          />
          <img
            src={fower_01}
            className="absolute top-0 left-0  w-20 sm:w-56"
            alt="flower"
          />
          <img
            src={fower_01}
            className="absolute top-0 bottom-0 transform  w-20 scale-x-[-1] right-0 sm:w-56"
            alt="flower"
          />
          <div className=" max-w-xl  left-2 absolute top-10 sm:top-0 md:top-20 md:left-48 lg:left-96 mx-auto mt:5 sm:mt-10 rounded-2xl overflow-hidden border-black border-2 border-t-0 bg-neutral-50/20 ">
            {/* Header */}
            <div className="bg-yellow-600 text-white px-4 py-2 font-semibold text-sm sm:text-base">
              Murree, Punjab | Thursday, 28/8/25 | 3:43 pm
            </div>

            {/* Body */}
            <div className="p-6 flex flex-col gap-6">
              {/* Top Row */}
              <div className="flex flex-row items-center justify-between gap-6">
                {/* Circle Temp */}
                <div className="bg-yellow-600 text-white flex items-center justify-center rounded-full w-24 h-24 text-2xl font-bold">
                  27°C
                </div>

                {/* Details */}
                <div className="flex  flex-col  gap-3 text-white text-sm sm:text-base">
                  <div className="flex items-center gap-2">
                    <Thermometer size={20} className="text-white" />
                    <p>Max Temp: 28 °C</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Thermometer size={20} className="text-white" />
                    <p>Dew: -</p>
                  </div>
                  <div className="flex items-center gap-2">
                    <Droplets size={20} className="text-white" />
                    <p>Humidity: 80%</p>
                  </div>
                </div>

                {/* Weather Icon */}
                <div className="flex justify-center">
                  <CloudSun size={70} className="text-yellow-500" />
                </div>
              </div>

              {/* Subtitle */}
              <h2 className="text-center font-bold text-white text-lg">
                Plan Your Perfect Stay - <br /> Murree Weather at a glance
              </h2>

              {/* Divider */}
              <hr className="border-t-2 border-black" />

              {/* Forecast Days */}
              <div className="grid grid-cols-3 gap-3">
                {/* Friday */}
                <div className="bg-white shadow rounded-xl flex flex-col items-center p-4">
                  <p className="text-yellow-600 font-semibold">Friday</p>
                  <CloudSun className="text-yellow-500 my-2" />
                  <p className="font-bold">24°C</p>
                  <p className="text-gray-600">19°C</p>
                </div>

                {/* Saturday */}
                <div className="bg-white shadow rounded-xl flex flex-col items-center p-4">
                  <p className="text-yellow-600 font-semibold">Saturday</p>
                  <CloudSun className="text-yellow-500 my-2" />
                  <p className="font-bold">24°C</p>
                  <p className="text-gray-600">18°C</p>
                </div>

                {/* Sunday */}
                <div className="bg-white shadow rounded-xl flex flex-col items-center p-4">
                  <p className="text-yellow-600 font-semibold">Sunday</p>
                  <CloudSun className="text-yellow-500 my-2" />
                  <p className="font-bold">27°C</p>
                  <p className="text-gray-600">19°C</p>
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* Third Section */}
        <div className="w-full mx-auto bg-[#4B3F30] text-white p-6 sm:p-10 rounded-lg shadow-lg relative">
          {/* Corner Ribbons (Decorative Triangles) */}
          <div className="absolute top-0 left-0 w-0 h-0 border-t-[30px] border-t-primary border-r-[30px] border-r-transparent"></div>
          <div className="absolute top-0 right-0 w-0 h-0 border-t-[30px] border-t-primary border-l-[30px] border-l-transparent"></div>
          <div className="absolute bottom-0 left-0 w-0 h-0 border-b-[30px] border-b-primary border-r-[30px] border-r-transparent"></div>
          <div className="absolute bottom-0 right-0 w-0 h-0 border-b-[30px] border-b-primary border-l-[30px] border-l-transparent"></div>

          {/* Title */}
          <h2 className="text-center text-2xl sm:text-3xl font-bold text-primary mb-4">
            Smart Hacks to Make Your Murree Trip Truly Memorable
          </h2>

          {/* Divider */}
          <hr className="border-t-2 border-black mb-6 w-3/4 mx-auto" />

          {/* Quote */}
          <p className="text-sm sm:text-base italic text-justify leading-relaxed">
            “Planning your getaway to{" "}
            <span className="font-semibold text-white">Murree</span> and its
            surroundings like{" "}
            <span className="font-semibold text-white">Kashmir Point</span>,{" "}
            <span className="font-semibold text-white">Patriata</span>, and the
            scenic{" "}
            <span className="font-semibold text-white">Galiyat Hills</span>{" "}
            means staying prepared for the changing mountain weather. At{" "}
            <span className="font-semibold text-white">HSQ Towers Murree</span>,
            we provide reliable 7-day weather updates powered by advanced
            forecasting tools, giving you real-time details on temperature,
            wind, humidity, and the chance of rain or snow. Our updates help you
            pack wisely, whether you need an umbrella, warm clothes, or clear
            skies for sightseeing. With live monitoring of conditions like fog,
            visibility, and snowfall, we make sure you enjoy Murree’s beauty
            with peace of mind, from sunrise views to cozy evenings indoors.”
          </p>
        </div>
        <div className="border-t-8 border-yellow-200" />
        <Footer />
      </div>
    </>
  );
}

export default Weather;

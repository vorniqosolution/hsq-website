import React, { FC } from "react";
import WeatherAnimation from "@/components/LottieFiles/Weather";
// Define the interface for the component's props
export interface DailyForecastCardProps {
  day: string;
  maxTemp: string; // Assuming temperature strings include ' °C'
  minTemp: string; // Assuming temperature strings include ' °C'
  isCurrent?: boolean; // Optional prop, used if you wanted to highlight the current day
  image: React.ReactNode;
}

// Use React.FC to type the functional component and pass the Props interface
const DailyForecastCard: FC<DailyForecastCardProps> = ({
  day,
  maxTemp,
  minTemp,
  isCurrent,
  image,
}) => {
  // Base styling for the card
  //   const cardStyle =
  //     "flex flex-col items-center justify-center h-32 w-32 p-4 rounded-xl shadow-lg w-full aspect-square";

  // Background classes for the image effect
  //   const bgImageClasses =
  //     "bg-gray-800 bg-opacity-70 w-32 h-32 text-white relative overflow-hidden";

  return (
    <>
      <div
        className="w-64 h-48 bg-cover bg-center rounded-3xl "
        style={{ backgroundImage: `url(${image})` }}
      >
        {/* <div className="absolute inset-0 bg-black opacity-30"></div>{" "} */}
        {/* Dark Overlay */}
        <div className="text-center p-5">
          {" "}
          {/* Content Layer */}
          <p className="font-semibold text-lg text-white  uppercase ">{day}</p>
          {/* Weather Icon (Placeholder) */}
          <div className="flex justify-around items-center ">
            {/* <div className="text-4xl">☀️☁️</div> */}
            <WeatherAnimation />
            <div className="flex flex-col poppins-semibold space-x-">
              <div className="relative">
                <div className="absolute -top-2  right-4">
                  <p className="text-white">o</p>
                </div>
                <p className="text-2xl text-white ">{maxTemp}</p>
              </div>

              <div className="relative">
                <div className="absolute -top-2  right-4">
                  <p className="text-white">o</p>
                </div>
                <p className="text-2xl text-white ">{minTemp}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DailyForecastCard;

import { useEffect, useRef } from "react";
import { useQuery } from "@tanstack/react-query";
// import weatherbg from "";
import DailyForecastCard from "@/components/cards/DailyForecast";
import Footer from "@/components/layout/Footer";
import WeatherAnimation from "@/components/LottieFiles/Weather";
import bgone from "../../public/Weather/bgone.png";
import bgtwo from "../../public/Weather/bgtwo.png";
import bgthree from "../../public/Weather/bgthree.png";
import {
  motion,
  useMotionValue,
  useTransform,
  animate,
  useInView,
} from "framer-motion";
import { WeatherApi } from "@/api/roomsApi";
function Weather() {
  const { data, isLoading, isError } = useQuery({
    queryKey: ["FetchWeather"],
    queryFn: WeatherApi,
    staleTime: 60 * 60 * 1000, // 1 hour = 3600000 ms
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false, // don’t refetch when window/tab gets focus again
    refetchOnMount: false, // don’t refetch when remounting component
    refetchOnReconnect: false,
  });
  const ref = useRef(null);
  const inview = useInView(ref, { once: true });
  const count = useMotionValue(0);
  const rounded = useTransform(count, (latest) => Math.floor(latest));
  const date = new Date();
  const dayName = date.toLocaleDateString("en-US", { weekday: "long" });

  useEffect(() => {
    if (!inview && !data?.current?.temp) return;
    const controls = animate(count, data.current.temp, {
      duration: 2,
      ease: "easeOut",
    });
    return () => controls.stop();
  }, [data?.current?.temp, inview]);

  const getNextDayName = (addDays: number) => {
    const newDate = new Date();
    newDate.setDate(date.getDate() + addDays);
    return newDate.toLocaleDateString("en-US", { weekday: "long" });
  };
  // console.log(getNextDayName(3));
  // if (isLoading) return <p>Loading</p>;
  // if (isError) return <p>Error</p>;
  console.log("Data", data?.daily[0]?.temp?.day);
  console.log("Min", data?.daily[0]?.temp?.min);
  return (
    <>
      {/* hero section */}
      <section
        className=" w-full bg-cover bg-bottom h-[50vh] lg:h-[90vh] "
        style={{ backgroundImage: `url(../../public/Weather/weatherbg.png)` }}
      >
        <div className="flex flex-col text-white justify-center items-center space-y-3 pt-20 sm:pt-36">
          <h1 className="Tuesdaynight text-[25px] sm:text-[50px] text-center">
            Weather
          </h1>
          <h1 className="poppins-bold text-2xl md:text-5xl lg:text-6xl text-center">
            MURREE FORECAST
          </h1>
          <p className="text-center w-96 sm:w-1/2">
            Discover refined comfort in our elegantly designed rooms spread
            across six floors, each crafted with style and sophistication in
            mind.
          </p>
        </div>
      </section>
      {/* body section */}
      <section className="backgroundcolor ">
        {/* Main Card Container */}
        <div
          className={`relative bottom-10  m-auto z-10 h-[430px] w-full lg:h-80 lg:w-[60%] rounded-3xl p-3 md:p-4 shadow-2xl bg-[#FFEBC2]`}
        >
          {/* Header */}
          <header className="text-center">
            <h1 className="text-xl poppins-semibold text-black">
              Murree, Punjab | <br className="block sm:hidden" /> {dayName},
              {`${date.getDate().toString().padStart(2, "0")}/${(
                date.getMonth() + 1
              )
                .toString()
                .padStart(2, "0")}/${date.getFullYear()} | ${date
                .getHours()
                .toString()
                .padStart(2, "0")}:${date
                .getMinutes()
                .toString()
                .padStart(2, "0")}`}
            </h1>
          </header>
          {/* Current Weather Section */}
          <div className="flex mb-2 lg:mb-5 flex-row items-center justify-around gap-4 lg:gap-8 p-2 md:p-6 ">
            {/* Current Temperature Box */}
            <motion.div
              ref={ref}
              className="p-2 rounded-xl bg-[#D49237] text-2xl shadow-lg flex items-center justify-center 
                 w-32 h-32 md:w-40 md:h-24 lg:w-36 lg:h-24 text-white poppins-bold md:text-4xl lg:p-6"
              initial={{ opacity: 0, scale: 0.5 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.6, ease: "easeOut" }}
            >
              <motion.span>{rounded}</motion.span>
              <span className="ml-1">°C</span>
            </motion.div>
            {/* Details (Max Temp, Dew, Humidity) */}
            <div className="flex flex-col space-y-3 my-6 md:my-0 text-black poppins-reguler text-lg">
              <div className="flex items-center text-[15px] sm:text-lg ">
                <span className="mr-3 text-2xl ">🌡️</span> Feels like:{" "}
                {data?.current?.feels_like} °C
              </div>
              <div className="flex items-center text-[15px] sm:text-lg ">
                <span className="mr-3 text-2xl">💧</span> Dew:{" "}
                {data?.current?.dew_point} °C
              </div>
              <div className="flex items-center text-[15px] sm:text-lg ">
                <span className="mr-3 text-2xl">💨</span> Humidity:{" "}
                {data?.current?.humidity}%
              </div>
            </div>

            {/* Current Weather Icon */}
            <div className="bg-[#D49237] pt-3 rounded-xl shadow-md flex items-center justify-center w-32 h-32 md:w-36 md:h-24">
              <WeatherAnimation />
            </div>
          </div>
          {/* Sub-header / Slogan */}
          <p className="text-center poppins-reguler ">
            Plan Your Perfect Stay—Murree Weather at a glance
          </p>
        </div>
        <div className="pt-10 pb-10 flex flex-col items-center lg:flex-row lg:pt-16 gap-6 justify-center">
          <DailyForecastCard
            day={getNextDayName(1)}
            maxTemp={data?.daily[0]?.temp?.day}
            minTemp={data?.daily[0]?.temp?.min}
            image={bgone}
          />
          <DailyForecastCard
            day={getNextDayName(2)}
            maxTemp={data?.daily[1]?.temp?.day}
            minTemp={data?.daily[1]?.temp?.min}
            image={bgtwo}
          />
          <DailyForecastCard
            day={getNextDayName(3)}
            maxTemp={data?.daily[2]?.temp?.day}
            minTemp={data?.daily[2]?.temp?.min}
            image={bgthree}
          />
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Weather;

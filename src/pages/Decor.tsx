import React from "react";
import decorbg from "../assets/Decor/decorBg.png";
import { SectionHeader } from "@/components/layout/SectionHeader";
import DecorCard from "@/components/cards/DecorCard";
import wedding from "../assets/Decor/wedding.png";
import fower_01 from "../assets/BG/fower_01.svg";
import { Footer } from "@/components/layout/Footer";
function Decor() {
  return (
    <>
      <section>
        {/* front image */}
        <div
          className="w-full h-full bg-cover relative bg-center"
          style={{ backgroundImage: `url(${decorbg})` }}
        >
          <div className="flex flex-col items-center space-y-5  sm:space-y-10 sm:justify-center p-10 sm:p-24 ">
            <h1 className="text-primary mt-16 font-bold text-lg sm:text-5xl">
              Styling & Décor Deals
            </h1>
            <img
              className="w-[150px] h-[150px] sm:w-[302px] sm:h-[302px]"
              src={wedding}
              alt=""
            />
            <h1 className="text-white text-primary text-center ">
              Luxury styling, crafted for perfection, designed for your moments
            </h1>
          </div>
          {/* flower bottom left */}
          <img
            className="w-36 sm:w-72 h-62 absolute -bottom-24 sm:-bottom-48 left-0 z-10"
            src={fower_01}
            alt="flower"
          />
        </div>

        {/* cards div */}
        <div className="min-h-screen bg-primary/50 relative">
          <div className="space-y-10 pt-10 relative z-20 pb-20">
            <DecorCard />
            <DecorCard />
            <DecorCard />
            <DecorCard />
            <DecorCard />
            <DecorCard />
          </div>
        </div>

        {/* flower bottom right */}
        <div className="relative">
          <img
            className="w-36 sm:w-72 h-62 absolute bottom-0 right-0 rotate-180"
            src={fower_01}
            alt="flower"
          />
        </div>

        {/* footer */}
        <Footer />
      </section>
    </>
  );
}

export default Decor;

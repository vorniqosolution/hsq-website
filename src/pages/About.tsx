import React from "react";
import {Link} from "react-router-dom"
import aboutbg from "@/assets/about/aboutbg.webp";
import logo from "@/assets/logo.webp";
import hotelimage from "@/assets/about/hotelimage.webp";
import Viewbutton from "@/components/buttons/Viewbutton";
import cardbg from "@/assets/about/cardbg.webp";
import { PiUsersFourFill, PiUsersThreeFill } from "react-icons/pi";
import { TiTick } from "react-icons/ti";
import { IoBedSharp } from "react-icons/io5";
import AboutCard from "@/components/cards/AboutCard";
import Footer from "@/components/layout/Footer";

function About() {
  return (
    <>
      <div className="">
        {/* hero section */}
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${aboutbg})` }}
        >
          {/* Overlay for dark effect */}
          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full pt-6 ">
            <h1 className="text-3xl md:text-5xl poppins-bold text-white mb-6 sm:mb-2">
              ABOUT HSQ TOWER
            </h1>
            <p className="text-white text-sm poppins-medium  w-fit lg:w-[550px] leading-relaxed mb-6">
              At HSQ Tower, we believe that true luxury lies in the perfect
              blend of comfort, elegance, and thoughtful service. Our hotel is
              designed for travelers who seek more than just a place to stay —
              they seek an experience.
            </p>
            <div className="flex justify-betweenflex-row items-center gap-3 sm:gap-4">
              <div className="border-t-0 border  w-20 md:w-48 lg:w-96 border-white" />
              <Link to={"/book"}>
              <Viewbutton label="Book Now"></Viewbutton>              
              </Link>

              <div className="border-t-0 border w-20 md:w-48 lg:w-96 border-white" />
            </div>
          </div>
        </section>
        {/* hotel card section */}
        <section className="backgroundcolor h-[85vh] lg:h-64">
          <section className="w-full flex flex-col  pt-10 lg:pt-0  justify-center lg:-bottom-10  items-center  lg:mt-0 absolute ">
            <div className="bg-[#FFF3DB] rounded-[30px] shadow-[0px_20px_0px_rgb(215,171,78),0_35px_60px_-15px_rgba(0,0,0,0.3)]  flex flex-col lg:flex-row items-center justify-center space-y-7 md:space-y-2 lg:space-y-0  pt-10 pb-7 lg:pt-0 w-[90%] md:w-[60%] lg:w-full  max-w-5xl h-full lg:h-48 ">
              {/* Left Content */}
              <div className="flex-flex flex-col  lg:ml-16 poppins-extrabold items-center lg:items-start text-5xl  lg:text-4xl text-center md:text-left">
                <h2 className=" mb-4">
                  Welcome To <br />
                  <span className="text-primary">HSQ Tower</span>
                </h2>
              </div>

              {/* Middle Image */}
              <div className="flex-1 flex justify-center mb-4 md:mb-0">
                <img
                  src={hotelimage} // replace with your image
                  alt="HSQ Tower"
                  className="w-52 md:w-60 lg:w-52 lg:pt-32  lg:ml-32 "
                />
              </div>

              {/* Right Content */}
              <div className="w flex justify-center ">
                <p className="text-black  poppins-medium leading-relaxed md:pt-10 lg:pt-0 text-center text-sm lg:text-left w-[80%] md:w-full  max-w-sm">
                  At HSQ Tower, elegance meets convenience — the perfect stay
                  for guests who seek charm, comfort, and the ideal location to
                  explore Murree.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* Exceeding Expectations */}
        <section className="backgroundcolor pt-4  flex justify-center flex-col items-center">
          <p className="poppins-medium text-[#D49237]">Pure Hospitality</p>
          <h1 className="poppins-bold text-2xl lg:text-3xl">
            Exceeding Expectations!
          </h1>
          {/* card div */}
          <div
            className="h-[80vh] mt-10 rounded-2xl p-2  xs:p-4 flex  flex-col lg:flex-row justify-center lg:justify-start 2xl:justify-center mb-10 w-[90%] lg:w-[80%] bg-fixed bg-cover md:pt-20 md:pl-16 2xl:pl-0 2xl:items-center  bg-bottom"
            style={{ backgroundImage: `url(${cardbg})` }}
          >
            {/* left */}
            <div className="flex flex-row  lg:flex-col gap-5 xs:gap-9 lg:gap-11">
              <AboutCard
                total="5+"
                title="Conference"
                icon={<PiUsersFourFill />}
              />
              <AboutCard
                total="50+"
                title="Luxury rooms"
                icon={<IoBedSharp />}
              />
            </div>
            {/* center */}
            <div className="flex justify-center duration-200 ease-out  hover:scale-110  p-10 lg:p-24  items-center">
              <div className=" w-32 h-32 p-2 lg:p-4 lg:w-44 lg:h-44 2xl:w-52  2xl:h-52  bg-opacity-30  backdrop-blur-md border-gray-400 shadow-lg  border rounded-full">
                <div className="w-28 h-28 lg:w-36 lg:h-36 2xl:h-44 2xl:w-44 border flex justify-center items-center border-gray-400 rounded-full ">
                  <img
                    className="w-full h-full  2xl:h-36 2xl:w-36"
                    src={logo}
                    alt=""
                  />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-row lg:flex-col gap-5  xs:gap-9 lg:gap-11">
              <AboutCard
                total="3000+"
                title="Customers"
                icon={<PiUsersThreeFill />}
              />
              <AboutCard total="96%" title="Hospitality" icon={<TiTick />} />
            </div>
          </div>
        </section>
        <Footer />
      </div>
    </>
  );
}

export default About;

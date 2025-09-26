import React from "react";
import decorcard from "../../assets/Decor/decorcard.png";
function DecorCard() {
  return (
    <>
      <div className="bg-black w-full h-fit   md:w-[80%] shadow-lg shadow-yellow-300 mx-auto">
        <div className="p-4 flex flex-col md:flex-row  lg:gap-3 items-center">
          {/* Image */}
          <div className="border-solid flex justify-center">
            <img
              className="w-28 h-28 md:w-52  lg:w-40 lg:h-48"
              src={decorcard}
              alt="cardecor"
            />
          </div>

          {/* Text content */}
          <div className="flex flex-col text-white sm:space-y-4 lg:w-1/2 text-center lg:text-left">
            <h1 className="text-primary text-center  font-bold text-lg sm:text-xl lg:text-2xl">
              Essentials Rooms
            </h1>
            <p className="text-sm p-3 sm:p-0 ml-5 sm:text-base">
              Step into a celebration that starts the moment you arrive! Be
              greeted with refreshing drinks, charming banners,
              <span className="hidden lg:block">
                thoughtful messages, and stunning towel art—topped off with a
                delectable cake to sweeten the experience. At HSQ Towers Murree,
                every detail turns your special moments into a true VIP affair
              </span>
            </p>
          </div>

          {/* Divider - hidden on mobile */}
          <div className="hidden md:block border border-r-2 h-52 border-white" />

          {/* Price section */}
          <div className="flex flex-col text-white justify-center items-center  space-y-2 mt-4 lg:mt-0">
            <h1 className="text-base sm:text-lg">Price at</h1>
            <p className="text-primary text-lg sm:text-xl">RS.8000</p>
            <p className="text-sm sm:text-base">(+taxes and fees)</p>
            <button className="bg-white text-primary px-4 py-2 text-center border rounded-md w-40 mx-3 lg:w-52 font-bold">
              Book Now
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default DecorCard;

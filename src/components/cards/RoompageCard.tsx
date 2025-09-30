import React from "react";
import v2 from "@/assets/Gallary/v2.svg";
import { ChevronRight } from "lucide-react";
import Button from "@/components/buttons/Button";
function RoompageCard() {
  return (
    <div className="w-full max-w-6xl mx-auto bg-[#FFFAF1] h-full lg:h-80 rounded-2xl shadow-lg p-4 flex flex-col lg:flex-row gap-6">
      {/* Left Image */}
      <div className="w-full lg:w-1/4  ">
        <img
          src={v2}
          alt="Standard Room"
          className=" w-full lg:sw-[90%] bg-center h-72 md:h-full object-cover rounded-xl"
        />
      </div>
      {/* Middle Content */}
      <div className="flex-1 flex flex-col justify-between">
        <div>
          <h2 className="poppins-bold text-2xl">One Bed Deluxe Room</h2>
          <p className="text-black mt-2 poppins-medium text-sm">
            A cozy retreat offering comfort, elegance, and all the essentials
            for a relaxing stay.
          </p>
        </div>
        <div className="relative">
          <button className="mt-4 text-sm text-black font-medium ">
            View Amenities
          </button>
          <div className="absolute   right-28 -bottom-0 md:right-[80%]  rounded-full px-[1px] py-[1px] lg:px-1 lg:py-1 lg:right-16 bg-black">
            <ChevronRight color={"white"} strokeWidth={3} size={20} />
          </div>
        </div>
      </div>

      {/* Price Section */}
      <div className="w-full lg:w-1/4 bg-[#FFF7E7] rounded-xl shadow p-2 sm:p-6 h-72  flex flex-col gap-2">
        <h3 className="text-2xl poppins-bold">RS. 14,000/-</h3>
        <p className="text-xs poppins-medium text-black">
          for 1 night (+taxes and fees)
        </p>
        <div className="border-t-[1px] border-neutral-400 w-full" />
        <div className="space-y-2 mt-3">
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Adults:
            </h1>
            <p className="text-en">2</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              bed type :
            </h1>
            <p className="text-en">queen bed</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className="text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              categories:
            </h1>
            <p className="text-en">single</p>
          </div>
          <div className="flex flex-row justify-between poppins-regular">
            <h1 className=" text-[13px] sm:text-[15px] text-gray-700 poppins-regular">
              Amenities:
            </h1>
            <p className="text-right text-sm flex flex-col">
              free wifi,safety, laundry, ironing, minibar,
              telephone,inroomsafety
            </p>
          </div>
        </div>
        {/* <div className="text-sm text-gray-700 mt-2 space-y-1">
          <p className="flex items-baseline">
            <b>Adults:</b>
            <p className="text-end">2</p>
          </p>
          <p>
            <b>Bed type:</b> Queen Bed
          </p>
          <p>
            <b>Category:</b> Single
          </p>
          <p>
            <b>Amenities:</b> Free Wifi, In-room safety, Laundry, Ironing,
            Minibar, Telephone
          </p>
        </div> */}
      </div>

      {/* Amenities Section */}
      <div className="w-full lg:w-1/4 bg-[#FFF7E7] rounded-xl shadow p-4 h-72 flex flex-col justify-between">
        <div>
          <h4 className="poppins-semibold">Amenities</h4>
          <div className="border-t-[1px]  border-neutral-400 w-full mt-1" />
          <p className="text-sm poppins-medium text-black mt-1">
            Essential conveniences designed to ensure comfort, ease, and a
            pleasant stay.
          </p>
          <h4 className="mt-3 poppins-semibold">Cleanliness</h4>
          <div className="border-t-[1px]  border-neutral-400 w-full" />
          <p className="text-sm poppins-medium text-black mt-1">
            Impeccably maintained for a fresh and comfortable stay.
          </p>
        </div>
        <div className="relative flex justify-center">
          <Button label="Book Now" className="w-52" />
          <div className="absolute px-1 py-1 rounded-full right-3 md:right-[37%] lg:right-6 top-[2px] bg-black">
            <ChevronRight color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
}

export default RoompageCard;

// import React from "react";
// import decorcard from "../../assets/Decor/decorcard.png";
// function DecorCard() {
//   return (
//     <>
//       <div className="bg-black w-full h-fit   md:w-[80%] shadow-lg shadow-yellow-300 mx-auto">
//         <div className="p-4 flex flex-col md:flex-row  lg:gap-3 items-center">
//           {/* Image */}
//           <div className="border-solid flex justify-center">
//             <img
//               className="w-28 h-28 md:w-52  lg:w-40 lg:h-48"
//               src={decorcard}
//               alt="cardecor"
//             />
//           </div>

//           {/* Text content */}
//           <div className="flex flex-col text-white sm:space-y-4 lg:w-1/2 text-center lg:text-left">
//             <h1 className="text-primary text-center  font-bold text-lg sm:text-xl lg:text-2xl">
//               Essentials Rooms
//             </h1>
//             <p className="text-sm p-3 sm:p-0 ml-5 sm:text-base">
//               Step into a celebration that starts the moment you arrive! Be
//               greeted with refreshing drinks, charming banners,
//               <span className="hidden lg:block">
//                 thoughtful messages, and stunning towel art—topped off with a
//                 delectable cake to sweeten the experience. At HSQ Towers Murree,
//                 every detail turns your special moments into a true VIP affair
//               </span>
//             </p>
//           </div>

//           {/* Divider - hidden on mobile */}
//           <div className="hidden md:block border border-r-2 h-52 border-white" />

//           {/* Price section */}
//           <div className="flex flex-col text-white justify-center items-center  space-y-2 mt-4 lg:mt-0">
//             <h1 className="text-base sm:text-lg">Price at</h1>
//             <p className="text-primary text-lg sm:text-xl">RS.8000</p>
//             <p className="text-sm sm:text-base">(+taxes and fees)</p>
//             <button className="bg-white text-primary px-4 py-2 text-center border rounded-md w-40 mx-3 lg:w-52 font-bold">
//               Book Now
//             </button>
//           </div>
//         </div>
//       </div>
//     </>
//   );
// }

// export default DecorCard;
import React from "react";
import v2 from "@/assets/Gallary/v2.svg";
import Button from "@/components/buttons/Button";
import { ChevronRight } from "lucide-react";
const DecorCard = () => {
  return (
    <div className="bg-[#FFFAF1] rounded-3xl h-fit shadow-md flex flex-col lg:flex-row items-center justify-between w-full md:w-[70%]  space-y-4 max-w-5xl p-6 mx-auto">
      {/* Left Side - Image */}
      <div className="flex-shrink-0">
        <img
          src={v2} // replace with your image path
          alt="Essential Room Design"
          className="rounded-2xl w-60 h-52 object-cover"
        />
      </div>

      {/* Middle Content */}
      <div className="flex-1 px-10">
        <h2 className="text-2xl poppins-bold text-black  ">
          Essential Room Design
        </h2>
        <p className="text-black mt-2 text-sm poppins-regular leading-relaxed">
          Turn your Murree stay into something unforgettable at HSQ Towers! With
          fresh flowers, stylish décor, and a cozy minimalist vibe, every moment
          feels extra special. Whether it’s a mini celebration or just treating
          yourself, it all begins at PKR 10,000—totally worth it.
        </p>
      </div>

      {/* Right Side - Price & Button */}
      <div className="bg-[#FFF7E7] shadow-xl rounded-2xl p-6 flex flex-row lg:flex-col  w-full lg:w-56  lg:h-48 mt-6 md:mt-0">
        <div className="flex flex-col ">
          <h3 className="text-2xl poppins-bold">RS. 9,999/-</h3>
          <p className="text-xs text-black poppins-medium mt-1">
            for 1 night (+taxes and fees)
          </p>
        </div>
        <div className="border-t-[1px] hidden lg:block border-neutral-400 w-full mt-1" />
        <div className="relative  mt-10 md:mt-0 md:ml-32 lg:ml-0 lg:mt-5">
          <Button
            label="Book Now"
            className="pl-4 text-left py-2 lg:w-44 lg:pl-6 "
          />
          <div className="absolute ease-out px-1 py-1 rounded-full right-1 lg:right-3 top-[6px] bg-black">
            <ChevronRight color="white" size={20} />
          </div>
        </div>
      </div>
    </div>
  );
};

export default DecorCard;

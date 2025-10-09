// import React from "react";
// import v3 from "../../assets/v3.png";

// function BookingCard() {
//   return (
//     <>
//       <div className="border-2 border-black rounded-lg ml-3 mr-3  md:w-72 lg:w-1/4 ">
//         <img
//           className="w-fit h-fit  rounded-tr-lg rounded-tl-lg"
//           src={v3}
//           alt="roomimage"
//         />
//         <div className="bg-primary border-t-2 rounded-br-lg rounded-bl-lg border-black p-4 flex flex-col space-y-4">
//           <h1 className="text-xl font-semibold lg:font-bold">
//             One Bed Executive Suite
//           </h1>
//           <p className="text-center font-semibold">From Rs. 30000/Night </p>
//           <button className="bg-black px-2 py-3 border-none font-bold rounded-md text-primary text-center">
//             VIEW DETAILS
//           </button>
//           <p></p>
//         </div>
//       </div>
//     </>
//   );
// }

// export default BookingCard;

import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import roomimage from "../../assets/Book/roomimage.svg";
function BookingCard() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };
  return (
    <>
      <Card className="rounded-2xl relative shadow-lg overflow-hidden bg-white w-72 sm:w-64 ">
        {/* Price Badge */}
        <div className="absolute top-3 left-3 bg-white rounded-full px-3 py-1 z-50 shadow text-sm poppins-semibold-italic">
          Rs 14000/-
        </div>
        {/* Room Image */}
        <img
          src={roomimage}
          alt="One Bed Deluxe Room"
          className="w-full h-52 object-cover relative rounded-lg"
        />
        <CardContent className="flex flex-col space-y-4 p-4">
          {/* Title & Description */}
          <div className="text-left">
            <h2 className="poppins-extrabold-italic">Standard Room</h2>
            <p className="text-sm poppins-regular-italic">
              Where elegance meets relaxation for an unforgettable
            </p>
          </div>

          {/* Button */}
          <div className="flex justify-center">
            <button
              onClick={handleScrollToTop}
              className="w-full bg-yellow-600/80  text-black font-medium py-2 hover:bg-white hover:text-yellow-600   poppins-medium-italic transition"
            >
              Book now
            </button>
          </div>
        </CardContent>
      </Card>
    </>
  );
}

export default BookingCard;

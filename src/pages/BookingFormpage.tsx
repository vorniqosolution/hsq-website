import React, { useState, lazy, Suspense } from "react";
import { Link } from "react-router-dom";
import tembookingform from "@/assets/tembookingform.png";
import Viewbutton from "@/components/buttons/Viewbutton";
import { ChevronRight, ArrowRight } from "lucide-react";
import BookingFoam from "@/components/BookingFoam";
import Footer from "@/components/layout/Footer";
// import ConfirmationDialog from "@/components/ConfirmationDialog";
const ConfirmationDialog = React.lazy(
  () => import("@/components/ConfirmationDialog")
);
function BookingFormpage() {
  const [Confirmation, setConfirmation] = useState(false);
  return (
    <>
      {Confirmation ? (
        <Suspense fallback="Loading ">
          <ConfirmationDialog />
        </Suspense>
      ) : (
        <div>
          {/* upper section */}
          <div
            className="relative w-full bg-cover bg-bottom h-[50vh] lg:h-[90vh]"
            style={{ backgroundImage: `url(${tembookingform})` }}
          >
            {/* shadow div */}
            {/* <div className="" /> */}
            <div className="absolute left-[20%] top-[30%]   md:left-[30%] md:top-[40%] lg:left-[35%] lg:top-[30%]">
              <h1 className="text-white poppins-extrabold uppercase text-2xl  md:text-4xl lg:text-5xl">
                Standard room
              </h1>
            </div>
            <div className="absolute flex flex-col bottom-0 md:left-16  lg:left-24 sm:bottom-24 text-white">
              <h1 className="poppins-extrabold text-2xl sm:text-5xl">
                RS.14000
                <span className="poppins-regular text-lg lg:text-2xl">
                  /Night
                </span>
              </h1>
              <p className="text-primary pt-3 text-sm poppins-regular sm:text-xl">
                Preferred by Guests
              </p>
            </div>
            <div className="absolute  text-white right-0 bottom-3  sm:bottom-10 md:right-10 lg:right-32">
              <p className="text-primary poppins-bold ">Room Details:</p>
              <ul className="text-sm">
                <li>Free Wi-Fi</li>
                <li>Complimentary Breakfast</li>
                <li>Mountain View</li>
                <li>24/7 Room Service</li>
              </ul>
            </div>
          </div>
          {/* form section */}
          <div className="backgroundcolor w-full pt-10 pb-20 space-y-5 lg:space-y-0 lg:space-x-10 grid grid-cols-1 lg:grid-cols-2">
            <div className="pl-4 pr-4 lg:ml-20">
              <BookingFoam />
            </div>
            <div className="pr-4 pl-4 lg:pl-0 lg:pr-0">
              <div className=" w-full  lg:w-[70%] bg-[#FFFAF1] rounded-3xl shadow-xl">
                {/* top heading */}
                <div className="bg-black p-4 text-white rounded-tr-3xl rounded-tl-3xl">
                  <h1 className="poppins-bold text-xl">Booking Summery</h1>
                </div>
                {/* Stays */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">Stays</h1>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto " />
                {/* room type */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room type:</h1>
                    <p>ONE BED DELUXE ROOM</p>
                  </div>
                </div>
                {/* room number */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room number:</h1>
                    <p>506</p>
                  </div>
                </div>
                {/* check-in */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Check-in:</h1>
                    <p>2025-08-29</p>
                  </div>
                </div>
                {/* check-out */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Check-out:</h1>
                    <p>2025-08-30</p>
                  </div>
                </div>
                {/* nights */}
                <div className="flex flex-col p-4 mb-5">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Nights:</h1>
                    <p>03</p>
                  </div>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto " />
                {/* One Day Rate  */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">One Day Rate </h1>
                </div>
                {/* one day date */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">29/5/2025</h1>
                    <p>Rs. 20000/-</p>
                  </div>
                </div>
                {/* Price Summary */}
                <div className="m p-4">
                  <h1 className="poppins-bold text-xl">Price Summary</h1>
                </div>
                {/* room rent */}
                <div className="flex flex-col p-4 bg-[#FFF2DD]  w-[90%] lg:w-96 rounded-md m-auto">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Room Rate:</h1>
                    <p>PKR 42000</p>
                  </div>
                </div>
                {/* tax */}
                <div className="flex flex-col p-4 ">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Tax</h1>
                    <p>PKR 2100</p>
                  </div>
                </div>
                {/* line */}
                <div className="border-t-2 text-neutral-500 w-[90%] lg:w-[350px] m-auto " />
                {/* total */}
                <div className="flex flex-col p-4">
                  <div className="flex flex-row justify-between">
                    <h1 className="poppins-bold">Total</h1>
                    <p className="poppins-bold">PKR 44,100</p>
                  </div>
                </div>
                {/* booking button */}
                {/* <Link to={"/confirmation"}> */}
                <div
                  onClick={() => setConfirmation(!Confirmation)}
                  className="pt-8 pb-10"
                >
                  <button className="bg-gradient-to-r from-[#D7AA4D] to-[#D49237] text-black w-80 m-auto py-2 rounded-full flex items-center pl-24 gap-2 poppins-bold hover:bg-neutral-200 transition relative">
                    Book Now
                    <div className="absolute right-1 bg-black p-2 rounded-full">
                      <ChevronRight color="white" size={18} />
                    </div>
                  </button>
                </div>
                {/* </Link> */}
              </div>
              {/* Review */}
              <div className=" flex md:justify-center lg:justify-start ">
                {/* review card */}
                <div className="w-full  md:w-[90%] lg:w-[70%] text-black my-4">
                  <div className="bg-[#D7AB4E]  rounded-xl">
                    <h1 className="poppins-semibold pt-5 pl-5 ">
                      Hsq towers,Jhika Gali, Murree
                    </h1>
                    <p className="pl-5 pb-2 poppins-bold">
                      4.8 ★★★★★{" "}
                      <span className="underline pl-4 text-sm">
                        49Google reviews
                      </span>
                    </p>
                    <a
                      href="https://maps.app.goo.gl/fcSZV2ReQKyBtRGp7"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      <div className="bg-[#FFD680] rounded-xl p-2 flex justify-center poppins-semibold flex-row gap-3 items-center">
                        <p className="underline text-sm text-center hover:cursor-pointer">
                          View larger map
                        </p>
                        <div className="relative bg-black w-7 h-7 rounded-full">
                          <ArrowRight
                            color="white"
                            className="absolute top-1 left-1"
                            size={20}
                          />
                        </div>
                      </div>
                    </a>
                  </div>
                </div>
              </div>
            </div>
          </div>
          {/* footer */}
          <Footer></Footer>
        </div>
      )}
    </>
  );
}

export default BookingFormpage;

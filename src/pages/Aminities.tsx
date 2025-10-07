import React from "react";
import aminitiesbg from "@/assets/Aminities/aminitiesbg.png";
import Amenitieparking from "@/components/svg/Amenitieparking";
import Amenitiewifi from "@/components/svg/Amenitiewifi";
import Amenitiepower from "@/components/svg/Amenitiepower";
import Amenitiecouch from "@/components/svg/Amenitiecouch";
import Amenitiereception from "@/components/svg/Amenitiereception";
import AmenitieHousekeeping from "@/components/svg/AmenitieHousekeeping";
import AmenitieBed from "@/components/svg/AmenitieBed";
import AmenitieView from "@/components/svg/AmenitieView";
import AmenitieSecurity from "@/components/svg/AmenitieSecurity";
function Aminities() {
  return (
    <>
      <section
        className="w-full bg-cover bg-bottom h-[50vh] lg:h-[80vh]"
        style={{ backgroundImage: `url(${aminitiesbg})` }}
      >
        <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-36">
          <h1 className="Tuesdaynight text-[30px] text-center">HSQ Towers</h1>
          <h1 className="poppins-bold  text-2xl md:text-5xl lg:text-6xl">
            AMENITIES
          </h1>
          <p className="text-center w-96 sm:w-1/2">
            Discover the comforts that make every stay unforgettable
          </p>
        </div>
      </section>

      <section className="bg-[#fdf4e3] px-2 py-16  sm:px-6">
        <div className="grid grid-cols-2 sm:grid-cols-5 items-center text-center gap-y-10">
          {/* card1 */}
          <div className="flex flex-col items-center px-4">
            <Amenitieparking />{" "}
            <h3 className="poppins-bold">Secure Guest Parking</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Ample, safe, and convenient parking facilities.
            </p>
          </div>
          {/* Divider */}
          <div className="hidden sm:flex justify-center">
            <div className="w-10  md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>

          {/* Card 2 */}
          <div className="flex flex-col items-center px-4">
            <Amenitiewifi />
            <h3 className="poppins-bold">Complimentary High-Speed Wi-Fi</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Stay connected seamlessly throughout your stay.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex justify-center">
            <div className="w-full md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>

          {/* Card 3 */}
          <div className="flex flex-col items-center px-4">
            <Amenitiecouch />
            <h3 className="poppins-bold">Elegant Lounge Area</h3>
            <p className="text-sm poppins-regular  text-gray-600">
              Relax in stylish lounge spaces with soothing ambiance.
            </p>
          </div>

          {/* Card 4 */}
          <div className="flex flex-col items-center px-4">
            <Amenitiepower />
            <h3 className="poppins-bold">Uninterrupted Power Supply</h3>
            <p className="text-sm poppins-regular text-gray-600">
              24/7 energy assurance for your peace of mind.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex justify-center">
            <div className="w-full md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>

          {/* Card 5 */}
          <div className="flex flex-col items-center px-4">
            <Amenitiereception />
            <h3 className="poppins-bold">24/7 Concierge & Reception</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Personalized assistance anytime you need it.
            </p>
          </div>

          {/* Divider */}
          <div className=" hidden sm:flex justify-center">
            <div className="w-full md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>

          {/* Card 6 */}
          <div className="flex flex-col items-center px-4">
            <AmenitieHousekeeping />{" "}
            <h3 className="poppins-bold">Daily Housekeeping Service</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Ensuring spotless comfort throughout your stay.
            </p>
          </div>

          {/* Card 7 */}
          <div className="flex flex-col items-center px-4">
            <AmenitieBed />
            <h3 className="poppins-bold">Luxurious Rooms & Suites</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Spacious, elegant, and fully equipped for relaxation.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex justify-center">
            <div className="w-full md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>

          {/* Card 8 */}
          <div className="flex flex-col items-center px-4">
            <AmenitieView />
            <h3 className="poppins-bold">Scenic City & Mountain Views</h3>
            <p className="text-sm poppins-regular text-gray-600">
              Breathtaking panoramas from your window.
            </p>
          </div>

          {/* Divider */}
          <div className="hidden sm:flex justify-center">
            <div className="w-full md:w-20 lg:w-32 border-t-2 border-black"></div>
          </div>
          {/* Card 9 */}
          <div className="flex flex-col ml-40 sm:ml-0 items-center px-4">
            <AmenitieSecurity />
            <h3 className="poppins-bold">Advanced Security System</h3>
            <p className="text-sm poppins-regular text-gray-600">
              24/7 monitoring to safeguard your comfort.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default Aminities;

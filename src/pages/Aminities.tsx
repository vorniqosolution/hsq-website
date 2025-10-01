import React from "react";
import aminitiesbg from "@/assets/Aminities/aminitiesbg.png";
function Aminities() {
  return (
    <>
      <section
        className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[90vh]"
        style={{ backgroundImage: `url(${aminitiesbg})` }}
      >
        <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-32">
          <h1 className="Tuesdaynight text-[30px] text-center">HSQ TOWERS</h1>
          <h1 className="poppins-bold  text-2xl md:text-5xl lg:text-6xl">
            AMENITIES
          </h1>
          <p className="text-center w-96 sm:w-1/2">
            Discover the comforts that make every stay unforgettable
          </p>
        </div>
      </section>
    </>
  );
}

export default Aminities;

import React from "react";
import gallerybg from "@/assets/indexpage/gallerybg.svg";
import Viewbutton from "@/components/buttons/Viewbutton";
import Footer from "@/components/layout/Footer";
import { useState, lazy, Suspense } from "react";

// import components
const Restaurant = React.lazy(() => import("@/components/gallery/Restaurant"));
const Rooms = React.lazy(() => import("@/components/gallery/Rooms"));
const Snow = React.lazy(() => import("@/components/gallery/Snow"));
const Outdoor = React.lazy(() => import("@/components/gallery/Outdoor"));
const ConferenceHall = React.lazy(
  () => import("@/components/gallery/ConferenceHall")
);
const Bar = React.lazy(() => import("@/components/gallery/Bar"));
const Decor = React.lazy(() => import("@/components/gallery/Decor"));
const Gym = React.lazy(() => import("@/components/gallery/Gym"));

const categories = [
  { name: "Restaurant", component: Restaurant },
  { name: "Rooms", component: Rooms },
  { name: "Gym", component: Gym },
  { name: "Outdoor", component: Outdoor },
  { name: "Snow", component: Snow },
  { name: "ConferenceHall", component: ConferenceHall },
  { name: "Decor", component: Decor },
  { name: "Bar", component: Bar },
];
// "Rooms",
// "Outdoor",
// "Conference  Hall",
// "Bar",
// "Snow",
// "Decor",
// "Gym",
function Gallery() {
  const [active, setActive] = useState("Restaurant");

  const ActiveComponent = categories.find(
    (cat) => cat.name === active
  )?.component;
  return (
    <>
      <div>
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${gallerybg})` }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#FFDC92]/20" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute pt-20 lg:pt-28 flex-col flex justify-center text-center text-white">
            <h1 className="Tuesdaynight text-[40px] lg:text-[50px] text-center">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-5xl lg:text-7xl">
              PHOTO GALLERY
            </h1>
            <p className=" w-[90%] lg:w-[70%]  m-auto">
              At HSQ Tower, we believe that true luxury lies in the perfect
              blend of comfort, elegance, and thoughtful service. Our hotel is
              designed for travelers who seek more than just a place to stay —
              they seek an experience.
            </p>
            <div className="flex justify-center mt-4 poppins-bold">
              <Viewbutton label="Book Now" />
            </div>
          </div>
        </section>
        {/* gallery section */}
        <section className="backgroundcolor ">
          <div className="flex flex-col p-10 space-y-6 justify-center lg:flex-row  lg:justify-between">
            <div className="poppins-bold text-center text-4xl lg:text-start lg:w-1/3">
              <h1>Discover Elegance Frame By Frame</h1>
            </div>
            <div className=" text-center  text-sm poppins-medium  lg:w-1/3">
              <p>
                At HSQ Tower, elegance meets convenience — the perfect stay for
                guests who seek charm, comfort, and the ideal location to
                explore Murree.
              </p>
            </div>
          </div>
          {/* rebin */}
          <div className="flex rounded-md  gap-2 bg-[#FDEBC7] w-full justify-center flex-wrap  lg:w-[90%] m-auto mb-8 ">
            {categories.map((cat) => (
              <div className="">
                <button
                  key={cat.name}
                  onClick={() => setActive(cat.name)}
                  className={`px-5 lg:px-10 py-2 rounded-md text-sm poppins-semibold transition ${
                    active === cat.name
                      ? "bg-[#D49237] text-white shadow"
                      : "text-black hover:bg-[#D49237]"
                  }`}
                >
                  {cat.name}
                </button>
              </div>
            ))}
          </div>
          <div className="w-full flex  p-5  pb-16 lg:justify-center gap-3 lg:gap-10 flex-wrap  flex-row">
            <Suspense
              fallback={
                <div className="col-span-3 text-center">Loading...</div>
              }
            >
              {ActiveComponent && <ActiveComponent />}
            </Suspense>
          </div>
        </section>
        <Footer></Footer>
      </div>
    </>
  );
}

export default Gallery;

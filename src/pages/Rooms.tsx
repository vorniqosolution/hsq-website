// import { SEO } from "@/components/SEO";
// import { Section } from "@/components/layout/Section";
// import { SectionHeader } from "@/components/layout/SectionHeader";
// import { RoomCard } from "@/components/cards/RoomCard";
// import { useRoomsData } from "@/hooks/useData";
import roomimage from "../assets/BG/roomimage.png";
import fower_01 from "../assets/BG/fower_01.svg";
import RoomCard from "../components/cards/RoomCard";
const Rooms = () => {
  return (
    <>
      <div>
        {/* Upper section */}
        <div className="relative w-full h-80 sm:h-screen">
          {/* Background image */}
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${roomimage})` }}
          />
          {/* Black shade overlay */}
          <div className="absolute inset-0 bg-black/50" />
          {/* Content */}
          <div className="relative flex flex-col items-center justify-center h-full space-y-16 pt-15">
            <h1 className="text-primary font-bold text-5xl">Rooms & Suites</h1>

            <p className="text-white text-sm text-center  w-full lg:w-1/2  sm:text-xl">
              Discover refined comfort in our elegantly designed rooms spread
              across six floors, each crafted with style and sophistication in
              mind.
            </p>
          </div>
        </div>
        {/* body */}
        <div className="bg-primary/50 h-full relative">
          <img
            className="absolute top-0 left-0 w-52"
            src={fower_01}
            alt="flower_01"
            loading="lazy"
          />
          <img
            className="absolute bottom-0 right-1 rotate-180 w-52"
            src={fower_01}
            alt="flower_01"
            loading="lazy"
          />
          <div className="pt-10 ml-6 z-50 relative mr-6">
            <RoomCard
              price="Rs14,000/-"
              title="One Bed Deluxe Room"
              image={roomimage}
            />
          </div>
        </div>
      </div>
    </>
  );
};

export default Rooms;

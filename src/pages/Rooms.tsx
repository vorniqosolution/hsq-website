import roomimage from "../assets/BG/roombg.png";
import RoompageCard from "@/components/cards/RoompageCard";
import { useRoomStore } from "@/store/store";
import Zerorooms from "@/components/cards/Zerorooms";
const Rooms = () => {
  const { AvaibleRooms } = useRoomStore();
  // console.log("Store data AvaibleRooms", AvaibleRooms);
  return (
    <>
      <div>
        {/* Upper section */}
        <section
          className="w-full  bg-cover  bg-bottom h-[60vh] lg:h-[85vh]"
          style={{ backgroundImage: `url(${roomimage})` }}
        >
          <div className="inset-0 bg-black/50" />
          <div className=" flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-40">
            <h1 className="Tuesdaynight text-[35px] sm:text-[50px] text-center">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-3xl md:text-5xl lg:text-7xl">
              ROOMS AND SUITES
            </h1>
            <p className="text-center w-96 sm:w-1/2">
              Discover refined comfort in our elegantly designed rooms spread
              across six floors, each crafted with style and sophistication in
              mind.
            </p>
          </div>
        </section>
        <section className="backgroundcolor h-full p-10  space-y-10">
          {AvaibleRooms.length === 0 ? (
            <Zerorooms />
          ) : (
            <>
              {AvaibleRooms.map((value, index) => (
                // <div className="">
                <RoompageCard key={index} room={value} />
                // </div>
              ))}
            </>
          )}
        </section>
      </div>
    </>
  );
};

export default Rooms;

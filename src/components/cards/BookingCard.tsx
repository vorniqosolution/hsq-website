import React from "react";
import { Card, CardContent } from "@/components/ui/card";
import roomimage from "../../assets/Book/roomimage.svg";
import Room from "@/types/Room";
interface BookingCardProps {
  room: Room;
}
const BookingCard: React.FC<BookingCardProps> = ({ room }) => {
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
          Rs {room.startingRate}/-
          {/* {} */}
        </div>
        {/* Room Image */}
        <img
          src={room.imageUrl}
          alt="One Bed Deluxe Room"
          className="w-full h-52 object-cover relative rounded-lg"
        />
        <CardContent className="flex flex-col space-y-4 p-4">
          {/* Title & Description */}
          <div className="text-left">
            <h2 className="poppins-extrabold-italic">
              {/* Standard Room */}
              {room.category}
            </h2>
            <p className="text-sm poppins-regular-italic">
              {/* Where elegance meets relaxation for an unforgettable */}
              {room.publicDescription}
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
};

export default BookingCard;

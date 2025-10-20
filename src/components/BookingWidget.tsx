import React, { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Datepicker from "../components/Datepicker";
import { useNavigate } from "react-router-dom";
import { Search } from "lucide-react";
import { format } from "date-fns";
import { useQuery } from "@tanstack/react-query";
import { SearchAvailableRooms } from "@/api/roomsApi";
import { toast } from "react-toastify";
import { AvailableRoomGroupedResponse } from "@/types/Room";
import { useRoomStore } from "@/store/store";
function BookingWidget() {
  const [departure, setDeparture] = useState<string | null>(null);
  const [arrival, setArrival] = useState<string | null>(null);
  const [guests, setGuests] = useState<string | null>(null);
  const { setAvaibleRooms, setBookingwidget, Bookingwidget } = useRoomStore();
  const navigate = useNavigate();
  const { refetch } = useQuery<AvailableRoomGroupedResponse>({
    queryKey: ["available-rooms", arrival, departure, guests],
    queryFn: () =>
      SearchAvailableRooms({ checkin: arrival, checkout: departure, guests }),
    enabled: false,
  });

  const handleDepartureChange = (date: Date | null) => {
    setDeparture(date ? format(date, "yyyy-MM-dd") : null);

    // console.log("actual date", date);
    // console.log("departure", departure);
  };
  const handleArrivalChange = (date: Date | null) => {
    setArrival(date ? format(date, "yyyy-MM-dd") : null);
  };

  const Validation = async () => {
    if (!arrival || !guests || !departure) {
      return toast.error("All Fields Required", {
        position: "top-center",
        style: {
          background: "#dfab4e", // light orange background
          color: "black", // deep amber text
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
    }
    const arrivalDate = new Date(arrival);
    const departureDate = new Date(departure);
    if (departureDate < arrivalDate) {
      return toast.error("Check-out must be after check-in.", {
        position: "top-center",
        style: {
          background: "#dfab4e", // light orange background
          color: "black", // deep amber text
          border: "1px solid #fbbf24",
          fontWeight: "600",
        },
      });
    }
    try {
      const { data } = await refetch();
      // console.log("Available Rooms", data);
      setAvaibleRooms(data);
      navigate("/rooms");
      setBookingwidget({
        ...Bookingwidget,
        checkout: departure,
        checkin: arrival,
      });
    } catch (err: any) {
      setDeparture("");
      setArrival("");
      setGuests("");
      toast.error(err.message || "Something went wrong", {
        position: "top-center",
      });
      // console.error("Error fetching rooms:", err);
    }
  };
  // useEffect(() => {
  //   console.log("Updated departure:", departure);
  // }, [departure]);
  return (
    <>
      <div className="flex justify-center items-center ">
        <div className="border-t-[#D7AB4E] border-l-[#D7AB4E] border-r-[#666666] border-b-[#666666] border-2 rounded-3xl lg:rounded-full bg-gradient-to-l from-[#303030] to-[#111111]  w-[80%] md:w-[60%] lg:w-[80%]  m-auto h-fit lg:h-32  p-0 lg:p-14 gap-5 flex flex-col lg:flex-row items-center ">
          <img className="w-28 h-20 mt-3 lg:h-28" src={logo} alt="Hsqlogo" />
          <div className="flex gap-3 lg:gap-7 sm:flex-row">
            <Datepicker
              title="Arrival"
              value={arrival}
              onChange={handleArrivalChange}
            />

            <Datepicker
              title="Departure"
              value={departure}
              onChange={handleDepartureChange}
            />
          </div>

          {/* Guests Dropdown */}
          <div className="hidden  lg:block">
            <label className="text-white px-1 poppins-light">Guests :</label>
            <select
              value={guests}
              onChange={(e) => setGuests(e.target.value)}
              className="w-full text-black  bg-white  rounded-md px-3 py-2 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-10"
            >
              <option value="">Select Guests</option>
              <option value="1">1 Guest</option>
              <option value="2">2 Guests</option>
              <option value="3">3 Guests</option>
              <option value="4">4 Guests</option>
              <option value="5">5+ Guests</option>
            </select>
          </div>
          <div className="poppins-semibold relative lg:mt-5  flex justify-center w-full sm:w-fit items-center mb-5 lg:mb-0 ">
            <button
              onClick={Validation}
              className="bg-gradient-to-l  w-[270px]  sm:w-fit px-12  py-2 text-black rounded-full from-[#D7AB4E] to-[#D49136]"
            >
              Search
            </button>
            <div className="absolute top-2 left-7 sm:left-3 bg-black rounded-full px-1 py-1">
              <Search size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingWidget;

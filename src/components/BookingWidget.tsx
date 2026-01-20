import React, { useState, useEffect } from "react";
import logo from "../assets/logo.webp";
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
  const [errors, setErrors] = useState({
    arrival: false,
    departure: false,
    guests: false,
  });
  const { refetch } = useQuery<AvailableRoomGroupedResponse>({
    queryKey: ["available-rooms", arrival, departure, guests],
    queryFn: () =>
      SearchAvailableRooms({ checkin: arrival, checkout: departure, guests }),
    enabled: false,
  });

  const handleDepartureChange = (date: Date | null) => {
    setDeparture(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, departure: false }));
    // console.log("actual date", date);
    // console.log("departure", departure);
  };
  const handleArrivalChange = (date: Date | null) => {
    setArrival(date ? format(date, "yyyy-MM-dd") : null);
    setErrors((prev) => ({ ...prev, arrival: false }));
  };

  const Validation = async () => {
    const newErrors = {
      arrival: !arrival,
      departure: !departure,
      guests: !guests,
    };
    setErrors(newErrors);
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
      <div className="flex justify-center items-center">
        <div
          className="border-t-[#D7AB4E] border-l-[#D7AB4E] border-r-[#666666] border-b-[#666666]
    border-2 rounded-3xl lg:rounded-full bg-gradient-to-l from-[#303030] to-[#111111]
    w-full xs:w-[95%] md:w-[70%] lg:w-[80%] xl:w-[90%] 2xl:w-full
    m-auto h-fit lg:h-32 p-0 lg:p-14
    gap-5 flex flex-col items-center lg:flex-row  lg:justify-center
    2xl:gap-14 2xl:p-16"
        >
          {/* LOGO */}
          <div className="flex justify-center items-center">
            <img
              className="w-28 h-20 2xl:h-24 2xl:w-32"
              src={logo}
              alt="Hsqlogo"
            />
          </div>

          {/* INPUT ROW */}
          <div className="flex gap-2 pl-2 xs:pl-4 lg:gap-7 2xl:gap-10 xs:flex-row items-center">
            {/* Arrival */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Arrival"
                value={arrival}
                hasError={errors.arrival}
                onChange={handleArrivalChange}
              />
            </div>
            {/* Departure */}
            <div className="flex items-center h-12">
              <Datepicker
                title="Departure"
                value={departure}
                hasError={errors.departure}
                onChange={handleDepartureChange}
              />
            </div>
            {/* Guests */}
            <div className="flex items-center h-12">
              <div className="flex flex-col">
                <label className="text-white px-1 pb-1 poppins-light">
                  Guests :
                </label>
                <select
                  value={guests}
                  onChange={(e) => {
                    setGuests(e.target.value);
                    setErrors((prev) => ({ ...prev, guests: false }));
                  }}
                  className={`text-black bg-white px-[2px] rounded-md lg:w-full lg:px-3 2xl:px-6
              py-2 text-sm h-10
              ${errors.guests ? "border-2 border-red-800" : "border-0"}
              focus:outline-none focus:ring-2 focus:ring-yellow-500`}
                >
                  <option value="">Select Guest</option>
                  <option value="1">1 Guest</option>
                  <option value="2">2 Guests</option>
                  <option value="3">3 Guests</option>
                  <option value="4">4 Guests</option>
                  <option value="5">5+ Guests</option>
                </select>
              </div>
            </div>
          </div>

          {/* SEARCH BUTTON */}
          <div className="poppins-semibold relative flex justify-center w-full sm:w-fit items-end mb-5 lg:mb-3 h-[72px]">
            <button
              onClick={Validation}
              className="bg-gradient-to-l w-[270px] sm:w-fit px-12 py-2
      text-black rounded-full from-[#D7AB4E] to-[#D49136]"
            >
              Search
            </button>

            <div className="absolute left-14 xs:left-20 md:left-2 lg:left-3 top-10 bg-black rounded-full px-1 py-1">
              <Search size={18} color="white" />
            </div>
          </div>
        </div>
      </div>
    </>
  );
}

export default BookingWidget;

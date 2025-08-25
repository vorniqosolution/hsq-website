import { useState } from "react";
import { Calendar, Users, BedDouble, ArrowRight } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogTrigger,
} from "@/components/ui/dialog";
import floating_logo_2 from "@/assets/logo.png";

export const BookingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="p-3 md:p-4 bg-black/90 backdrop-blur-sm rounded-md md:rounded-tl-[65px] md:rounded-bl-[0px] md:rounded-br-[65px] md:rounded-tr-[0px] max-w-7xl mx-auto border-4 border-primary">
        <div className="flex flex-col md:flex-row items-center justify-between gap-3 +md:gap-6">
          {/* Logo */}
          <div className="flex items-center mb-4 md:mb-0">
            <img
              // src={floating_logo}
              src={floating_logo_2}
              alt="Hotel Logo"
              className="w-16 h-16 md:w-[150px] md:h-[112px] hidden md:block lg:block"
            />
          </div>

          <div className="flex flex-col md:flex-row items-center gap-3 md:gap-4 flex-1 w-full">
            <div className="flex flex-col w-full md:min-w-0 md:flex-1">
              <label htmlFor="Arrival Date" className="text-white mb-1">
                {" "}
                Arrival :
              </label>
              <input
                type="date"
                className="w-full bg-white rounded px-3 py-2.5 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-12"
                placeholder="Departure Date"
              />
            </div>

            <div className="flex flex-col w-full md:min-w-0 md:flex-1">
              <label htmlFor="Departure Date" className="text-white mb-1">
                {" "}
                Departure :
              </label>

              <input
                type="date"
                className="w-full bg-white rounded px-3 py-2.5 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-12"
                placeholder="Arrival Date"
              />
            </div>

            {/* Guests Dropdown */}
            <div className="flex flex-col w-full md:min-w-0 md:flex-1">
              <label htmlFor="Departure Date" className="text-white mb-1">
                {" "}
                Guests :
              </label>
              <select className="w-full bg-white rounded px-3 py-2.5 text-sm border-0 focus:outline-none focus:ring-2 focus:ring-yellow-500 h-12">
                <option value="">Select Guests</option>
                <option value="1">1 Guest</option>
                <option value="2">2 Guests</option>
                <option value="3">3 Guests</option>
                <option value="4">4 Guests</option>
                <option value="5">5+ Guests</option>
              </select>
            </div>
          </div>

          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <div className="mt-6 relative bg-transparent hover:bg-yellow-600 border border-primary transition-all duration-200 rounded-full h-12 flex items-center cursor-pointer group">
                <span className="text-white font-semibold px-6 py-2.5 text-sm">
                  Check availability
                </span>
                <div className="bg-yellow-600 group-hover:bg-yellow-700 rounded-full w-12 h-12 flex items-center justify-center ml-2">
                  <ArrowRight className="w-5 h-5 text-black" />
                </div>
              </div>
            </DialogTrigger>
          </Dialog>
        </div>
      </Card>
    </>
  );
};

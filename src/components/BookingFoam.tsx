import React from "react";
import formbg from "../assets/BG/foambg.svg";

function BookingFoam() {
  return (
    <>
      <div className="bg-[#FFFAF1]  w-full  rounded-lg h-full pb-5">
        {/* heading */}
        <div className="bg-primary h-12 p-4 text-white  rounded-tl-3xl rounded-tr-3xl">
          <h1 className="poppins-bold">Guest Details</h1>
        </div>
        <div className="pt-10 p-3 ">
          <form className="">
            {/* NAME AND CONTACT NUMBER */}
            <div className="flex flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name=""
                id=""
                placeholder="Full Name"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Contact Number"
              />
            </div>
            {/*  Address Email*/}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name=""
                id=""
                placeholder="Address:"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Email:"
              />
            </div>
            {/* CNIC Arrival Time */}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name=""
                id=""
                placeholder="CNIC:"
              />
              <input
                className="pl-5 py-2 rounded-md lg:w-1/2 border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                placeholder="Arrival Time: 12:00AM"
              />
            </div>
            {/* Promo code */}
            <div className="flex  flex-col lg:flex-row gap-4 mb-5">
              <input
                className="pl-5 py-2 rounded-md  border border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
                type="text"
                name=""
                id=""
                placeholder="Promo Code:"
              />
            </div>
            {/* special request  */}
            <div className="w-full">
              <textarea
                name="message"
                id="message"
                rows={4}
                cols={50}
                placeholder="Special message...."
                className="border p-2 w-full rounded-md border-gray-300 
             focus:outline-none focus:ring-2 focus:ring-blue-400"
              ></textarea>
            </div>
            {/* payment method */}
            <p className="poppins-reguler text-gray-400">Payment Method</p>
            <div className="pt-3 gap-5 flex  flex-col lg:flex-row poppins-reguler text-neutral-700">
              <div className="flex  items-center space-x-2">
                <input
                  type="radio"
                  id="cash"
                  name="payment"
                  className="accent-blue-600"
                />
                <label htmlFor="cash">Cash</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="card"
                  name="payment"
                  className="accent-blue-600"
                />
                <label htmlFor="card">Card</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="online"
                  name="payment"
                  className="accent-blue-600"
                />
                <label htmlFor="online">Online</label>
              </div>
              <div className="flex items-center space-x-2">
                <input
                  type="radio"
                  id="hotel"
                  name="payment"
                  className="accent-blue-600"
                />
                <label htmlFor="hotel">Pay At Hotel</label>
              </div>
            </div>
            {/* terms and condition */}
            <div className="flex  items-center space-x-2 mt-10">
              <input
                type="radio"
                id="terms"
                name="payment"
                className="accent-blue-600"
              />
              <label htmlFor="terms">
                I agree with <span className="underline">terms conditions</span>{" "}
                and <span className="underline">privacy policy</span>
              </label>
            </div>
          </form>
        </div>
      </div>
    </>
  );
}

export default BookingFoam;

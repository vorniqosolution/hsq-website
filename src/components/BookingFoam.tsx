import React from "react";
import formbg from "../assets/BG/foambg.svg";

function BookingFoam() {
  return (
    <>
      <div
        className="w-1/3 h-screen bg-cover bg-center mt-20"
        style={{ backgroundImage: `url(${formbg})` }}
      >
        <div className="bg-black p-4 ">
          <h1 className="text-primary text-2xl pl-20 font-semibold">
            GUEST DETAILS
          </h1>
        </div>
        <form className="w-full max-w-2xl p-6 space-y-4 ">
          {/* Full Name */}
          <div>
            <label
              className="block text-sm font-medium text-gray-800 mb-1"
              htmlFor="name"
            >
              Full Name
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="name"
              name="name"
              placeholder="Enter your full name"
            />
          </div>

          {/* Address */}
          <div>
            <label
              className="block text-sm font-medium text-gray-800 mb-1"
              htmlFor="address"
            >
              Address
            </label>
            <input
              className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              type="text"
              id="address"
              name="address"
              placeholder="Enter your address"
            />
          </div>

          {/* Phone & Email */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-800 mb-1"
                htmlFor="phone"
              >
                Phone
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="tel"
                id="phone"
                name="phone"
                placeholder="03XXXXXXXXX"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium text-gray-800 mb-1"
                htmlFor="email"
              >
                Email
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="email"
                id="email"
                name="email"
                placeholder="example@email.com"
              />
            </div>
          </div>

          {/* CNIC & Arrival Time */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
            <div>
              <label
                className="block text-sm font-medium text-gray-800 mb-1"
                htmlFor="cnic"
              >
                CNIC
              </label>
              <input
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
                type="text"
                id="cnic"
                name="cnic"
                placeholder="XXXXX-XXXXXXX-X"
              />
            </div>
            <div>
              <label
                className="block text-sm font-medium  text-gray-800 mb-1"
                htmlFor="arrival"
              >
                Expected Arrival Time
              </label>
              <select
                id="arrival"
                name="arrival"
                className="w-full px-3 py-2 rounded-lg border border-gray-300 focus:outline-none focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
              >
                <option value="">Select time</option>
                <option value="morning">Morning (8AM - 12PM)</option>
                <option value="afternoon">Afternoon (12PM - 4PM)</option>
                <option value="evening">Evening (4PM - 8PM)</option>
                <option value="night">Night (8PM - 12AM)</option>
              </select>
            </div>
          </div>

          {/* Submit Button
          <div className="pt-4">
            <button
              type="submit"
              className="w-full bg-blue-600 hover:bg-blue-700 text-white font-medium py-2 px-4 rounded-lg shadow-md transition"
            >
              Submit
            </button>
          </div> */}
        </form>
      </div>
    </>
    // <div>BookingFoam</div>
  );
}

export default BookingFoam;

import React from "react";
import Contactus from "@/assets/ContactUs/Contactus.png";
function Contact() {
  return (
    <>
      <div
        className="relative w-full h-[80vh] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${Contactus})` }}
      >
        <div className="flex flex-col justify-center items-center text-white space-y-4">
          <h1 className="Tuesdaynight text-5xl">Info</h1>
          <h1 className="poppins-bold text-7xl">CONTACT US</h1>
          <p>We value your comfort and privacy. Review our Terms.</p>
        </div>
      </div>
      {/* <div className="pt-20 backgroundcolor pb-20"> */}
      <div className="relative w-1/2 flex justify-center items-center py-20 bg-[#FFF8EE]">
        {/* Decorative shapes */}
        <div className="absolute z-50 top-0 right-0 w-1/3 h-40 bg-gradient-to-l from-[#d7ab4e] to-transparent rounded-bl-[100px]" />
        <div className="absolute z-50 bottom-0 left-0 w-1/3 h-40 bg-gradient-to-r from-[#d7ab4e] to-transparent rounded-tr-[100px]" />

        {/* Contact Card */}
        <div className="relative bg-white shadow-xl rounded-3xl p-10 w-[90%] md:w-3/4 lg:w-2/3 z-10">
          <h2 className="text-3xl md:text-4xl font-bold mb-8">
            Send Your <br />
            <span className="text-black">Message To Us</span>
          </h2>

          <form className="space-y-6">
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="First Name:"
                className="bg-[#F7F7F7] p-3 rounded-xl outline-none"
              />
              <input
                type="text"
                placeholder="Last Name:"
                className="bg-[#F7F7F7] p-3 rounded-xl outline-none"
              />
            </div>
            <div className="grid md:grid-cols-2 gap-6">
              <input
                type="text"
                placeholder="Contact Number:"
                className="bg-[#F7F7F7] p-3 rounded-xl outline-none"
              />
              <input
                type="email"
                placeholder="Email Address:"
                className="bg-[#F7F7F7] p-3 rounded-xl outline-none"
              />
            </div>

            <textarea
              rows={5}
              placeholder="Message......"
              className="bg-[#F7F7F7] p-3 w-full rounded-xl outline-none"
            ></textarea>

            <div className="flex justify-end">
              <button className="bg-[#d7ab4e] hover:bg-[#c19b3c] transition px-8 py-2 rounded-full text-black font-semibold flex items-center gap-2">
                Send
                <span className="text-lg">➤</span>
              </button>
            </div>
          </form>
        </div>
      </div>
      {/* </div> */}
    </>
  );
}

export default Contact;

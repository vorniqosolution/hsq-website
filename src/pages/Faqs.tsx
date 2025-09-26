// import React from "react";
// import faqimage from "../assets/BG/faqimage.png";
import decorbg from "../assets/Decor/decorBg.png";
import { MdQuestionMark } from "react-icons/md";
import fower_01 from "../assets/BG/fower_01.svg";
import FaqsCard from "@/components/cards/FaqsCard";
import { Footer } from "../components/layout/Footer";
function Faqs() {
  return (
    <>
      <div>
        {/* front section  */}
        <div
          className="w-full h-screen bg-cover bg-center  relative flex justify-center items-center"
          style={{ backgroundImage: `url(${decorbg})` }}
        >
          <MdQuestionMark size={400} color="#d7ab4e" className="opacity-55" />
          <h1 className="text-primary absolute text-2xl md:text-3xl font-bold lg:text-5xl">
            Frequently Asked Questions
          </h1>
          <p className="absolute pt-44  text-sm md:text-lg sm:text-xl text-white">
            We&rsquo;ve Got All the Answers You&rsquo;re Looking For
          </p>
        </div>
        {/* Questions section*/}
        <div className="bg-primary/50 min-h-screen relative ">
          <img
            className="absolute top-0 w-52 sm:w-72 left-0 bottom-0"
            src={fower_01}
            alt="flower"
          />
          <img
            className=" absolute  right-1 bottom-0 w-72  rotate-180"
            src={fower_01}
            alt="flower"
          />
          <div className="pl-24 pt-14  sm:pt-20  sm:pl-24  flex flex-col sm:flex-row space-y-4 justify-center sm:justify-between items-baseline mr-20">
            <p className="text-sm  sm:text-2xl font-semibold lg:font-extrabold">
              Your Queries, Answered
            </p>
            <button className="text-black font-semibold sm:font-bold bg-primary px-2 py-1 sm:px-3 sm:py-2 rounded-full">
              ASk A Question
            </button>
          </div>
          {/* faqs cards */}
          <div className="pl-1 z-50 md:pl-1 pb-5 lg:pl-20">
            <FaqsCard
              lable="How do I book a room?"
              description="Book online, call us, or WhatsApp for instant confirmation."
            />
            <FaqsCard
              lable="Do you offer group/event packages?"
              description="Yes, customized wedding, birthday & corporate packages are available."
            />
            <FaqsCard
              lable="Can I request early check-in or late check-out?"
              description="Yes, based on availability (extra charges may apply)."
            />
            <FaqsCard
              lable="What do I need for check-in?"
              description="CNIC or passport for all guests."
            />
            <FaqsCard
              lable="Is breakfast included?"
              description="Yes, complimentary gourmet breakfast for all guests."
            />
            <FaqsCard
              lable="Do you have Wi-Fi?"
              description="Yes, free high-speed Wi-Fi throughout the hotel."
            />
            <FaqsCard
              lable="Can I request extra beds or cribs?"
              description="Yes, available on request,but only 1 if you need more (charges will be applied)"
            />
            <FaqsCard
              lable="Can you arrange candlelight dinners?"
              description="Yes, romantic and private dining setups are available."
            />
            <FaqsCard
              lable="Do you have free parking?"
              description="Yes, secure complimentary parking is available."
            />
            <FaqsCard
              lable="Is breakfast included?"
              description="Yes, complimentary gourmet breakfast for all guests."
            />
          </div>
        </div>
        <Footer />
      </div>
    </>
  );
}

export default Faqs;

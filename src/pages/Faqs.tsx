import roomimage from "@/assets/BG/roomimage.png";
import React, { useState } from "react";
import { ChevronDown, ChevronRight } from "lucide-react";

function Faqs() {
  const [openIndex, setOpenIndex] = useState(null);

  const toggleAccordion = (index) => {
    // ✅ only one open at a time
    setOpenIndex(openIndex === index ? null : index);
  };

  const faqs = [
    {
      question: "HOW DO I BOOK A ROOM?",
      answer: "Book Online, Call Us, Or Whatsapp For Instant Confirmation.",
    },
    {
      question: "WHAT’S YOUR CANCELLATION POLICY?",
      answer:
        "Free Cancellation Up To 48 Hours Before Check-In (On Standard Bookings).",
    },
    {
      question: "DO YOU OFFER GROUP/EVENT PACKAGES?",
      answer:
        "Yes, Customized Wedding, Birthday & Corporate Packages Are Available.",
    },
    {
      question: "CAN I REQUEST EARLY CHECK-IN OR LATE CHECK-OUT?",
      answer: "Yes, Based On Availability (Extra Charges May Apply).",
    },
    {
      question: "WHAT DO I NEED FOR CHECK-IN?",
      answer: "CNIC Or Passport For All Guests.",
    },
    {
      question: "WHAT ROOM TYPES DO YOU OFFER?",
      answer: "Standard, Executive, And Family Suites.",
    },
    {
      question: "IS BREAKFAST INCLUDED?",
      answer: "Yes, Complimentary Gourmet Breakfast For All Guests.",
    },
    {
      question: "DO YOU HAVE WI-FI?",
      answer: "Yes, Free High-Speed Wi-Fi Throughout The Hotel.",
    },
    {
      question: "CAN I REQUEST EXTRA BEDS OR CRIBS?",
      answer:
        "Yes, Available On Request, But Only 1 If You Need More (Charges Will Be Applied)",
    },
    {
      question: "CAN YOU ARRANGE CANDLELIGHT DINNERS?",
      answer: "Yes, Romantic And Private Dining Setups Are Available.",
    },
    {
      question: "DO YOU HAVE FREE PARKING?",
      answer: "Yes, Secure Complimentary Parking Is Available.",
    },
    {
      question: "WHAT PAYMENT METHODS DO YOU ACCEPT?",
      answer: "Cash, Bank Transfer, Debit/Credit Cards.",
    },
    {
      question: "DO YOU HAVE FAMILY ROOMS?",
      answer: "Yes, Spacious Family-Friendly Rooms.",
    },
    {
      question: "WHAT MAKES HSQ TOWERS THE CHOICE ABOVE PC AND SHANGRILA?",
      answer:
        "HSQ Towers Is Not Just Another Hotel In Murree — It Is A New Definition Of Luxury Living.",
    },
  ];

  return (
    <>
      {/* Hero Section */}
      <section
        className="w-full bg-cover bg-bottom h-[50vh] lg:h-[90vh] relative"
        style={{ backgroundImage: `url(${roomimage})` }}
      >
        {/* when use final image remove this div */}
        <div className="absolute inset-0 bg-black/50" />
        <div className="relative flex flex-col text-white justify-center items-center space-y-3 pt-24 sm:pt-32">
          <h1 className="Tuesdaynight text-[25px] sm:text-[50px] text-center">
            FAQS
          </h1>
          <h1 className="poppins-bold text-2xl md:text-5xl lg:text-6xl text-center">
            FREQUENTLY ASKED QUESTIONS
          </h1>
          <p className="text-center w-96 sm:w-1/2">
            We’ve Got All the Answers You’re Looking For
          </p>
        </div>
      </section>
      {/* FAQ Section */}
      <section className="backgroundcolor py-10 px-6">
        <div className="max-w-5xl mx-auto">
          {/* Header */}
          <div className="flex flex-col md:flex-row  items-center justify-center lg:justify-between gap-6 mb-10">
            <h2 className="text-2xl poppins-extrabold lg:text-4xl">
              Your Queries Answered
            </h2>
            <div className="relative ">
              <button className=" text-black poppins-semibold px-8 py-2  bg-gradient-to-r from-[#D7AA4D] to-[#D49237] transition rounded-full">
                Ask a Question
              </button>
              <div className="absolute right-1  rounded-full bg-black px-[2px] py-[2px] top-2">
                <ChevronRight size={20} color="white" />
              </div>
            </div>
          </div>

          {/* Accordion */}
          <div className="grid md:grid-cols-2 gap-6">
            {faqs.map((faq, index) => (
              <div
                key={index}
                className="bg-white rounded-xl shadow-sm border-l-4 border-black px-4 py-3 cursor-pointer"
                onClick={() => toggleAccordion(index)}
              >
                <div className="flex justify-between items-center">
                  <p className="font-semibold text-sm text-gray-900">
                    {faq.question}
                  </p>
                  <ChevronDown
                    className={`w-5 h-5 text-black transform transition-transform duration-300 ${
                      openIndex === index ? "rotate-180" : ""
                    }`}
                  />
                </div>

                {/* ✅ Show only the clicked one */}
                {openIndex === index && (
                  <p className="mt-2 text-gray-600 text-sm">{faq.answer}</p>
                )}
              </div>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}

export default Faqs;

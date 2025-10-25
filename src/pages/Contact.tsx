import Contactus from "@/assets/ContactUs/Contactus.png";
import contactpage from "@/assets/ContactUs/contactpage.png";
import { Phone, Mail, MapPin } from "lucide-react";
import ContactFoam from "@/components/ContactFoam";
import ContactCard from "@/components/cards/ContactCard";
import Footer from "@/components/layout/Footer";

function Contact() {
  return (
    <>
      {/* main section */}
      <section
        className="relative w-full h-[50vh]  lg:h-[80vh] bg-cover bg-bottom flex justify-center items-center"
        style={{ backgroundImage: `url(${Contactus})` }}
      >
        <div className="flex flex-col justify-center items-center text-white space-y-4">
          <h1 className="Tuesdaynight text-3xl lg:text-5xl">Info</h1>
          <h1 className="poppins-bold text-4xl lg:text-7xl">CONTACT US</h1>
          <p className="text-center">
            We value your comfort and privacy. Review our Terms.
          </p>
        </div>
      </section>
      {/* body section */}
      <section className="backgroundcolor pb-20">
        {/* contact form */}
        <div className="absolute -bottom-[14rem] left-7  md:left-20 md:bottom-[4rem] lg:-bottom-[17rem] lg:left-1/4 ">
          <ContactFoam />
        </div>
        {/* We’d Love to Hear From You */}
        <div className="px-10 sm:px-20 ">
          <div className="max-w-7xl pt-[40rem] md:pt-[70%] lg:pt-[45%]  mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
            {/* LEFT CONTENT */}
            <div className="space-y-4 text-center sm:text-left">
              <h2 className=" text-3xl md:text-4xl poppins-bold leading-tight">
                We’d Love To <br /> Hear From You
              </h2>
              <p className="text-sm poppins-medium">
                We value your comfort and privacy. <br />
                Review our Terms.
              </p>
            </div>

            {/* RIGHT IMAGE CARD */}
            <div className="relative w-full">
              {/* Circle Icon */}
              <div className="absolute -top-8 -left-5 bg-[#D6A53F] p-3 rounded-full shadow-lg">
                {/* <Phone className="text-black w-5 h-5" /> */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  // width={24}
                  // height={24}
                  className="w-8 h-8  -rotate-[40deg] lg:w-12 lg:h-12"
                  viewBox="0 0 24 24"
                >
                  <g fill="none" stroke="currentColor" strokeWidth={1.8}>
                    <path d="M11.786 20.891L3.305 12.41a4.798 4.798 0 0 1 6.785-6.785l1.696 1.696l1.696-1.696a4.798 4.798 0 0 1 8.168 3.862"></path>
                    <path d="m15.875 12.597l.922.922l.921-.922a2.606 2.606 0 1 1 3.686 3.686l-4.607 4.608l-4.608-4.608a2.606 2.606 0 1 1 3.686-3.686Z"></path>
                  </g>
                </svg>
              </div>

              <img
                src={contactpage}
                alt="roompic"
                className="w-[90%]  h-[200px] bg-bottom lg:h-[250px] object-cover shadow-md"
              />
            </div>
          </div>
          {/* CONTACT INFO CARDS */}
          <div className="grid grid-cols-1  md:grid-cols-3  space-y-10 sm:space-y-0 gap-6 mt-24 max-w-6xl mx-auto ">
            {/* CALL */}
            <ContactCard
              heading="Make a Call"
              description="+92 3300491479"
              icon={Phone}
            />
            {/* EMAIL */}
            <ContactCard
              heading="Send a Mail"
              description="hsqtowers@gmail.com"
              icon={Mail}
            />
            {/* LOCATION */}
            <ContactCard
              icon={MapPin}
              heading="Location"
              description="Hsq towers,Jhika Gali, Murree, Rawalpindi, Punjab"
            />
          </div>
        </div>
      </section>
      <Footer />
    </>
  );
}

export default Contact;

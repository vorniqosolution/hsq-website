// import { SEO } from "@/components/SEO";
// import { Section } from "@/components/layout/Section";
// import { SectionHeader } from "@/components/layout/SectionHeader";
// import { Card, CardContent } from "@/components/ui/card";

// const About = () => {
//   return (
//     <>
//       <SEO
//         title="About HSQ Hotels - Luxury Mountain Resort in Murree"
//         description="Learn about HSQ Hotels' commitment to luxury hospitality, our story, and our dedication to providing exceptional experiences in Murree."
//       />

//       <div className="pt-20">
//         <Section background="muted" padding="xl">
//           <SectionHeader
//             eyebrow="Our Story"
//             title="About HSQ Hotels"
//             subtitle="Discover the story behind Murree's premier luxury destination and our commitment to exceptional hospitality."
//           />
//         </Section>

//         <Section>
//           <div className="max-w-4xl mx-auto prose prose-lg">
//             <p className="text-lg text-muted-foreground mb-8">
//               HSQ Hotels represents the pinnacle of luxury hospitality in Pakistan's most beloved hill station.
//               Since our establishment, we have been dedicated to creating unforgettable experiences that blend
//               modern luxury with the natural beauty of the Murree mountains.
//             </p>

//             <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
//             <p className="text-muted-foreground mb-8">
//               To be the premier luxury destination in Murree, where guests experience unparalleled comfort,
//               exceptional service, and the breathtaking beauty of the Pakistan mountains in perfect harmony.
//             </p>

//             <h3 className="text-2xl font-heading font-bold mb-4">Our Commitment</h3>
//             <p className="text-muted-foreground mb-8">
//               We are committed to sustainability, community engagement, and preserving the natural beauty
//               of Murree while providing world-class hospitality that exceeds our guests' expectations.
//             </p>
//           </div>

//           <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Excellence</h4>
//                 <p className="text-muted-foreground">
//                   We strive for excellence in every aspect of our service, from luxury accommodations to personalized experiences.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Sustainability</h4>
//                 <p className="text-muted-foreground">
//                   Our commitment to environmental responsibility ensures future generations can enjoy Murree's natural beauty.
//                 </p>
//               </CardContent>
//             </Card>
//             <Card>
//               <CardContent className="p-6 text-center">
//                 <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Community</h4>
//                 <p className="text-muted-foreground">
//                   We actively support the local community and contribute to the economic development of the Murree region.
//                 </p>
//               </CardContent>
//             </Card>
//           </div>
//         </Section>
//       </div>
//     </>
//   );
// };

// export default About;

import React from "react";
import aboutbg from "@/assets/about/aboutbg.svg";
import logo from "@/assets/logo.svg";
import hotelimage from "@/assets/about/hotelimage.svg";
import Viewbutton from "@/components/buttons/Viewbutton";
import cardbg from "@/assets/about/cardbg.svg";
import { Users, UserCheck } from "lucide-react";
// import { FaUsers } from "react-icons/fa";
import { PiUsersFourFill, PiUsersThreeFill } from "react-icons/pi";
// import { TbUsersGroup } from "react-icons/tb";
import { TiTick } from "react-icons/ti";
import { IoBedSharp } from "react-icons/io5";
import AboutCard from "@/components/cards/AboutCard";
// import {  } from "react-icons/pi";
// Viewbuttonton
function About() {
  return (
    <>
      <div className="">
        {/* hero section */}
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${aboutbg})` }} // replace with your image
        >
          {/* Overlay for dark effect */}
          {/* <div className="absolute inset-0 bg-black/50"></div> */}

          {/* Content */}
          <div className="relative z-10 flex flex-col justify-center items-center text-center h-full pt-6 ">
            <h1 className="text-3xl md:text-5xl poppins-bold text-white mb-6 sm:mb-2">
              ABOUT HSQ TOWER
            </h1>
            <p className="text-white text-sm poppins-medium  w-fit lg:w-[550px] leading-relaxed mb-6">
              At HSQ Tower, we believe that true luxury lies in the perfect
              blend of comfort, elegance, and thoughtful service. Our hotel is
              designed for travelers who seek more than just a place to stay —
              they seek an experience.
            </p>
            <div className="flex justify-betweenflex-row items-center gap-3 sm:gap-4">
              <div className="border-t-0 border  w-20 md:w-48 lg:w-96 border-white" />
              <Viewbutton label="Book Now"></Viewbutton>
              <div className="border-t-0 border w-20 md:w-48 lg:w-96 border-white" />
            </div>

            {/* <button className="bg-white text-black font-semibold px-6 py-3 rounded-full flex items-center gap-2 hover:bg-gray-200 transition">
              Book Now
              <span className="bg-black text-white p-1 rounded-full">➝</span>
            </button> */}
          </div>
        </section>
        {/* hostel card section */}
        <section className="backgroundcolor h-[85vh] lg:h-64">
          <section className="w-full flex flex-col  pt-10 lg:pt-0  justify-center lg:-bottom-10  items-center  lg:mt-0 absolute ">
            <div className="bg-[#FFF3DB] rounded-[30px] shadow-[0px_20px_0px_rgb(215,171,78),0_35px_60px_-15px_rgba(0,0,0,0.3)]  flex flex-col lg:flex-row items-center justify-center space-y-7 md:space-y-2 lg:space-y-0  pt-10 pb-7 lg:pt-0 w-[90%] md:w-[60%] lg:w-full  max-w-5xl h-full lg:h-48 ">
              {/* Left Content */}
              <div className="flex-flex flex-col  lg:ml-16 poppins-extrabold items-center lg:items-start text-5xl  lg:text-4xl text-center md:text-left">
                <h2 className=" mb-4">
                  Welcome To <br />
                  <span className="text-primary">HSQ Tower</span>
                </h2>
              </div>

              {/* Middle Image */}
              <div className="flex-1 flex justify-center mb-4 md:mb-0">
                <img
                  src={hotelimage} // replace with your image
                  alt="HSQ Tower"
                  className="w-52 md:w-60 lg:w-52 lg:pt-32  lg:ml-32 "
                />
              </div>

              {/* Right Content */}
              <div className="w flex justify-center ">
                <p className="text-black  poppins-medium leading-relaxed md:pt-10 lg:pt-0 text-center text-sm lg:text-left w-[80%] md:w-full  max-w-sm">
                  At HSQ Tower, elegance meets convenience — the perfect stay
                  for guests who seek charm, comfort, and the ideal location to
                  explore Murree.
                </p>
              </div>
            </div>
          </section>
        </section>
        {/* Exceeding Expectations */}
        <section className="backgroundcolor pt-4  flex justify-center flex-col items-center">
          <p className="poppins-medium text-[#D49237]">Pure Hospitality</p>
          <h1 className="poppins-bold text-2xl lg:text-3xl">
            Exceeding Expectations!
          </h1>
          {/* card div */}
          <div
            className="h-[80vh] mt-10 rounded-2xl  p-4 flex  flex-col lg:flex-row justify-center lg:justify-start mb-10 w-[90%] lg:w-[80%] bg-fixed bg-cover lg:p-20 bg-bottom"
            style={{ backgroundImage: `url(${cardbg})` }}
          >
            {/* left */}
            <div className="flex flex-row  lg:flex-col gap-9">
              <AboutCard
                total="5+"
                title="Conference"
                icon={<PiUsersFourFill />}
              />
              <AboutCard
                total="50+"
                title="Luxury rooms"
                icon={<IoBedSharp />}
              />
            </div>
            {/* center */}
            <div className="flex justify-center p-10 lg:p-24 items-center">
              <div className=" w-32 h-32 p-2 lg:p-4 lg:w-44 lg:h-44  bg-opacity-30  backdrop-blur-md border-gray-400 shadow-lg  border rounded-full">
                <div className="w-28 h-28 lg:w-36 lg:h-36 border flex justify-center items-center border-gray-400 rounded-full ">
                  <img className="w-28 h-28" src={logo} alt="" />
                </div>
              </div>
            </div>
            {/* right */}
            <div className="flex flex-row lg:flex-col gap-9">
              <AboutCard
                total="3000+"
                title="Customers"
                icon={<PiUsersThreeFill />}
              />
              <AboutCard total="96%" title="Hospitality" icon={<TiTick />} />
              {/* <div
                className="
          w-64 h-36
          rounded-2xl 
          p-4 
          bg-opacity-30 
          // bg-brown-800 
          backdrop-blur-md
          border
          border-gray-400 
          shadow-lg 
          flex 
          flex-col 
          justify-between 
          relative
        "
              >
                <div
                  className="
            absolute 
            top-[-35px] 
            left-[20px] 
            w-20 h-20 
            rounded-full 
            bg-primary 
            shadow-xl 
            flex 
            justify-center 
            items-center
          "
                >
                  <TiTick color="black" className="text-3xl" />
                </div>
                <div className="flex flex-col justify-end h-full mt-4">
                  <p className="text-white text-4xl lg:text-5xl poppins-bold mb-2 self-end">
                    96%
                  </p>
                  <p className="text-white text-xl poppins-medium self-end ">
                    Guest Care
                  </p>
                </div>
              </div> */}
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default About;

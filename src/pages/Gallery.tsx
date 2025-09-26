// import { SEO } from "@/components/SEO";
// import { Section } from "@/components/layout/Section";
// import { SectionHeader } from "@/components/layout/SectionHeader";
// import { useGalleryData } from "@/hooks/useData";
// import heroImage from "@/assets/hero-hotel.jpg";

// const Gallery = () => {
//   const { data: gallery } = useGalleryData();

//   return (
//     <>
//       <SEO
//         title="Photo Gallery - HSQ Hotels Murree"
//         description="Explore our beautiful hotel through our photo gallery showcasing luxury rooms, dining venues, spa facilities, and mountain views."
//       />

//       <div className="pt-20">
//         <Section background="muted" padding="xl">
//           <SectionHeader
//             eyebrow="Visual Journey"
//             title="Photo Gallery"
//             subtitle="Discover the beauty and elegance of HSQ Hotels through our curated collection of images."
//           />
//         </Section>

//         <Section>
//           <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
//             {Array.from({ length: 12 }, (_, i) => (
//               <div key={i} className="relative group overflow-hidden rounded-lg">
//                 <img
//                   src={heroImage}
//                   alt={`Gallery image ${i + 1}`}
//                   className="w-full h-64 object-cover group-hover:scale-105 hsq-transition"
//                 />
//                 <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 hsq-transition flex items-center justify-center">
//                   <span className="text-white font-medium">View Full Size</span>
//                 </div>
//               </div>
//             ))}
//           </div>
//         </Section>
//       </div>
//     </>
//   );
// };
// export default Gallery;

import React from "react";
import gallerybg from "@/assets/indexpage/gallerybg.svg";
import Viewbutton from "@/components/buttons/Viewbutton";
function Gallery() {
  return (
    <>
      <div>
        <section
          className="relative w-full bg-center lg:bg-top h-[60vh]  lg:h-[80vh] bg-cover"
          style={{ backgroundImage: `url(${gallerybg})` }}
        >
          {/* Overlays */}
          <div className="absolute inset-0 bg-[#FFDC92]/20" />
          <div className="absolute inset-0 bg-black/50" />
          <div className="absolute pt-20 lg:pt-28 flex-col flex justify-center text-center text-white">
            <h1 className="Tuesdaynight text-[40px] lg:text-[50px] text-center">
              Look at The
            </h1>
            <h1 className="poppins-bold  text-5xl lg:text-7xl">
              PHOTO GALLERY
            </h1>
            <p className=" w-[90%] lg:w-[70%]  m-auto">
              At HSQ Tower, we believe that true luxury lies in the perfect
              blend of comfort, elegance, and thoughtful service. Our hotel is
              designed for travelers who seek more than just a place to stay —
              they seek an experience.
            </p>
            <div className="flex justify-center mt-4 text-sm">
              <Viewbutton label="Book Now" />
            </div>
          </div>
        </section>
      </div>
    </>
  );
}

export default Gallery;

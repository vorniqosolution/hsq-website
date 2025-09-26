// hooks
import { useState } from "react";
// Components
import BookingWidget from "@/components/BookingWidget";
import Hero from "@/components/Hero";
import CommanButton from "@/components/buttons/Button";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import RoomCard from "@/components/cards/RoomCard";
import Viewbutton from "@/components/buttons/Viewbutton";
// svg
import Parking from "@/components/svg/Parking";
import Conference from "@/components/svg/Conference";
import Wifi from "@/components/svg/Wifi";
import Laundry from "@/components/svg/Laundry";
import Breakfast from "@/components/svg/Breakfast";
import Gym from "@/components/svg/Gym";
import Footer from "@/components/layout/Footer";
import "swiper/css";
import "swiper/css/navigation";
// icons
import {
  BedDouble,
  // DumbbellIcon,
  Mountain,
  Wine,
  // WashingMachine,
  // CircleParking,
  // Wifi,
  // Users,
  // Coffee,
  // ChevronRight,
  ArrowRight,
  Plus,
  Minus,
} from "lucide-react";
import { IoIosFitness } from "react-icons/io";
import { IoMdFitness } from "react-icons/io";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

// images
import v1 from "@/assets/indexpage/v1.png";
import v2 from "@/assets/indexpage/v2.png";
import v3 from "@/assets/indexpage/v3.png";
import v4 from "@/assets/indexpage/v4.png";
import photoA from "@/assets/indexpage/about-bg.svg";
import reviewbg from "@/assets/indexpage/reviewbg.svg";
import dummmyreview from "@/assets/indexpage/dummyreview.svg";
import amenitiebg from "@/assets/indexpage/amenitiebg.svg";
import logo from "@/assets/logo.png";
import roomimage from "@/assets/Book/roomimage.svg";
import galleryimage from "@/assets/indexpage/gallerybg.svg";
import restaurent from "@/assets/indexpage/restaurent.png";

type FeatureItem = { icon: React.ElementType; label: string };
const FEATURES: FeatureItem[] = [
  { icon: BedDouble, label: "LUXURY ROOMS" },
  { icon: Mountain, label: "SCENIC VIEWS" },
  { icon: Wine, label: "FINE DINING" },
];

type AminitiesItem = { icon: React.ElementType; lable: string };
const Aminities: AminitiesItem[] = [
  {
    // icon: IoIosFitness,
    icon: Gym,
    lable: "Fitness Center",
  },
  {
    // icon: Wifi,
    icon: Wifi,
    lable: "Free Wifi",
  },
  {
    // icon: WashingMachine,
    icon: Laundry,
    lable: "Laundry Service",
  },
  {
    // icon: Users,
    icon: Conference,
    lable: "Conference Hall",
  },
  {
    // icon: Coffee,
    icon: Breakfast,
    lable: "Free Breakfast",
  },
  {
    // icon: CircleParking,
    icon: Parking,
    lable: "Free Parking",
  },
];
const kitchens = [
  {
    title: "Italian Kitchen",
    // name: "Authentic Italian Cuisine",
    description:
      "Experience traditional Italian flavors with handmade pasta, wood-fired pizzas, and rich sauces prepared with fresh herbs.",
  },
  {
    title: "Pakistani Kitchen",
    // name: "Taste of Pakistan",
    description:
      "Indulge in aromatic biryanis, flavorful curries, and tandoori specialties, bringing you the essence of Pakistan.",
  },
  {
    title: "Mexican Kitchen",
    // name: "Spicy Mexican Delights",
    description:
      "Enjoy tacos, burritos, and sizzling fajitas served with fresh guacamole, salsa, and the bold taste of Mexican spices.",
  },
  {
    title: "Asian Kitchen",
    // name: "Fusion of Asia",
    description:
      "From Chinese stir-fries to Japanese sushi and Thai curries, our Asian kitchen offers a diverse and flavorful experience.",
  },
];
const Index = () => {
  const slides = [
    {
      image: v1,
      title: "HSQ TOWER",
      subtitle: "Welcome To",
      description:
        "At HSQ Tower, we redefine modern hospitality—blending style, innovation, and authentic warmth. ",
      buttonText: "More Info",
    },
    {
      image: v2,
      title: "RESTAURANT",
      subtitle: "Our",
      description:
        "Step Into our restaurant and indulge in a culinary journey where every dish is a masterpiece-crafter with passion",
      buttonText: "More Info",
    },
    {
      image: v3,
      title: "ROOMS & SUITES",
      subtitle: "Signature",
      description:
        "At HSQ Tower, Discover a selection of elegant living spaces-from cozy standard rooms to deluxe suites.",
      buttonText: "More Info",
    },
    {
      image: v4,
      title: "AMENITIES",
      subtitle: "Hotel",
      description:
        "At HSQ Tower, every moment is designed around you .From exciting tours and fascinating to world class exhibition and vibrant trade show.",
      buttonText: "More Info",
    },
    // { ... }
  ];
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  return (
    <>
      {/* Landing page */}
      <section className="relative">
        <Hero slides={slides} autoPlayInterval={5000} />
        <div className="absolute -bottom-60 lg:bottom-[-110px] w-full">
          <BookingWidget />
        </div>
      </section>
      {/* Welcome to Hsqtower section  */}
      <section className="backgroundcolor flex flex-col lg:flex-row justify-between ">
        {/* left  */}
        <div className="flex flex-col mt-[270px] w-[70%] lg:mt-48 lg:w-1/3 m-auto order-1 text-center space-y-2 lg:space-y-4 ">
          <h1 className="poppins-bold text-xl  lg:text-3xl ">
            Welcome To HSQ Tower
          </h1>
          <p className="poppins-medium text-sm">
            At HSQ Tower, elegance meets convenience — the perfect stay for
            guests who seek charm, comfort, and the ideal location to explore
            Murree.
          </p>
          {/* icons */}
          <div className="flex flex-row  gap-3">
            {FEATURES.map((data, index) => (
              <div
                key={index}
                className="bg-primary/30 my-8 h-20 w-full lg:w-40 lg:h-32 transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-110  poppins-semibold  rounded-3xl flex items-center justify-center flex-col"
              >
                <data.icon className="text-primary w-10 h-10 lg:w-16 lg:h-16" />

                <p className="text-[9px] sm:text-sm ">{data.label}</p>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <CommanButton label="Explore More" />
          </div>
        </div>
        {/* right */}
        <div className="mt-10 lg:mt-44 lg:mr-32 mb-16 order-2 flex justify-center lg:justify-end">
          <img
            src={photoA}
            alt="HSQ Tower Exterior View with green mountains"
            className="w-72 h-80 lg:w-80 lg:h-96 rounded-3xl object-cover"
            loading="lazy"
          />
        </div>
      </section>
      {/* Reviews section */}
      <section
        className="bg-cover relative bg-center w-full h-64"
        style={{ backgroundImage: `url(${reviewbg})` }}
      >
        <div className="absolute inset-0 bg-black/20 h-64 " />
        <div className="pt-10  flex flex-col relative text-center space-y-3">
          <h1 className="poppins-bold text-2xl  lg:text-3xl text-white">
            Guest Feedback You Can Trust
          </h1>
          <a
            href="https://www.google.com/maps/place/HSQ+Towers/@33.9153648,73.4139554,17z/data=!4m16!1m9!3m8!1s0x38dfd78972fd4569:0xdc3c75a9dc210b41!2sHSQ+Towers!8m2!3d33.9153604!4d73.4165303!9m1!1b1!16s%2Fg%2F11t057j5b2!3m5!1s0x38dfd78972fd4569:0xdc3c75a9dc210b41!8m2!3d33.9153604!4d73.4165303!16s%2Fg%2F11t057j5b2?entry=ttu&g_ep=EgoyMDI1MDkxNy4wIKXMDSoASAFQAw%3D%3D"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CommanButton label="Write A Review" className="underline" />
          </a>
        </div>
        {/* cards with crousel */}
        <div className="w-full mt-2 px-4">
          <Swiper
            modules={[Navigation, Autoplay]}
            spaceBetween={10}
            loop={true}
            autoplay={{ delay: 5000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1 }, // mobile → 1 card
              768: { slidesPerView: 2 }, // tablet → 2 cards
              1024: { slidesPerView: 3 }, // desktop → 3 cards
              1280: { slidesPerView: 4 }, // large desktop → 4 cards
            }}
            className="w-full"
          >
            {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
              <SwiperSlide key={index}>
                <div className="flex justify-center">
                  <img
                    src={dummmyreview}
                    alt={`Review ${index}`}
                    className="w-full rounded-2xl shadow-md"
                  />
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Aminities Section */}
      <section className="w-full  pt-32 backgroundcolor">
        <div
          className="bg-cover relative bg-center w-[90%] rounded-3xl m-auto h-full md:h-[70%] lg:h-[90%] lg:w-[85%]  "
          style={{ backgroundImage: `url(${amenitiebg})` }}
        >
          <div className="absolute  inset-0 bg-black/50  rounded-3xl" />
          {/* content */}
          <div className="flex flex-col lg:flex-row w-full space-y-3 md:space-y-5  relative pt-3 md:pt-10 lg:pt-20 pb-10 ">
            {/* heading */}
            <div className=" w-full flex flex-col order-1 lg:order-2 m-auto lg:w-1/2">
              <img
                className="w-fit h-32  m-auto lg:ml-44"
                src={logo}
                loading="lazy"
                alt=""
              />
              <h1 className="text-white text-center poppins-extrabold  sm:text-2xl">
                Hotel Guest Facilities <p>Where Every Detail Meets Luxury</p>
              </h1>
              <div className="flex justify-center mt-4">
                <CommanButton label="Learn More" />
              </div>
            </div>
            <div className="flex flex-row justify-center  order-1 lg:order-2 gap-3 w-full md:w-[60%] m-auto lg:w-[40%] flex-wrap">
              {Aminities.map((data, index) => (
                <div
                  key={index}
                  className=" w-28 h-28 rounded-2xl bg-white/5 border-[1px] transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-110  border-white/20 backdrop-blur-lg flex flex-col items-center justify-center  shadow-lg"
                >
                  {/* <data.icon size={40} className="text-primary" /> */}
                  <data.icon />

                  <p className="text-white text-[12px] font-medium">
                    {data.lable}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
      {/* Rooms and Suites */}
      <section className="backgroundcolor flex pt-10 justify-center flex-col items-center pb-10  ">
        <h1 className="poppins-bold text-2xl sm:text-3xl ">Rooms & Suites</h1>
        <p className="text-sm poppins-medium">
          Discover Our Collection of Elegant Rooms
        </p>
        <div className="flex flex-col sm:flex-row gap-4 mt-10">
          <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          />
          <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          />
          <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          />
          {/* <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          /> */}
        </div>
        <div className="mt-5">
          <CommanButton label="View All" />
        </div>
      </section>
      {/* Gallery */}
      <section
        className="relative w-full lg:h-96 bg-cover bg-center flex flex-col  items-center pt-10 pb-5  sm:pt-16 text-white"
        style={{ backgroundImage: `url(${galleryimage})` }}
      >
        {/* Overlays */}
        <div className="absolute inset-0 bg-[#FFDC92]/20" />
        <div className="absolute inset-0 bg-black/50" />

        {/* Content */}
        <div className="relative z-10 flex flex-col items-center space-y-3 text-center px-4">
          <h1 className="great-vibes-regular text-lg md:text-4xl">
            Look Of The
          </h1>
          <p className="poppins-bold text-xl md:text-3xl lg:text-5xl">
            Photo Gallery Of Our Hotel
          </p>
          <p className="text-sm">Welcome to our photo gallery</p>
          {/* Button */}
          <Viewbutton label="  View Gallery" />
        </div>
      </section>
      {/* Restaurent*/}
      <section className="w-full backgroundcolor py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className=" space-y-3 sm:space-y-6 px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl text-center md:text-4xl poppins-bold text-black">
              Our Restaurant
            </h2>
            <p className=" text-center lg:leading-relaxed poppins-regular max-w-md">
              Indulge in a gourmet buffet breakfast, thoughtfully served in our
              sophisticated lounge or on the serene patio for a touch of
              open-air luxury.
            </p>

            {/* Accordion List */}
            <div className="space-y-3">
              {kitchens.map((kitchen, index) => (
                <div key={index} className="bg-[#F7E3BB] rounded-md shadow-sm">
                  <button
                    onClick={() => toggleAccordion(index)}
                    className="w-full flex items-center justify-between px-4 py-2 transition"
                  >
                    <span className="text-black  poppins-regular">
                      {kitchen.title}
                    </span>
                    {activeIndex === index ? (
                      <Minus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm" />
                    ) : (
                      <Plus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm" />
                    )}
                  </button>

                  {/* Description */}
                  {activeIndex === index && (
                    <div className="px-4 pb-4  poppins-light text-sm text-black/70">
                      <div className="border-t opacity-15 border-black" />{" "}
                      <p className="pt-1">{kitchen.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex justify-center">
            <img
              src={restaurent}
              alt="Restaurant 1"
              className="object-cover w-fit h-96 sticky top-24"
            />
          </div>
        </div>
      </section>
      {/* Map section */}
      <section className="bg-black w-full  p-10 flex flex-col sm:flex-row justify-between text-white">
        {/* left */}
        <div className="p-5 oder-1 flex items-baseline flex-col space-y-7">
          <h1 className="poppins-extrabold text-2xl text-center lg:text-3xl">
            Near HSQ Towers
          </h1>
          {/* location1 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary h-4 w-4  rounded-full"></div>
            <p>3 mins Mall Road Murree</p>
          </div>
          {/* location2 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary h-4 w-4 rounded-full"></div>
            <p>5 mins Mcdonalds,lower topa</p>
          </div>
          {/* location3 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary h-4 w-4 rounded-full" />
            <p>6 mins Coffee bean and tea leaf</p>
          </div>
          {/* location4 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary h-4 w-5 sm:w-4 rounded-full" />
            <p> 10 mins Gloria Jeans, OPTP, Chaye Khana</p>
          </div>
          {/* google direction */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary h-4 w-5 sm:w-4 rounded-full" />
            <p> Get Directions on(Google Maps/Apple Maps)</p>
          </div>
          {/* Review */}
          <div>
            {/* review card */}
            <div className="w-64 h-fit  text-black my-4">
              <div className="bg-primary/80">
                <h1>Hsq towers,Jhika Gali, Murree</h1>
                <p>4.8 29 Google reviews</p>
              </div>
              <div className="bg-primary p-2 flex justify-center poppins-semibold flex-row gap-3 items-center">
                <p className="underline text-sm text-center hover:cursor-pointer">
                  View larger map
                </p>
                <div className="relative bg-black w-7 h-7 rounded-full">
                  <ArrowRight
                    color="white"
                    className="absolute top-1 left-1"
                    size={20}
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
        {/* right */}
        <div className="w-fit sm:w-1/2 ">
          {/* <img className="order-2" src={bookbg} alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0013501276594!2d73.41395537442568!3d33.91536482494771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd78972fd4569%3A0xdc3c75a9dc210b41!2sHSQ%20Towers!5e0!3m2!1sen!2s!4v1758212472901!5m2!1sen!2s"
            width="600"
            height="450"
            // style={{ border: 0 }}
            className="w-fit h-56 sm:h-full sm:w-full"
            //  allowFullScreen=
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <Footer />
    </>
  );
};

export default Index;

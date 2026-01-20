// hooks
import { useState, useEffect, useMemo } from "react";
import { Link } from "react-router-dom";
import { lazy, Suspense } from "react";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
// Components

const BookingWidget = lazy(() => import("@/components/BookingWidget"));
const Hero = lazy(() => import("@/components/Hero"));
const GoogleReviewCard = lazy(() => import("@/components/cards/GoogleReview"));
const RoomCard = lazy(() => import("@/components/cards/RoomCard"));
const WhatsAppButton = lazy(() => import("@/components/buttons/Whatsapp"));
const CommanButton = lazy(() => import("@/components/buttons/Button"));
const Viewbutton = lazy(() => import("@/components/buttons/Viewbutton"));
const Footer = lazy(() => import("@/components/layout/Footer"));
import "swiper/css";
import "swiper/css/navigation";
import { useQuery } from "@tanstack/react-query";
import { Get_All_Available_Room, GoogleReview } from "@/api/roomsApi";
import { RoomsGroupedResponse } from "@/types/Room";
import FrontLogo from "@/components/layout/FrontLogo";
// svg
import Parking from "@/components/svg/Parking";
import Conference from "@/components/svg/Conference";
import Wifi from "@/components/svg/Wifi";
import Laundry from "@/components/svg/Laundry";
import Breakfast from "@/components/svg/Breakfast";
import Gym from "@/components/svg/Gym";

import AboutBed from "@/components/svg/AboutBed";
import AboutSenicView from "@/components/svg/AboutSenicView";
import AboutDinning from "@/components/svg/AboutDinning";
// icons
import { ArrowRight, Plus, Minus } from "lucide-react";

// images
import v1 from "@/assets/indexpage/v1.webp";
import v2 from "@/assets/indexpage/v2.webp";
import v3 from "@/assets/indexpage/v3.webp";
import v4 from "@/assets/indexpage/v4.webp";
import photoA from "@/assets/indexpage/about-bg.webp";
import reviewbg from "@/assets/indexpage/reviewbg.webp";

import amenitiebg from "@/assets/indexpage/amenitiebg.webp";
import logo from "@/assets/logo.webp";
// import roomimage from "@/assets/Book/roomimage.svg";
import galleryimage from "@/assets/indexpage/Gallerybg.webp";
import restaurent from "@/assets/indexpage/restaurent.webp";
// const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
// store
import { useRoomStore, useReviewStore } from "@/store/store";
type FeatureItem = { icon: React.ElementType; label: string };
const FEATURES: FeatureItem[] = [
  { icon: AboutBed, label: "LUXURY ROOMS" },
  { icon: AboutSenicView, label: "SCENIC VIEWS" },
  { icon: AboutDinning, label: "FINE DINING" },
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
const slides = [
  {
    image: v1,
    title: "HSQ TOWERS",
    subtitle: "Welcome To",
    description:
      "At HSQ Tower, we redefine modern hospitality—blending style, innovation, and authentic warmth. ",
    buttonText: "More Info",
    href: "/about",
  },
  {
    image: v2,
    title: "RESTAURANT",
    subtitle: "Our",
    description:
      "Step Into our restaurant and indulge in a culinary journey where every dish is a masterpiece-crafter with passion",
    buttonText: "More Info",
    href: "/restaurent",
  },
  {
    image: v3,
    title: "ROOMS & SUITES",
    subtitle: "Signature",
    description:
      "At HSQ Tower, Discover a selection of elegant living spaces-from cozy standard rooms to deluxe suites.",
    buttonText: "More Info",
    href: "/book",
  },
  {
    image: v4,
    title: "AMENITIES",
    subtitle: "Hotel",
    description:
      "At HSQ Tower, every moment is designed around you .From exciting tours and fascinating to world class exhibition and vibrant trade show.",
    buttonText: "More Info",
    href: "/aminities",
  },
  // { ... }
];
const Index = () => {
  const [activeIndex, setActiveIndex] = useState<number | null>(null);

  const { setRooms, rooms } = useRoomStore();
  const { setReviews, reviews } = useReviewStore();
  const [fetchEnabled, setFetchEnabled] = useState(false);

  useEffect(() => {
    const timer = setTimeout(() => setFetchEnabled(true), 1500);
    return () => clearTimeout(timer);
  }, []);
  const { data, isLoading, isError, error, isSuccess } =
    useQuery<RoomsGroupedResponse>({
      queryKey: ["FetchRooms"],
      queryFn: Get_All_Available_Room,
      staleTime: 60 * 60 * 1000, // 1 hour = 3600000 ms
      gcTime: 60 * 60 * 1000,
      refetchOnWindowFocus: false,
      enabled: fetchEnabled,
      refetchOnMount: false,
      refetchOnReconnect: false,
      refetchIntervalInBackground: false,
    });
  // Fetched Reviews api
  const { data: Reviews, isSuccess: isReviewSuccess } = useQuery({
    queryKey: ["GoogleReviews"],
    queryFn: GoogleReview,
    staleTime: 60 * 60 * 1000, // 1 hour = 3600000 ms
    gcTime: 60 * 60 * 1000,
    refetchOnWindowFocus: false,
    enabled: fetchEnabled,
    refetchOnMount: false,
    refetchOnReconnect: false,
    refetchIntervalInBackground: false,
    select: (reviews) =>
      reviews.map((review: any) => ({
        name: review.user?.name,
        thumbnail: review.user?.thumbnail,
        snippet: review.extracted_snippet?.original || review.snippet,
        date: review.date,
      })),
  });
  // console.log("Review", reviews);
  useEffect(() => {
    if (isSuccess && data) setRooms(data);
  }, [isSuccess, data]);

  useEffect(() => {
    if (isReviewSuccess && Reviews) setReviews(Reviews);
  }, [isReviewSuccess, Reviews]);
  // useEffect(() => {
  //   // if(Reviews){
  //   console.log("Goole_Review_Response", Reviews);
  //   // }
  // }, [Reviews]);

  // if (isError) return <p>Error</p>;
  // console.log("Data", data);
  // console.log("Store data", rooms);
  const allowedCategories = ["Deluxe", "Executive", "Presidential"];

  const filtered = useMemo(() => {
    return rooms
      .filter((cat) => allowedCategories.includes(cat.categoryName))
      .map((cat) => ({
        categoryName: cat.categoryName,
        room: cat.rooms[0],
      }))
      .filter((cat) => cat.room);
  }, [rooms]); // sirf rooms change hone par recompute hoga

  console.log("Filtered Data", filtered);
  const toggleAccordion = (index: number) => {
    setActiveIndex(activeIndex === index ? null : index);
  };
  // if (isLoading) return <FrontLogo />;
  return (
    <>
      {/* Landing page */}
      <section className="relative">
        <Suspense fallback={<FrontLogo />}>
          <Hero slides={slides} autoPlayInterval={5000} />
        </Suspense>
        <div className="absolute -bottom-60 lg:bottom-[-110px] w-full 2xl:w-[80%] 2xl:left-52">
          <Suspense>
            <BookingWidget />
          </Suspense>
        </div>
      </section>
      {/* Welcome to Hsqtower section  */}
      <section className="backgroundcolor flex flex-col lg:flex-row justify-between ">
        {/* left  */}
        <div className="flex flex-col mt-[270px] w-[70%] lg:mt-48 lg:w-1/3 m-auto order-1 text-center space-y-2 lg:space-y-4 ">
          <h1 className="poppins-bold text-left text-xl lg:text-3xl ">
            Welcome To HSQ Tower
          </h1>
          <p className="poppins-medium text-sm text-left 2xl:text-lg">
            At HSQ Tower, elegance meets convenience — the perfect stay for
            guests who seek charm, comfort, and the ideal location to explore
            Murree.
          </p>
          {/* icons */}
          <div className="flex flex-row  gap-4">
            {FEATURES.map((data, index) => (
              <div
                key={index}
                className="bg-primary/15 my-8 h-20 w-full lg:w-52 lg:h-28 2xl:w-44 2xl:h-36 transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-110  poppins-semibold  rounded-3xl flex items-center justify-center flex-col"
              >
                <data.icon />
                <p className="text-[8px] poppins-semibold sm:text-[10px] sm:pt-2 2xl:text-[13px]">
                  {data.label}
                </p>
              </div>
            ))}
          </div>
          <div className="flex justify-center lg:justify-start">
            <Link to="/about">
              <CommanButton label="Explore More" />
            </Link>
          </div>
        </div>
        {/* right */}
        <div className="mt-10  mb-16 order-2 flex justify-center lg:mt-44 lg:mr-32 lg:justify-end 2xl:mr-56">
          <img
            src={photoA}
            alt="HSQ Tower Exterior View with green mountains"
            className="w-72 h-80 lg:w-80 lg:h-96 rounded-3xl object-cover "
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
          <h1 className="poppins-bold text-2xl  lg:text-3xl text-white 2xl:text-5xl">
            Guest Feedback You Can Trust
          </h1>
          <a
            href="https://g.page/r/CUELIdypdTzcEBM/review"
            target="_blank"
            rel="noopener noreferrer"
          >
            <CommanButton label="Write A Review" className="underline" />
          </a>
        </div>
        {/* cards with crousel */}
        <div className="w-full absolute mt-2 ">
          <Swiper
            modules={[Navigation, Autoplay]}
            // spaceBetween={30}
            loop={true}
            // centeredSlides={true}
            autoplay={{ delay: 2000, disableOnInteraction: false }}
            breakpoints={{
              0: { slidesPerView: 1.3, spaceBetween: 40 }, // mobile → 1 card
              400: {
                slidesPerView: 1.5,
                spaceBetween: 30,
                // centeredSlides: true,
              },
              411: {
                slidesPerView: 1.3,
                spaceBetween: 30,
              },
              768: {
                slidesPerView: 1.2,
                spaceBetween: -130,
                centeredSlides: true,
              }, // tablet → 2 cards
              1024: { slidesPerView: 2.2 }, // desktop → 3 cards
              1280: {
                slidesPerView: 2.2,
                spaceBetween: -100,
                centeredSlides: true,
              }, // large desktop → 4 cards
              1536: {
                slidesPerView: 2.9,
                spaceBetween: 0,
                centeredSlides: true,
              },
            }}
            className="w-full"
          >
            {reviews?.map((item, index) => (
              <SwiperSlide key={index}>
                <div className=" mt-8 sm:mt-10  mx-10">
                  {/* <img
                    src={dummmyreview}
                    alt={`Review ${index}`}
                    className="w-full rounded-2xl shadow-md"
                  /> */}
                  {/* {console.log("Review map", typeof)} */}
                  {/* {.map((data, index) => ( */}
                  {/* // <p>hello world</p> */}
                  {/* // <p>{d} </p> */}
                  {/* <p>{item.name}</p> */}
                  <Suspense>
                    <GoogleReviewCard
                      name={item.name}
                      thumbnail={item.thumbnail}
                      snippet={item.snippet}
                      date={item.date}
                    />
                  </Suspense>
                </div>
              </SwiperSlide>
            ))}
          </Swiper>
        </div>
      </section>
      {/* Aminities Section */}
      <section className="w-full  pt-32 backgroundcolor">
        <div
          className="bg-cover relative bg-center w-[90%] rounded-3xl m-auto h-full md:h-[70%] lg:h-full lg:w-[85%]  "
          style={{ backgroundImage: `url(${amenitiebg})` }}
        >
          <div className="absolute  inset-0 bg-black/50  rounded-3xl" />
          {/* content */}
          <div className="flex flex-col lg:flex-row w-full space-y-3 md:space-y-5  relative pt-3 md:pt-10 lg:pt-20 pb-10 ">
            {/* heading */}
            <div className="w-full flex flex-col items-center justify-center text-center order-1 lg:order-2 m-auto lg:w-1/2">
              <img
                className="w-[50%] md:w-[40%] h-32 object-contain mx-auto 2xl:h-[30%] 2xl:w-[30%]"
                src={logo}
                loading="lazy"
                alt=""
              />
              <h1 className="text-white poppins-extrabold mt-4 sm:text-2xl 2xl:text-4xl 2xl:mt-1">
                Hotel Guest Facilities
                <p className="text-white text-sm sm:text-base font-normal 2xl:text-lg">
                  Where Every Detail Meets Luxury
                </p>
              </h1>
              <Link to="/aminities">
                <div className="flex justify-center mt-4">
                  <Suspense>
                    <CommanButton label="Learn More" />
                  </Suspense>
                </div>
              </Link>
            </div>
            <div className="flex flex-row justify-center  order-1 lg:order-2 gap-3 w-full md:w-[60%] m-auto lg:w-[40%] 2xl:w-[40%] flex-wrap">
              {Aminities.map((data, index) => (
                <div
                  key={index}
                  className=" w-28 h-28 lg:h-32 lg:w-32 rounded-2xl bg-white/5 border-[1px] transition-all duration-300 ease-out hover:shadow-xl hover:cursor-pointer hover:scale-110  border-white/20 backdrop-blur-lg flex flex-col items-center justify-center  shadow-lg"
                >
                  {/* <data.icon size={40} className="text-primary" /> */}
                  <data.icon />

                  <p className="text-white text-[12px] poppins-semibold pt-1 2xl:text-[14px]">
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
        <h1 className="poppins-bold text-2xl sm:text-3xl 2xl:text-4xl">
          Rooms & Suites
        </h1>
        <p className="text-sm poppins-medium 2xl:text-lg">
          Discover Our Collection of Elegant Rooms
        </p>
        <div className="flex flex-col lg:flex-row gap-4 mt-10">
          {filtered.map((value, index) => (
            // <p className="text-2xl text-red-700">
            //   {value.room.publicDescription}
            //   {value.room.rate}
            //   {value.room.publicName}
            // </p>
            <div key={value.room.id}>
              <Suspense>
                <RoomCard
                  price={value.room.rate}
                  title={value.room.publicName}
                  image={value.room.images[0]}
                />
              </Suspense>
            </div>
          ))}

          {/* <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          /> */}
          {/* <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          /> */}
          {/* <RoomCard
            price="Rs14,000/-"
            title="One Bed Deluxe Room"
            image={roomimage}
          /> */}
        </div>
        {/* button */}
        <div className="mt-5">
          <Link to="/book">
            <Suspense>
              <CommanButton label="View All" />
            </Suspense>
          </Link>
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
        <div className="relative z-10 flex flex-col items-center  space-y-3 text-center px-4">
          <h1 className="Tuesdaynight text-lg md:text-4xl 2xl:text-7xl">
            Look at The
          </h1>
          <p className="poppins-bold  sm:w-[70%] text-xl md:text-3xl lg:text-5xl 2xl:text-6xl">
            PHOTO GALLERY OF OUR HOTEL
          </p>
          <p className="text-sm 2xl:text-xl">Welcome to our photo gallery</p>
          {/* Button */}
          <Link to="/gallery">
            <Suspense>
              <Viewbutton label="  View Gallery" />
            </Suspense>
          </Link>
        </div>
      </section>
      {/* Restaurent*/}
      <section className="w-full backgroundcolor py-16">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 items-start">
          {/* Left Side */}
          <div className="space-y-3 sm:space-y-6 px-6 md:px-12 lg:px-20">
            <h2 className="text-2xl text-center md:text-4xl poppins-bold text-black 2xl:text-4xl">
              Our Restaurant
            </h2>
            <p className="text-center lg:leading-relaxed poppins-regular max-w-md md:m-auto 2xl:w-[80%] 2xl:m-auto 2xl:text-lg">
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
                    <span className="text-black poppins-medium 2xl:text-xl">
                      {kitchen.title}
                    </span>
                    {activeIndex === index ? (
                      <Minus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm 2xl:w-9 2xl:h-9" />
                    ) : (
                      <Plus className="text-black w-5 h-5 bg-gradient-to-r from-[#D7A94D] to-[#D49237] rounded-sm 2xl:w-9 2xl:h-9" />
                    )}
                  </button>

                  {/* Description */}
                  {activeIndex === index && (
                    <div className="px-4 pb-4 poppins-reguler text-sm text-black 2xl:text-lg">
                      <div className="border-t opacity-15 border-black" />{" "}
                      <p className="pt-1">{kitchen.description}</p>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>

          {/* Right Side */}
          <div className="flex w-[90%] md:m-auto 2xl:w-[50%] ">
            <img
              src={restaurent}
              alt="Restaurant 1"
              className="object-cover w-full h-auto md:h-96 md:w-fit md:m-auto  top-24 2xl:w-full 2xl:h-full"
            />
          </div>
        </div>
      </section>
      {/* Map section */}
      <section className="bg-black w-full  p-1 md:p-10 flex flex-col sm:flex-row justify-between text-white">
        {/* left */}
        <div className="p-5 oder-1 flex items-baseline flex-col space-y-7">
          <h1 className="poppins-extrabold text-2xl text-center lg:text-3xl 2xl:text-4xl">
            Near HSQ Towers
          </h1>
          {/* location1 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary py-2 px-2 rounded-full"></div>
            <p className="2xl:text-lg">3 mins Mall Road Murree</p>
          </div>
          {/* location2 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full"></div>
            <p className="2xl:text-lg">5 mins Mcdonalds,lower topa</p>
          </div>
          {/* location3 */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg">6 mins Coffee bean and tea leaf</p>
          </div>
          {/* location4 */}
          <div className="flex flex-row items-center gap-4">
            <div className="relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg"> 10 mins Gloria Jeans, Chaye Khana</p>
          </div>
          {/* google direction */}
          <div className="flex flex-row items-center gap-4">
            <div className=" relative bg-primary py-2 px-2 rounded-full" />
            <p className="2xl:text-lg"> Get Directions on Google/Apple Maps</p>
          </div>
          {/* Review */}
          <a
            href="https://maps.app.goo.gl/fcSZV2ReQKyBtRGp7"
            target="_blank"
            rel="noopener noreferrer"
          >
            <div className="w-64 h-fit  text-black my-4">
              <div className="bg-[#D7AB4E] p-2">
                <h1 className="poppins-semibold">
                  Hsq towers,Jhika Gali, Murree
                </h1>
                <p>4.8 29 Google reviews</p>
              </div>
              <div className="bg-[#FFD680] p-2 flex justify-center poppins-semibold flex-row gap-3 items-center">
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
          </a>
        </div>
        {/* right */}
        <div className="w-full sm:w-1/2 ">
          {/* <img className="order-2" src={bookbg} alt="" /> */}
          <iframe
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3311.0013501276594!2d73.41395537442568!3d33.91536482494771!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x38dfd78972fd4569%3A0xdc3c75a9dc210b41!2sHSQ%20Towers!5e0!3m2!1sen!2s!4v1758212472901!5m2!1sen!2s"
            width="600"
            height="450"
            // style={{ border: 0 }}
            className="w-full pb-3 h-56 sm:h-full sm:w-full"
            //  allowFullScreen=
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
          ></iframe>
        </div>
      </section>
      <div className="relative">
        <Suspense>
          <WhatsAppButton />
        </Suspense>
      </div>
      <Suspense>
        <Footer />
      </Suspense>
      {/* <NewFooter></NewFooter> */}
    </>
  );
};

export default Index;

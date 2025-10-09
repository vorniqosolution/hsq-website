import bookbg from "../assets/Book/bookbg.svg";
import { ArrowRight, PhoneCall, MailIcon, MapPin } from "lucide-react";
import BookingCard from "../components/cards/BookingCard";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import { FaLocationPin } from "react-icons/fa6";
// Svg images components
import Wifi from "@/components/svg/Wifi";
import Gym from "@/components/svg/Gym";
import Laundry from "@/components/svg/Laundry";
import Parking from "@/components/svg/Parking";
import Conference from "@/components/svg/Conference";
import Breakfast from "@/components/svg/Breakfast";
// booking widget
import BookingWidget from "@/components/BookingWidget";
import WhatsAppButton from "@/components/buttons/Whatsapp";
function Booking() {
  return (
    <>
      <div className="w-full h-full">
        {/* main section */}
        <div
          className="relative bg-cover bg-center h-[50vh] lg:h-[80vh] text-white "
          style={{ backgroundImage: `url(${bookbg})` }}
        >
          {/* heading */}
          <div className="flex justify-center space-y-3 pt-20 md:pt-36  lg:pt-[150px] xl:pt-48 flex-col items-center">
            <p className="poppins-thin text-sm">
              Get Directions on(Google Maps/Apple Maps)
            </p>
            <h1 className="poppins-bold text-2xl  lg:text-5xl lg:w-1/2 text-center">
              Stay your way – six rooms, six unique vibes
            </h1>
            <button className="bookbtn flex items-center gap-2">
              BOOK NOW
              <div className="bg-black rounded-full">
                <ArrowRight color="white" size={20} />
              </div>
            </button>
          </div>
          {/* booking widget */}
          <div className="absolute -bottom-44 md:-bottom-24 lg:-bottom-14 w-full ">
            <BookingWidget />
          </div>
        </div>
        {/* body section*/}
        <div className="bg-primary/25 pt-52 sm:pt-32  flex flex-col text-center space-y-5 ">
          <h1 className="poppins-bold  text-3xl sm:text-4xl">
            Our
            <span className="text-primary"> Featured </span>
            Room
          </h1>
          <p className="poppins-light">
            Where elegance meets relaxation for an unforgettable stay
          </p>
          {/* cards with crousel */}
          <div className="w-full overflow-hidden">
            <Swiper
              modules={[Navigation, Autoplay]}
              spaceBetween={16} // <-- gap between cards
              loop={true}
              autoplay={{ delay: 5000, disableOnInteraction: false }}
              // centeredSlides={true}
              // navigation={true}
              breakpoints={{
                0: {
                  // sm
                  slidesPerView: 1,
                },
                768: {
                  // md
                  slidesPerView: 2,
                },
                1024: {
                  // lg
                  slidesPerView: 4,
                },
              }}
              // className="pb-10" // give bottom space for arrows if needed
            >
              {[1, 2, 3, 4, 5, 6, 7].map((item, index) => (
                <SwiperSlide
                  key={index}
                  // className="flex justify-center items-center  lg:ml-1"
                >
                  <div className="flex justify-center">
                    <BookingCard />
                  </div>
                </SwiperSlide>
              ))}
            </Swiper>
          </div>
          {/* Exclusive Amenities */}
          <div>
            <h1 className="poppins-extrabold text-2xl sm:text-3xl mt-10 ">
              Exclusive Amenities
            </h1>
            <p className="mb-5">
              Where elegance meets relaxation for an unforgettable stay
            </p>
          </div>
          {/* Amenities Card */}
          <div className="mr-5 ml-5 poppins-medium lg:max-w-4xl lg:m-auto  h-fit sm:h-40 bg-primary rounded-lg  justify-center p-8 gap-6 md:gap-5 lg:gap-10 flex flex-wrap sm:flex-nowrap flex-row">
            {/* wifi */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                {/* <Wifi className="text-primary" size={25} strokeWidth={3} /> */}
                <Wifi />
              </div>
              <p className="mt-2 font-medium">Wifi</p>
            </div>
            {/* fitness */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                <Gym />
              </div>
              <p>Fitness</p>
            </div>
            {/* laundry */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                <Laundry />
              </div>
              <p>Laundry </p>
            </div>
            {/* conference hall */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                <Conference />
              </div>
              <p>Conference</p>
            </div>
            {/* breakfast */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                <Breakfast />
              </div>
              <p>Service</p>
            </div>
            {/* on-site parking */}
            <div
              className="bg-white w-28 h-28 rounded-lg p-4 flex flex-col justify-center items-center 
                transition-all duration-300 ease-in-out hover:shadow-2xl hover:scale-105"
            >
              <div className="bg-black relative rounded-full w-12 h-12 flex items-center justify-center">
                <Parking />
              </div>
              <p>Parking</p>
            </div>
          </div>
          {/* whatsapp button */}
          <div className="relative bottom-2 right-2">
            <WhatsAppButton />
          </div>
          {/* Footer Section */}
          <div className="bg-black w-full mt-16 p-10 flex flex-col sm:flex-row justify-between text-white">
            {/* left */}
            <div className="p-5 oder-1 flex items-baseline flex-col space-y-7">
              <h1 className="poppins-extrabold text-xl lg:text-3xl">
                Get in touch with us
              </h1>
              {/* location */}
              <div className="flex flex-row items-center gap-4">
                <div className="relative bg-primary h-12 w-24 md:w-16 lg:w-12 rounded-full">
                  <MapPin
                    size={25}
                    className="text-black absolute top-3 left-3"
                    strokeWidth={3}
                  />
                </div>
                <p>Hsq towers,Jhika Gali, Murree, Rawalpindi, Punjab</p>
              </div>
              {/* mail */}
              <div className="flex flex-row items-center gap-4">
                <div className=" relative bg-primary h-12 w-12 rounded-full">
                  <MailIcon
                    size={25}
                    className="text-black absolute top-3 left-3"
                    strokeWidth={3}
                  />
                </div>
                <p>hsqtowers@gmail.com</p>
              </div>
              {/* phone */}
              <div className="flex flex-row items-center gap-4">
                <div className=" relative bg-primary h-12 w-12 rounded-full">
                  <PhoneCall
                    size={25}
                    className="text-black absolute top-3 left-3"
                    strokeWidth={3}
                  />
                </div>
                <p>+92 3300491479</p>
              </div>
              <h1 className="poppins-bold">
                Get Directions on(Google Maps/Apple Maps)
              </h1>
              {/* Review */}
              <div>
                {/* review card */}
                {/* <div className="w-64 h-fit  text-black my-4">
                  <div className="bg-primary/80 ">
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
                </div> */}
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
            </div>
            {/* right */}
            <div className="w-fit sm:w-1/2">
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
          </div>
        </div>
      </div>
    </>
  );
}

export default Booking;

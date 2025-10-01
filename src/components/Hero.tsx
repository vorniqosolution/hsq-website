import React, { useState, useEffect } from "react";
import { ChevronLeft, ChevronRight } from "lucide-react";
import Viewbutton from "./buttons/Viewbutton";
import { Link } from "react-router-dom";
interface Slide {
  image: string;
  title: string;
  subtitle: string;
  description: string;
  buttonText: string;
  href: string;
}

interface HeroCarouselProps {
  slides: Slide[];
  autoPlayInterval?: number;
}

const Hero: React.FC<HeroCarouselProps> = ({
  slides,
  autoPlayInterval = 5000,
}) => {
  const [current, setCurrent] = useState(0);

  const prevSlide = () =>
    setCurrent((prev) => (prev === 0 ? slides.length - 1 : prev - 1));
  const nextSlide = () =>
    setCurrent((prev) => (prev === slides.length - 1 ? 0 : prev + 1));

  useEffect(() => {
    const interval = setInterval(nextSlide, autoPlayInterval);
    return () => clearInterval(interval);
  }, [current, autoPlayInterval]);

  return (
    <div className="relative w-full h-screen overflow-hidden">
      {/* Background */}
      <div
        className="absolute inset-0 bg-cover bg-center transition-all duration-700"
        style={{ backgroundImage: `url(${slides[current].image})` }}
      >
        <div className="absolute inset-0 bg-black/50" />
      </div>

      {/* Content */}
      <div className="relative z-10 flex flex-col items-center mt-32 md:mt-40 lg:mt-24 xl:mt-32 h-full  text-center text-white px-6">
        <h3 className="text-4xl sm:text-6xl Tuesdaynight mb-2">
          {slides[current].subtitle}
        </h3>
        <h1 className="text-4xl lg:text-5xl poppins-bold mb-2 lg:mb-4">
          {slides[current].title}
        </h1>
        <p className="max-w-2xl  mx-auto mb-6 poppins-regular text-sm sm:text-lg">
          {slides[current].description}
        </p>
        <Link to={slides[current].href}>
          <Viewbutton className="px-8" label={slides[current].buttonText} />
        </Link>
      </div>

      {/* Controls with line between */}
      <div className="absolute top-[65%] left-0 right-0 flex items-center justify-between px-12">
        <button
          onClick={prevSlide}
          className="border-white border p-3 hover:bg-black/50 rounded-full"
        >
          <ChevronLeft size={24} className="text-white" />
        </button>

        {/* Straight line */}
        <div className="flex-1 mx-6 border-t border-white" />
        <button
          onClick={nextSlide}
          className="border-white  border p-3 hover:bg-black/50 rounded-full"
        >
          <ChevronRight size={24} className="text-white" />
        </button>
      </div>

      {/* Thumbnails */}
      <div className="absolute bottom-9 left-1/2 -translate-x-1/2 flex gap-4">
        {slides.map((slide, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-24 h-24 sm:w-32 sm:h-28 rounded-md overflow-hidden border-2 transition ${
              index === current
                ? "border-gray-500 border-2 transition-all ease-in-out  scale-125"
                : "border-transparent"
            }`}
          >
            <img
              src={slide.image}
              alt={slide.title}
              className="w-full h-full object-cover"
            />
          </button>
        ))}
      </div>
    </div>
  );
};

export default Hero;

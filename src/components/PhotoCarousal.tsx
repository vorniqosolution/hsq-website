import React, { useState, useEffect } from 'react';
import photoA from "@/assets/BG/hs1_01.svg";
import photoB from "@/assets/BG/hs1_02.svg";
import rightImage from "@/assets/BG/dining.svg";
import photogallary from "@/assets/BG/photogallary.svg";
import photogallaryLogo from "@/assets/BG/photoGallaryLogo.svg";

const PhotoCarousal = () => {
  const images = [
    photoA,
    photoB,
    rightImage,
    photogallary,
    photogallaryLogo
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => 
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 3000);

    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="w-full max-w-2xl md:max-w-3xl lg:max-w-4xl xl:max-w-5xl mx-auto relative">
      <div className="relative bg-gray-100 rounded-tl-[80px] rounded-br-[80px] overflow-hidden shadow-lg">
        <div className="relative w-full h-64 md:h-80 lg:h-96 xl:h-[28rem] 2xl:h-[32rem] overflow-hidden">
          <div 
            className="flex transition-transform duration-500 ease-in-out h-full"
            style={{ transform: `translateX(-${currentIndex * 100}%)` }}
          >
            {images.map((image, index) => (
              <img
                key={index}
                src={image}
                alt={`Slide ${index + 1}`}
                className="w-full h-full object-cover flex-shrink-0"
              />
            ))}
          </div>
        </div>
      </div>
    </div>
  );
};

export default PhotoCarousal;
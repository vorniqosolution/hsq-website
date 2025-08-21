import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./layout/Container";
import { BookingWidget } from "./BookingWidget";
// import heroImage from "@/assets/hero-bg.png";
// import heroImagev1 from "@/assets/v1.svg";
// import heroImagev2 from "@/assets/v2.svg";
// import heroImagev3 from "@/assets/v3.svg";
// import heroImagev4 from "@/assets/v4.svg";
import heroImagev1 from "@/assets/v1.png";
import heroImagev2 from "@/assets/v2.png";
import heroImagev3 from "@/assets/v3.png";
import heroImagev4 from "@/assets/v4.png";

/* Clickable gallery tile: cycles its own slides and reports the new slide up */
function GalleryTile({ slides, onSlideChange }) {
  const [idx, setIdx] = useState(0);

  const next = () => {
    const n = (idx + 1) % slides.length;
    setIdx(n);
    onSlideChange?.(slides[n], n);
  };

  const slide = slides[idx];

  return (
    <button
      type="button"
      onClick={next}
      className="group relative overflow-hidden rounded-xl border bg-white/5 backdrop-blur-sm 
                 shadow-[0_10px_30px_rgba(0,0,0,0.45)] outline-none focus-visible:ring-2 
                 focus-visible:ring-white/60 transition
                 w-[250px] h-[140px]" // 👈 fixed size here
      style={{ borderColor: "hsl(var(--hsq-gold) / 0.85)" }}
      aria-label={slide.alt || "Gallery image"}
    >
      <img
        src={slide.src}
        alt={slide.alt || ""}
        className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105" // 👈 fills fixed box
        loading="lazy"
      />
      {slide.caption && (
        <div
          className="pointer-events-none absolute inset-x-0 bottom-0 m-2 rounded-md 
                        bg-black/55 px-3 py-2 text-left text-white text-sm leading-snug 
                        border border-white/10 opacity-0 translate-y-1 
                        transition-all duration-300 group-hover:opacity-100 group-hover:translate-y-0"
        >
          {slide.caption}
        </div>
      )}
    </button>
  );
}

export const Hero = () => {
  const slidesA = [
    {
      src: heroImagev1,
      caption: "Balcony lounge — sunrise view",
      alt: "Balcony",
    },
  ];
  const slidesB = [
    {
      src: heroImagev2,
      caption: "Fine dining — chef’s tasting menu",
      alt: "Dining",
    },
  ];
  const slidesC = [
    {
      src: heroImagev3,
      caption: "Deluxe suite — HSQ signature bedding",
      alt: "Suite",
    },
  ];
  const slidesD = [
    {
      src: heroImagev4,
      caption: "Infinity patio — stargaze nights",
      alt: "Patio",
    }, // 👈 4th tile
  ];

  // Default hero should be the 1st image of the first tile
  const firstSlide = slidesA[0];

  // Dynamic caption and background
  const [activeCaption, setActiveCaption] = useState(firstSlide.caption);
  const [bgSrc, setBgSrc] = useState(firstSlide.src);

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          key={bgSrc} // key change triggers fade-in
          src={bgSrc || heroImagev1}
          alt=""
          className="h-full w-full object-cover transition-opacity duration-500"
        />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-20 lg:py-28">
          {/* Left: Content panel */}
          <div className="lg:col-span-8">
            <div className="">
              {/* Watermark H */}
              {/* <div
                aria-hidden
                className="pointer-events-none absolute -top-8 -left-5 sm:-top-12 sm:-left-8 text-[16rem] sm:text-[20rem] leading-none font-heading font-black text-[#dcb96c]/15 select-none"
              >
                H
              </div> */}

              {/* Headline */}
              {/* <h1 className="relative font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 text-transparent bg-clip-text hsq-gradient-gold">
                Welcome. Bonjour. Hola!
              </h1> */}

              {/* Dynamic text from thumbnail clicks */}
              {/* <p className="relative text-base sm:text-lg lg:text-xl text-gray-100/90 max-w-2xl transition-opacity duration-300">
                {activeCaption}
              </p> */}

              {/* CTA */}
              {/* <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="hsq-gradient-gold text-white font-semibold px-7 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hsq-transition"
                >
                  More Info
                </Button>
              </div> */}
            </div>
          </div>

          {/* Right: 4 interactive tiles (desktop only) */}
          <aside className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            <GalleryTile
              slides={slidesA}
              onSlideChange={(slide) => {
                setActiveCaption(slide.caption);
                setBgSrc(slide.src);
              }}
            />
            <GalleryTile
              slides={slidesB}
              onSlideChange={(slide) => {
                setActiveCaption(slide.caption);
                setBgSrc(slide.src);
              }}
            />
            <GalleryTile
              slides={slidesC}
              onSlideChange={(slide) => {
                setActiveCaption(slide.caption);
                setBgSrc(slide.src);
              }}
            />
            <GalleryTile
              slides={slidesD}
              onSlideChange={(slide) => {
                setActiveCaption(slide.caption);
                setBgSrc(slide.src);
              }}
            />
          </aside>
        </div>

        {/* Booking Widget: floating near bottom center */}
        {/* <div className="relative">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl">
            <div className="rounded-2xl bg-black/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
              <div className="px-3 py-3 sm:px-4 sm:py-4">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div> */}
      </Container>

      {/* WhatsApp Quick Chat */}
      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 bg-[#25D366] text-white font-medium shadow-[0_10px_30px_rgba(0,0,0,0.35)] hover:brightness-110 transition"
      >
        <svg
          xmlns="http://www.w3.org/2000/svg"
          className="h-5 w-5"
          viewBox="0 0 32 32"
          fill="currentColor"
        >
          <path d="M19.11 17.53c-.27-.14-1.6-.79-1.84-.88-.24-.09-.42-.14-.6.14s-.69.88-.84 1.06-.31.21-.58.07a8.66 8.66 0 0 1-2.54-1.57 9.54 9.54 0 0 1-1.77-2.2c-.19-.33 0-.51.14-.65s.33-.35.49-.54a2.17 2.17 0 0 0 .33-.56.58.58 0 0 0 0-.54c0-.14-.6-1.44-.83-1.98s-.44-.46-.6-.46h-.51a1 1 0 0 0-.72.33 3 3 0 0 0-.95 2.23 5.23 5.23 0 0 0 1.09 2.78c.13.18 1.86 2.84 4.5 3.99s2.69.75 3.17.71a2.7 2.7 0 0 0 1.77-1.24 2.26 2.26 0 0 0 .16-1.24c-.06-.1-.23-.16-.5-.3z" />
          <path d="M26.62 5.38A12.25 12.25 0 0 0 5.38 26.62L4 30l3.46-1.35a12.25 12.25 0 0 0 19.16-9.24 12.18 12.18 0 0 0-.94-6.06 12.34 12.34 0 0 0-4.06-5.97zm-10.62 20a9.38 9.38 0 1 1 9.38-9.38 9.38 9.38 0 0 1-9.38 9.38z" />
        </svg>
        <span>Quick Chat</span>
      </a>
    </section>
  );
};

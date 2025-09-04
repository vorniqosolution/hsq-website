import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Container } from "./layout/Container";

import heroImagev1 from "@/assets/v1.png";
import heroImagev2 from "@/assets/v2.png";
import heroImagev3 from "@/assets/v3.png";
import heroImagev4 from "@/assets/v4.png";

const SECTIONS = [
  {
    key: "hotel",
    letter: "H",
    title: "Welcome. Bonjour. Hola!",
    desc: "At HSQ Hotels, we redefine modern hospitality—blending style, innovation, and authentic warmth. From smart design and inspired dining to unique experiences surrounded by nature, every detail is crafted to make your journey effortless and unforgettable.",
    descB:
      "At HSQ Hotels, we redefine modern hospitality—blending style, innovation, and authentic warmth.",
    image: heroImagev1,
  },
  {
    key: "restaurant",
    letter: "R",
    title: "Restaurant",
    desc: "Step into our restaurant and indulge in a culinary journey where every dish is a masterpiece—crafted with passion, precision, and flavor that lingers long after the last bite. Our chefs don't just cook, they turn your cravings into unforgettable experiences.",
    descB:
      "Step into our restaurant and indulge in a culinary journey where every dish is a masterpiece—crafted with passion.",
    image: heroImagev2,
  },
  {
    key: "Amenities",
    letter: "A",
    title: "Amenities",
    desc: "At our hotels, every moment is designed around you. From exciting tours and fascinating excursions to world-class exhibitions and vibrant trade shows, we bring entertainment and experiences that match your every wish.",
    descB: "At our hotels, every moment is designed around you.",
    image: heroImagev4,
  },
  {
    key: "rooms",
    letter: "R",
    title: "Rooms & Suites",
    desc: "At HSQ Towers, discover a selection of elegant living spaces—from cozy standard rooms to deluxe suites and spacious two-bedroom apartments. Each residence blends modern design, essential amenities, and breathtaking window views.",
    descB:
      "At HSQ Towers, discover a selection of elegant living spaces—from cozy.",
    image: heroImagev3,
  },
];

export const Hero = () => {
  const [active, setActive] = useState(0);
  const current = SECTIONS[active];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      <div className="absolute inset-0">
        <img
          key={current.image}
          src={current.image}
          alt=""
          loading="lazy"
          className="h-full w-full object-cover transition-opacity duration-500"
        />
        {/* <div className="absolute inset-0 bg-black/5" /> */}
      </div>

      <Container className="relative z-10 w-full hidden sm:hidden md:block lg:block xl:block">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 sm:gap-12 items-center py-8 sm:py-12 md:py-16 lg:py-20">
          <div className="lg:col-span-8 relative px-4 sm:px-6 lg:px-8">
            <div
              aria-hidden
              className="lg:block pointer-events-none absolute -top-8 -left-5 sm:-top-12 sm:-left-8 md:-top-28 md:-left-4
               text-[16rem] md:text-[27rem] leading-none font-heading font-black 
               text-primary/50 select-none"
            >
              {current.letter}
            </div>

            <div className="relative inline-block bg-black/40 p-6 sm:p-8 rounded-xl shadow-xl max-w-2xl">
              <p className="hidden md:block text-sm font-medium tracking-wider uppercase hsq-gold mb-4">
                {current.key === "hotel"
                  ? "Luxury Mountain Resort"
                  : current.key === "restaurant"
                  ? "Dining Experience"
                  : current.key === "activities"
                  ? "Guest Experiences"
                  : "Accommodations"}
              </p>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-6 text-transparent bg-clip-text hsq-gradient-gold">
                {current.title}
              </h1>

              <p className="hidden md:block text-lg text-white/90 max-w-2xl mb-8">
                {current.desc}
              </p>

              <p className="block md:hidden text-lg text-white/90 max-w-2xl mb-8">
                {current.descB}
              </p>
            </div>

            <div className="mt-8 sm:mt-12 flex flex-col sm:flex-row gap-6 sm:gap-8">
              <a href="/about" className="inline-block">
                <Button
                  size="lg"
                  className="w-full md:w-auto bg-primary text-black font-semibold 
                     px-6 py-3 text-sm rounded-[5px] transition hover:brightness-110"
                >
                  More Info
                </Button>
              </a>
            </div>
          </div>

          <aside className="flex lg:flex lg:col-span-4 flex-col gap-6 sm:gap-8">
            {SECTIONS.map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(i)}
                aria-label={s.title}
                aria-selected={active === i}
                className={`relative overflow-hidden rounded-xl border bg-white/5 backdrop-blur-sm 
                            shadow-xl outline-none transition
                            w-[250px] h-[140px] text-left
                            ${
                              active === i
                                ? "ring-2 ring-offset-2 ring-primary ring-offset-black/10"
                                : ""
                            }`}
                style={{ borderColor: "hsl(var(--hsq-black)/100)" }}
              >
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </aside>
        </div>
      </Container>

      {/* Mobile version */}
      <Container className="relative z-10 w-full block sm:block md:hidden lg:hidden">
        <div className="relative py-6">
          {/* Right-side thumbnails (absolute so they stay at the right on phones) */}
          <aside className="absolute right-2 top-1/2 -translate-y-1/2 z-20 flex flex-col gap-3">
            {SECTIONS.slice(0, 4).map((s, i) => (
              <button
                key={s.key}
                type="button"
                onClick={() => setActive(i)}
                aria-label={s.title}
                aria-selected={active === i}
                className={`relative overflow-hidden rounded-xl border bg-white/5 backdrop-blur-sm
                      shadow-xl outline-none transition
                      w-[40vw] h-[22vw] text-left
                      ${
                        active === i
                          ? "ring-2 ring-offset-2 ring-primary ring-offset-black/10"
                          : ""
                      }`}
                style={{ borderColor: "hsl(var(--hsq-black)/100)" }}
              >
                <img
                  src={s.image}
                  alt=""
                  className="w-full h-full object-cover transition-transform duration-500 hover:scale-105"
                  loading="lazy"
                />
              </button>
            ))}
          </aside>

          {/* Left content; add right padding so text does not sit under the thumbs */}
          <div className="px-3 pr-[44vw]">
            {/* Big background letter */}
            <div
              aria-hidden
              className="pointer-events-none absolute -top-4 -left-2
                   text-[9rem] leading-none font-heading font-black
                   text-primary/50 select-none"
            >
              {current.letter}
            </div>

            {/* Glass card */}
            <div
              className="relative inline-block bg-black/55 backdrop-blur-sm
                      p-4 rounded-xl shadow-xl max-w-[92vw]"
            >
              <p className="text-[11px] font-medium tracking-wider uppercase hsq-gold mb-2">
                {current.key === "hotel"
                  ? "Luxury Mountain Resort"
                  : current.key === "restaurant"
                  ? "Dining Experience"
                  : current.key === "activities"
                  ? "Guest Experiences"
                  : "Accommodations"}
              </p>

              <h1
                className="font-heading font-bold text-transparent bg-clip-text hsq-gradient-gold
                       leading-tight mb-3 text-2xl"
              >
                {current.title}
              </h1>

              <p className="text-sm text-white/90 leading-relaxed mb-5">
                {current.descB || current.desc}
              </p>

              <a href="/about" className="inline-block w-full">
                <Button
                  size="lg"
                  className="w-full bg-primary text-black font-semibold px-5 py-2.5 text-sm rounded-[5px] transition hover:brightness-110"
                >
                  More Info
                </Button>
              </a>
            </div>
          </div>
        </div>
      </Container>

      <a
        href="https://wa.me/923001234567"
        target="_blank"
        rel="noopener noreferrer"
        className="fixed right-4 bottom-6 z-50 inline-flex items-center gap-2 rounded-full px-4 py-3 bg-[#25D366] text-white font-medium shadow-xl hover:brightness-110 transition"
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

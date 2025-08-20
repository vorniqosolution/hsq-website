import { Button } from "@/components/ui/button";
import { Container } from "./layout/Container";
import { BookingWidget } from "./BookingWidget";
import heroImage from "@/assets/hero-hotel.jpg";

export const Hero = () => {
  // Use your own gallery thumbs here (keeping strings avoids import errors)
  const gallery = [heroImage, heroImage, heroImage, heroImage];

  return (
    <section className="relative min-h-[92vh] flex items-center overflow-hidden">
      {/* Background Image */}
      <div
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      />

      {/* Warm tint + vignette for that golden, cinematic look */}
      <div className="pointer-events-none absolute inset-0">
        <div className="absolute inset-0 bg-[radial-gradient(100%_100%_at_20%_10%,rgba(214,164,74,0.35)_0%,rgba(0,0,0,0.55)_60%,rgba(0,0,0,0.85)_100%)]" />
        <div className="absolute inset-0 bg-black/20 mix-blend-multiply" />
      </div>

      <Container className="relative z-10 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 lg:gap-10 items-center py-20 lg:py-28">

          {/* Left: Content Panel */}
          <div className="lg:col-span-8">
            <div className="relative rounded-2xl bg-black/45 border border-white/10 backdrop-blur-sm shadow-[0_30px_80px_rgba(0,0,0,0.6)] p-6 sm:p-8 lg:p-10">
              {/* Large monogram watermark */}
              <div
                aria-hidden
                className="pointer-events-none absolute -top-8 -left-5 sm:-top-12 sm:-left-8 text-[16rem] sm:text-[20rem] leading-none font-heading font-black text-[#dcb96c]/15 select-none"
              >
                H
              </div>

              {/* Headline (keeps your font-heading) */}
              <h1 className="relative font-heading font-bold leading-[1.05] tracking-tight text-4xl sm:text-5xl lg:text-6xl xl:text-7xl mb-4 text-transparent bg-clip-text hsq-gradient-gold">
                Welcome. Bonjour. Hola!
              </h1>

              <p className="relative text-base sm:text-lg lg:text-xl text-gray-100/90 max-w-2xl">
                At HSQ Hotels, we redefine modern hospitality—blending style, innovation, and authentic warmth. From smart design and inspired dining to unique experiences surrounded by nature, every detail is crafted to make your journey effortless and unforgettable.
              </p>

              <div className="mt-8 flex flex-col sm:flex-row gap-3 sm:gap-4">
                <Button
                  size="lg"
                  className="hsq-gradient-gold text-white font-semibold px-7 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hsq-transition"
                >
                  More Info
                </Button>
                <Button
                  size="lg"
                  variant="outline"
                  className="border-white/70 text-white hover:bg-white hover:text-hsq-black px-7 sm:px-8 py-3 sm:py-4 text-base sm:text-lg rounded-full hsq-transition"
                >
                  Book Now
                </Button>
              </div>
            </div>
          </div>

          {/* Right: Stacked Gallery (shown on lg+) */}
          <aside className="hidden lg:flex lg:col-span-4 flex-col gap-4">
            {gallery.map((src, i) => (
              <div
                key={i}
                className="group relative overflow-hidden rounded-xl border border-white/10 bg-white/5 backdrop-blur-sm shadow-[0_10px_30px_rgba(0,0,0,0.45)]"
              >
                <img
                  src={src as unknown as string}
                  alt={`Gallery image ${i + 1}`}
                  className="h-32 w-full object-cover transition-transform duration-500 group-hover:scale-105"
                  loading="lazy"
                />
                <div className="pointer-events-none absolute inset-0 ring-1 ring-black/10" />
              </div>
            ))}
          </aside>
        </div>

        {/* Booking Widget bar (floating near bottom, like the screenshot) */}
        <div className="relative">
          <div className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-full max-w-5xl">
            <div className="rounded-2xl bg-black/80 backdrop-blur supports-[backdrop-filter]:backdrop-blur-sm border border-white/10 shadow-[0_30px_80px_rgba(0,0,0,0.65)]">
              <div className="px-3 py-3 sm:px-4 sm:py-4 z-100 border-red-600">
                <BookingWidget />
              </div>
            </div>
          </div>
        </div>
      </Container>
    </section>
  );
};
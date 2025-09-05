import LazySection from "@/components/LazySection";
// pages
import { Link } from "react-router-dom";
import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { RoomCard } from "@/components/cards/RoomCard";
import { OfferCard } from "@/components/cards/OfferCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AmenityGrid } from "@/components/AmenityGrid";
import { Button } from "@/components/ui/enhanced-button";
import { BookingWidget } from "@/components/BookingWidget";

// icons
import { PiBuildingsLight } from "react-icons/pi";
import { PiMountainsLight } from "react-icons/pi";
import { LiaCocktailSolid } from "react-icons/lia";

//  backgrounds
import amenities_bg from "@/assets/amenities_bg.svg";
import navIcon from "@/assets/amenities_logo.svg";
import floralTL from "@/assets/BG/fower_01.svg";
import floralBR from "@/assets/BG/fower_02.svg";
import crest from "@/assets/BG/HSQ_LOGO_ab.svg";
// import photoA from "@/assets/BG/hs1_01.svg";
import photoA from "@/assets/about/about-bg.svg";
import rightImage from "@/assets/BG/dining.svg";
import photogallary from "@/assets/BG/photogallary.svg";
import photogallaryLogo from "@/assets/BG/photoGallaryLogo.svg";
import PhotoCarousal from "@/components/PhotoCarousal";
import mainHeroImage from "@/assets/images/hsq-tower-exterior.jpg";
import trianglePattern from "@/assets/BG/triangle.svg";

// components
import { useEffect, useState } from "react";
import Restaurant from "@/data/restaurant.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { motion } from "framer-motion";
import { fadeUp, slideIn, staggerContainer } from "../lib/motion";

// helpers
import {
  useRoomsData,
  useOffersData,
  useTestimonialsData,
  useFAQData,
  useDiningData,
  useSpaData,
} from "@/hooks/useData";
import { Header } from "@/components/layout/Header";

const asUrl = (img: any) => (typeof img === "string" ? img : img?.src || "");
type FeatureItem = { icon: React.ElementType; label: string };
const FEATURES: FeatureItem[] = [
  { icon: PiBuildingsLight, label: "LUXURY ROOMS" },
  { icon: PiMountainsLight, label: "SCENIC VIEWS" },
  { icon: LiaCocktailSolid, label: "FINE DINING" },
];

const Index = () => {
  const { data: rooms } = useRoomsData();
  const { data: testimonials } = useTestimonialsData();

  return (
    <>
      <SEO />

      {/* Home */}
      <section id="hero-section">
        <Hero />
      </section>

      {/* About */}
      <LazySection>
        <section className="relative w-full min-h-screen lg:min-h-[90vh] py-12 lg:py-0 border-b-[10px] border-b-primary">
          {/* Booking Widget floating on top */}
          <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 w-full max-w-5xl z-40 hidden lg:block">
            <div className="rounded-2xl">
              <div className="px-3 py-3 sm:px-4 sm:py-4">
                <BookingWidget />
              </div>
            </div>
          </div>

          {/* Make grid full width instead of container */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-0 relative z-10 lg:min-h-[90vh] w-full">
            {/* Image side */}
            <div className="lg:order-2 flex">
              <img
                src={asUrl(photoA)}
                alt="HSQ Tower Exterior View with green mountains"
                className="w-full h-64 md:h-96 lg:h-full object-cover top-0"
                loading="lazy"
              />
            </div>

            {/* Text side */}
            <div className="relative lg:order-1 flex flex-col justify-center items-center text-center p-4 md:p-8 lg:p-12 xl:p-16">
              <img
                src={trianglePattern}
                alt="Decorative background"
                className="absolute inset-0 w-full h-full object-cover z-0 opacity-70"
                loading="lazy"
              />
              <div className="z-[200]">
                <SectionHeader
                  eyebrow="Where Comfort Meets Luxury"
                  title="Welcome to HSQ Tower"
                  subtitle="At HSQ Tower, elegance meets convenience — the perfect stay for guests who seek charm, comfort, and the ideal location to explore Murree."
                  alignment="center"
                />

                <div className="grid grid-cols-3 gap-6 sm:gap-8 mb-12 w-full max-w-md">
                  {FEATURES.map((feature, index) => (
                    <div
                      key={index}
                      className="flex flex-col items-center justify-center text-center"
                    >
                      <feature.icon
                        className="h-14 w-14 md:h-16 md:w-16 mb-2 text-primary"
                        aria-hidden="true"
                      />
                      <p className="text-xs sm:text-sm font-semibold uppercase text-foreground">
                        {feature.label}
                      </p>
                    </div>
                  ))}
                </div>

                <a
                  href="#"
                  className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-black transition hover:brightness-110"
                >
                  Explore Our Story
                </a>
              </div>
            </div>
          </div>
        </section>
      </LazySection>

      {/* <Section className="relative h-[500px] sm:h-[600px] md:h-[660px] py-8 sm:py-12 md:py-52">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 w-full max-w-5xl z-40 hidden lg:block">
          <div className="rounded-2xl">
            <div className="px-3 py-3 sm:px-4 sm:py-4">
              <BookingWidget />
            </div>
          </div>
        </div>

       
        <div className="absolute left-1/2 top-3 sm:top-5 z-200 -translate-x-1/2">
          <img
            src={crest}
            alt="HSQ Towers"
            className="lg:block h-20 sm:h-24 md:h-32 lg:h-[600px] w-auto opacity-100 drop-shadow-lg"
          />
        </div>

        
        <img
          src={asUrl(floralTL)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute left-0 top-0 z-190 w-32 md:w-80"
        />
        <img
          src={asUrl(floralBR)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute bottom-0 right-0 z-190 w-32 md:w-80"
        />

        <div className="absolute inset-0 flex items-center justify-center px-4 sm:px-6 lg:px-8">
          <div className="relative z-150 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 sm:gap-8 md:grid-cols-2">
            
            <div className="flex mx-auto w-full md:mx-0">
              <div className="relative">
                <img
                  src={asUrl(photoA)}
                  alt="HSQ Towers exterior"
                  className="hidden md:block lg:block h-[390px] w-[250px] object-cover border-4 border-primary"
                />
              </div>
              <div className="absolute left-[330px] -bottom-32 -translate-x-1/2">
                <div className="overflow-hidden">
                  <img
                    src={asUrl(photoB)}
                    alt="HSQ Towers rooms"
                    className="hidden md:block lg:block h-[390px] w-[250px] object-cover border-4 border-primary"
                  />
                </div>
              </div>
            </div>

          
            <div className="relative text-center px-2 sm:px-4 md:px-0">
              
              <img
                src={asUrl(crest)}
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 w-[400px] sm:w-[500px] md:w-[600px] lg:w-[700px] -translate-x-1/2 -translate-y-1/2 opacity-[0.15] sm:opacity-[0.12] md:opacity-[0.08]"
              />

             
              <p className="block md:hidden text-xs sm:text-sm font-medium tracking-wider uppercase text-primary mb-3 sm:mb-4">
                Luxury Mountain Resort
              </p>

              <h1 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-heading font-bold text-primary mb-4 sm:mb-6 leading-tight">
                Welcome to HSQ Towers
              </h1>

              <p className="text-base sm:text-lg text-muted-foreground max-w-xl sm:max-w-2xl mx-auto mb-6 sm:mb-8 leading-relaxed">
                Where Comfort Meets Luxury. At HSQ Tower, elegance meets
                convenience — the perfect stay for guests who seek charm,
                comfort, and the ideal location to explore Murree.
              </p>

              
              <div className="block md:hidden w-16 sm:w-24 h-0.5 hsq-gradient-gold mx-auto mb-6 sm:mb-8" />

              <a
                href="/about"
                className="w-full sm:w-auto md:w-auto inline-flex items-center justify-center rounded-[5px] bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-black transition hover:brightness-110"
              >
                EXPLORE MORE
              </a>
            </div>
          </div>
        </div>
      </Section> */}

      {/* <section className="py-8 sm:py-12 md:py-16 px-4 sm:px-6 lg:px-8 relative bg-white">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 w-full max-w-5xl z-40 hidden lg:block">
          <div className="rounded-2xl">
            <div className="px-3 py-3 sm:px-4 sm:py-4">
              <BookingWidget />
            </div>
          </div>
        </div>

        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp()}
          className="relative z-10 max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 items-center gap-6 sm:gap-8 mt-10"
        >
          <div className="flex-1 text-center md:text-left">
            <p className="text-sm font-medium tracking-wider uppercase hsq-gold mb-2">
              Our Story
            </p>
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold mb-4 leading-tight">
              Welcome to HSQ Tower
            </h2>
            <div className="w-16 h-1 bg-hsq-gold mx-auto md:mx-0 mb-6" />
            <p className="text-lg text-muted-foreground max-w-2xl mx-auto md:mx-0 mb-8 sm:mb-12 leading-relaxed">
              At HSQ Tower, elegance meets convenience — the perfect stay for
              guests who seek charm, comfort, and the ideal location to explore
              Murree.
            </p>
            <a
              href="#"
              className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-black transition hover:brightness-110"
            >
              Explore Our Story
            </a>
          </div>
          <div className="relative w-full max-w-md mx-auto md:max-w-none md:mx-0">
            <div className="relative overflow-hidden rounded-3xl shadow-2xl">
              <img
                src={photoA}
                alt="A stunning, full-height image of the luxury resort."
                loading="lazy"
                className="w-full h-[200px] md:h-[500px] lg:h-[500px] object-cover rounded-3xl border-4 border-hsq-gold transform transition-transform duration-500 hover:scale-105"
              />
            </div>
            <div className="absolute -bottom-6 -left-6 bg-white p-4 rounded-xl shadow-lg border border-hsq-gold/20 backdrop-blur-sm">
              <p className="text-xl sm:text-2xl font-bold font-heading text-hsq-gold">
                HSQ Towers
              </p>
              <p className="text-xs sm:text-sm text-gray-500">
                The height of luxury living
              </p>
            </div>
          </div>
        </motion.div>
      </section> */}

      {/* Reviews */}
      <LazySection>
        <Section background="muted" className="py-8 sm:py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
          >
            <SectionHeader
              eyebrow="Guest Reviews"
              title="What Our Guests Say"
              subtitle="Read about the exceptional experiences our guests have had during their stay with us."
            />
          </motion.div>

          {/* <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.3 }}
          variants={fadeUp()}
          className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
        >
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </motion.div> */}
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
            className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8"
          >
            {testimonials?.map((testimonial, index) => (
              <motion.div key={index} variants={staggerContainer(0.2, 0.1)}>
                <TestimonialCard testimonial={testimonial} />
              </motion.div>
            ))}
          </motion.div>
        </Section>
      </LazySection>

      {/* Amenities */}
      <LazySection>
        <Section className="relative overflow-hidden py-8 sm:py-12 md:py-16">
          <div className="absolute inset-0 -z-10">
            <img
              src={amenities_bg}
              alt="HSQ Towers"
              loading="lazy"
              className="h-full w-full object-cover"
            />
            <div className="absolute inset-0 bg-black/60" />
          </div>

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
              <div className="text-center flex flex-col items-center">
                <img
                  src={navIcon}
                  alt="HSQ Towers"
                  width={140}
                  height={140}
                  loading="lazy"
                  className="h-32 sm:h-40 md:h-52 w-auto hidden sm:block mb-8"
                />

                <p className="text-sm font-medium tracking-wider uppercase text-primary mb-4">
                  Hotel Amenities
                </p>

                <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-primary mb-6">
                  Hotel Guest Facilities
                </h2>

                <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                  Where Every Detail Meets Luxury
                </p>

                <a
                  href="/amenities"
                  className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-black transition hover:brightness-110"
                >
                  Learn More
                </a>
              </div>

              {/* Right: Amenities grid */}
              <div className="md:justify-self-end">
                <div className="w-full max-w-xl">
                  <AmenityGrid />
                </div>
              </div>
            </div>
          </motion.div>
        </Section>
      </LazySection>

      {/* Rooms */}
      <LazySection>
        <Section background="muted" className="py-8 sm:py-12 md:py-16">
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
          >
            <SectionHeader
              eyebrow="Accommodations"
              title="Luxury Rooms & Suites"
              subtitle="Each room is a sanctuary of comfort and elegance, designed to provide the ultimate mountain retreat experience."
            />
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 mb-8 sm:mb-12">
              {rooms?.slice(0, 3).map((room) => (
                <RoomCard key={room.id} room={room} />
              ))}
            </div>
            <div className="text-center">
              <Button variant="outline" size="lg" asChild>
                <Link to="/rooms">View All Rooms</Link>
              </Button>
            </div>
          </motion.div>
        </Section>
      </LazySection>

      {/* Restaurant */}
      <LazySection>
        <Section className="relative py-8 sm:py-12 md:py-16">
          <img
            src={asUrl(floralTL)}
            alt=""
            loading="lazy"
            className="hidden md:block lg:block pointer-events-none absolute left-0 top-0 -z-100 w-32 md:w-80"
          />
          <img
            src={asUrl(floralBR)}
            alt=""
            loading="lazy"
            className="hidden md:block lg:block pointer-events-none absolute bottom-0 right-0 -z-100 w-32 md:w-80"
          />

          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
            className="container mx-auto px-4 sm:px-6 lg:px-8"
          >
            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <div className="text-center">
                <SectionHeader
                  eyebrow="Dining Experience"
                  title="Our Restaurant"
                  subtitle="Indulge in a gourmet buffet breakfast, thoughtfully served in our sophisticated lounge or on the serene patio for a touch of open-air luxury."
                />

                <div className="max-w-3xl mx-auto">
                  <Accordion type="single" collapsible>
                    {Restaurant?.map((item, index) => (
                      <AccordionItem key={index} value={`item-${index}`}>
                        <AccordionTrigger className="text-right">
                          {item.q}
                        </AccordionTrigger>
                        <AccordionContent className="text-muted-foreground">
                          {item.a}
                        </AccordionContent>
                      </AccordionItem>
                    ))}
                  </Accordion>
                </div>
              </div>

              <div className="flex items-center justify-center">
                <img
                  src={asUrl(rightImage)}
                  alt="Elegant dining area at Our Restaurant"
                  loading="lazy"
                  className="w-full max-w-md h-[400px] sm:h-[500px] object-cover shadow-xl"
                />
              </div>
            </div>
          </motion.div>
        </Section>
      </LazySection>

      {/* Photo Gallery */}
      <LazySection>
        <Section className="relative overflow-hidden py-8 sm:py-12 md:py-16">
          {/* Background video */}
          <div className="absolute inset-0 z-[-200] pointer-events-none">
            <video
              className="block h-full w-full object-cover object-[50%_40%] sm:object-center motion-reduce:hidden"
              autoPlay
              muted
              loop
              playsInline
              preload="auto"
              poster="/images/gallery-poster.jpg"
              aria-hidden="true"
              tabIndex={-1}
            >
              <source
                src="https://pixfort-space.sfo2.cdn.digitaloceanspaces.com/wordpress/essentials/assets/minimal-demo/minimal-intro-bg-video.mp4"
                type="video/mp4"
              />
            </video>
          </div>

          <img
            src={asUrl(floralTL)}
            alt=""
            loading="lazy"
            className="hidden md:block lg:block pointer-events-none absolute right-0 top-0 -z-100 w-32 md:w-80 scale-x-[-1]"
          />

          <div className="container mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial="hidden"
              whileInView="visible"
              viewport={{ once: true, amount: 0.3 }}
              variants={fadeUp(0.2, 0.8, 30)}
            >
              <SectionHeader
                eyebrow="Photo Gallery"
                title="Photo Gallery of Our Hotel"
                subtitle="Explore the beauty and elegance of HSQ Towers through our curated collection of images."
                alignment="center"
              />
            </motion.div>

            <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
              <motion.div className="flex justify-evenly">
                <div className="w-[1000px]">
                  <PhotoCarousal />
                </div>
              </motion.div>

              <motion.div
                initial="hidden"
                whileInView="visible"
                viewport={{ once: true, amount: 0.3 }}
                variants={slideIn("right", 0.4, 0.8, 40)}
                className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8"
              >
                <img
                  src={asUrl(photogallaryLogo)}
                  alt="Photo Gallery Logo"
                  className="hidden md:block w-48 h-48 lg:w-60 lg:h-60 xl:w-80 xl:h-80"
                  loading="lazy"
                />
                <a
                  href="/amenities"
                  className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-black transition hover:brightness-110"
                >
                  View Gallery
                </a>
              </motion.div>
            </div>
          </div>
        </Section>
      </LazySection>

      {/* Location */}
      <LazySection>
        <Section className="py-8 sm:py-12 md:py-16">
          <SectionHeader
            eyebrow="Location"
            title="LOCATION"
            subtitle="Located at the heart of Pakistan's most beautiful hill station, offering cool mountain air, spectacular views, and easy access to local attractions."
          />
          <motion.div
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.3 }}
            variants={fadeUp()}
            className="bg-muted rounded-2xl p-6 sm:p-8 text-center"
          >
            <h3 className="text-lg sm:text-xl font-heading font-semibold text-primary mb-3 sm:mb-4">
              Kashmir Point, Murree
            </h3>
            <p className="text-sm sm:text-base text-muted-foreground">
              Experience the perfect blend of natural beauty and luxury
              hospitality in the refreshing mountain climate of Murree.
            </p>
          </motion.div>
        </Section>
      </LazySection>
    </>
  );
};

export default Index;

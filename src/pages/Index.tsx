import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { RoomCard } from "@/components/cards/RoomCard";
import { OfferCard } from "@/components/cards/OfferCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AmenityGrid } from "@/components/AmenityGrid";
import { Button } from "@/components/ui/enhanced-button";
import amenities_bg from "@/assets/amenities_bg.svg";
import navIcon from "@/assets/amenities_logo.svg";
import floralTL from "@/assets/BG/fower_01.svg";
import floralBR from "@/assets/BG/fower_02.svg";
import crest from "@/assets/BG/HSQ_LOGO_ab.svg";
import photoA from "@/assets/BG/hs1_01.svg";
import photoB from "@/assets/BG/hs1_02.svg";
import rightImage from "@/assets/BG/dining.svg";
import photogallary from "@/assets/BG/photogallary.svg";
import photogallaryLogo from "@/assets/BG/photoGallaryLogo.svg";
import PhotoCarousal from "@/components/PhotoCarousal";

import { useEffect, useState } from "react";
import Restaurant from "@/data/restaurant.json";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { Meteors } from "@/components/magicui/meteors";
import { Particles } from "@/components/magicui/particles";
import {
  useRoomsData,
  useOffersData,
  useTestimonialsData,
  useFAQData,
  useDiningData,
  useSpaData,
} from "@/hooks/useData";
import { Link } from "react-router-dom";
import { BookingWidget } from "@/components/BookingWidget";

const Index = () => {
  const { data: rooms } = useRoomsData();
  const { data: testimonials } = useTestimonialsData();

  const asUrl = (img: any) => (typeof img === "string" ? img : img?.src || "");

  return (
    <>
      <SEO />
      {/* Home */}
      <section id="hero-section">
        <Hero />
      </section>

      <Section className="relative h-[500px] sm:h-[600px] md:h-[660px] py-8 sm:py-12 md:py-52">
        <div className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 w-full max-w-5xl z-40 hidden lg:block">
          <div className="rounded-2xl">
            <div className="px-3 py-3 sm:px-4 sm:py-4">
              <BookingWidget />
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 top-3 sm:top-5 z-200 -translate-x-1/2">
          <img
            src={crest}
            alt="HSQ Towers"
            className="lg:block h-20 sm:h-24 md:h-32 lg:h-[600px] w-auto opacity-100 drop-shadow-lg"
          />
        </div>

        {/* Decorative florals */}
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
            {/* LEFT - Images */}
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

            {/* RIGHT - Text content */}
            <div className="relative text-center px-2 sm:px-4 md:px-0 ">
              {/* Mobile Eyebrow Text */}
              <p className="block md:hidden text-xs sm:text-sm font-medium tracking-wider uppercase hsq-gold mb-3 sm:mb-4">
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

              <a
                href="/about"
                className="w-full sm:w-auto md:w-auto inline-flex items-center justify-center rounded-[5px] bg-primary px-6 sm:px-8 py-3 sm:py-4 text-sm font-semibold text-black transition hover:brightness-110"
              >
                EXPLORE MORE
              </a>
            </div>
            {/* Mobile Decorative Line */}
              <div className="block md:hidden w-16 sm:w-24 h-0.5 hsq-gradient-gold mx-auto mt-6 sm:mt-8" />
          </div>
        </div>
      </Section>

      {/* Reviews */}
      <Section background="muted" className="py-8 sm:py-12 md:py-16">
        <SectionHeader
          eyebrow="Guest Reviews"
          title="What Our Guests Say"
          subtitle="Read about the exceptional experiences our guests have had during their stay with us."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>

      {/* Amenities */}
      <Section className="relative overflow-hidden py-8 sm:py-12 md:py-16">
        <div className="absolute inset-0 -z-10">
          <img
            src={amenities_bg}
            alt="HSQ Towers"
            className="h-full w-full object-cover"
          />
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 items-center gap-8 sm:gap-12 md:grid-cols-2">
            <div className="text-center flex flex-col items-center">
              <img
                src={navIcon}
                alt="HSQ Towers"
                width={140}
                height={140}
                className="h-32 sm:h-40 md:h-52 w-auto hidden sm:block mb-8"
              />

              <p className="text-sm font-medium tracking-wider uppercase hsq-gold mb-4">
                Hotel Amenities
              </p>

              <h2 className="text-3xl sm:text-4xl lg:text-5xl font-heading font-bold text-white mb-6">
                Hotel Guest Facilities
              </h2>

              <p className="text-lg text-white/80 max-w-2xl mx-auto mb-8">
                Where Every Detail Meets Luxury
              </p>

              <a
                href="/amenities"
                className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-110"
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
        </div>
      </Section>

      {/* Rooms */}
      <Section background="muted" className="py-8 sm:py-12 md:py-16">
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
      </Section>

      {/* Restaurant */}
      <Section className="relative py-8 sm:py-12 md:py-16">
        <img
          src={asUrl(floralTL)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute left-0 top-0 -z-100 w-32 md:w-80"
        />
        <img
          src={asUrl(floralBR)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute bottom-0 right-0 -z-100 w-32 md:w-80"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
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
                className="w-full max-w-md h-[400px] sm:h-[500px] object-cover shadow-xl"
              />
            </div>
          </div>
        </div>
      </Section>

      {/* Photo Gallery */}
      <Section className="relative py-8 sm:py-12 md:py-16">
        <img
          src={asUrl(floralTL)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute right-0 top-0 -z-100 w-32 md:w-80 scale-x-[-1]"
        />

        <div className="container mx-auto px-4 sm:px-6 lg:px-8">
          <SectionHeader
            eyebrow="Photo Gallery"
            title="Photo Gallery of Our Hotel"
            subtitle="Explore the beauty and elegance of HSQ Towers through our curated collection of images."
            alignment="left"
          />

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 sm:gap-12 items-center">
            {/* First Column - Carousel */}
            <div className="flex justify-center">
              <PhotoCarousal />
            </div>

            {/* Second Column - Logo and Button */}
            <div className="flex flex-col items-center justify-center h-full space-y-6 sm:space-y-8">
              <img
                src={asUrl(photogallaryLogo)}
                alt="Photo Gallery Logo"
                className="hidden md:block w-48 h-48 lg:w-60 lg:h-60 xl:w-80 xl:h-80"
              />
              <a
                href="/amenities"
                className="inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-110"
              >
                View Gallery
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Location */}
      <Section className="py-8 sm:py-12 md:py-16">
        <SectionHeader
          eyebrow="Location"
          title="LOCATION"
          subtitle="Located at the heart of Pakistan's most beautiful hill station, offering cool mountain air, spectacular views, and easy access to local attractions."
        />
        <div className="bg-muted rounded-2xl p-6 sm:p-8 text-center">
          <h3 className="text-lg sm:text-xl font-heading font-semibold mb-3 sm:mb-4">
            Kashmir Point, Murree
          </h3>
          <p className="text-sm sm:text-base text-muted-foreground">
            Experience the perfect blend of natural beauty and luxury
            hospitality in the refreshing mountain climate of Murree.
          </p>
        </div>
      </Section>

      {/* Spa */}
      {/* <Section>
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div className="relative order-2 lg:order-1">
            <img
              src={spaImage}
              alt="Luxury spa treatment"
              className="rounded-2xl hsq-shadow-luxury w-full h-96 object-cover"
            />
          </div>
          <div className="order-1 lg:order-2">
            <SectionHeader
              eyebrow="Wellness & Rejuvenation"
              title="Spa & Wellness"
              subtitle={spa?.overview}
              alignment="left"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/spa">View Treatments</Link>
            </Button>
          </div>
        </div>
      </Section> */}

      {/* Offers */}
      {/* <Section background="muted">
        <SectionHeader
          eyebrow="Special Offers"
          title="Exclusive Packages"
          subtitle="Discover our carefully curated packages designed to enhance your luxury mountain experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
          {offers?.map((offer) => (
            <OfferCard key={offer.id} offer={offer} />
          ))}
        </div>
        <div className="text-center">
          <Button variant="hero" size="lg" asChild>
            <Link to="/offers">View All Offers</Link>
          </Button>
        </div>
      </Section> */}

      {/* FAQ */}
      {/* <Section>
        <SectionHeader
          eyebrow="Questions & Answers"
          title="Frequently Asked Questions"
          subtitle="Find answers to common questions about your stay at HSQ Hotels."
        />
        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible>
            {faq?.map((item, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left">
                  {item.q}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground">
                  {item.a}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>
      </Section> */}

      {/* CTA */}
      {/* <Section background="gradient-dark" padding="xl">
        <div className="text-center">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Begin Your Luxury Mountain Experience
          </h2>
          <p className="text-lg text-gray-200 mb-8 max-w-2xl mx-auto">
            Book your stay at HSQ Hotels and discover why we're Murree's premier
            luxury destination.
          </p>
          <Button variant="hero" size="xl">
            Book Your Stay Now
          </Button>
        </div>
      </Section> */}
    </>
  );
};

export default Index;

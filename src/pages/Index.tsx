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
import photoA from "@/assets/BG/hs1_01.svg"; // back image
import photoB from "@/assets/BG/hs1_02.svg"; // back image
import rightImage from "@/assets/BG/dining.svg";
import photogallary from "@/assets/BG/photogallary.svg";
import photogallaryLogo from "@/assets/BG/photoGallaryLogo.svg";

import { useEffect, useState } from "react";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import {
  useRoomsData,
  useOffersData,
  useTestimonialsData,
  useFAQData,
  useDiningData,
  useSpaData,
} from "@/hooks/useData";
import { Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import spaImage from "@/assets/spa-treatment.jpg";
import { BookingWidget } from "@/components/BookingWidget";
// import { RestaurantSection } from "@/components/DiningData";

const Index = () => {
  const { data: rooms } = useRoomsData();
  const { data: offers } = useOffersData();
  const { data: testimonials } = useTestimonialsData();
  const { data: faq } = useFAQData();
  const { data: dining } = useDiningData();
  const { data: spa } = useSpaData();

  const asUrl = (img: any) => (typeof img === "string" ? img : img?.src || "");

  return (
    <>
      <SEO />
      <section id="hero-section">
        <Hero />
      </section>
      <Section className="relative h-[660px] py-20 md:py-52">
        <div
          className="absolute left-1/2 top-0 -translate-x-1/2 -translate-y-1/3 sm:-translate-y-1/2 
            w-full max-w-5xl z-40 hidden lg:block"
        >
          <div className="rounded-2xl ">
            <div className="px-3 py-3 sm:px-4 sm:py-4">
              <BookingWidget />
            </div>
          </div>
        </div>

        {/* LOGO */}
        <div className="absolute left-1/2 top-5 z-200 -translate-x-1/2">
          <img
            src={crest}
            alt="HSQ Towers"
            className="h-20 w-auto md:h-[600px] opacity-50"
          />
        </div>

        {/* Decorative florals */}
        <img
          src={asUrl(floralTL)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute left-0 top-0 z-190 w-32 md:w-80 "
        />
        <img
          src={asUrl(floralBR)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute bottom-0 right-0 z-190 w-32 md:w-80"
        />

        <div className="absolute inset-0 flex items-center justify-center px-12 sm:px-20 ">
          <div className="relative z-150 mx-auto grid w-full max-w-5xl grid-cols-1 items-center gap-6 md:grid-cols-2 md:gap-8">
            {/* LEFT - Images */}
            <div className="flex mx-auto w-full md:mx-0 ">
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
            <div className="relative text-center">
              <img
                src={asUrl(crest)}
                alt=""
                className="pointer-events-none absolute left-1/2 top-1/2 -z-10 hidden w-[520px] -translate-x-1/2 -translate-y-1/2 opacity-[0.08] md:block"
              />

              <h3 className="text-3xl md:text-4xl font-serif font-semibold text-primary">
                Welcome to Hsq Towers
              </h3>

              <p className="mt-4 text-xl font-serif text-black">
                Where Comfort Meets Luxury
              </p>

              <p className="mt-4 mx-auto max-w-prose text-[15px] leading-7 text-black/80">
                At HSQ Tower, elegance meets convenience — the perfect stay for
                guests who seek charm, comfort, and the ideal location to
                explore Murree.
              </p>

              <a
                href="/about"
                className="mt-6 w-full md:w-auto inline-flex items-center justify-center rounded-[5px] bg-primary px-6 py-3 text-sm font-semibold text-black transition hover:brightness-110"
              >
                EXPLORE MORE
              </a>
            </div>
          </div>
        </div>
      </Section>
      {/* rooms */}
      <Section background="muted">
        <SectionHeader
          eyebrow="Accommodations"
          title="Luxury Rooms & Suites"
          subtitle="Each room is a sanctuary of comfort and elegance, designed to provide the ultimate mountain retreat experience."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8 mb-12">
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

      {/* Amenities */}
      <Section className="relative overflow-hidden py-14 md:py-20 h-auto">
        <div className="absolute inset-0 -z-10">
          <img
            src={amenities_bg}
            alt="HSQ Towers"
            className="h-full w-full object-cover"
          />
          
          <div className="absolute inset-0 bg-black/60" />
        </div>

        <div className="mx-auto mt-24 grid max-w-7xl grid-cols-1 items-center gap-10 px-4 sm:px-6 lg:px-8 md:grid-cols-2">
          <div className="text-center flex flex-col items-center">
            <img
              src={navIcon}
              alt="HSQ Towers"
              width={140}
              height={140}
              className="h-52 w-auto hidden md:block"
            />

            <h2 className="mt-6 text-3xl font-extrabold leading-tight text-white md:text-4xl">
              Where Comfort Meets Luxury
              <br /> Hotel Guest Facilities
            </h2>

            <a
              href="/amenities"
              className="mt-8 inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-110"
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
      </Section>

      <Section className="relative py-20 md:py-20">
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

        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center max-w-screen-lg mx-auto z-100">
          <div className="text-center">
            <h2 className="text-4xl md:text-5xl font-serif font-bold text-bg-primary mb-6">
              Our Restaurant
            </h2>

            <p className="text-lg text-gray-700 italic max-w-prose mx-auto mb-10">
              “Indulge in a gourmet buffet breakfast, thoughtfully served in our
              sophisticated lounge or on the serene patio for a touch of
              open-air luxury.”
            </p>
          </div>

          <div className="flex items-center justify-center">
            <img
              src={asUrl(rightImage)}
              alt="Elegant dining area at Our Restaurant"
              className="w-80 h-[500px] object-cover shadow-xl"
            />
          </div>
        </div>
      </Section>

      <Section className="relative py-20 md:py-20 ">
        <img
          src={asUrl(floralTL)}
          alt=""
          className="hidden md:block lg:block pointer-events-none absolute right-0 top-0 -z-100 w-32 md:w-80 scale-x-[-1] "
        />

        <div className="flex flex-col place-items-start justify-center h-full z-[100]">
          <div className=" ml-24 mb-6  ">
            <h4 className="text-4xl md:text-[11px] font-serif font-bold text-bg-primary ">
              WELLCOME TO OUR PHOTO GALLARY
            </h4>
            <span className="text-4xl md:text-2xl font-serif font-bold text-bg-primary mb-3 ">
              Photo Gallery of Our Hotel
            </span>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-20 items-center max-w-screen-lg mx-auto p-0 z-100 ">
            <div className="flex items-center justify-center">
              <img
                src={asUrl(photogallary)}
                alt="Elegant dining area at Our Restaurant"
                className="w-full h-[382px] object-cover shadow-xl rounded-tl-[80px] rounded-br-[80px]"
              />
            </div>

            <div className="flex flex-col items-center justify-center h-full">
              <img
                src={asUrl(photogallaryLogo)}
                alt="Elegant dining area at Our Restaurant"
                className="w-60 h-60"
              />
              <a
                href="/amenities"
                className="mt-1 inline-flex rounded-[5px] bg-primary px-6 py-3 font-semibold text-neutral-900 transition hover:brightness-110"
              >
                View Gallary
              </a>
            </div>
          </div>
        </div>
      </Section>

      {/* Spa */}
      <Section>
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
      </Section>
      {/* Offers */}
      <Section background="muted">
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
      </Section>
      {/* Location */}
      <Section>
        <SectionHeader
          eyebrow="Location"
          title="Murree Mountains"
          subtitle="Located at the heart of Pakistan's most beautiful hill station, offering cool mountain air, spectacular views, and easy access to local attractions."
        />
        <div className="bg-muted rounded-2xl p-8 text-center">
          <h3 className="text-xl font-heading font-semibold mb-4">
            Kashmir Point, Murree
          </h3>
          <p className="text-muted-foreground">
            Experience the perfect blend of natural beauty and luxury
            hospitality in the refreshing mountain climate of Murree.
          </p>
        </div>
      </Section>
      {/* Testimonials */}
      <Section background="muted">
        <SectionHeader
          eyebrow="Guest Reviews"
          title="What Our Guests Say"
          subtitle="Read about the exceptional experiences our guests have had during their stay with us."
        />
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {testimonials?.map((testimonial, index) => (
            <TestimonialCard key={index} testimonial={testimonial} />
          ))}
        </div>
      </Section>
      {/* FAQ */}
      <Section>
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
      </Section>
      {/* CTA */}
      <Section background="gradient-dark" padding="xl">
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
      </Section>
    </>
  );
};

export default Index;

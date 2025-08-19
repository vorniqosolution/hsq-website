import { SEO } from "@/components/SEO";
import { Hero } from "@/components/Hero";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { RoomCard } from "@/components/cards/RoomCard";
import { OfferCard } from "@/components/cards/OfferCard";
import { TestimonialCard } from "@/components/cards/TestimonialCard";
import { AmenityGrid } from "@/components/AmenityGrid";
import { Button } from "@/components/ui/enhanced-button";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { useRoomsData, useOffersData, useTestimonialsData, useFAQData, useDiningData, useSpaData } from "@/hooks/useData";
import { Link } from "react-router-dom";
import restaurantImage from "@/assets/restaurant.jpg";
import spaImage from "@/assets/spa-treatment.jpg";

const Index = () => {
  const { data: rooms } = useRoomsData();
  const { data: offers } = useOffersData();
  const { data: testimonials } = useTestimonialsData();
  const { data: faq } = useFAQData();
  const { data: dining } = useDiningData();
  const { data: spa } = useSpaData();

  return (
    <>
      <SEO />
      
      {/* Hero Section */}
      <Hero />

      {/* Brand Intro */}
      <Section padding="lg">
        <div className="text-center max-w-3xl mx-auto">
          <h2 className="text-3xl sm:text-4xl font-heading font-bold mb-6">
            Welcome to HSQ Hotels Murree
          </h2>
          <p className="text-lg text-muted-foreground mb-8">
            Nestled in the breathtaking mountains of Murree, HSQ Hotels offers an unparalleled luxury experience 
            where timeless elegance meets modern comfort. Every detail has been crafted to create memories that last a lifetime.
          </p>
          <div className="w-24 h-0.5 hsq-gradient-gold mx-auto" />
        </div>
      </Section>

      {/* Featured Rooms */}
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
      <Section>
        <SectionHeader
          eyebrow="Experience"
          title="World-Class Amenities"
          subtitle="Discover the exceptional services and facilities that make HSQ Hotels your perfect mountain getaway."
        />
        <AmenityGrid />
      </Section>

      {/* Dining */}
      <Section background="muted">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
          <div>
            <SectionHeader
              eyebrow="Culinary Excellence"
              title="Dining & Bar"
              subtitle={dining?.overview}
              alignment="left"
            />
            <Button variant="outline" size="lg" asChild>
              <Link to="/dining">Explore Dining</Link>
            </Button>
          </div>
          <div className="relative">
            <img 
              src={restaurantImage} 
              alt="Fine dining restaurant" 
              className="rounded-2xl hsq-shadow-luxury w-full h-96 object-cover"
            />
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
          <h3 className="text-xl font-heading font-semibold mb-4">Kashmir Point, Murree</h3>
          <p className="text-muted-foreground">
            Experience the perfect blend of natural beauty and luxury hospitality in the refreshing mountain climate of Murree.
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
                <AccordionTrigger className="text-left">{item.q}</AccordionTrigger>
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
            Book your stay at HSQ Hotels and discover why we're Murree's premier luxury destination.
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

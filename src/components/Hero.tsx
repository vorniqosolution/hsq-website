import { Button } from "@/components/ui/button";
import { Container } from "./layout/Container";
import { BookingWidget } from "./BookingWidget";
import heroImage from "@/assets/hero-hotel.jpg";

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Background Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center bg-no-repeat"
        style={{ backgroundImage: `url(${heroImage})` }}
      >
        <div className="absolute inset-0 bg-black/40" />
      </div>

      {/* Content */}
      <Container className="relative z-10 text-center text-white">
        <div className="max-w-4xl mx-auto">
          <h1 className="text-4xl sm:text-5xl lg:text-7xl font-heading font-bold mb-6 leading-tight">
            Luxury Redefined in the 
            <span className="block hsq-gold">Mountains of Murree</span>
          </h1>
          <p className="text-lg sm:text-xl lg:text-2xl mb-8 text-gray-200 max-w-2xl mx-auto">
            Experience unparalleled elegance and breathtaking mountain views at Pakistan's premier luxury resort
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
            <Button 
              size="lg" 
              className="hsq-gradient-gold text-white font-semibold px-8 py-4 text-lg hover:opacity-90 hsq-transition"
            >
              Book Your Stay
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white hover:text-hsq-black px-8 py-4 text-lg hsq-transition"
            >
              Explore Rooms
            </Button>
          </div>
        </div>

        {/* Booking Widget */}
        <div className="max-w-4xl mx-auto">
          <BookingWidget />
        </div>
      </Container>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 text-white animate-bounce">
        <div className="w-6 h-10 border-2 border-white rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white rounded-full mt-2 animate-pulse" />
        </div>
      </div>
    </section>
  );
};
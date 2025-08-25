import { useEffect, useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, Instagram, Globe, User, Phone } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";
import { Container } from "./Container";
import { BookingWidget } from "../BookingWidget";
import { cn } from "@/lib/utils";
import navIcon from "@/assets/hsq_logo.png";

// Primary navigation (desktop)
const navPrimary = [
  { name: "Weather", href: "/weather" },
  { name: "Gallery", href: "/gallery" },
  { name: "Decor", href: "/decor" },
  { name: "3D", href: "/3d" },
  { name: "Reviews", href: "/reviews" },
  { name: "FAQs", href: "/faqs" },
  { name: "Rooms", href: "/rooms" },
];

// Social links (shown inside the pill on desktop, in drawer on mobile)
const navSocial = [
  { label: "Instagram", href: "https://instagram.com/", external: true, Icon: Instagram },
  { label: "Website", href: "https://hsq.example.com", external: true, Icon: Globe },
  { label: "Account", href: "/account", external: false, Icon: User },
];

export const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const location = useLocation();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };

    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={cn(
        "fixed inset-x-0 top-0 z-50 h-20 duration-300",
        isScrolled ? "bg-transparent" : "bg-transparent"
      )}
    >
      <Container className="relative h-full">
        <div className="flex items-center h-full">
          {/* Left: Logo */}
          <Link to="/" className="shrink-0 flex items-center">
            <img
              src={navIcon}
              alt="HSQ Towers"
              className="h-12 w-auto object-contain"
            />
          </Link>

          {/* Right: Nav pill (desktop only) */}
          <div className="ml-auto hidden lg:block">
            <div className="rounded-full border border-white/10 bg-black/55 backdrop-blur-md shadow-[0_10px_30px_rgba(0,0,0,0.35)]">
              <nav className="flex items-center gap-1 pl-2 pr-2 py-2">
                {navPrimary.map((item) => {
                  const active = location.pathname === item.href;
                  return (
                    <Link
                      key={item.name}
                      to={item.href}
                      className={cn(
                        "px-3 py-1.5 rounded-full uppercase tracking-wider text-[12px] font-medium transition-colors",
                        active ? "hsq-gold" : "text-white/90 hover:text-white"
                      )}
                    >
                      {item.name}
                    </Link>
                  );
                })}

                {/* Book Now chip */}
                <div className="pl-1">
                  <Link to="/book">
                    <Button
                      size="sm"
                      className="rounded-full h-8 px-4 text-[12px] font-semibold hsq-gradient-gold text-white hover:opacity-90"
                    >
                      Book Now
                    </Button>
                  </Link>
                </div>

                {/* Divider before socials */}
                <div className="mx-1 h-6 w-px bg-primary" />

                {/* Social icons inside the pill */}
                <div className="flex items-center gap-1 pr-1">
                  {navSocial.map(({ Icon, href, label, external }) =>
                    external ? (
                      <a
                        key={label}
                        href={href}
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label={label}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white/90 bg-black/30 hover:bg-black/50 hover:text-white hover:border-white/60 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </a>
                    ) : (
                      <Link
                        key={label}
                        to={href}
                        aria-label={label}
                        className="inline-flex items-center justify-center w-8 h-8 rounded-full border border-white/30 text-white/90 bg-black/30 hover:bg-black/50 hover:text-white hover:border-white/60 transition-colors"
                      >
                        <Icon className="w-4 h-4" />
                      </Link>
                    )
                  )}
                </div>
              </nav>
            </div>
          </div>

          {/* Mobile hamburger pinned far right */}
          <div className="ml-auto lg:hidden -mr-2 sm:mr-0">
            <Sheet open={isMobileMenuOpen} onOpenChange={setIsMobileMenuOpen}>
              <SheetTrigger asChild>
                <Button variant="ghost" size="sm" className="lg:hidden">
                  <Menu className="w-5 h-5" />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80">
                <div className="flex flex-col space-y-6 mt-8">
                  <div className="text-xl font-heading font-bold hsq-gold">
                    HSQ Hotels
                  </div>

                  <nav className="flex flex-col space-y-3 pt-2">
                    {navPrimary.map((item) => (
                      <Link
                        key={item.name}
                        to={item.href}
                        onClick={() => setIsMobileMenuOpen(false)}
                        className={cn(
                          "text-lg font-medium hsq-transition",
                          location.pathname === item.href 
                            ? "hsq-gold" 
                            : "text-foreground hover:hsq-gold"
                        )}
                      >
                        {item.name}
                      </Link>
                    ))}
                  </nav>

                  {/* Booking widget in mobile drawer */}
                  {/* <div className="pt-6 border-t">
                    <BookingWidget />
                  </div> */}
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </Container>
    </header>
  );
};

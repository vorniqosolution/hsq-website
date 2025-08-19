import { Link } from "react-router-dom";
import { Facebook, Instagram, Twitter, MapPin, Phone, Mail } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Container } from "./Container";
import { useSiteData } from "@/hooks/useData";

const footerLinks = {
  hotel: [
    { name: "Rooms & Suites", href: "/rooms" },
    { name: "Dining", href: "/dining" },
    { name: "Spa & Wellness", href: "/spa" },
    { name: "Gallery", href: "/gallery" },
  ],
  services: [
    { name: "Special Offers", href: "/offers" },
    { name: "Events & Meetings", href: "/contact" },
    { name: "Airport Transfer", href: "/contact" },
    { name: "Concierge", href: "/contact" },
  ],
  info: [
    { name: "About HSQ", href: "/about" },
    { name: "Contact Us", href: "/contact" },
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms & Conditions", href: "/terms" },
  ],
};

export const Footer = () => {
  const { data: siteData } = useSiteData();

  return (
    <footer className="bg-hsq-black text-hsq-white">
      <Container>
        <div className="pt-16 pb-8">
          {/* Main Footer Content */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 mb-12">
            {/* Brand & Contact */}
            <div className="lg:col-span-1">
              <div className="mb-6">
                <div className="text-2xl font-heading font-bold hsq-gold mb-2">
                  HSQ Hotels
                </div>
                <p className="text-sm text-gray-300">
                  Luxury mountain retreat in the heart of Murree
                </p>
              </div>
              
              {siteData && (
                <div className="space-y-3 text-sm">
                  <div className="flex items-start space-x-3">
                    <MapPin className="w-4 h-4 mt-0.5 text-primary shrink-0" />
                    <span className="text-gray-300">{siteData.address}</span>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Phone className="w-4 h-4 text-primary shrink-0" />
                    <a href={`tel:${siteData.phone}`} className="text-gray-300 hover:hsq-gold hsq-transition">
                      {siteData.phone}
                    </a>
                  </div>
                  <div className="flex items-center space-x-3">
                    <Mail className="w-4 h-4 text-primary shrink-0" />
                    <a href={`mailto:${siteData.email}`} className="text-gray-300 hover:hsq-gold hsq-transition">
                      {siteData.email}
                    </a>
                  </div>
                </div>
              )}
            </div>

            {/* Hotel Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Hotel</h3>
              <ul className="space-y-2">
                {footerLinks.hotel.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-gray-300 hover:hsq-gold hsq-transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Services Links */}
            <div>
              <h3 className="font-semibold text-white mb-4">Services</h3>
              <ul className="space-y-2">
                {footerLinks.services.map((link) => (
                  <li key={link.name}>
                    <Link 
                      to={link.href} 
                      className="text-sm text-gray-300 hover:hsq-gold hsq-transition"
                    >
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Newsletter & Social */}
            <div>
              <h3 className="font-semibold text-white mb-4">Stay Connected</h3>
              <p className="text-sm text-gray-300 mb-4">
                Subscribe for exclusive offers and updates
              </p>
              <div className="flex space-x-2 mb-6">
                <Input 
                  type="email" 
                  placeholder="Your email"
                  className="bg-hsq-graphite border-gray-600 text-white placeholder-gray-400"
                />
                <Button size="sm" className="hsq-gradient-gold text-white">
                  Subscribe
                </Button>
              </div>
              
              {siteData?.social && (
                <div className="flex space-x-4">
                  {siteData.social.facebook && (
                    <a 
                      href={siteData.social.facebook}
                      className="text-gray-300 hover:hsq-gold hsq-transition"
                      aria-label="Facebook"
                    >
                      <Facebook className="w-5 h-5" />
                    </a>
                  )}
                  {siteData.social.instagram && (
                    <a 
                      href={siteData.social.instagram}
                      className="text-gray-300 hover:hsq-gold hsq-transition"
                      aria-label="Instagram"
                    >
                      <Instagram className="w-5 h-5" />
                    </a>
                  )}
                  {siteData.social.twitter && (
                    <a 
                      href={siteData.social.twitter}
                      className="text-gray-300 hover:hsq-gold hsq-transition"
                      aria-label="Twitter"
                    >
                      <Twitter className="w-5 h-5" />
                    </a>
                  )}
                </div>
              )}
            </div>
          </div>

          {/* Bottom Bar */}
          <div className="border-t border-gray-800 pt-8">
            <div className="flex flex-col sm:flex-row justify-between items-center space-y-4 sm:space-y-0">
              <p className="text-sm text-gray-400">
                {siteData?.copyright || "© 2024 HSQ Hotels. All rights reserved."}
              </p>
              <div className="flex space-x-6">
                <Link to="/privacy" className="text-sm text-gray-400 hover:hsq-gold hsq-transition">
                  Privacy Policy
                </Link>
                <Link to="/terms" className="text-sm text-gray-400 hover:hsq-gold hsq-transition">
                  Terms & Conditions
                </Link>
              </div>
            </div>
          </div>
        </div>
      </Container>
    </footer>
  );
};
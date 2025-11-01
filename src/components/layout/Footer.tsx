// components/Footer.tsx
import { Mail, Phone, MapPin, Clock, Instagram, Facebook } from "lucide-react";
import { PiTiktokLogo } from "react-icons/pi";

// ---- Local assets (swap paths to yours) ----
import logo from "@/assets/hsq_logo.webp";
import footerBg from "@/assets/footerbg.webp";

import visa from "@/assets/Payment/visa.webp";
import mastercard from "@/assets/Payment/master-card.webp";
import dsc from "@/assets/Payment/discover.webp";
import amex from "@/assets/Payment/american.webp";

// Some bundlers import images as strings, others as { src: string }
const asUrl = (img: any): string =>
  typeof img === "string" ? img : img?.src || "";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer
      className="relative text-white"
      style={{
        backgroundImage: `url(${asUrl(footerBg)})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* dark overlay so text pops */}
      <div className="absolute  inset-0 bg-black/20" aria-hidden />

      <div className="relative  mx-auto max-w-7xl px-6 py-12 md:py-16">
        {/* Top grid */}
        <div className="grid grid-cols-1 gap-10 md:grid-cols-4">
          {/* Brand / description */}
          <div className="space-y-5">
            <img
              src={asUrl(logo)}
              alt="HSQ Towers"
              className="h-16 w-auto"
              loading="lazy"
            />
            <p className="max-w-sm text-sm leading-relaxed text-white/80">
              Welcome to HSQ Towers, a haven of style and elegance. Enjoy modern
              comforts, exceptional service, and a stay that feels like
              home—with grandeur.
            </p>

            {/* Payment methods */}
            <div className="pt-2">
              <p className="mb-2 text-xs font-semibold tracking-wide text-primary">
                Accepted payment methods
              </p>
              <div className="flex items-center gap-3">
                <img
                  src={asUrl(visa)}
                  alt="Visa"
                  className="h-6 w-auto"
                  loading="lazy"
                />
                <img
                  src={asUrl(mastercard)}
                  alt="Mastercard"
                  className="h-6 w-auto"
                  loading="lazy"
                />
                <img
                  src={asUrl(amex)}
                  alt="Amex"
                  className="h-6 w-auto"
                  loading="lazy"
                />
                <img
                  src={asUrl(dsc)}
                  alt="Amex"
                  className="h-6 w-auto"
                  loading="lazy"
                />
              </div>
            </div>
          </div>

          {/* For Customers */}
          <div>
            <h4 className="mb-4 text-sm poppins-bold uppercase tracking-wide text-primary">
              For Customers
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <a className="hover:text-primary" href="/about">
                  About Hsq Towers
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/support">
                  Customer Care/help
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/terms">
                  Terms & Conditions
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/faqs">
                  FAQS
                </a>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h4 className="mb-4 text-sm poppins-bold uppercase tracking-wide text-primary">
              Other Links
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li>
                <a className="hover:text-primary" href="/about">
                  About Hotel
                </a>
              </li>
              <li>
                <a className="hover:text-primary" href="/terms">
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="mb-4 text-sm poppins-bold uppercase tracking-wide text-primary">
              Contact Us
            </h4>
            <ul className="space-y-3 text-sm text-white/85">
              <li className="flex items-start gap-3">
                <MapPin className="mt-0.5 h-4 w-4 text-primary" />
                Hsq towers, Main Jhika Gali, Murree,
                <br />
                Rawalpindi, Punjab
              </li>
              <li className="flex items-center gap-3">
                <Mail className="h-4 w-4 text-primary" />
                <a
                  className="hover:text-primary"
                  href="mailto:hsqtowers@gmail.com"
                >
                  hsqtower@gmail.com
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Phone className="h-4 w-4 text-primary" />
                <a className="hover:text-primary" href="tel:+923300049479">
                  +92 330 004 9479
                </a>
              </li>
              <li className="flex items-center gap-3">
                <Clock className="h-4 w-4 text-primary" />
                24/7 Customer Service
              </li>
            </ul>

            {/* Socials */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {[
                {
                  Icon: Instagram,
                  href: "https://www.instagram.com/hsqtowers/",
                },
                {
                  Icon: Facebook,
                  href: "https://www.facebook.com/hsq.towers/",
                },
                {
                  Icon: PiTiktokLogo,
                  href: "https://www.tiktok.com/@hsqtowers",
                },
              ].map(({ Icon, href }, i) => (
                <a
                  key={i}
                  href={href}
                  className="inline-flex h-9 w-9 items-center justify-center rounded-full bg-primary text-black transition hover:brightness-110"
                  aria-label="social"
                >
                  <Icon className="h-4 w-4" />
                </a>
              ))}
            </div>

            <p className="mt-6 text-[11px] text-white/70">
              Designed and developed by{" "}
              <span className="text-primary">Vorniqo solutions</span>
            </p>
          </div>
        </div>
      </div>
      <div className="flex justify-end">
        {/* <p className="text-end text-sm">
          Designed and developed by Vorniqo solutions
        </p> */}
      </div>
      {/* Bottom bar */}
      <div className="relative border-t border-white/10 bg-black">
        <div className="mx-auto max-w-7xl px-6 py-3 text-center text-xs text-white/80">
          Vorniqo solutions © {year}. All Rights Reserved
        </div>
      </div>
    </footer>
  );
}

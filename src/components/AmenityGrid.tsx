// Local icons
import gym from "@/assets/Logos/gym.png";
import wifi from "@/assets/Logos/wifi.png";
import breakfast from "@/assets/Logos/breakfast.png";
import laundry from "@/assets/Logos/laundry.png";
import conference from "@/assets/Logos/confrence.png";
import parking from "@/assets/Logos/parking.png";

// handle string vs { src } imports across bundlers
const asUrl = (img: any): string => (typeof img === "string" ? img : img?.src || "");

type AmenityItem = { key: string; label: string; icon: string };

// Define once, in display order
const AMENITY_ITEMS: AmenityItem[] = [
  { key: "fitness-center", label: "Fitness Center", icon: asUrl(gym) },
  { key: "wifi", label: "Free Wifi", icon: asUrl(wifi) },
  { key: "free-breakfast", label: "Free Breakfast", icon: asUrl(breakfast) },
  { key: "laundry-service", label: "Laundry Service", icon: asUrl(laundry) },
  { key: "conference-hall", label: "Conference Hall", icon: asUrl(conference) },
  { key: "free-parking", label: "Free Parking", icon: asUrl(parking) },
];

export const AmenityGrid = () => {
  return (
    <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
      {AMENITY_ITEMS.map((item) => (
        <div 
          key={item.key} 
          className="group relative rounded-xl border border-white/60 bg-white/0 backdrop-blur-[1px] px-6 py-8 text-center shadow-[0_0_0_1px_rgba(255,255,255,0.05)_inset] transition-all duration-300 hover:border-white hover:bg-primary/50"
        >
          <div className="flex items-center justify-center">
            <img 
              src={item.icon} 
              alt={item.label} 
              width={48} 
              height={48} 
              className="h-12 w-12 object-contain transition-transform duration-300 group-hover:scale-105" 
              loading="lazy" 
            />
          </div>

          <p className="mt-4 text-sm font-semibold tracking-wide text-white">
            {item.label}
          </p>

          <span className="pointer-events-none absolute inset-0 rounded-xl ring-1 ring-white/10 group-hover:ring-white/20" />
        </div>
      ))}
    </div>
  );
};
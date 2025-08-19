import * as LucideIcons from "lucide-react";
import { useAmenitiesData } from "@/hooks/useData";

const getIcon = (iconName: string) => {
  const Icon = (LucideIcons as any)[iconName];
  return Icon || LucideIcons.Star;
};

export const AmenityGrid = () => {
  const { data: amenities } = useAmenitiesData();

  if (!amenities) return null;

  // Show main hotel amenities
  const mainAmenities = amenities.filter(a => 
    ['spa', 'fine-dining', 'concierge', 'mountain-view', 'airport-transfer', 'wifi'].includes(a.key)
  );

  return (
    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
      {mainAmenities.map((amenity) => {
        const Icon = getIcon(amenity.icon);
        return (
          <div key={amenity.key} className="text-center group">
            <div className="w-16 h-16 mx-auto mb-4 rounded-full bg-hsq-offwhite flex items-center justify-center group-hover:hsq-gradient-gold group-hover:text-white hsq-transition">
              <Icon className="w-6 h-6" />
            </div>
            <p className="text-sm font-medium">{amenity.label}</p>
          </div>
        );
      })}
    </div>
  );
};
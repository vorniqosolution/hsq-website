import { Link } from "react-router-dom";
import { Users, Maximize, BedDouble } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import type { Room } from "@/types";
import deluxeRoom from "@/assets/deluxe-room.jpg";

interface RoomCardProps {
  room: Room;
}

export const RoomCard = ({ room }: RoomCardProps) => {
  return (
    <Card className="overflow-hidden group hover:hsq-shadow-luxury hsq-transition">
      <div className="relative overflow-hidden">
        <img 
          src={deluxeRoom} 
          alt={room.name}
          className="w-full h-64 object-cover group-hover:scale-105 hsq-transition"
        />
        <div className="absolute top-4 right-4 bg-hsq-gold text-white px-3 py-1 rounded-full text-sm font-medium">
          PKR {room.pricePerNight.toLocaleString()}/night
        </div>
      </div>
      
      <CardContent className="p-6">
        <h3 className="text-xl font-heading font-semibold mb-2">{room.name}</h3>
        <p className="text-muted-foreground mb-4 line-clamp-2">{room.shortDescription}</p>
        
        <div className="flex items-center space-x-4 text-sm text-muted-foreground mb-4">
          <div className="flex items-center space-x-1">
            <Users className="w-4 h-4" />
            <span>{room.guests} guests</span>
          </div>
          <div className="flex items-center space-x-1">
            <Maximize className="w-4 h-4" />
            <span>{room.sizeSqm} sqm</span>
          </div>
          <div className="flex items-center space-x-1">
            <BedDouble className="w-4 h-4" />
            <span>{room.bed}</span>
          </div>
        </div>
        
        <div className="flex space-x-2">
          <Button variant="outline" size="sm" asChild className="flex-1">
            <Link to={`/rooms#${room.slug}`}>View Details</Link>
          </Button>
          <Button variant="hero" size="sm" className="flex-1">
            Book Now
          </Button>
        </div>
      </CardContent>
    </Card>
  );
};
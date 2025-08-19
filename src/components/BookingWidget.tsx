import { useState } from "react";
import { Calendar, Users, BedDouble } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog";

export const BookingWidget = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <>
      <Card className="p-6 bg-white/95 backdrop-blur-sm hsq-shadow-luxury">
        <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Check-in</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Calendar className="w-4 h-4 text-primary" />
            <span>Check-out</span>
          </div>
          <div className="flex items-center space-x-2 text-sm">
            <Users className="w-4 h-4 text-primary" />
            <span>2 Guests</span>
          </div>
          <Dialog open={isOpen} onOpenChange={setIsOpen}>
            <DialogTrigger asChild>
              <Button className="w-full hsq-gradient-gold text-white font-semibold hover:opacity-90 hsq-transition">
                Book Now
              </Button>
            </DialogTrigger>
            <DialogContent>
              <DialogHeader>
                <DialogTitle>Demo Booking Flow</DialogTitle>
              </DialogHeader>
              <div className="py-6 text-center">
                <BedDouble className="w-16 h-16 mx-auto mb-4 text-primary" />
                <p className="text-lg mb-4">This is a demonstration booking system.</p>
                <p className="text-muted-foreground mb-6">
                  In a live implementation, this would connect to a real booking engine 
                  with availability, pricing, and payment processing.
                </p>
                <Button onClick={() => setIsOpen(false)} variant="outline">
                  Close Demo
                </Button>
              </div>
            </DialogContent>
          </Dialog>
        </div>
      </Card>
    </>
  );
};
import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { Testimonial } from "@/types";

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    <Card className="h-full hover:hsq-shadow-gold hsq-transition">
      <CardContent className="p-6">
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-4 h-4 ${
                i < testimonial.rating 
                  ? "fill-hsq-gold text-hsq-gold" 
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>
        
        <blockquote className="text-muted-foreground mb-4 italic">
          "{testimonial.comment}"
        </blockquote>
        
        <div className="flex items-center justify-between">
          <div>
            <p className="font-semibold">{testimonial.name}</p>
            <p className="text-sm text-muted-foreground">{testimonial.date}</p>
          </div>
        </div>
      </CardContent>
    </Card>
  );
};
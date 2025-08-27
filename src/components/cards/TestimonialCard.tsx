import { Star } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
// import type { Testimonial } from "@/types";

// Assuming your Testimonial type looks something like this
// Note: The `date` property is not used in the new design.
interface Testimonial {
  rating: number;
  comment: string;
  name: string;
  // date: string; // This is no longer needed for the new UI
}

interface TestimonialCardProps {
  testimonial: Testimonial;
}

export const TestimonialCard = ({ testimonial }: TestimonialCardProps) => {
  return (
    // 1. Card Styling: Added larger rounded corners and a default shadow
    <Card className="h-full bg-white rounded-2xl shadow-lg hover:shadow-xl transition-shadow duration-300">
      {/* 2. Content Layout: Used Flexbox to center everything */}
      <CardContent className="p-6 flex flex-col items-center text-center">
        
        {/* 3. Added Top Text Section */}
        <p className="text-[10px] font-bold text-amber-500 uppercase tracking-widest">
          AT THE HEART OF COMMUNITIES
        </p>
        <p className="mt-1 mb-4 font-semibold text-gray-800">
          People Say :
        </p>

        {/* 4. Star Rating */}
        <div className="flex items-center mb-4">
          {[...Array(5)].map((_, i) => (
            <Star
              key={i}
              className={`w-5 h-5 ${ // Made stars slightly larger
                i < testimonial.rating
                  ? "fill-amber-500 text-amber-500" // Use your gold color
                  : "text-gray-300"
              }`}
            />
          ))}
        </div>

        {/* 5. Testimonial Comment: Changed from blockquote to p, removed italic */}
        <p className="text-gray-700 mb-6 leading-relaxed">
          {testimonial.comment}{" "}
          <a href="#" className="text-blue-600 font-semibold hover:underline">
            read more
          </a>
        </p>

        {/* 6. Author Section: Restructured to match the image */}
        <div className="flex items-center justify-center gap-2 mt-auto">
          <p className="font-bold text-amber-500">{testimonial.name}</p>
          <img
            src="https://upload.wikimedia.org/wikipedia/commons/c/c1/Google_%22G%22_logo.svg"
            alt="Google logo"
            className="w-4 h-4"
          />
        </div>
        
      </CardContent>
    </Card>
  );
};
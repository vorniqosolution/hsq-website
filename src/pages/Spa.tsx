import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Clock } from "lucide-react";
import { useSpaData } from "@/hooks/useData";
import spaImage from "@/assets/spa-treatment.jpg";

const Spa = () => {
  const { data: spa } = useSpaData();

  return (
    <>
      <SEO 
        title="Spa & Wellness - HSQ Hotels Murree"
        description="Rejuvenate your mind, body, and spirit at our world-class spa with luxury treatments and serene mountain views."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Wellness & Rejuvenation"
            title="Spa & Wellness"
            subtitle={spa?.overview}
          />
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {spa?.treatments.map((treatment) => (
              <Card key={treatment.name} className="overflow-hidden hover:hsq-shadow-luxury hsq-transition">
                <div className="relative h-48">
                  <img 
                    src={spaImage} 
                    alt={treatment.name}
                    className="w-full h-full object-cover"
                  />
                </div>
                <CardContent className="p-6">
                  <div className="flex justify-between items-start mb-4">
                    <h3 className="text-xl font-heading font-semibold">{treatment.name}</h3>
                    <div className="text-right">
                      <div className="text-lg font-bold hsq-gold">PKR {treatment.price.toLocaleString()}</div>
                      <div className="flex items-center text-sm text-muted-foreground">
                        <Clock className="w-4 h-4 mr-1" />
                        {treatment.duration}
                      </div>
                    </div>
                  </div>
                  <p className="text-muted-foreground mb-4">{treatment.description}</p>
                  <Button variant="hero" className="w-full">
                    Book Treatment
                  </Button>
                </CardContent>
              </Card>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Spa;
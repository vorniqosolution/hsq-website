import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";

const About = () => {
  return (
    <>
      <SEO 
        title="About HSQ Hotels - Luxury Mountain Resort in Murree"
        description="Learn about HSQ Hotels' commitment to luxury hospitality, our story, and our dedication to providing exceptional experiences in Murree."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Our Story"
            title="About HSQ Hotels"
            subtitle="Discover the story behind Murree's premier luxury destination and our commitment to exceptional hospitality."
          />
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <p className="text-lg text-muted-foreground mb-8">
              HSQ Hotels represents the pinnacle of luxury hospitality in Pakistan's most beloved hill station. 
              Since our establishment, we have been dedicated to creating unforgettable experiences that blend 
              modern luxury with the natural beauty of the Murree mountains.
            </p>

            <h3 className="text-2xl font-heading font-bold mb-4">Our Vision</h3>
            <p className="text-muted-foreground mb-8">
              To be the premier luxury destination in Murree, where guests experience unparalleled comfort, 
              exceptional service, and the breathtaking beauty of the Pakistan mountains in perfect harmony.
            </p>

            <h3 className="text-2xl font-heading font-bold mb-4">Our Commitment</h3>
            <p className="text-muted-foreground mb-8">
              We are committed to sustainability, community engagement, and preserving the natural beauty 
              of Murree while providing world-class hospitality that exceeds our guests' expectations.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mt-16">
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Excellence</h4>
                <p className="text-muted-foreground">
                  We strive for excellence in every aspect of our service, from luxury accommodations to personalized experiences.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Sustainability</h4>
                <p className="text-muted-foreground">
                  Our commitment to environmental responsibility ensures future generations can enjoy Murree's natural beauty.
                </p>
              </CardContent>
            </Card>
            <Card>
              <CardContent className="p-6 text-center">
                <h4 className="text-xl font-heading font-semibold mb-4 hsq-gold">Community</h4>
                <p className="text-muted-foreground">
                  We actively support the local community and contribute to the economic development of the Murree region.
                </p>
              </CardContent>
            </Card>
          </div>
        </Section>
      </div>
    </>
  );
};

export default About;
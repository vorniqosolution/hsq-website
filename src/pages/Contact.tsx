import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/enhanced-button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { MapPin, Phone, Mail, Clock } from "lucide-react";
import { useSiteData } from "@/hooks/useData";

const Contact = () => {
  const { data: siteData } = useSiteData();

  return (
    <>
      <SEO 
        title="Contact Us - HSQ Hotels Murree"
        description="Get in touch with HSQ Hotels for reservations, inquiries, or assistance. We're here to help make your stay exceptional."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Get in Touch"
            title="Contact Us"
            subtitle="We're here to assist you with reservations, inquiries, or any special requests for your stay."
          />
        </Section>

        <Section>
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Contact Form */}
            <Card>
              <CardContent className="p-8">
                <h3 className="text-2xl font-heading font-semibold mb-6">Send us a Message</h3>
                <form className="space-y-6">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <Input placeholder="Full Name" />
                    <Input placeholder="Email Address" type="email" />
                  </div>
                  <Input placeholder="Phone Number" />
                  <Textarea placeholder="Your Message" rows={6} />
                  <Button variant="hero" className="w-full">
                    Send Message
                  </Button>
                </form>
              </CardContent>
            </Card>

            {/* Contact Information */}
            <div className="space-y-8">
              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <MapPin className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Address</h4>
                      <p className="text-muted-foreground">{siteData?.address}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Phone className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Phone</h4>
                      <p className="text-muted-foreground">{siteData?.phone}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Mail className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Email</h4>
                      <p className="text-muted-foreground">{siteData?.email}</p>
                    </div>
                  </div>
                </CardContent>
              </Card>

              <Card>
                <CardContent className="p-6">
                  <div className="flex items-start space-x-4">
                    <Clock className="w-6 h-6 text-primary mt-1" />
                    <div>
                      <h4 className="font-semibold mb-2">Reception Hours</h4>
                      <p className="text-muted-foreground">24/7 Available</p>
                    </div>
                  </div>
                </CardContent>
              </Card>
            </div>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Contact;
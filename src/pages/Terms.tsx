import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";

const Terms = () => {
  return (
    <>
      <SEO 
        title="Terms & Conditions - HSQ Hotels Murree"
        description="Read HSQ Hotels' terms and conditions for booking, cancellation policies, and guest responsibilities."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            title="Terms & Conditions"
            subtitle="Please read these terms and conditions carefully before making a reservation or using our services."
          />
        </Section>

        <Section>
          <div className="max-w-4xl mx-auto prose prose-lg">
            <h3 className="text-xl font-heading font-semibold mb-4">Booking Terms</h3>
            <p className="text-muted-foreground mb-6">
              All reservations are subject to availability and confirmation. Rates are quoted per room per night 
              and exclude taxes unless otherwise specified. Special package rates may have additional terms and conditions.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Cancellation Policy</h3>
            <p className="text-muted-foreground mb-6">
              Cancellations must be made at least 48 hours prior to arrival to avoid charges. Late cancellations 
              or no-shows will be charged the full room rate for the first night. Special package bookings may 
              have different cancellation terms.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Check-in and Check-out</h3>
            <p className="text-muted-foreground mb-6">
              Check-in time is 3:00 PM and check-out time is 12:00 PM. Early check-in and late check-out 
              are subject to availability and may incur additional charges.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Guest Responsibilities</h3>
            <p className="text-muted-foreground mb-6">
              Guests are responsible for any damage to hotel property during their stay. Smoking is prohibited 
              in all rooms and indoor areas. Guests must comply with hotel policies and local laws.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Limitation of Liability</h3>
            <p className="text-muted-foreground mb-6">
              HSQ Hotels' liability is limited to the amount paid for accommodation. We are not responsible 
              for loss or damage to personal belongings or for circumstances beyond our control.
            </p>

            <h3 className="text-xl font-heading font-semibold mb-4">Contact Information</h3>
            <p className="text-muted-foreground">
              For questions regarding these terms, please contact us at reservations@hsqhotels.com or +92 51 123 4567.
            </p>
          </div>
        </Section>
      </div>
    </>
  );
};

export default Terms;
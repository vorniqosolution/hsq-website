import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { RoomCard } from "@/components/cards/RoomCard";
import { useRoomsData } from "@/hooks/useData";

const Rooms = () => {
  const { data: rooms } = useRoomsData();

  return (
    <>
      <SEO 
        title="Luxury Rooms & Suites - HSQ Hotels Murree"
        description="Discover our elegant rooms and suites with stunning mountain views, premium amenities, and unparalleled comfort in Murree."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Accommodations"
            title="Rooms & Suites"
            subtitle="Experience luxury and comfort in our elegantly appointed rooms, each designed to provide the perfect mountain retreat."
          />
        </Section>

        <Section>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {rooms?.map((room) => (
              <RoomCard key={room.id} room={room} />
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Rooms;
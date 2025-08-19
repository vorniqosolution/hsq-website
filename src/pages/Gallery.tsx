import { SEO } from "@/components/SEO";
import { Section } from "@/components/layout/Section";
import { SectionHeader } from "@/components/layout/SectionHeader";
import { useGalleryData } from "@/hooks/useData";
import heroImage from "@/assets/hero-hotel.jpg";

const Gallery = () => {
  const { data: gallery } = useGalleryData();

  return (
    <>
      <SEO 
        title="Photo Gallery - HSQ Hotels Murree"
        description="Explore our beautiful hotel through our photo gallery showcasing luxury rooms, dining venues, spa facilities, and mountain views."
      />
      
      <div className="pt-20">
        <Section background="muted" padding="xl">
          <SectionHeader
            eyebrow="Visual Journey"
            title="Photo Gallery"
            subtitle="Discover the beauty and elegance of HSQ Hotels through our curated collection of images."
          />
        </Section>

        <Section>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {Array.from({ length: 12 }, (_, i) => (
              <div key={i} className="relative group overflow-hidden rounded-lg">
                <img 
                  src={heroImage} 
                  alt={`Gallery image ${i + 1}`}
                  className="w-full h-64 object-cover group-hover:scale-105 hsq-transition"
                />
                <div className="absolute inset-0 bg-black/40 opacity-0 group-hover:opacity-100 hsq-transition flex items-center justify-center">
                  <span className="text-white font-medium">View Full Size</span>
                </div>
              </div>
            ))}
          </div>
        </Section>
      </div>
    </>
  );
};

export default Gallery;
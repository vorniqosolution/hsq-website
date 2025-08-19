export interface Site {
  name: string;
  address: string;
  phone: string;
  email: string;
  geo: {
    lat: number;
    lng: number;
  };
  social: {
    facebook?: string;
    instagram?: string;
    twitter?: string;
  };
  copyright: string;
}

export interface Room {
  id: string;
  name: string;
  slug: string;
  shortDescription: string;
  description: string;
  sizeSqm: number;
  guests: number;
  bed: string;
  pricePerNight: number;
  amenities: string[];
  images: string[];
}

export interface Amenity {
  key: string;
  label: string;
  icon: string; // lucide icon name
}

export interface DiningVenue {
  name: string;
  hours: string;
  description: string;
  images: string[];
}

export interface Dining {
  overview: string;
  venues: DiningVenue[];
}

export interface Treatment {
  name: string;
  duration: string;
  price: number;
  description: string;
  image: string;
}

export interface Spa {
  overview: string;
  treatments: Treatment[];
}

export interface Offer {
  id: string;
  title: string;
  tagline: string;
  details: string;
  terms: string;
  ctaLabel: string;
  image: string;
}

export interface Testimonial {
  name: string;
  rating: number;
  comment: string;
  date: string;
}

export interface FAQ {
  q: string;
  a: string;
  category: string;
}

export interface GalleryImage {
  src: string;
  alt: string;
  category: string;
}
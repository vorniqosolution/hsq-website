import { useQuery } from '@tanstack/react-query';
import type { 
  Site, 
  Room, 
  Amenity, 
  Dining, 
  Spa, 
  Offer, 
  Testimonial, 
  FAQ, 
  GalleryImage 
} from '@/types';

// Generic data fetcher
const fetchData = async <T>(path: string): Promise<T> => {
  const response = await fetch(path);
  if (!response.ok) {
    throw new Error(`Failed to fetch ${path}`);
  }
  return response.json();
};

export const useSiteData = () => {
  return useQuery({
    queryKey: ['site'],
    queryFn: () => fetchData<Site>('/src/data/site.json'),
  });
};

export const useRoomsData = () => {
  return useQuery({
    queryKey: ['rooms'],
    queryFn: () => fetchData<Room[]>('/src/data/rooms.json'),
  });
};

export const useAmenitiesData = () => {
  return useQuery({
    queryKey: ['amenities'],
    queryFn: () => fetchData<Amenity[]>('/src/data/amenities.json'),
  });
};

export const useDiningData = () => {
  return useQuery({
    queryKey: ['dining'],
    queryFn: () => fetchData<Dining>('/src/data/dining.json'),
  });
};

export const useSpaData = () => {
  return useQuery({
    queryKey: ['spa'],
    queryFn: () => fetchData<Spa>('/src/data/spa.json'),
  });
};

export const useOffersData = () => {
  return useQuery({
    queryKey: ['offers'],
    queryFn: () => fetchData<Offer[]>('/src/data/offers.json'),
  });
};

export const useTestimonialsData = () => {
  return useQuery({
    queryKey: ['testimonials'],
    queryFn: () => fetchData<Testimonial[]>('/src/data/testimonials.json'),
  });
};

export const useFAQData = () => {
  return useQuery({
    queryKey: ['faq'],
    queryFn: () => fetchData<FAQ[]>('/src/data/faq.json'),
  });
};

export const useGalleryData = () => {
  return useQuery({
    queryKey: ['gallery'],
    queryFn: () => fetchData<GalleryImage[]>('/src/data/gallery.json'),
  });
};
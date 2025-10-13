export default  interface Room {
  publicDescription?: string | null;
  startingRate?: number;
  amenities?: string[];
  cleanliness?: string | null;
  category?: string;
  bedType?: string;
  imageUrl?: string | null;
  publicName?: string;
  adultsCapacity?: string;
}

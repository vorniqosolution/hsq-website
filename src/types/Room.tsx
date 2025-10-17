export interface Room {
  id?: string;
  rate: number;
  images: string[];
  publicName: string;
  publicDescription: string;
  // bedType?: string;
  // category?: string;
}
export interface AvailableRooms {
  _id: string;
  view: string;
  roomNumber: string;
  rate: number;
  images: string[];
  adults: number;
}
export interface CategoryGroupAvailableRoom {
  adultsCapacity: string;
  amenities?: string[] | null;
  availableCount?: number;
  availableRooms: AvailableRooms[];
  bedType: string;
  category: string;
  cleanliness?: string | null;
  imageUrl?: string | null;
  publicDescription?: string | null;
  publicName: string;
  startingRate: number;
  // message: string;
}
export type AvailableRoomGroupedResponse = CategoryGroupAvailableRoom[];

export interface CategoryGroup {
  categoryName: string;
  rooms: Room[];
}
export type RoomsGroupedResponse = CategoryGroup[];

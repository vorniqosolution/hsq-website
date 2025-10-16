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
  adults: 2;
}
export interface CategoryGroupAvailableRoom {
  adultsCapacity: string;
  amenities?: string[] | null;
  availableCount?: number;
  availableRooms: AvailableRooms[];
  bedType: string;
  category: string;
  cleanliness: string | null;
  imageUrl?: string | null;
  publicDescription?: string | null;
  publicName: string;
  startingRate: number;
  message: string;
}

export interface CategoryGroup {
  categoryName: string;
  rooms: Room[];
}
export type RoomsGroupedResponse = CategoryGroup[];

export type AvailableRoomGroupedResponse = CategoryGroupAvailableRoom[];

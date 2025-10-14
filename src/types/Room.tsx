export interface Room {
  id?: string;
  rate: number;
  images: string[];
  publicName: string;
  publicDescription: string;
  // bedType?: string;
  // category?: string;
}

export interface CategoryGroup {
  categoryName: string;
  rooms: Room[];
}
export type RoomsGroupedResponse = CategoryGroup[];

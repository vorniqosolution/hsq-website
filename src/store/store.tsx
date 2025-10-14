import { create } from "zustand";
import { RoomsGroupedResponse } from "@/types/Room";

interface RoomState {
  rooms: RoomsGroupedResponse; // store the rooms data
  setRooms: (rooms: RoomsGroupedResponse) => void; // function to update rooms
  clearRooms: () => void; // optional: clear the state
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  setRooms: (rooms) => set({ rooms }),
  clearRooms: () => set({ rooms: [] }),
  // clearRooms
}));

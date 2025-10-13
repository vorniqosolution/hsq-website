import { create } from "zustand";
import Room from "@/types/Room";

interface RoomState {
  rooms: Room[]; // store the rooms data
  setRooms: (rooms: Room[]) => void; // function to update rooms
  clearRooms: () => void; // optional: clear the state
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  setRooms: (rooms) => set({ rooms }),
  clearRooms: () => set({ rooms: [] }),
  // clearRooms
}));

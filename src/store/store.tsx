import { create } from "zustand";
import {
  RoomsGroupedResponse,
  AvailableRoomGroupedResponse,
} from "@/types/Room";

interface RoomState {
  rooms: RoomsGroupedResponse; // store the rooms data
  setRooms: (rooms: RoomsGroupedResponse) => void; // function to update rooms
  clearRooms: () => void; // optional: clear the state
  AvaibleRooms: AvailableRoomGroupedResponse;
  setAvaibleRooms: (AvaibleRooms: AvailableRoomGroupedResponse) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  AvaibleRooms: [],
  setRooms: (rooms) => set({ rooms }),
  clearRooms: () => set({ rooms: [] }),
  setAvaibleRooms: (AvaibleRooms) => set({ AvaibleRooms }),
  // clearRooms
}));

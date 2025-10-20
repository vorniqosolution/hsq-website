import { create } from "zustand";
import {
  RoomsGroupedResponse,
  AvailableRoomGroupedResponse,
} from "@/types/Room";

interface RoomState {
  // For get api
  rooms: RoomsGroupedResponse; // store the rooms data
  setRooms: (rooms: RoomsGroupedResponse) => void; // function to update rooms
  // clearRooms: () => void; // optional: clear the state
  // For available Room
  AvaibleRooms: AvailableRoomGroupedResponse;
  setAvaibleRooms: (AvaibleRooms: AvailableRoomGroupedResponse) => void;
  // Save checkin and Check out
  Bookingwidget: {
    checkin: string;
    checkout: string;
  };
  setBookingwidget: (data: { checkin: string; checkout: string }) => void;
}

export const useRoomStore = create<RoomState>((set) => ({
  rooms: [],
  AvaibleRooms: [],
  Bookingwidget: {
    checkin: "",
    checkout: "",
  },
  setRooms: (rooms) => set({ rooms }),
  // clearRooms: () => set({ rooms: [] }),
  setAvaibleRooms: (AvaibleRooms) => set({ AvaibleRooms }),
  setBookingwidget: (data) =>
    set(() => ({
      Bookingwidget: data,
    })),
  // clearRooms
}));

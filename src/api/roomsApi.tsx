// src/api/roomsApi.js
import apiClient from "./apiClient";
import axios from "axios";
import Room from "@/types/Room";
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
console.log("BackendURL", BACKEND_URL);
// For the main "Our Rooms" page catalog
export const getRoomCatalog = () => apiClient.get("/category-details");

// For the search results
export const searchAvailableRooms = ({ checkin, checkout, guests }) => {
  return apiClient.get("/available-rooms", {
    params: { checkin, checkout, guests },
  });
};

// For the final booking submission
export const createReservation = (reservationData) => {
  return apiClient.post("/reservations", reservationData);
};

export const Get_All_Available_Room = async (): Promise<Room[]> => {
  try {
    const response = await axios.get(
      `${BACKEND_URL}/api/public/category-details`
    );
    console.log("Response", response.data.Rooms);

    return response.data.Rooms;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error("Failed to fetch available rooms");
  }
};

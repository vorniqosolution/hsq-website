// src/api/roomsApi.js
import apiClient from "./apiClient";
import axios from "axios";
import { RoomsGroupedResponse } from "@/types/Room";
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
const latitude = 33.91511892911634;
const longitude = 73.41887619512994;
// const WEATHERAPI_URL = ``;
// console.log("BackendURL", BACKEND_URL);
console.log("Weatherapi", APIKEY);
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

export const Get_All_Available_Room =
  async (): Promise<RoomsGroupedResponse> => {
    try {
      const response = await axios.get(
        `${BACKEND_URL}/api/public/category-details`
      );
      console.log("Response", response.data);

      return response.data;
    } catch (error) {
      console.error("Error fetching rooms:", error);
      throw new Error("Failed to fetch available rooms");
    }
  };

export const WeatherApi = async () => {
  const response = await axios.get(
    `https://api.openweathermap.org/data/2.5/weather?lat=${latitude}&lon=${longitude}&appid=abdd7a55dc60037c02f64bfaaf6fb9f8`
  );
  console.log("Weather Response", response.data);
};

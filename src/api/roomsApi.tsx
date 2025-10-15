// src/api/roomsApi.js
import apiClient from "./apiClient";
import axios from "axios";
import { RoomsGroupedResponse } from "@/types/Room";
const BACKEND_URL = import.meta.env.VITE_API_BASE_URL;
const APIKEY = import.meta.env.VITE_WEATHER_API_KEY;
const latitude = 33.91511892911634;
const longitude = 73.41887619512994;
const WEATHERAPI_URL = `https://api.openweathermap.org/data/3.0/onecall?lat=${latitude}&lon=${longitude}&exclude=hourly,minutely&units=metric&appid=${APIKEY}`;
// console.log("BackendURL", BACKEND_URL);
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
  try {
    const response = await axios.get(`${WEATHERAPI_URL}`);
    return response.data;
  } catch (error) {
    console.error("Error fetching rooms:", error);
    throw new Error("Failed To Fetch Available Rooms");
  }
};

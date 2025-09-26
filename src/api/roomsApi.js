// src/api/roomsApi.js
import apiClient from './apiClient';

// For the main "Our Rooms" page catalog
export const getRoomCatalog = () => apiClient.get('/category-details');

// For the search results
export const searchAvailableRooms = ({ checkin, checkout, guests }) => {
  return apiClient.get('/available-rooms', {
    params: { checkin, checkout, guests },
  });
};

// For the final booking submission
export const createReservation = (reservationData) => {
  return apiClient.post('/reservations', reservationData);
};
// src/hooks/useRooms.js
import { useQuery, useMutation, useQueryClient } from '@tanstack/react-query';
import { getRoomCatalog, searchAvailableRooms, createReservation } from '../api/roomsApi';

// A hook for fetching the main room catalog
export function useGetRoomCatalog() {
  return useQuery({
    queryKey: ['rooms', 'catalog'], // A unique name for this query
    queryFn: getRoomCatalog,       // The function that fetches the data
  });
}

// A hook for searching for available rooms
export function useSearchAvailableRooms(searchParams) {
  const { checkin, checkout, guests } = searchParams;
  return useQuery({
    queryKey: ['rooms', 'search', searchParams], // Key includes params to cache different searches
    queryFn: () => searchAvailableRooms(searchParams),
    enabled: !!checkin && !!checkout, // IMPORTANT: Only run this query if dates are selected
    // keepPreviousData: true, // Optional: keeps showing old data while new data is loading
  });
}

// A hook for creating a reservation (a "mutation" because it changes data)
export function useCreateReservation() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: createReservation,
    onSuccess: (data) => {
      console.log('Reservation successful!', data);
      // When a booking is successful, you might want to clear the search cache
      // so the next search is guaranteed to be fresh.
      queryClient.invalidateQueries({ queryKey: ['rooms', 'search'] });
    },
    onError: (error) => {
      console.error('Reservation failed:', error.message);
    },
  });
}
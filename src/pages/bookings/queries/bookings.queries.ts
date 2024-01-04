import { useMutation, useQuery } from '@tanstack/react-query';

import BookingsService, {
  IBooking,
  IBookingsQuery,
} from '@pages/bookings/services/bookings.services';

const bookingService = new BookingsService();

export const BOOKINGS_QUERY_KEY = ['bookings'];

export const useAddBooking = () => {
  return useMutation({
    mutationFn: bookingService.createBooking,
  });
};

export const useDeleteBooking = () => {
  return useMutation({
    mutationFn: bookingService.deleteBookingById,
  });
};

export const useGetBookingById = (id: IBooking['id']) => {
  return useQuery({
    queryKey: [...BOOKINGS_QUERY_KEY, id],
    queryFn: () => bookingService.getBookingById(id),
  });
};

export const useGetBookings = (query?: IBookingsQuery) => {
  return useQuery({
    queryKey: [...BOOKINGS_QUERY_KEY, query ?? { status: 'all' }],
    queryFn: () =>
      query
        ? bookingService.getBookings(query)
        : bookingService.getBookings(),
  });
};

export const useUpdateBooking = () => {
  return useMutation({
    mutationFn: bookingService.updateBooking,
  });
};

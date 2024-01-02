import HttpClient from 'shared/utils/http-client';

export interface IBooking extends RecordType {
  id: string;
  maker: string;
  members?: string[];
  range: {
    endTime: number; // timestamp
    startTime: number; // timestamp
  };
  taker: string;
}

export type BookingStatusType =
  | 'booked'
  | 'comfirmed'
  | 'upcoming'
  | 'cancelled'
  | 'ended';

export type BookingStatusQueryType = BookingStatusType | 'all';

export interface IBookingsQuery {
  maker?: IBooking['maker'];
  status?: BookingStatusQueryType;
  taker?: IBooking['maker'];
}

export default class BookingsService {
  private readonly httpClient = new HttpClient('/bookings');

  createBooking = (data: Omit<IBooking, 'id'>) => {
    return this.httpClient.post<IBooking>('', data);
  };

  deleteBookingById = (id: IBooking['id']) => {
    return this.httpClient.delete('id');
  };

  getBookingById = (id: IBooking['id']) => {
    return this.httpClient.get<IBooking>(id);
  };

  getBookings = (query?: IBookingsQuery) => {
    return this.httpClient.get<IBooking[]>('', {
      params: query ?? { status: 'all' },
    });
  };

  updateBooking = (data: {
    bookingId: string;
    update: Omit<IBooking, 'id' | 'maker' | 'taker'>;
  }) => {
    return this.httpClient.patch<IBooking>(data.bookingId, data.update);
  };
}

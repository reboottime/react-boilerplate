import { useCallback, useEffect } from 'react';
import { useLocation, useNavigate } from 'react-router-dom';

import Tabs, {
  TabsContent,
  TabsList,
  TabsTrigger,
} from 'shared/components/ui/tabs';

import BookingCard from './components/booking-card';

export default function BookingsPage() {
  const navigate = useNavigate();
  const location = useLocation();
 
  const isAtRootPath = location.pathname === '/app/bookings';
  const defaultTab = isAtRootPath
    ? 'incoming'
    : location.pathname.split('/bookings/').pop();

  const onTriggerClick = useCallback(
    (tabName: string) => {
      navigate(`/app/bookings/${tabName}`);
    },
    [navigate],
  );

  useEffect(() => {
    if (isAtRootPath) {
      onTriggerClick('incoming');
    }
  }, [isAtRootPath, onTriggerClick]);

  return (
    <>
      <header className='mb-6'>
        <h1 className='text-2xl font-semibold'>Bookings</h1>
        <p>
          See upcoming and past events booked through your event type links.
        </p>
      </header>
      <Tabs defaultValue={defaultTab}
        orientation='horizontal'>
        <TabsList aria-label='tabs calendar bookings'>
          <TabsTrigger
            onClick={onTriggerClick.bind(null, 'incoming')}
            value='incoming'
          >
            incoming
          </TabsTrigger>
          <TabsTrigger
            onClick={onTriggerClick.bind(null, 'unconfirmed')}
            value='unconfirmed'
          >
            unconfirmed
          </TabsTrigger>
          <TabsTrigger
            onClick={onTriggerClick.bind(null, 'recurring')}
            value='recurring'
          >
            recurring
          </TabsTrigger>
        </TabsList>
        <TabsContent value='incoming'>
          <BookingCard>
            <h2>Incoming Meetings</h2>
          </BookingCard>
        </TabsContent>
        <TabsContent value='unconfirmed'>
          <BookingCard>
            <h2>unconfirmed Meetings</h2>
          </BookingCard>
        </TabsContent>
        <TabsContent value='recurring'>
          <BookingCard>
            <h2>recurring Meetings</h2>
          </BookingCard>
        </TabsContent>
      </Tabs>
    </>
  );
}

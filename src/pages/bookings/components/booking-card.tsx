export default function BookingCard({ children }: BookingCardProps) {
  return (
    <div className='bg-white p-6 rounded-md min-h-[168px] border border-w-2'>{children}</div>
  );
}

export interface BookingCardProps {
  children: React.ReactNode;
}

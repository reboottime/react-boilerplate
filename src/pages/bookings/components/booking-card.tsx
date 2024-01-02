export default function BookingCard({ children }: BookingCardProps) {
  return (
    <div className='card min-h-[168px]'>{children}</div>
  );
}

export interface BookingCardProps {
  children: React.ReactNode;
}

import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';
import { Toaster } from 'sonner';

import { queryClient } from './query-client';

export default function AppProviders({ basename, children }: Props) {
  return (
    <>
      <BrowserRouter basename={basename ?? ''}>
        <QueryClientProvider client={queryClient}>
          <Suspense fallback={null}>{children}</Suspense>
        </QueryClientProvider>
      </BrowserRouter>
      {/* configuration https://ui.shadcn.com/docs/components/sonner */}
      {/* No need to wrap it inside, as it doesn't rely on context as the media to communicate */}
      <Toaster position='top-right'
        richColors
      />
    </>
  );
}

interface Props {
  basename?: string;
  children: React.ReactNode;
}

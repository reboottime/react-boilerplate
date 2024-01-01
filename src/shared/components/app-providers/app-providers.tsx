import { QueryClientProvider } from '@tanstack/react-query';
import { Suspense } from 'react';
import { BrowserRouter } from 'react-router-dom';

import { queryClient } from './query-client';

export default function AppProviders({ basename, children }: Props) {
  return (
    <BrowserRouter basename={basename ?? ''}>
      <QueryClientProvider client={queryClient}>
        <Suspense fallback={null}>{children}</Suspense>
      </QueryClientProvider>
    </BrowserRouter>
  );
}

interface Props {
  basename?: string;
  children: React.ReactNode;
}

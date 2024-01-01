import { QueryClient } from '@tanstack/react-query';

export const queryClient = new QueryClient({
  defaultOptions: {
    queries: {
      // The default options for queries
      refetchOnWindowFocus: false,
      retry: 1,
      staleTime: 300000, // 5 minutes
    },
    mutations: {
      // The default options for mutations
      onError: (error, variables, context) => {
        // Custom error handling logic
        // eslint-disable-next-line
        console.error(error);
      },
      onSuccess: (data, variables, context) => {
        // Custom success handling logic
      },
    },
  },
});

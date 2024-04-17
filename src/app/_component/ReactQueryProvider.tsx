'use client';

import { QueryClient, QueryClientProvider } from '@tanstack/react-query';
import { ReactQueryDevtools } from '@tanstack/react-query-devtools';
import { useState } from 'react';

export default function ReactQueryProvider({
  children,
}: React.PropsWithChildren) {
  const [queryClient] = useState(
    () =>
      new QueryClient({
        defaultOptions: {
          queries: {
            staleTime: 60 * 1000,
            // refetchOnWindowFocus: false,
            // retryOnMount: true,
            // refetchOnReconnect: false,
            // retry: false,
          },
        },
      }),
  );

  return (
    <QueryClientProvider client={queryClient}>
      <>{children}</>
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  );
}

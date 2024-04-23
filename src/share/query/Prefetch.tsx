import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

interface PrefetchProps {
  prefetchQueries: ((queryClient: QueryClient) => Promise<void>)[];
  children?: ReactNode;
}

export default async function Prefetch({
  children,
  prefetchQueries,
}: PrefetchProps) {
  const queryClient = new QueryClient();
  await Promise.all(
    prefetchQueries.map((prefetchQuery) => prefetchQuery(queryClient)),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}

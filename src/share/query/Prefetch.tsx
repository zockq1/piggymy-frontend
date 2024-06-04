import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';
import { ReactNode } from 'react';

/* eslint-disable  @typescript-eslint/no-explicit-any */
interface PrefetchProps {
  prefetchQueries: ((queryClient: QueryClient, data?: any) => Promise<void>)[];
  prefetchQueryDatas?: any[];
  children?: ReactNode;
}

export default async function Prefetch({
  children,
  prefetchQueries,
  prefetchQueryDatas,
}: PrefetchProps) {
  const queryClient = new QueryClient();
  await Promise.all(
    prefetchQueries.map((prefetchQuery, index) =>
      !prefetchQueryDatas
        ? prefetchQuery(queryClient)
        : prefetchQueryDatas[index]
          ? prefetchQuery(queryClient, prefetchQueryDatas[index])
          : prefetchQuery(queryClient),
    ),
  );
  const dehydratedState = dehydrate(queryClient);

  return (
    <HydrationBoundary state={dehydratedState}>{children}</HydrationBoundary>
  );
}

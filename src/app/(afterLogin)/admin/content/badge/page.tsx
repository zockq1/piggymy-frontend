import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBadgeList } from '@/share/query/badge/useGetBadgeList';

import BadgeList from './_components/BadgeList';
import BadgePageInfo from './_components/BadgePageInfo';
import CreateBadge from './_components/CreateBadge';

export default async function Badge() {
  const queryClient = new QueryClient();
  await Promise.all([usePrefetchBadgeList(queryClient)]);
  return (
    <>
      <Layout.Content.Full>
        <BadgePageInfo />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <BadgeList />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <CreateBadge />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBadge } from '@/share/query/badge/useGetBadge';
import { usePrefetchBadgeList } from '@/share/query/badge/useGetBadgeList';

import BadgeList from '../_components/BadgeList';
import BadgePageInfo from '../_components/BadgePageInfo';
import UpdateBadge from '../_components/UpdateBadge';

export default async function Badge({
  params,
}: {
  params: { badgeId: string };
}) {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchBadgeList(queryClient),
    usePrefetchBadge(queryClient, {
      id: { badgeId: Number(params.badgeId) },
      data: null,
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <BadgePageInfo />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <BadgeList currentBadgeId={Number(params.badgeId)} />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <UpdateBadge currentBadgeId={Number(params.badgeId)} />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

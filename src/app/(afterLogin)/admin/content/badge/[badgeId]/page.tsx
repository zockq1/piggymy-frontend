import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBadge } from '@/share/query/badge/useGetBadge';
import { usePrefetchBadgeList } from '@/share/query/badge/useGetBadgeList';

import PageInfo from '../../../_components/PageInfo';
import BadgeList from '../_components/BadgeList';
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
        <PageInfo title="배지 관리" path={['콘텐츠', '배지 관리']} />
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

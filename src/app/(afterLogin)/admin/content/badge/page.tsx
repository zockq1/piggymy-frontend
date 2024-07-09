import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBadgeList } from '@/share/query/badge/useGetBadgeList';

import PageInfo from '../../_components/PageInfo';
import BadgeList from './_components/BadgeList';
import CreateBadge from './_components/CreateBadge';

export default async function Badge() {
  const queryClient = new QueryClient();
  await Promise.all([usePrefetchBadgeList(queryClient)]);
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="배지 관리" path={['콘텐츠', '배지 관리']} />
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

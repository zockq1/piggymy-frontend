import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBannerList } from '@/share/query/banner/useGetBannerList';
import { usePrefetchVocaList } from '@/share/query/voca/useGetVocaList';

import CreateBanner from './_components/CreateBanner';
import RollingBannerList from './_components/RollingBannerList';
import RollingBannerPageInfo from './_components/RollingBannerPageInfo';

export default async function RollingBanner() {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchBannerList(queryClient),
    usePrefetchVocaList(queryClient),
  ]);
  return (
    <>
      <Layout.Content.Full>
        <RollingBannerPageInfo />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <RollingBannerList />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <CreateBanner />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBanner } from '@/share/query/banner/useGetBanner';
import { usePrefetchBannerList } from '@/share/query/banner/useGetBannerList';
import { usePrefetchVocaList } from '@/share/query/voca/useGetVocaList';

import RollingBannerList from '../_components/RollingBannerList';
import RollingBannerPageInfo from '../_components/RollingBannerPageInfo';
import UpdateBanner from '../_components/UpdateBanner';

export default async function RollingBanner({
  params,
}: {
  params: { bannerId: string };
}) {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchBannerList(queryClient),
    usePrefetchVocaList(queryClient),
    usePrefetchBanner(queryClient, {
      id: { bannerId: Number(params.bannerId) },
      data: null,
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <RollingBannerPageInfo />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <RollingBannerList currentBannerId={Number(params.bannerId)} />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <UpdateBanner currentBannerId={Number(params.bannerId)} />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

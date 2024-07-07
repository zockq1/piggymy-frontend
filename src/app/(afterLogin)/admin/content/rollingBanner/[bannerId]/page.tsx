import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBanner } from '@/share/query/banner/useGetBanner';
import { usePrefetchBannerList } from '@/share/query/banner/useGetBannerList';
import { usePrefetchQuizList } from '@/share/query/quiz/useGetQuizList';
import { prefetchVocaList } from '@/share/query/voca/useGetVocaList';

import PageInfo from '../../../_components/PageInfo';
import BannerList from '../_components/BannerList';
import UpdateBanner from '../_components/UpdateBanner';

export default async function Banner({
  params,
}: {
  params: { bannerId: string };
}) {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchBannerList(queryClient),
    prefetchVocaList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
    usePrefetchQuizList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
    usePrefetchBanner(queryClient, {
      id: { bannerId: Number(params.bannerId) },
      data: null,
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="롤링 배너 관리" path={['콘텐츠', '롤링 배너 관리']} />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <BannerList currentBannerId={Number(params.bannerId)} />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <UpdateBanner currentBannerId={Number(params.bannerId)} />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

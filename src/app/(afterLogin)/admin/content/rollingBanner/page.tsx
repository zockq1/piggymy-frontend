import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchBannerList } from '@/share/query/banner/useGetBannerList';
import { prefetchQuizList } from '@/share/query/quiz/useGetQuizList';
import { prefetchVocaList } from '@/share/query/voca/useGetVocaList';

import PageInfo from '../../_components/PageInfo';
import BannerList from './_components/BannerList';
import CreateBanner from './_components/CreateBanner';

export default async function Banner() {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchBannerList(queryClient),
    prefetchVocaList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
    prefetchQuizList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
  ]);
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="롤링 배너 관리" path={['콘텐츠', '롤링 배너 관리']} />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <BannerList />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <CreateBanner />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

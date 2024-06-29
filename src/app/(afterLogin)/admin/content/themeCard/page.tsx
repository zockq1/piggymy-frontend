import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchCardList } from '@/share/query/card/useGetCardList';
import { usePrefetchQuizList } from '@/share/query/quiz/useGetQuizList';
import { usePrefetchVocaList } from '@/share/query/voca/useGetVocaList';

import PageInfo from '../../_components/PageInfo';
import CardList from './_components/CardList';
import CreateCard from './_components/CreateCard';

export default async function Card() {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchCardList(queryClient),
    usePrefetchVocaList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
    usePrefetchQuizList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
  ]);
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="테마별 카드모음집 관리"
          path={['콘텐츠', '테마별 카드모음집 관리']}
        />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <CardList />
        </Layout.Content.Full>
        <Layout.Content.Full>
          <CreateCard />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

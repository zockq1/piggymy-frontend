import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { prefetchLinkList } from '@/share/query/link/useGetLinkList';

import LinkList from './_components/LinkList';
import LinkPageInfo from './_components/LinkPageInfo';
import LinkSearchForm from './_components/LinkSearchForm';

export default async function Link() {
  const queryClient = new QueryClient();
  await Promise.all([
    prefetchLinkList(queryClient, {
      data: { page: 1, page_size: 10 },
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <LinkPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <LinkSearchForm />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <LinkList />
        </HydrationBoundary>
      </Layout.Content.Full>
    </>
  );
}

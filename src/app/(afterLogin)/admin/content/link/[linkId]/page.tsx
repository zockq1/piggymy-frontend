import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import Layout from '@/share/layout/Layout';
import { usePrefetchLink } from '@/share/query/link/useGetLink';
import { usePrefetchVocaList } from '@/share/query/voca/useGetVocaList';

import LinkPageInfo from '../_components/LinkPageInfo';
import UpdateLink from '../_components/UpdateLink';

export default async function Link({ params }: { params: { linkId: string } }) {
  const queryClient = new QueryClient();
  await Promise.all([
    usePrefetchVocaList(queryClient, {
      data: { page: 1, page_size: 1000 },
    }),
    usePrefetchLink(queryClient, {
      id: { linkId: Number(params.linkId) },
      data: null,
    }),
  ]);

  return (
    <>
      <Layout.Content.Full>
        <LinkPageInfo />
      </Layout.Content.Full>
      <HydrationBoundary state={dehydrate(queryClient)}>
        <Layout.Content.Full>
          <UpdateLink currentLinkId={Number(params.linkId)} />
        </Layout.Content.Full>
      </HydrationBoundary>
    </>
  );
}

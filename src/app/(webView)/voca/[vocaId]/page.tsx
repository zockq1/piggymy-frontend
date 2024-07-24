import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from '@tanstack/react-query';

import MobileLayout from '@/share/layout/MobileLayout';
import { prefetchVoca } from '@/share/query/webViewVoca/useGetVoca';

import VocaFooter from '../_components/VocaFooter';
import VocaImage from '../_components/VocaImage';
import VocaLink from '../_components/VocaLink';
import VocaMean from '../_components/VocaMean';
import VocaTitle from '../_components/VocaTitle';

export default async function Voca({ params }: { params: { vocaId: string } }) {
  const queryClient = new QueryClient();
  await Promise.all([
    prefetchVoca(queryClient, { data: Number(params.vocaId) }),
  ]);
  return (
    <MobileLayout>
      <MobileLayout.Content>
        <HydrationBoundary state={dehydrate(queryClient)}>
          <VocaTitle />
          <VocaImage />
          <VocaMean />
          <VocaLink />
          <VocaFooter />
        </HydrationBoundary>
      </MobileLayout.Content>
    </MobileLayout>
  );
}

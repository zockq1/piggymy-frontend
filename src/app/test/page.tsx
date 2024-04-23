import { Suspense } from 'react';

import Layout from '@/share/layout/Layout';
import Prefetch from '@/share/query/Prefetch';
import { usePrefetchCategory } from '@/share/query/test/useGetCategory';

import Category from './_component/Category';

export default async function Test() {
  return (
    <Layout>
      <Layout.FullContent>
        <Suspense fallback={<div>로딩중</div>}>
          <Prefetch prefetchQueries={[usePrefetchCategory]}>
            <Category />
          </Prefetch>
        </Suspense>
      </Layout.FullContent>
    </Layout>
  );
}

import { Suspense } from 'react';

import Prefetch from '@/share/async/Prefetch';
import Layout from '@/share/layout/Layout';

import { usePrefetchCategory } from '../../query/test/useGetCategory';
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

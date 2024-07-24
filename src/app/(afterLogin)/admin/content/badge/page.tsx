import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import BadgeList from './_components/BadgeList';
import CreateBadge from './_components/CreateBadge';

export default async function Badge() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="배지 관리" path={['콘텐츠', '배지 관리']} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <BadgeList />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CreateBadge />
      </Layout.Content.Full>
    </>
  );
}

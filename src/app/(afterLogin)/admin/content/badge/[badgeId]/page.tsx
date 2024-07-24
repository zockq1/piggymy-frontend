import Layout from '@/share/layout/Layout';

import PageInfo from '../../../_components/PageInfo';
import BadgeList from '../_components/BadgeList';
import UpdateBadge from '../_components/UpdateBadge';

export default async function Badge({
  params,
}: {
  params: { badgeId: string };
}) {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="배지 관리" path={['콘텐츠', '배지 관리']} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <BadgeList currentBadgeId={Number(params.badgeId)} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <UpdateBadge currentBadgeId={Number(params.badgeId)} />
      </Layout.Content.Full>
    </>
  );
}

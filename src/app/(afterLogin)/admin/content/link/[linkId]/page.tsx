import Layout from '@/share/layout/Layout';

import LinkPageInfo from '../_components/LinkPageInfo';
import UpdateLink from '../_components/UpdateLink';

export default async function Link({ params }: { params: { linkId: string } }) {
  return (
    <>
      <Layout.Content.Full>
        <LinkPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <UpdateLink currentLinkId={Number(params.linkId)} />
      </Layout.Content.Full>
    </>
  );
}

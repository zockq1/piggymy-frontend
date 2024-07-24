import Layout from '@/share/layout/Layout';

import CreateLink from '../_components/CreateLink';
import LinkPageInfo from '../_components/LinkPageInfo';

export default async function Link() {
  return (
    <>
      <Layout.Content.Full>
        <LinkPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CreateLink />
      </Layout.Content.Full>
    </>
  );
}

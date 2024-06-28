import Layout from '@/share/layout/Layout';

import LinkList from './_components/LinkList';
import LinkPageInfo from './_components/LinkPageInfo';
import LinkSearchForm from './_components/LinkSearchForm';

export default async function Badge() {
  return (
    <>
      <Layout.Content.Full>
        <LinkPageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <LinkSearchForm />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <LinkList />
      </Layout.Content.Full>
    </>
  );
}

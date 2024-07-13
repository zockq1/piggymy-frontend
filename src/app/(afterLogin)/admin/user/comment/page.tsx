import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import OpinionList from './_components/OpinionList';
import OpinionSearchForm from './_components/OpinionSearchForm';

export default async function Opinion() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="회원 의견 관리" path={['회원', '회원 의견 관리']} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <OpinionSearchForm />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <OpinionList />
      </Layout.Content.Full>
    </>
  );
}

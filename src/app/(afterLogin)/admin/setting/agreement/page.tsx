import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import AgreementForm from './_components/AgreementForm';

export default async function AgreementPolicy() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="서비스 이용약관"
          path={['설정', '서비스 이용', '서비스 이용약관']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <AgreementForm />
      </Layout.Content.Full>
    </>
  );
}

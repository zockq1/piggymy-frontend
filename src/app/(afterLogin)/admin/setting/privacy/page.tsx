import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import PrivacyForm from './_components/privacyPolicyForm';

export default async function PrivacyPolicy() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="개인정보 처리방침"
          path={['설정', '서비스 이용', '개인정보 처리방침']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <PrivacyForm />
      </Layout.Content.Full>
    </>
  );
}

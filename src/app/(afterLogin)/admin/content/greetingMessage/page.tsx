import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import GreetingMessageForm from './_components/GreetingMessageForm';

export default async function GreetingMessage() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="그리팅 메시지 관리"
          path={['콘텐츠', '그리팅 메시지 관리']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <GreetingMessageForm />
      </Layout.Content.Full>
    </>
  );
}

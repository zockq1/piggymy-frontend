import Layout from '@/share/layout/Layout';

import GreetingMessageForm from './_components/GreetingMessageForm';
import GreetingMessagePageInfo from './_components/GreetingMessagePageInfo';

export default async function GreetingMessage() {
  return (
    <>
      <Layout.Content.Full>
        <GreetingMessagePageInfo />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <GreetingMessageForm />
      </Layout.Content.Full>
    </>
  );
}

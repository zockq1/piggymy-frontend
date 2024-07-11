import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import CardList from './_components/CardList';
import CreateCard from './_components/CreateCard';

export default async function Card() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="테마별 카드모음집 관리"
          path={['콘텐츠', '테마별 카드모음집 관리']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardList />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CreateCard />
      </Layout.Content.Full>
    </>
  );
}

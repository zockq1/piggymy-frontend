import Layout from '@/share/layout/Layout';

import PageInfo from '../../../_components/PageInfo';
import CardList from '../_components/CardList';
import UpdateCard from '../_components/UpdateCard';

export default async function Card({ params }: { params: { cardId: string } }) {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo
          title="테마별 카드모음집 관리"
          path={['콘텐츠', '테마별 카드모음집 관리']}
        />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CardList currentCardId={Number(params.cardId)} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <UpdateCard currentCardId={Number(params.cardId)} />
      </Layout.Content.Full>
    </>
  );
}

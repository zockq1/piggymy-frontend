import Layout from '@/share/layout/Layout';

import PageInfo from '../../_components/PageInfo';
import BannerList from './_components/BannerList';
import CreateBanner from './_components/CreateBanner';

export default async function Banner() {
  return (
    <>
      <Layout.Content.Full>
        <PageInfo title="롤링 배너 관리" path={['콘텐츠', '롤링 배너 관리']} />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <BannerList />
      </Layout.Content.Full>
      <Layout.Content.Full>
        <CreateBanner />
      </Layout.Content.Full>
    </>
  );
}

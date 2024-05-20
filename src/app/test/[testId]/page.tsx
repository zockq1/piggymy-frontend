import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import Button from '@/share/ui/button/Button';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <Layout>
      <Header user="" headerList={[]} />
      <Layout.LeftSideMenu>
        <Sidebar sidebarList={[]} />
      </Layout.LeftSideMenu>
      {params.certificateId}
      <Button>버튼</Button>
    </Layout>
  );
}

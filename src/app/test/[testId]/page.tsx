import Header from '@/share/layout/header/Header';
import Layout from '@/share/layout/Layout';
import Button from '@/share/ui/button/Button';
import Sidebar from '@/share/ui/sidebar/Sidebar';

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

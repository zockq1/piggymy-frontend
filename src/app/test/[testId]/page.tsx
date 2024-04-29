import Layout from '@/share/layout/Layout';
import Button from '@/share/ui/button/Button';
import SidebarComponent from '@/share/ui/sidebar/Sidebar';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <Layout>
      <Layout>
        <Layout.LeftSideMenu>
          <SidebarComponent />
        </Layout.LeftSideMenu>
        {params.certificateId}
        <Button>버튼</Button>
      </Layout>
    </Layout>
  );
}

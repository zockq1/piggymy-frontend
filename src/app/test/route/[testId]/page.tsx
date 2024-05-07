import Header from '@/share/layout/header/Header';
import TestLayout from '@/share/layout/TestLayout';
import Sidebar from '@/share/ui/sidebar/Sidebar';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <TestLayout>
      {params.certificateId}
      <TestLayout.Header>
        <Header headerList={[]} user="" />
      </TestLayout.Header>
      <TestLayout.SideBar>
        <Sidebar sidebarList={[]} />
      </TestLayout.SideBar>
    </TestLayout>
  );
}

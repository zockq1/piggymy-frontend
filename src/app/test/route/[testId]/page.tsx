import Header from '@/share/layout/header/Header';
import Sidebar from '@/share/layout/sidebar/Sidebar';
import TestLayout from '@/share/layout/TestLayout';

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

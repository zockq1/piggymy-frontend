import TestLayout from '@/share/layout/TestLayout';
import HeaderComponent from '@/share/ui/header/Header';
import SidebarComponent from '@/share/ui/sidebar/Sidebar';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <TestLayout>
      {params.certificateId}
      <TestLayout.Header>
        <HeaderComponent user="" headerList={[]} />
      </TestLayout.Header>
      <TestLayout.SideBar>
        <SidebarComponent sidebarList={[]} />
      </TestLayout.SideBar>
    </TestLayout>
  );
}

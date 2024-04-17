import Layout from '@/share/layout/Layout';
import Button from '@/share/ui/button/Button';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <Layout>
      <Layout.FullContent>
        {params.certificateId}
        <Button variant="outline">버튼</Button>
      </Layout.FullContent>
    </Layout>
  );
}

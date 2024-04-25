import Layout from '@/share/layout/Layout';
import Button from '@/share/ui/button/Button';

export default function CertificateBoardPage({
  params,
}: {
  params: { certificateId: string };
}) {
  return (
    <Layout>
      <Layout>
        {params.certificateId}
        <Button>버튼</Button>
      </Layout>
    </Layout>
  );
}

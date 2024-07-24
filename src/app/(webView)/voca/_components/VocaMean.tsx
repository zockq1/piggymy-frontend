'use client';

import { useParams } from 'next/navigation';

import { useGetVoca } from '@/share/query/webViewVoca/useGetVoca';
import Collapse from '@/share/ui/collapse/Collapse';

export default function VocaMean() {
  const params = useParams();
  const { data } = useGetVoca(Number(params.vocaId));

  return (
    <section>
      <Collapse title="어떤 뜻인가요?" content={data?.content} />
    </section>
  );
}

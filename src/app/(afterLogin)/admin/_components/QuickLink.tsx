import Image from 'next/image';
import Link from 'next/link';

import pig from '/public/img/piggy/Basic-Face.png';
import ContentBox from '@/share/ui/content-box/ContentBox';

interface QuickLinkProps {
  title: string;
  description: string;
  route: string;
}

export default function QuickLink({
  title,
  description,
  route,
}: QuickLinkProps) {
  return (
    <Link href={route}>
      <ContentBox className="h-full ">
        <div className="flex w-full items-center justify-start">
          <Image
            className="mx-2"
            src={pig}
            width={100}
            height={100}
            alt="pig"
          />
          <div className="ml-3">
            <h1 className="text-[17px] font-bold">{title}</h1>
            <p className="whitespace-pre-line text-sm font-semibold text-[#999]">
              {description}
            </p>
          </div>
        </div>
      </ContentBox>
    </Link>
  );
}

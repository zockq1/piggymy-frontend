import Link, { LinkProps } from 'next/link';

import Icon from '../icon/Icon';

interface IconButtonProps extends LinkProps {}

export default function MoreButton({ ...props }: IconButtonProps) {
  return (
    <Link
      className="inline-flex content-center items-center gap-1 rounded-[10px] p-[9px] text-[11px] font-bold text-[#999999]"
      {...props}
    >
      <div className="text-center">더보기</div>
      <Icon icon="next" size={10} />
    </Link>
  );
}

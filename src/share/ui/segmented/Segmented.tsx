import Link from 'next/link';

interface Segment {
  id: string | number;
  path: string;
  name: string;
}

interface SegmentedProps {
  segments: Segment[];
  currentPath: string;
}

function Segmented({ segments, currentPath }: SegmentedProps) {
  const Segment = ({
    segment,
    selected = false,
  }: {
    segment: Segment;
    selected?: boolean;
  }) => (
    <li className={'list-none'}>
      <Link
        href={segment.path}
        className={`font-inter text-left text-lg font-bold leading-5 tracking-tighter ${selected ? 'text-black' : 'text-[#999]'}`}
      >
        {segment.name}
      </Link>
    </li>
  );

  return (
    <div className="inline-flex items-center justify-center gap-[18px]">
      {segments.map((s, i) =>
        i < segments.length - 1 ? (
          <>
            <Segment key={s.id} segment={s} selected={s.path === currentPath} />
            <i className={'h-[13px] border-r-2 border-[#999]'} />
          </>
        ) : (
          <Segment key={s.id} segment={s} selected={s.path === currentPath} />
        ),
      )}
    </div>
  );
}

export default Segmented;

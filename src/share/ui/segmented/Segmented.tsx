import Link from 'next/link';

interface Segment {
  id: string | number;
  route: string;
  name: string;
}

interface SegmentedProps {
  segmentList: Segment[];
  currentRoute: string;
}

const Segment = ({
  segment,
  selected = false,
}: {
  segment: Segment;
  selected?: boolean;
}) => (
  <li className={'list-none'}>
    <Link
      href={segment.route}
      className={`font-inter text-left text-lg font-bold leading-5 tracking-tighter ${selected ? 'text-black' : 'text-[#999]'}`}
    >
      {segment.name}
    </Link>
  </li>
);

function Segmented({ segmentList, currentRoute }: SegmentedProps) {
  return (
    <div className="inline-flex items-center justify-center gap-[18px]">
      {segmentList.map((segment, i) =>
        i < segmentList.length - 1 ? (
          <>
            <Segment
              key={segment.id}
              segment={segment}
              selected={segment.route === currentRoute}
            />
            <i
              key={'separator' + segment.id}
              className={'h-[13px] border-r-2 border-[#999]'}
            />
          </>
        ) : (
          <Segment
            key={segment.id}
            segment={segment}
            selected={segment.route === currentRoute}
          />
        ),
      )}
    </div>
  );
}

export default Segmented;

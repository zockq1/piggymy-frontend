'use client';

import Link from 'next/link';

export interface Segment {
  id: string | number;
  segment: string;
  name: string;
}

const Segment = ({
  segment,
  selected = false,
  controlType = 'route',
  onClick,
}: {
  segment: Segment;
  selected?: boolean;
  controlType: 'route' | 'state';
  onClick?: (segment: Segment) => void;
}) => {
  const handleClick = (segment: Segment) => {
    if (onClick) onClick(segment);
  };

  return controlType === 'route' ? (
    <Link
      href={segment.segment}
      className={`font-inter text-left text-lg font-bold leading-5 tracking-tighter ${selected ? 'text-black' : 'text-[#999]'}`}
    >
      {segment.name}
    </Link>
  ) : (
    <button
      className={`font-inter text-left text-lg font-bold leading-5 tracking-tighter ${selected ? 'text-black' : 'text-[#999]'}`}
      onClick={() => handleClick(segment)}
    >
      {segment.name}
    </button>
  );
};

interface SegmentedProps {
  segmentList: Segment[];
  activeSegment: string;
  controlType?: 'route' | 'state';
  onClick?: (segment: Segment) => void;
}

function Segmented({
  segmentList,
  activeSegment,
  controlType = 'route',
  onClick,
}: SegmentedProps) {
  return (
    <div className={'inline-flex items-center justify-center gap-[18px]'}>
      {segmentList.map((segment, i) =>
        i < segmentList.length - 1 ? (
          <li
            key={segment.id}
            className={
              'inline-flex list-none items-center justify-center gap-[18px]'
            }
          >
            <Segment
              segment={segment}
              selected={segment.segment === activeSegment}
              controlType={controlType}
              onClick={onClick}
            />
            <i
              key={'separator' + segment.id}
              className={'h-[13px] border-r-2 border-[#999]'}
            />
          </li>
        ) : (
          <li key={segment.id} className={'list-none'}>
            <Segment
              segment={segment}
              selected={segment.segment === activeSegment}
              controlType={controlType}
              onClick={onClick}
            />
          </li>
        ),
      )}
    </div>
  );
}

export default Segmented;

import Link from 'next/link';

interface HeaderItem {
  route: string;
  title: string;
}

interface HeaderListProps {
  items: HeaderItem[];
  title: string;
}

export default function HeaderList({ items, title }: HeaderListProps) {
  return (
    <ul className="h-full w-1/6 pl-2 pr-2">
      <li className="bottom-1 border-b-2 border-black pb-1.5 text-center text-lg font-bold">
        {title}
      </li>
      {items.map((item: HeaderItem, index: number) => (
        <li
          key={index}
          className="border-b-[1.2px] border-black pb-1.5 pl-2 pt-1"
        >
          <Link href={item.route}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

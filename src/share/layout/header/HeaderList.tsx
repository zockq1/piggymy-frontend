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
    <ul className="h-full w-1/6">
      <li className="bottom-1 mb-1 border-solid border-black text-center text-lg font-bold">
        {title}
      </li>
      {items.map((item: HeaderItem, index: number) => (
        <li key={index}>
          <Link href={item.route}>{item.title}</Link>
        </li>
      ))}
    </ul>
  );
}

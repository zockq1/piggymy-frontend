import Link from 'next/link';

interface PostListProps {
  postList: {
    title: string;
    author?: string;
    registrationDate: string;
    route: string;
  }[];
}

export default function PostList({ postList }: PostListProps) {
  return (
    <ul className=" divide-y divide-[#d9d9d9]">
      {postList.map((post) => {
        const { title, author, registrationDate, route } = post;
        return (
          <li
            key={title}
            className="grid h-[65px] w-[330px] grid-cols-[190px_140px] items-center"
          >
            <Link
              href={route}
              className="inline-block truncate text-[15px] font-bold"
            >
              {title}
            </Link>
            <span className="inline-block divide-x text-end text-[9px]">
              {author && <span className="break-keep px-2">{author}</span>}
              <span className=" break-keep px-2 text-end">
                {registrationDate}
              </span>
            </span>
          </li>
        );
      })}
    </ul>
  );
}

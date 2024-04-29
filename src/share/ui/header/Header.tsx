import Link from 'next/link';

export default function HeaderComponent() {
  return (
    <div className="flex h-full w-full flex-row items-center justify-between pl-3 pr-3">
      <div className="title w-1/6 text-xl font-bold">
        <span>피기미 piggyme</span>
      </div>
      <div className="flex h-full w-8/12 flex-row">
        <ul className="flex w-full flex-row items-center justify-around">
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              홈
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              콘텐츠
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              용어/퀴즈
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              설정
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              회원
            </Link>
          </li>
          <li>
            <Link className="hover:text-blue-500 text-sm" href="/">
              관리자
            </Link>
          </li>
          <li className="text-xs">전체보기</li>
        </ul>
      </div>
      <div className="flex h-full w-1/6 items-center justify-end">
        <div className="h-10 w-10 rounded-3xl bg-gray-3">
          {/*  이미지 삽입*/}
        </div>
        <div className="h-2/3 w-1/2 pl-1">
          <p className="h-1/2 w-full text-sm leading-7">관리자</p>
          <p className="h-1/2 w-full text-sm leading-5">관리자명</p>
        </div>
      </div>
    </div>
  );
}

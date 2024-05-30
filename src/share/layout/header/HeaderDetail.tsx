import Image from 'next/image';
import { useEffect, useRef, useState } from 'react';

import bottomArrow from '/public/img/Icon/Name=Chevron-off@3x.png';
import HeaderList from '@/share/layout/header/HeaderList';
import {
  contentList,
  managerList,
  settingList,
  userList,
  vocaQuizList,
} from '@/share/route/routes';

export default function HeaderDetail() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef<HTMLDivElement>(null);

  const toggleDropdown = () => {
    setIsDropdownOpen((prevIsDropdownOpen: boolean) => !prevIsDropdownOpen);
  };

  const handleClickOutside = (event: MouseEvent) => {
    if (
      dropdownRef.current &&
      !dropdownRef.current.contains(event.target as Node)
    ) {
      setIsDropdownOpen(false);
    }
  };

  useEffect(() => {
    document.addEventListener('mousedown', handleClickOutside);
    return () => {
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <div ref={dropdownRef}>
      <button onClick={toggleDropdown} className="flex flex-row">
        전체 보기 <Image src={bottomArrow} alt="arrow" width={20} height={20} />
      </button>
      {isDropdownOpen && (
        <div className="z-100 absolute left-40 top-20 flex h-auto w-10/12 flex-row justify-center rounded-b-lg bg-white p-3 pb-6 text-sm shadow-xl">
          <HeaderList items={contentList} title="콘텐츠" />
          <HeaderList items={vocaQuizList} title="용어/퀴즈" />
          <HeaderList items={settingList} title="설정" />
          <HeaderList items={userList} title="회원" />
          <HeaderList items={managerList} title="관리자" />
        </div>
      )}
    </div>
  );
}

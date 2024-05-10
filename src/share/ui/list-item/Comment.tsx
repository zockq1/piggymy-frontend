'use client';

import { Dayjs } from 'dayjs';
import Image from 'next/image';

import feedbackIcon from '/public/img/Icon/Feedback.svg';
import pig from '/public/img/piggy/Basic-Face.png';

interface CommentProps {
  user: string;
  description: string;
  createdDate: Dayjs;
  onClick: () => void;
  feedback: string;
}

export default function Comment({
  user,
  description,
  createdDate,
  onClick,
  feedback,
}: CommentProps) {
  return (
    <button
      onClick={onClick}
      className="relative flex h-[397px] w-[258px] flex-col rounded-2xl bg-[#4676FB33] p-6 shadow-[4px_4px_10px_2px_rgba(191,191,191,0.25)]"
    >
      <p className="w-full text-end text-[15px] font-bold">의견 보내기</p>
      <p className="mb-1 h-[32px] text-lg font-bold">{user} 회원님</p>
      <p className="h-[116px] truncate whitespace-pre-line text-start  text-[22px] font-bold leading-[28px]">
        {description}
      </p>
      <p className="mt-1">{createdDate.format('YYYY.MM.DD')} 작성</p>
      <div className="mt-4 flex w-[55px] flex-col items-center justify-center text-xs">
        <Image src={feedbackIcon} alt="feedbackIcon" width={40} height={40} />
        <div className="mt-2 text-gray-3">{feedback}</div>
      </div>
      <Image
        className=" absolute bottom-4 right-4"
        src={pig}
        width={100}
        height={100}
        alt="pig"
      />
    </button>
  );
}

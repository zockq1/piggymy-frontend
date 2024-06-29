import Image from 'next/image';

import coin from '/public/img/Icon/image 427@3x.png';

export default function Greeting() {
  const dummy = `관리자님, 반가워요! 🙌
  오늘은 어떤 용어를 배워볼까요?`;
  return (
    <div className="relative flex h-full flex-col justify-end px-2 align-bottom">
      <h1 className="whitespace-pre-line text-[30px] font-bold leading-[35px]">
        {dummy}
      </h1>
      <p className="text-sm font-semibold leading-[35px] text-[#999]">
        *현재 설정된 그리팅 메시지입니다.
      </p>

      <Image
        className=" absolute right-2"
        src={coin}
        width={130}
        height={130}
        alt="coin"
      />
    </div>
  );
}

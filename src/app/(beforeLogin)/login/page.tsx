import Image from 'next/image';

import piggyImg from '/public/img/piggy/Basic-Face@3x.png';

import LoginForm from './_component/LoginForm';

export default async function LoginHome() {
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="flex h-4/6 w-[800px] flex-row overflow-auto rounded-3xl shadow-xl">
        <div className="h-full w-1/2 bg-primary p-12 pt-16">
          <div className="mb-12 h-auto w-full">
            <p className="text-3xl font-bold text-white">피기미</p>
            <p className="text-3xl font-bold text-white">Piggyme</p>
          </div>
          <div className="mb-36 h-auto w-full text-white">
            <p>쉽고 재미있는 경제 공부는 지금 부터!</p>
            <p>
              <b>피기미</b>와 함께해요
            </p>
          </div>
          <div className="flex h-auto w-full flex-row justify-end">
            <Image src={piggyImg} alt="piggyImg" width={80} height={80} />
          </div>
        </div>
        <LoginForm />
      </div>
    </div>
  );
}

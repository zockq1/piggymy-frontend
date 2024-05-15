import Image from 'next/image';

import piggyImg from '/public/img/piggy/Basic-Face@3x.png';

export default async function LoginHome() {
  return (
    <div className="flex h-screen flex-row items-center justify-center">
      <div className="flex h-4/6 w-3/5 flex-row overflow-auto rounded-3xl shadow-xl">
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
        <div className="flex h-full w-1/2 items-center p-12 pl-20 pr-20">
          <div className="h-5/6 w-full">
            <p className="text-4xl font-bold">관리자 로그인</p>
            <form className="mt-10">
              <div className="flex w-full flex-row">
                <input
                  type="text"
                  className="mb-3 w-full rounded-3xl border-2 border-gray-5 p-2 pl-4"
                  placeholder="Id"
                />
              </div>
              <div className="w-full">
                <input
                  type="text"
                  className="mb-3 w-full rounded-3xl border-2 border-gray-5 p-2 pl-4"
                  placeholder="Pw"
                />
              </div>
            </form>
            <div className="h-8 w-full border-b-[1px] border-gray-5 p-2 pt-0">
              <div className="flex flex-row items-center justify-between">
                <div className="flex flex-row items-center">
                  <input
                    type="checkbox"
                    name="saveId"
                    id="saveId"
                    className=" hover:cursor-pointer"
                  />
                  <label htmlFor="saveId">
                    <p className="pl-1.5 text-sm hover:cursor-pointer">
                      아이디 저장
                    </p>
                  </label>
                </div>
                <p className="text-sm hover:cursor-pointer">
                  아이디 / 비밀번호 찾기
                </p>
              </div>
            </div>
            <button className="mt-4 h-14 w-full rounded-3xl bg-primary text-white">
              로그인
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

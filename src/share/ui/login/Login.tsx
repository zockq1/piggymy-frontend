import Image from 'next/image';

import piggyImg from '/public/img/piggy/Basic-Face@3x.png';

export default function Login() {
  return (
    <div className="login h-full w-full bg-gray-3">
      <Image src={piggyImg} alt="piggy" />
    </div>
  );
}

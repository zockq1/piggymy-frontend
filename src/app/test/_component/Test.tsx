'use client';

import { useState } from 'react';

import { useCreatePosts } from '@/share/query/test/useCreatePost';

export default function Test() {
  const [count, setCount] = useState(0);
  const { mutate, data } = useCreatePosts();
  console.log(data);
  return (
    <div>
      <p className="text-purple-5">{count}</p>
      <button onClick={() => setCount(count + 1)}>Click me</button>
      <br />
      <button
        onClick={() =>
          mutate({
            title: '제목',
            content: '내용',
            images: [],
          })
        }
      >
        임시 데이터 가져오기
      </button>
      <br />
    </div>
  );
}

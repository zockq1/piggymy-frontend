import { useMutation } from '@tanstack/react-query';

import { baseURL } from '../fetch-config';

interface CreatePostRequest {
  title: string;
  content: string;
  images: File[];
}

export const createPost = async (postData: CreatePostRequest) => {
  const res = await fetch(`${baseURL}/posts`, {
    method: 'POST',
    body: JSON.stringify(postData),
    credentials: 'include',
    cache: 'no-store',
    headers: {
      'Content-Type': 'application/json',
    },
  });

  return res.json();
};

export function useCreatePosts() {
  return useMutation({
    mutationFn: createPost,
  });
}

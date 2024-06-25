import { useMutation, useQueryClient } from '@tanstack/react-query';
import { notification } from 'antd';
import axios, { AxiosError } from 'axios';

import { Request, Response } from '@/type/apiType';
import { UpdateVocaRequestJson } from '@/type/vocaType';

import axiosInstance from '../axios';

export const updateVoca = async (
  request: Request<UpdateVocaRequestJson, number>,
) => {
  const {
    koreanTitle,
    englishTitle,
    koreanCategory,
    englishCategory,
    content,
    sourceName,
    sourceLink,
    thumbnailPath,
    thumbnailName,
    thumbnailSourceName,
    thumbnailSourceLink,
    isUse,
    image,
  } = request.data;

  const formData = new FormData();
  if (!!image && image.length > 0 && image[0].originFileObj) {
    formData.append(
      'thumbnail',
      image[0].originFileObj,
      image[0].originFileObj?.name,
    );
  } else {
    formData.append('thumbnail', '');
  }

  const vocaBlob = new Blob(
    [
      JSON.stringify({
        koreanTitle: koreanTitle || '가나다',
        englishTitle: englishTitle || 'abc',
        koreanCategory: koreanCategory || 'r',
        englishCategory: englishCategory || 'a',
        content: content || '가나다라마',
        sourceName: sourceName || 'abc',
        sourceLink: sourceLink || 'abc',
        thumbnailPath,
        thumbnailName,
        thumbnailSourceName: thumbnailSourceName || 'abc',
        thumbnailSourceLink: thumbnailSourceLink || 'abc',
        isUse: isUse,
      }),
    ],
    { type: 'application/json' },
  );

  formData.append('voca', vocaBlob);

  const response = await axiosInstance.put<Response<number>>(
    `/api/vocas/${request.id}`,
    formData,
    {
      headers: {
        'Content-Type': 'multipart/form-data',
      },
    },
  );

  return response.data;
};

export function useUpdateVoca() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationKey: ['updateVoca'],
    mutationFn: updateVoca,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['vocas'] });
      notification.success({
        message: '용어 수정 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      console.log(error);
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '용어 수정 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}

export const patchIsUse = async (
  updateIsUseData: Request<{ vocaIds: number[]; isUse: boolean }>,
) => {
  const response = await axiosInstance.patch<Response<null>>(
    `/api/vocas/isuse`,
    updateIsUseData.data,
  );

  return response.data;
};

export function usePatchVocasIsUse() {
  const queryClient = useQueryClient();

  return useMutation({
    mutationFn: patchIsUse,
    onSuccess: async () => {
      await queryClient.invalidateQueries({ queryKey: ['vocas'] });
      notification.success({
        message: '용어 사용여부 변경 성공',
      });
    },
    onError: (error: AxiosError<Response<unknown>, unknown>) => {
      if (axios.isAxiosError(error)) {
        notification.error({
          message: '용어 사용여부 변경 실패',
          description: `${error.response?.data.code}: ${error.response?.data.message}`,
        });
      }
    },
  });
}

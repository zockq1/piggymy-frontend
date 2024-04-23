import { QueryClient, QueryFunction, useQuery } from '@tanstack/react-query';

import { baseURL } from '../fetch-config';

export interface CategoryModel {
  id: number;
  title: string;
  subCategory: {
    id: number;
    title: string;
  }[];
}

const getCategoryFn: QueryFunction<CategoryModel[]> = async () => {
  const res = await fetch(`${baseURL}/certificate/category`);
  return res.json();
};

const usePrefetchCategory = (queryClient: QueryClient) => {
  return queryClient.prefetchQuery({
    queryKey: ['category'],
    queryFn: getCategoryFn,
  });
};

const useGetCategory = () => {
  return useQuery({
    queryKey: ['category'],
    queryFn: getCategoryFn,
  });
};

export { useGetCategory, usePrefetchCategory };

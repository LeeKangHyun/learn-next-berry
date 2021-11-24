import axios from 'axios';
import { useQuery } from 'react-query';

export async function fetchItem(page: number = 0) {
  const { data } = await axios.get(`/api/v1/project?page=${page}`);

  return data;
}

export function useReactQuery(page: number) {
  return useQuery(
    ['item', page],
    () => fetchItem(page),
    {
      // keepPreviousData: true,
      keepPreviousData: false,
      staleTime: Infinity,
    },
  );
}

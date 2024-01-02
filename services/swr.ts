'use client';

import useSWR from 'swr';
import { ICustomSWRConfig, ISwrApi } from './type';
import callApi from '@/services/axios';

const useCustomSWR = (api: ISwrApi, config?: ICustomSWRConfig) => {
  const fetchData = async () => {
    if (api.method === 'get' || api.method === 'undefined') {
      const response = await callApi().get(api.url);
      return response.data;
    } else {
      const response = await callApi().post(api.url,{
        method: api.method,
        data: api.body
      });

      return response.data;
    }
  };

  const { data, error } = useSWR(api.url, fetchData, config);

  return {
    data,
    isLoading: !error && !data,
    isError: error
  };
};

export default useCustomSWR;

// usage

// const { data, isLoading, isError } = useCustomSWR('/api/data', {
//     refreshInterval: 5000, // Refresh every 5 seconds
//     revalidateOnReconnect: true,
//     revalidateOnFocus: true,
//   });

import { showNotification } from '@mantine/notifications';
import { useAuthStore } from '@store/useAuth';
import axios, { AxiosError, AxiosRequestHeaders } from 'axios';
import { startsWith } from 'lodash-es';
import { API_URL } from '@config/const';

export const setupResponseInterceptor = () => {
  axios.interceptors.response.use(
    (response) => response,
    (error: AxiosError) => {
      if (error?.response?.status && error?.response?.status === 401) {
        useAuthStore.getState().logout();
      }

      if (
        error?.response?.status &&
        error?.response?.status >= 402 &&
        error?.response?.status <= 499
      ) {
        showNotification({
          color: 'red',
          message: (error?.response?.data as { message: string }).message,
        });
      }

      return Promise.reject(error);
    }
  );
};

export const setupRequestInterceptor = () => {
  axios.interceptors.request.use(
    (config) => {
      const request = { ...config };
      if (!startsWith(request.url, 'http')) {
        request.url = `${API_URL}${request.url}`;
      }
      const token = useAuthStore.getState().accessToken;
      if (token)
        request.headers = {
          ...request.headers,
          Authorization: `Bearer ${token}`,
        } as AxiosRequestHeaders;
      return request;
    },
    (error) => Promise.reject(error)
  );
};

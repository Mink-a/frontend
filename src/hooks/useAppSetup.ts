import { useEffect, useState } from 'react';
import { useAuthStore } from '@store/useAuth';
import {
  setupResponseInterceptor,
  setupRequestInterceptor,
} from '@utils/axios-interceptor';

export function useAppSetup() {
  const [init, setInit] = useState(false);
  const { accessToken } = useAuthStore();

  useEffect(() => {
    setupRequestInterceptor();
    setupResponseInterceptor();
    setInit(true);
  }, [accessToken]);

  return init;
}

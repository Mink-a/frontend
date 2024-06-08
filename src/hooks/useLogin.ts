import { useAuthStore } from '@store/useAuth';
import { useMutation } from '@tanstack/react-query';
import { useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';
import { LoginCredentials } from '@pages/auth/types';
import { login } from '@services/login';

export function useLogin() {
  const { setAuth } = useAuthStore.getState();
  const navigate = useNavigate();

  return useMutation({
    mutationFn: (data: LoginCredentials) => login(data),
    onSuccess: (data) => {
      const { access_token, user } = data?.data;
      setAuth(
        {
          access_token: access_token,
          refresh_token: 'refresh_Token',
        },
        user.name
      );
      navigate(DASHBOARD_ROUTE);
    },
  });
}

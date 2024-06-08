import { useEffect } from 'react';
import { useAuthStore } from '@store/useAuth';
import { useLocation, useNavigate } from 'react-router-dom';
import { DASHBOARD_ROUTE } from '@config/const';

export function useAuthedRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (!accessToken) {
      navigate('/');
    }
  }, [navigate, pathname, accessToken]);
}

export function useAuthRoute() {
  const navigate = useNavigate();
  const { pathname } = useLocation();
  const { accessToken } = useAuthStore();

  useEffect(() => {
    if (accessToken) {
      navigate(DASHBOARD_ROUTE);
    }
  }, [navigate, pathname, accessToken]);
}

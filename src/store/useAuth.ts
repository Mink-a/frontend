import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';
import { encryptStorage } from '@utils/encryptStore';

interface UserState {
  username?: string;
}
interface AuthState {
  logout: () => void;
  setAuth: (token: Token, username: string) => void;
  user: UserState;
  accessToken: string | undefined;
  refreshToken: string | undefined;
}

type Token = {
  access_token: string;
  refresh_token: string;
};

export const useAuthStore = create<AuthState, [['zustand/persist', unknown]]>(
  persist(
    (set) => ({
      accessToken: undefined,
      refreshToken: undefined,
      user: {},
      setAuth: (token: Token, username: string) =>
        set(() => ({
          user: {
            username,
          },
          accessToken: token?.access_token,
          refreshToken: token?.refresh_token,
        })),
      logout: () =>
        set(() => ({
          accessToken: undefined,
          refreshToken: undefined,
        })),
    }),
    {
      name: 'tq-ars',
      // name: 'ars',
      storage: createJSONStorage(() => encryptStorage),
    }
  )
);

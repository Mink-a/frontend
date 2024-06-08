import axios from 'axios';
import { LoginCredentials } from '@pages/auth/types';

export function login(data: LoginCredentials): Promise<{
  data: {
    access_token: string;
    user: {
      id: number;
      name: string;
      password: string;
      email: string;
      createdAt: Date;
      updatedAt: Date;
    };
  };
}> {
  return axios.post('auth/login', data);
}

import axios from 'axios';
import { LoginCredentials } from '@pages/auth/types';

export function login(data: LoginCredentials) {
  return axios.post('/auth/login', data);
}

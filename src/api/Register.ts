import axios, { AxiosResponse } from 'axios';
import { User } from '../store/useUserStore';
import { PUBLIC_URL } from './axios';

interface Register {
  email: string;
  username: string;
  password: string;
}

export const ApiRegister = ({
  email,
  username,
  password
}: Register): Promise<AxiosResponse<User>> => {
  return axios.post(`${PUBLIC_URL}/auth/users`, {
    email,
    username,
    password
  });
};

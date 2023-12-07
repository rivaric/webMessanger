import axios, { AxiosResponse } from 'axios';
import { User } from '../store/useUserStore';
import { PUBLIC_URL } from './axios';

interface Login {
  username: string;
  password: string;
}

interface Token {
  auth_token: string
}

export const ApiLogin = ({ username, password }: Login): Promise<AxiosResponse<Token>> => {
  return axios.post(`${PUBLIC_URL}/auth-token/token/login`, {
    username,
    password
  });
};

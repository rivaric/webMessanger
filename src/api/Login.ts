import axios, { AxiosResponse } from 'axios';
import { PUBLIC_URL } from './axios';

interface Login {
  email: string;
  password: string;
}

interface Token {
  auth_token: string;
}

export const ApiLogin = ({ email, password }: Login): Promise<AxiosResponse<Token>> => {
  return axios.post(`${PUBLIC_URL}/auth-token/token/login`, {
    email,
    password
  });
};

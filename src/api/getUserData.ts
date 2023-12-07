import { AxiosResponse } from 'axios';
import { $api } from './axios';

export const getUserData = (): Promise<AxiosResponse> => {
  return $api.get('/auth/users/me');
};

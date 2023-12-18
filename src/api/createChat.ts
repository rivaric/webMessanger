import { AxiosResponse } from 'axios';
import { $api } from './axios';

export const createChat = (name: string): Promise<AxiosResponse> => {
  return $api.post('/chat/rooms/', {
    name
  });
};

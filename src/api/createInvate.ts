import { AxiosResponse } from 'axios';
import { $api } from './axios';

export const createInvate = (id: number): Promise<AxiosResponse> => {
  return $api.post('/chat/create_invite/', {
    room: id
  });
};

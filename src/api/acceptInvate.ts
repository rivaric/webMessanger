import { AxiosResponse } from 'axios';
import { $api } from './axios';

export const acceptInvate = (id: string): Promise<AxiosResponse> => {
  return $api.post(`/chat/accept_invite/${id}/`);
};

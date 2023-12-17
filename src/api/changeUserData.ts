import { AxiosResponse } from 'axios';
import { $api } from './axios';

interface changeUserData {
  username: string;
  profile_pic?: File;
  birthdate?: string;
}

export const changeUserData = ({
  username,
  profile_pic,
  birthdate
}: changeUserData): Promise<AxiosResponse> => {
  return $api.put('/auth/users/me', {
    username,
    profile_pic,
    birthdate
  });
};

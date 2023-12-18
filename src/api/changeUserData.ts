import { AxiosResponse } from 'axios';
import { $api } from './axios';

interface IChangeUserData {
  username: string;
  profile_pic?: File;
  birthdate?: Date;
}

export const changeUserData = ({
  username,
  profile_pic,
  birthdate
}: IChangeUserData): Promise<AxiosResponse> => {
  return $api.put('/auth/users/me/', {
    username,
    profile_pic,
    birthdate
  });
};

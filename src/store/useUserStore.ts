/* eslint-disable */
import { create } from 'zustand';

interface Room {
  id: string | null;
  name: string | null;
}

export interface User {
  username: string;
  profile_pic: string;
  rooms: Room[];
  birthdate: string;
}

interface useUserStore {
  user: User;
  setUser: (value: User) => void;
}

export const useUserStore = create<useUserStore>((set) => ({
  user: {
    username: '',
    profile_pic: '',
    rooms: [],
    birthdate: ''
  },
  setUser: (user) => set(() => ({ user }))
}));

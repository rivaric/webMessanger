/* eslint-disable */
import { create } from 'zustand';

export interface User {
  id: number | null;
  email: string | null;
  username: string | null;
}

interface useUserStore {
  user: User;
  setUser: (value: User) => void;
}

export const useUserStore = create<useUserStore>((set) => ({
  user: {
    id: null,
    email: null,
    username: null
  },
  setUser: (user) => set(() => ({ user }))
}));

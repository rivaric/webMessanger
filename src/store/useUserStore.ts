/* eslint-disable */
import { create } from 'zustand';

interface Room {
  id: number | null;
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
  addRooms: (value: Room) => void;
}

export const useUserStore = create<useUserStore>((set) => ({
  user: {
    username: '',
    profile_pic: '',
    rooms: [],
    birthdate: ''
  },
  setUser: (user) => set(() => ({ user })),
  addRooms: (newRooms) =>
    set((state) => {
      const updatedRooms = Array.isArray(newRooms)
        ? [...state.user.rooms, ...newRooms]
        : [...state.user.rooms, newRooms];

      return { user: { ...state.user, rooms: updatedRooms } };
    })
}));

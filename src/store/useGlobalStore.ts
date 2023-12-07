/* eslint-disable */
import { create } from 'zustand';

interface useGlovalStore {
  isLoading: boolean;
  setIsLoading: (value: boolean) => void;
}

export const useGlobalStore = create<useGlovalStore>((set) => ({
  isLoading: false,
  setIsLoading: (value) => set(() => ({ isLoading: value }))
}));

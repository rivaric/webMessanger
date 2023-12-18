/* eslint-disable */
import { create } from 'zustand';

interface Message {
  type: string,
  author: string,
  message: string,
  created: Date,
}

interface useMessagesStore {
  messages: [];
}

export const useMessagesStore = create<useMessagesStore>((set) => ({
  messages: []
}));

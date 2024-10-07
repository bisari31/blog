import { create } from 'zustand';

interface KeywordState {
  keyword: string;
  actions: {
    setKeyword: (key: string) => void;
  };
}

const useMessageStore = create<KeywordState>()((set) => ({
  keyword: 'all',
  actions: {
    setKeyword: (key: string) =>
      set({
        keyword: key,
      }),
  },
}));

export const useKeyword = () => useMessageStore((state) => state.keyword);
export const useKeywordActions = () =>
  useMessageStore((state) => state.actions);

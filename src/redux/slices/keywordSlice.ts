import { createSlice, type PayloadAction } from '@reduxjs/toolkit';

const initialState = { selectedKeyword: 'all' };

export const keywordSlice = createSlice({
  name: 'keyword',
  initialState,
  reducers: {
    setKeyword(state, action: PayloadAction<string>) {
      state.selectedKeyword = action.payload;
    },
  },
});

export const { setKeyword } = keywordSlice.actions;

export default keywordSlice.reducer;

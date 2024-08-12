import { configureStore } from '@reduxjs/toolkit';

import keywordSlice from './slices/keywordSlice';

export const store = configureStore({ reducer: { keyword: keywordSlice } });

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

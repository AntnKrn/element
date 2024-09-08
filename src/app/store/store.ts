import { configureStore } from '@reduxjs/toolkit';

import bitReducer from '@/entities/bitItem/model/bitSlice';

const store = configureStore({
  reducer: {
    currentBit: bitReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

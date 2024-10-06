import { configureStore } from '@reduxjs/toolkit';

import bitReducer from '@/entities/bitItem/model/bitSlice';
import yearReducer from '@/widgets/header/model/yearSlice';

const store = configureStore({
  reducer: {
    currentBit: bitReducer,
    currentYear: yearReducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

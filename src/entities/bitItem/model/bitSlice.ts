import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBit } from './interfaces';

const initialState: IBit = {
  bitSrc: '',
  bitName: '',
};

export const bitSlice = createSlice({
  name: 'bit',
  initialState,
  reducers: {
    changeCurrentPlayingBit: (state, action: PayloadAction<IBit>) => {
      state.bitName = action.payload.bitName;
      state.bitSrc = action.payload.bitSrc;
    },
  },
});

export const { changeCurrentPlayingBit } = bitSlice.actions;

export default bitSlice.reducer;

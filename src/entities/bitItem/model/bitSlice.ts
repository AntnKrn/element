import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IBit } from './interfaces';

const initialState: IBit = {
  beatAudioSrc: '',
  beatImgSrc: '',
  beatName: '',
};

export const bitSlice = createSlice({
  name: 'bit',
  initialState,
  reducers: {
    changeCurrentPlayingBit: (state, action: PayloadAction<IBit>) => {
      state.beatAudioSrc = action.payload.beatAudioSrc;
      state.beatImgSrc = action.payload.beatImgSrc;
      state.beatName = action.payload.beatName;
    },
  },
});

export const { changeCurrentPlayingBit } = bitSlice.actions;

export default bitSlice.reducer;

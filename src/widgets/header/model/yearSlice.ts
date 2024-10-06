import { createSlice, PayloadAction } from '@reduxjs/toolkit';

import { IYear } from './interfaces';

const initialState: IYear = {
  year: '23archive',
};

export const yearSlice = createSlice({
  name: 'year',
  initialState,
  reducers: {
    changeYear: (state, action: PayloadAction<IYear>) => {
      state.year = action.payload.year;
    },
  },
});

export const { changeYear } = yearSlice.actions;

export default yearSlice.reducer;

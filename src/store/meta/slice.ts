import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaState {
  isSideBarOpen: boolean;
}

const initialState: MetaState = {
  isSideBarOpen: true,
};

export const { reducer, actions } = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setIsSideBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSideBarOpen = payload;
    },
  },
});

export default reducer;

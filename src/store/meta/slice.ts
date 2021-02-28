import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaState {
  isSideBarOpen: boolean;
  isOverDoneDialogOpen: boolean;
  setIsPartiallyDialogOpen: boolean;
}

const initialState: MetaState = {
  isSideBarOpen: true,
  isOverDoneDialogOpen: false,
  setIsPartiallyDialogOpen: false,
};

export const { reducer, actions } = createSlice({
  name: 'meta',
  initialState,
  reducers: {
    setIsSideBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isSideBarOpen = payload;
    },
    setIsOverDoneDialogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isOverDoneDialogOpen = payload;
    },
    setIsPartiallyDialogOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.setIsPartiallyDialogOpen = payload;
    },
  },
});

export default reducer;

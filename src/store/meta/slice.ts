import { createSlice, PayloadAction } from '@reduxjs/toolkit';

export interface MetaState {
  isSideBarOpen: boolean;
  isOverDoneDialogOpen: boolean;
  isPartiallyDialogOpen: boolean;
  isAlertSnackBarOpen: boolean;
}

const initialState: MetaState = {
  isSideBarOpen: true,
  isOverDoneDialogOpen: false,
  isPartiallyDialogOpen: false,
  isAlertSnackBarOpen: false,
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
      state.isPartiallyDialogOpen = payload;
    },
    setIsAlertSnackBarOpen: (state, { payload }: PayloadAction<boolean>) => {
      state.isAlertSnackBarOpen = payload;
    },
  },
});

export default reducer;

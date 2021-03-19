import { createAsyncThunk } from '@reduxjs/toolkit';

export const initializePageAndLoad = createAsyncThunk(
  'initializeAppAndLoad',
  async (action: any, { dispatch }) => {
    await dispatch(action);
  }
);

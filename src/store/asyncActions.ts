import { createAsyncThunk } from '@reduxjs/toolkit';

// TODO improve type
export const initializePageAndLoad = createAsyncThunk(
  'initializeAppAndLoad',
  async (action: any, { dispatch }) => {
    await dispatch(action);
  }
);

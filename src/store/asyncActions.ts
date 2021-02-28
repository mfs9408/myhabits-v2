import { createAsyncThunk } from '@reduxjs/toolkit';
import { fetchTasks } from './tasks/asyncAction';

export const initializeAppAndLoadTasks = createAsyncThunk(
  'initializeAppAndLoadTasks',
  async (arg, { dispatch }) => {
    await dispatch(fetchTasks());
  }
);

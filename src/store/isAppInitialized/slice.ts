import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../tasks/asyncAction';

const isAppInitialized = createSlice({
  name: 'isAppInitialized',
  initialState: false,
  reducers: {},
  extraReducers: builder => builder.addCase(fetchTasks.fulfilled, () => true),
});

export default isAppInitialized.reducer;

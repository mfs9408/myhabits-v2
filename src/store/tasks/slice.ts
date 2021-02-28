import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from './asyncAction';
import { TasksPropertyGroup } from '../../types';

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: null as TasksPropertyGroup | null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => payload);
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

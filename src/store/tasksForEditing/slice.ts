import { createSlice } from '@reduxjs/toolkit';
import { TasksForEditing } from '../../types';
import { fetchTasksForEditing } from './asyncAction';

const tasksForEditingSlice = createSlice({
  name: 'tasksForEditing',
  initialState: null as TasksForEditing | null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchTasksForEditing.fulfilled,
      (state, { payload }) => payload
    );
  },
});

export const tasksForEditingActions = tasksForEditingSlice.actions;
export default tasksForEditingSlice.reducer;

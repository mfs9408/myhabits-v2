import { createSlice } from '@reduxjs/toolkit';
import { fetchTasks } from '../tasks/asyncAction';
import { fetchAchievements } from '../achievements/asyncAction';
import { fetchTasksForEditing } from '../tasksForEditing/asyncAction';

const isAppInitialized = createSlice({
  name: 'isAppInitialized',
  initialState: false,
  reducers: {
    setIsAppInitialized: () => false,
  },
  extraReducers: builder => {
    builder.addCase(fetchTasks.fulfilled, () => true);
    builder.addCase(fetchAchievements.fulfilled, () => true);
    builder.addCase(fetchTasksForEditing.fulfilled, () => true);
  },
});

export const isAppInitializedActions = isAppInitialized.actions;
export default isAppInitialized.reducer;

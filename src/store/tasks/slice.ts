import { createSlice, PayloadAction } from '@reduxjs/toolkit';
import { fetchTasks } from './asyncAction';
import { TasksPropertyGroup } from '../../types';

type DisableProp = {
  index: number;
  disableValue: boolean;
};

const tasksSlice = createSlice({
  name: 'tasks',
  initialState: null as TasksPropertyGroup | null,
  reducers: {
    setDisabledState: (state, { payload }: PayloadAction<DisableProp>) => {
      if (state !== null) {
        state[payload.index].disabled = payload.disableValue;
      }
    },
  },
  extraReducers: builder => {
    builder.addCase(fetchTasks.fulfilled, (state, { payload }) => payload);
  },
});

export const tasksActions = tasksSlice.actions;
export default tasksSlice.reducer;

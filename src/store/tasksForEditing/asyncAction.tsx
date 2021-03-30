import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../Api';
import { TasksForEditing } from '../../types';

export const fetchTasksForEditing = createAsyncThunk(
  'fetchTasksForEditing',
  () => get<TasksForEditing>('/tasksForEditing').then(response => response.data)
);

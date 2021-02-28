import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../Api';
import { TasksPropertyGroup } from '../../types';

export const fetchTasks = createAsyncThunk('fetchTasks', () =>
  get<TasksPropertyGroup>('/tasks').then(response => response.data)
);

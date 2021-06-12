import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import {
  AchievementsPropertyGroup,
  TasksForEditing,
  TasksPropertyGroup,
} from '../types';

export const initializePageAndLoad = createAsyncThunk(
  'initializeAppAndLoad',
  async (
    action: AsyncThunkAction<
      AchievementsPropertyGroup | TasksPropertyGroup | TasksForEditing,
      void,
      {}
    >,
    { dispatch }
  ) => {
    await dispatch(action);
  }
);

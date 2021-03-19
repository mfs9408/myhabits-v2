import { AsyncThunkAction, createAsyncThunk } from '@reduxjs/toolkit';
import { AchievementsPropertyGroup, TasksPropertyGroup } from '../types';

export const initializePageAndLoad = createAsyncThunk(
  'initializeAppAndLoad',
  async (
    action: AsyncThunkAction<
      AchievementsPropertyGroup | TasksPropertyGroup,
      void,
      {}
    >,
    { dispatch }
  ) => {
    await dispatch(action);
  }
);

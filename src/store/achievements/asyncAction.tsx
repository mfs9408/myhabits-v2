import { createAsyncThunk } from '@reduxjs/toolkit';
import { get } from '../../Api';
import { AchievementsPropertyGroup } from '../../types';

export const fetchAchievements = createAsyncThunk('fetchAchievements', () =>
  get<AchievementsPropertyGroup>('/achievements').then(
    response => response.data
  )
);

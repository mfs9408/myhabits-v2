import { createSlice } from '@reduxjs/toolkit';
import { fetchAchievements } from './asyncAction';
import { AchievementsPropertyGroup } from '../../types';

const achievementsSlice = createSlice({
  name: 'achievements',
  initialState: null as AchievementsPropertyGroup | null,
  reducers: {},
  extraReducers: builder => {
    builder.addCase(
      fetchAchievements.fulfilled,
      (state, { payload }) => payload
    );
  },
});

export const achievementsActions = achievementsSlice.actions;
export default achievementsSlice.reducer;

import { configureStore, combineReducers } from '@reduxjs/toolkit';
import meta from './meta';
import tasksReducer from './tasks/slice';
import achievementsReducer from './achievements';
import isAppInitializedReducer from './isAppInitialized';

const reducer = combineReducers({
  meta,
  tasks: tasksReducer,
  achievements: achievementsReducer,
  isAppInitialized: isAppInitializedReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;

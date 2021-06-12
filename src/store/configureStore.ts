import { configureStore, combineReducers } from '@reduxjs/toolkit';
import meta from './meta';
import tasksReducer from './tasks/slice';
import achievementsReducer from './achievements';
import isAppInitializedReducer from './isAppInitialized';
import tasksForEditingReducer from './tasksForEditing';

const reducer = combineReducers({
  meta,
  tasks: tasksReducer,
  achievements: achievementsReducer,
  tasksForEditing: tasksForEditingReducer,
  isAppInitialized: isAppInitializedReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;

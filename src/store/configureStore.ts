import { configureStore, combineReducers } from '@reduxjs/toolkit';
import meta from './meta';
import tasksReducer from './tasks/slice';
import isAppInitializedReducer from './isAppInitialized';

const reducer = combineReducers({
  meta,
  tasks: tasksReducer,
  isAppInitialized: isAppInitializedReducer,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;

import { configureStore, combineReducers } from '@reduxjs/toolkit';

import meta from './meta';

const reducer = combineReducers({
  meta,
});

const store = configureStore({
  reducer,
  devTools: process.env.NODE_ENV !== 'production',
});

export type RootState = ReturnType<typeof reducer>;

export default store;

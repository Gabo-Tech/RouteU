import { configureStore } from '@reduxjs/toolkit';
import { reducers } from '../reducers/IndexReducer';
export const store = configureStore({
  reducer: reducers
});

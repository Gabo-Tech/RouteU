import { configureStore } from '@reduxjs/toolkit';
import { reducers } from './reducers/IndexReducer.js';
export const store = configureStore({
  reducer: reducers
});

import { configureStore } from "@reduxjs/toolkit";
// import { reducers } from "../reducers/IndexReducer";
import auth from "../features/auth/authSlice";

export const store = configureStore({
  reducer: {
    auth,
  },
});

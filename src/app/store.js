import { configureStore } from "@reduxjs/toolkit";
// import { reducers } from "../reducers/IndexReducer";
import auth from "../features/auth/authSlice";
import routes from "../features/routes/routesSlice";

export const store = configureStore({
  reducer: {
    auth,
    routes,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import auth from "../features/auth/authSlice";
import routes from "../features/routes/routesSlice";

export const store = configureStore({
  reducer: {
    auth,
    routes,
  },
});

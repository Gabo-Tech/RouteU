import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import routesService from "./routesService";

const initialState = {
  routes: [],
  isLoading: false,
  route: {},
};

export const getAll = createAsyncThunk("routes/getAll", async () => {
  try {
    return await routesService.getAll();
  } catch (err) {
    console.error(err);
  }
});

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder.addCase(getAll.fulfilled, (state, action) => {
      state.routes = action.payload;
    });
    builder.addCase(getAll.pending, (state) => {
      state.isLoading = true;
    });
  },
});
export const { reset } = routesSlice.actions;
export default routesSlice.reducer;

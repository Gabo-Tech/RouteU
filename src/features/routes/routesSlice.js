import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import routesService from "./routesService";

const initialState = {
  routes: [],
  isLoading: false,
  route: {},
};

export const getAll = createAsyncThunk("/getRoutes", async () => {
  try {
    return await routesService.getAll();
  } catch (err) {
    console.error(err);
  }
});

export const getById = createAsyncThunk("/getById", async (id) => {
  try {
    return await routesService.getById(id);
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
    builder.addCase(getById.fulfilled, (state, action) => {
      state.route = action.payload;
    });
  },
});
export const { reset } = routesSlice.actions;
export default routesSlice.reducer;

import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import { Rate } from "antd";
import routesService from "./routesService";

const initialState = {
  routes: [],
  isLoading: false,
  route: {},
  comments:[],
  avgRating: {}
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

export const like = createAsyncThunk("route/like", async (_id, thunkAPI) => {
  try {
    return await routesService.like(_id);
  } catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const dislike = createAsyncThunk(
  "route/dislike",
  async (_id, thunkAPI) => {
    try {
      return await routesService.dislike(_id);
    } catch (error) {
      const message = error.response.data;
      return thunkAPI.rejectWithValue(message);
    }
  }
);

export const addComment = createAsyncThunk("addComment", async (comment, thunkAPI) => {
  try {
    return await routesService.addComment(comment)
  }catch (error) {
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const avgRating = createAsyncThunk("route/avgRate", async (_id, thunkAPI) =>{
  try {
    return await routesService.avgRating(_id)
  } catch (error){
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
});

export const rate = createAsyncThunk("route/rate", async (_id, thunkAPI) =>{
  try {
    return await routesService.rate(_id)
  } catch (error){
    const message = error.response.data;
    return thunkAPI.rejectWithValue(message);
  }
})

export const routesSlice = createSlice({
  name: "routes",
  initialState,
  reducers: {
    reset: (state) => {
      state.isLoading = false;
    },
  },
  extraReducers: (builder) => {
    builder
    .addCase(getAll.fulfilled, (state, action) => {
      localStorage.setItem('routes',JSON.stringify(action.payload));
      state.routes = action.payload;
    })
    .addCase(getAll.pending, (state) => {
      state.isLoading = true;
    })
    .addCase(getById.fulfilled, (state, action) => {
      state.route = action.payload;
    })
    .addCase(like.fulfilled, (state, action) => {
      const routes = state.routes.map((element) => {
        if (element._id === action.payload._id) {
          element = action.payload;
        }
        return element;
      });
      state.routes = routes;
    })
    .addCase(dislike.fulfilled, (state, action) => {
      const routes = state.routes.map((element) => {
        if (element._id === action.payload._id) {
          element = action.payload;
        }
        return element;
      });
      state.routes = routes;
    })
    .addCase(addComment.fulfilled, (state, action) => {
      state.comments =  action.payload;
    })
    .addCase(avgRating.fulfilled, (state, action) => {
      state.avgRating = action.payload;
    })    
    .addCase(rate.fulfilled, (state, action) => {
      state.rate = action.payload;
    })
  },
});
export const { reset } = routesSlice.actions;
export default routesSlice.reducer;

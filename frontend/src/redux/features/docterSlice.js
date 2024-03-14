import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator to fetch user data
export const fatchDocter = createAsyncThunk(
  "auth/docter",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(
        "https://doctor-app-s401.onrender.com/api/get/allDocters"
      );
      return response.data; // Assuming the response contains the user data
    } catch (error) {
      console.error("Error:", error);
      throw thunkApi.rejectWithValue(error.response);
    }
  }
);

// Slice
const initialState = {
    docters: null,
  isLoading: false,
  isError: false,
};

const docslice = createSlice({
  name: "docters",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fatchDocter.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fatchDocter.fulfilled, (state, action) => {
        state.isLoading = false;
        state.docters = action.payload; // Store fetched user data
      })
      .addCase(fatchDocter.rejected, (state) => {
        state.isLoading = false;
        state.isError = true; // Set error flag
      });
  },
});

export default docslice.reducer;


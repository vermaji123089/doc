import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator to fetch user data
export const fetchAdmin = createAsyncThunk(
  "auth/admin",
  async (payload, thunkApi) => {
    try {
      const response = await axios.get(
        "https://doctor-app-s401.onrender.com/api/getAlluser"
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
  users: null,
  isLoading: false,
  isError: false,
};

const adminslice = createSlice({
  name: "admin",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchAdmin.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchAdmin.fulfilled, (state, action) => {
        state.isLoading = false;
        state.users = action.payload; // Store fetched user data
      })
      .addCase(fetchAdmin.rejected, (state) => {
        state.isLoading = false;
        state.isError = true; // Set error flag
      });
  },
});

export default adminslice.reducer;


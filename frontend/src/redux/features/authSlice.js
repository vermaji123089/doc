import { createSlice, createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios";

// Async thunk action creator to fetch user data
export const fetchUser = createAsyncThunk(
  "auth/me",
  async (payload, thunkApi) => {
    try {
      const localToken = localStorage.getItem("token");
      const response = await axios.post(
        "https://doctor-app-s401.onrender.com/api/getUser",
        {
          token: localToken,
        }
      );
      return response.data; // Assuming the response contains the user data
    } catch (error) {
      console.error("Error:", error);
      throw thunkApi.rejectWithValue(error.response.data);
    }
  }
);

// Slice
const initialState = {
  user: null,
  isLoading: false,
  isError: false,
};

const authSlice = createSlice({
  name: "auth",
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(fetchUser.pending, (state) => {
        state.isLoading = true;
        state.isError = false;
      })
      .addCase(fetchUser.fulfilled, (state, action) => {
        state.isLoading = false;
        state.user = action.payload.user; // Store fetched user data
      })
      .addCase(fetchUser.rejected, (state) => {
        state.isLoading = false;
        state.isError = true; // Set error flag
      });
  },
});

export default authSlice.reducer;

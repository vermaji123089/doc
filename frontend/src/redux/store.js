import { configureStore } from "@reduxjs/toolkit";
import authSlice from "./features/authSlice";
import adminSlice from "./features/adminSlice";
import docterSlice from "./features/docterSlice";
export const store = configureStore({
  reducer: {
    auth: authSlice,
    admin: adminSlice,
    docters: docterSlice,
  },
});

import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/UserSlice";
import { userDataSlice } from "./Slices/UserDataSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userData: userDataSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

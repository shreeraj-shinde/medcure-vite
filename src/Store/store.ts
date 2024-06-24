import { configureStore } from "@reduxjs/toolkit";
import { userSlice } from "./Slices/UserSlice";
import { userDataSlice } from "./Slices/UserDataSlice";
import { ExerciseSlice } from "./Slices/ExerciseSlice";

export const store = configureStore({
  reducer: {
    user: userSlice.reducer,
    userData: userDataSlice.reducer,
    ExerciseData: ExerciseSlice.reducer,
  },
});

export type RootState = ReturnType<typeof store.getState>;

export type AppDispatch = typeof store.dispatch;

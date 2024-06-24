import { PayloadAction, createSlice } from "@reduxjs/toolkit";

const initialState = {
  exercises: [],
  selected_exercise: "",
  days: 2,
};

export const ExerciseSlice = createSlice({
  name: "exercise",
  initialState,
  reducers: {
    getEercises: (state, action: PayloadAction<[]>) => {
      state.exercises = action.payload;
    },
    getSelectedExercise: (state, action: PayloadAction<string>) => {
      state.selected_exercise = action.payload;
    },
    getNumOfDays: (state, action: PayloadAction<number>) => {
      state.days = action.payload;
    },
  },
});

export const { getEercises, getSelectedExercise, getNumOfDays } =
  ExerciseSlice.actions;

export default ExerciseSlice.reducer;

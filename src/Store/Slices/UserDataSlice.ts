import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserDataState {
  id: number;
  waist: number;
  hip: number;
  height: number;
  weight: number;
  medical_history: string[];
  steps: number;
  oxygen: number;
  stress: number;
  calories_burnt: number;
  previous_diagnosis: any[];
}

const initialState: UserDataState = {
  id: Number(null),
  waist: Number(null),
  hip: Number(null),
  height: Number(null),
  weight: Number(null),
  medical_history: [""],
  steps: Number(null),
  oxygen: Number(null),
  stress: Number(null),
  calories_burnt: Number(null),
  previous_diagnosis: [],
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {
    getUserWaist: (state, action: PayloadAction<number>) => {
      state.waist = action.payload;
    },
    getUserHip: (state, action: PayloadAction<number>) => {
      state.hip = action.payload;
    },
    getUserHieght: (state, action: PayloadAction<number>) => {
      state.height = action.payload;
    },
    getUserWeight: (state, action: PayloadAction<number>) => {
      state.weight = action.payload;
    },
    getUserMedicalHistory: (state, action: PayloadAction<string[]>) => {
      state.medical_history = action.payload;
    },
    getUserSteps: (state, action: PayloadAction<number>) => {
      state.steps = action.payload;
    },
    getUserOxygen: (state, action: PayloadAction<number>) => {
      state.oxygen = action.payload;
    },
    getUserStress: (state, action: PayloadAction<number>) => {
      state.stress = action.payload;
    },
    getBurntCalories: (state, action: PayloadAction<number>) => {
      state.calories_burnt = action.payload;
    },
    getPreviousDiagnosis: (state, action: PayloadAction<[]>) => {
      state.previous_diagnosis = action.payload;
    },
    getId: (state, action: PayloadAction<number>) => {
      state.id = action.payload;
    },
  },
});
export const {
  getUserHieght,
  getUserHip,
  getUserWaist,
  getBurntCalories,
  getPreviousDiagnosis,
  getUserMedicalHistory,
  getUserOxygen,
  getUserSteps,
  getUserStress,
  getUserWeight,
  getId,
} = userDataSlice.actions;
export default userDataSlice.reducer;

import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface UserDataState {
  waist: number;
  hip: number;
  height: number;
  weight: number;
  medical_history: string[];
  steps: number;
  oxygen: number;
  stress: number;
  calories_burnt: number;
  previous_diagnosis: object;
}

const initialState: UserDataState = {
  waist: Number(null),
  hip: Number(null),
  height: Number(null),
  weight: Number(null),
  medical_history: [""],
  steps: Number(null),
  oxygen: Number(null),
  stress: Number(null),
  calories_burnt: Number(null),
  previous_diagnosis: {},
};

export const userDataSlice = createSlice({
  name: "userData",
  initialState,
  reducers: {},
});

export default userDataSlice.reducer;

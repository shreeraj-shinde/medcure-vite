import { PayloadAction, createSlice } from "@reduxjs/toolkit";
import { Activity } from "lucide-react";

interface userState {
  userId: number;
  name: string;
  phone: number;
  age: number;
  email: string;
  gender: string;
  disease_predicted: string;
  selected_symptoms: string[];
}

const initialState: userState = {
  userId: Number(null),
  name: "",
  phone: Number(null),
  age: Number(null),
  email: "",
  gender: "",
  disease_predicted: "Albele Tange Wale",
  selected_symptoms: ["A", "B", "C"],
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
    getUserId: (state, action: PayloadAction<number>) => {
      state.userId = action.payload;
    },
    getName: (state, action: PayloadAction<string>) => {
      state.name = action.payload;
    },
    getPhone: (state, action: PayloadAction<number>) => {
      state.phone = action.payload;
    },
    getAge: (state, action: PayloadAction<number>) => {
      state.age = action.payload;
    },
    getGender: (state, action: PayloadAction<string>) => {
      state.gender = action.payload;
    },
    getEmail: (state, action: PayloadAction<string>) => {
      state.email = action.payload;
    },
    getPredictedDisease: (state, action: PayloadAction<string>) => {
      state.disease_predicted = action.payload;
    },
    getSelectedSymptoms: (state, action: PayloadAction<string[]>) => {
      state.selected_symptoms = action.payload;
    },
  },
});
export const {
  getAge,
  getGender,
  getEmail,
  getName,
  getPhone,
  getUserId,
  getPredictedDisease,
  getSelectedSymptoms,
} = userSlice.actions;
export default userSlice.reducer;

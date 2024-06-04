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
  medicine_predicted: string;
  description: string;
  home_remedy: string;
}

const initialState: userState = {
  userId: Number(null),
  name: "",
  phone: Number(null),
  age: Number(null),
  email: "",
  gender: "",
  disease_predicted: "",
  selected_symptoms: [""],
  medicine_predicted: "",
  description: "",
  home_remedy: "",
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
    getPredictedMedicine: (state, action: PayloadAction<string>) => {
      state.medicine_predicted = action.payload;
    },
    getDescription: (state, action: PayloadAction<string>) => {
      state.description = action.payload;
    },
    getHomeRemedy: (state, action: PayloadAction<string>) => {
      state.home_remedy = action.payload;
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
  getPredictedMedicine,
  getDescription,
  getHomeRemedy,
} = userSlice.actions;
export default userSlice.reducer;

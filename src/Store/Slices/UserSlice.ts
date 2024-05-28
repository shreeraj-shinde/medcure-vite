import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  name: string;
  phone: number;
  age: number;
  email: string;
  gender: string;
}

const initialState: userState = {
  name: "",
  phone: Number(null),
  age: Number(null),
  email: "",
  gender: "",
};

export const userSlice = createSlice({
  name: "user",
  initialState,
  reducers: {
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
  },
});
export const { getAge, getGender, getEmail, getName, getPhone } =
  userSlice.actions;
export default userSlice.reducer;

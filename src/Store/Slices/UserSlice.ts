import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface userState {
  name: string;
  phone: number;
  age: number;
  gmail: string;
  gender: string;
}

const initialState: userState = {
  name: "",
  phone: Number(null),
  age: Number(null),
  gmail: "",
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
  },
});
export const { getData } = userSlice.actions;
export default userSlice.reducer;

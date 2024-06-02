import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Store/store";
import { supabase } from "../Supabase/SupabaseClient";
import {
  getName,
  getAge,
  getGender,
  getEmail,
  getPhone,
  getUserId,
} from "../Store/Slices/UserSlice";

import {
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
} from "../Store/Slices/UserDataSlice";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

export const getUser = (
  userId: number,
  name: string,
  email: string,
  gender: string,
  age: number,
  phone: number,
  dispatch: Function
) => {
  dispatch(getUserId(userId));
  dispatch(getName(name));
  dispatch(getAge(age));
  dispatch(getPhone(phone));
  dispatch(getEmail(email));
  dispatch(getGender(gender));
};

export const loadUserData = (
  height: number,
  weight: number,
  hip: number,
  waist: number,
  steps: number,
  calories_burnt: number,
  oxygen: number,
  stress: number,
  medical_history: string[],
  previous_diagnosis: JSON,
  dispatch: Function
) => {
  dispatch(getUserHieght(height));
  dispatch(getUserWeight(weight));
  dispatch(getUserHip(hip));
  dispatch(getUserWaist(waist));
  dispatch(getUserSteps(steps));
  dispatch(getBurntCalories(calories_burnt));
  dispatch(getUserOxygen(oxygen));
  dispatch(getUserStress(stress));
  dispatch(getUserMedicalHistory(medical_history));
  dispatch(getPreviousDiagnosis(previous_diagnosis));
};

export const fetchUser = async (dispatch: Function) => {
  const { data, error } = await supabase.from("users").select();
  if (data) {
    getUser(
      data[0].id,
      data[0].name,
      data[0].email,
      data[0].gender,
      data[0].age,
      data[0].phone,
      dispatch
    );
  }
  if (error) {
    console.log(error);
  }
};

export const fetchUserData = async (dispatch: Function) => {
  const { data, error } = await supabase.from("user_data").select().eq("id", 1);
  if (data) {
    console.log(data[0]);
    loadUserData(
      data[0].height,
      data[0].weight,
      data[0].hip,
      data[0].waist,
      data[0].steps,
      data[0].calories_burnt,
      data[0].oxygen,
      data[0].stress,
      data[0].medical_history,
      data[0].previous_diagnosis,
      dispatch
    );
  } else {
    alert(error);
  }
};

export const updateUserData = async (
  id: number,
  editedName: string,
  editedAge: number,
  editedGender: string,
  dispatch: Function
) => {
  const { data, error } = await supabase
    .from("users")
    .update({ name: editedName, age: editedAge, gender: editedGender })
    .eq("id", id)
    .select();
  if (data) {
    getUser(
      data[0].id,
      data[0].name,
      data[0].email,
      data[0].gender,
      data[0].age,
      data[0].phone,
      dispatch
    );
  }
  if (error) {
    console.log(error);
  }
};

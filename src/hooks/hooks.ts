import { useDispatch, useSelector } from "react-redux";
import type { RootState, AppDispatch } from "../Store/store";
import { WBK } from "wikibase-sdk";
import { supabase } from "../Supabase/SupabaseClient";
import axios from "axios";
import {
  getName,
  getAge,
  getGender,
  getEmail,
  getPhone,
  getUserId,
  getDescription,
  getPredictedMedicine,
  getHomeRemedy,
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
import {
  Common_Cold,
  Dengue,
  Hypertension,
  Malaria,
  Typhoid,
} from "../assets/data/data";

// Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch = useDispatch.withTypes<AppDispatch>();
export const useAppSelector = useSelector.withTypes<RootState>();

const wdk = WBK({
  instance: "https://www.wikidata.org",
  sparqlEndpoint: "https://query.wikidata.org/sparql",
});

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
  // dispatch(getPreviousDiagnosis(previous_diagnosis));
};

export const fetchUser = async (dispatch: Function, email: string) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("email", email);

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

export const fetchUserData = async (
  dispatch: Function,
  id?: any,
  email?: any
) => {
  const { data, error } = await supabase
    .from("user_data")
    .select()
    .eq("id", id);

  console.log("User Data", data?.length);
  if (data?.length == 0) {
    console.log("ID", id);
    console.log("Email", email);
    createDataforUser(email, id, dispatch);
    return;
  }
  if (data?.length == 1) {
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
  }
};

export const updateUserData = async (
  id: number,
  editedName: string,
  editedAge: number,
  editedGender: string,
  editedHeight: number,
  editedWeight: number,
  editedHip: number,
  editedWaist: number,
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
    const { data, error } = await supabase
      .from("user_data")
      .update({
        waist: editedWaist,
        hip: editedHip,
        height: editedHeight,
        weight: editedWeight,
      })
      .eq("id", id)
      .select();
    if (data) {
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
    }
  }
  if (error) {
    console.log(error);
  }
};

export const fetchDescription = (disease: string, dispatch: Function) => {
  if (disease == "Dengue") {
    dispatch(getDescription(Dengue.description));
    dispatch(getPredictedMedicine(Dengue.medicine));
    dispatch(getHomeRemedy(Dengue.home_remedy));
  }
  if (disease == "Malaria") {
    dispatch(getDescription(Malaria.description));
    dispatch(getPredictedMedicine(Malaria.medicine));
    dispatch(getHomeRemedy(Malaria.home_remedy));
  }
  if (disease == "Hypertension ") {
    dispatch(getDescription(Hypertension.description));
    dispatch(getPredictedMedicine(Hypertension.medicine));
    dispatch(getHomeRemedy(Hypertension.home_remedy));
  }
  if (disease == "Common Cold") {
    dispatch(getDescription(Common_Cold.description));
    dispatch(getPredictedMedicine(Common_Cold.medicine));
    dispatch(getHomeRemedy(Common_Cold.home_remedy));
  }
  if (disease == "Typhoid") {
    dispatch(getDescription(Typhoid.description));
    dispatch(getPredictedMedicine(Typhoid.medicine));
    dispatch(getHomeRemedy(Typhoid.home_remedy));
  }
};

export const createAuthUser = async (email: string, password: string) => {
  try {
    const { data, error } = await supabase.auth.signUp({
      email: email,
      password: password,
      options: {
        emailRedirectTo: "http://localhost:5173/login",
      },
    });
    if (error) throw error;

    return data.user?.id;
  } catch (error) {
    console.log(error);
  }
};

export const createDBUser = async (
  name: string,
  age: number,
  email: string,
  gender: string
) => {
  try {
    const { data, error } = await supabase.from("users").insert([
      {
        name: name,
        age: age,
        email: email,
        gender: gender,
      },
    ]);
    if (error) throw error;
    console.log("Users Data Table : ", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const createDataforUser = async (
  email: string,
  id: number,
  dispatch: Function
) => {
  try {
    const { data, error } = await supabase
      .from("user_data")
      .insert([
        {
          email: email,
        },
        {
          id: id,
        },
      ])
      .select();
    if (data) {
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
    }
    if (error) throw error;
    console.log("User DATA table :", data);
    return data;
  } catch (error) {
    console.log(error);
  }
};

export const fetchUserByAuthToken = async (
  access_token: string,
  dispatch: Function
) => {
  const { data, error } = await supabase
    .from("users")
    .select()
    .eq("auth_token", access_token);
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
};

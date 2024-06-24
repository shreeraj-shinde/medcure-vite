import axios from "axios";
import { getEercises } from "../Store/Slices/ExerciseSlice";

export const ExerciseOptions = {
  headers: {
    "x-rapidapi-key": import.meta.env.VITE_RAPID_API_KEY,
    "x-rapidapi-host": "exercisedb.p.rapidapi.com",
  },
  params: {
    limit: "1000",
    offset: "0",
  },
};

export const fetchExercise = async (
  url: string,
  options: object,
  dispatch: Function
) => {
  const { data } = await axios.get(url, options);
  dispatch(getEercises(data));
  return data;
};

import Layout from "../Layout/Layout";
import Navbar from "../Components/Navbar";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { useEffect, useState } from "react";
import { ExerciseOptions, fetchExercise } from "../utils/fetchExerciseData";
import axios from "axios";
import { getWorkouts } from "../Store/Slices/UserSlice";
import HorizontalScrollBar from "../Components/HorizontalScrollBar";
import { useNavigate } from "react-router-dom";

const Workouts = () => {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");
  const [bodyParts, setBodyParts] = useState();
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();

  const { exercises } = useAppSelector((state) => state.ExerciseData);

  useEffect(() => {
    fetchExercise(
      import.meta.env.VITE_RAPID_API_URL,
      ExerciseOptions,
      dispatch
    );

    const fetchBodyParts = async () => {
      const { data } = await axios.get(
        `${import.meta.env.VITE_RAPID_API_URL}/bodyPartList`,
        ExerciseOptions
      );
      setBodyParts(data);
    };
    fetchBodyParts();
  }, []);

  return (
    <main className="max-h-screen">
      <Navbar username={name} title="Workouts" input={false} />
      <section className="bg-white mb-2 p-4 rounded-lg">
        <input
          type="text"
          className="p-1 mb-2 outline-0 border-2 border-gray-300 w-full rounded-lg"
          onChange={(e) => setSearch(e.target.value)}
        />
        <span className="text-gray font-semibold">Filters</span>
        {bodyParts && (
          <HorizontalScrollBar data={bodyParts} setSearch={setSearch} />
        )}
      </section>
      <section className="grid grid-cols-1 gap-2 md:grid-cols-3">
        {exercises
          .filter(
            (exercise) =>
              exercise.name.toLowerCase().includes(search.toLowerCase()) ||
              exercise.bodyPart.toLowerCase().includes(search.toLowerCase())
          )
          .slice(0, 9)
          .map((exer, idx) => (
            <div
              onClick={() => navigate(`/exercise/${exer.id}`)}
              className="p-4 bg-white rounded-lg w-full hover:shadow-lg hover:scale-95 transition-all cursor-pointer"
              key={idx}
            >
              <h3 className="font-semibold capitalize">{exer.name}</h3>
              <div className="w-full flex items-center justify-center">
                <img
                  src={exer.gifUrl}
                  alt={"exerciseImage"}
                  className="w-40 object-center"
                />
              </div>
              <span className="px-4 py-1 bg-[#90e0ef] rounded-lg font-semibold mr-2">
                {exer.bodyPart}
              </span>
              <span className="py-1 px-4 bg-neutral-500 rounded-lg text-white font-semibold">
                {exer.target}
              </span>
            </div>
          ))}
      </section>
    </main>
  );
};

export default Layout(Workouts);

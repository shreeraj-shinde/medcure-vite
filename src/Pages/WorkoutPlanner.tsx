import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import boy from "../assets/boy.png";
import girl from "../assets/girl.png";
import { getAge, getGender } from "../Store/Slices/UserSlice";
import { FaP, FaPlus } from "react-icons/fa6";
import { FaMinus } from "react-icons/fa6";
import burnFats from "../assets/burnFat.svg";
import cardio from "../assets/cardio.svg";
import buildMuscles from "../assets/buildMuscles.svg";
import {
  getUserHieght,
  getUserHip,
  getUserWaist,
  getUserWeight,
} from "../Store/Slices/UserDataSlice";
import {
  getNumOfDays,
  getSelectedExercise,
} from "../Store/Slices/ExerciseSlice";
import { useNavigate } from "react-router-dom";

const WorkoutPlanner = () => {
  const navigate = useNavigate();
  const { name, gender, age } = useAppSelector((state) => state.user);
  const { height, weight, hip, waist } = useAppSelector(
    (state) => state.userData
  );
  const { selected_exercise, days } = useAppSelector(
    (state) => state.ExerciseData
  );
  const dispatch = useAppDispatch();
  return (
    <section>
      <Navbar username={name} title="Workout Planner" input={false} />

      <div className="bg-white rounded-lg p-4">
        <div className="flex flex-col gap-2">
          <label>
            <h2 className="font-medium">Age</h2>
          </label>
          <div className="flex gap-2">
            <button
              onClick={() => dispatch(getAge(age - 1))}
              className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
            >
              <FaMinus />
            </button>
            <h2 className="text-xl font-semibold">{age}</h2>
            <button
              onClick={() => dispatch(getAge(age + 1))}
              className="p-2 rounded-full border-2 border-gray flex items-center justify-center p-2"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <div className="flex flex-col gap-2 mt-6">
          <label>
            <h2 className="font-medium">Gender</h2>
          </label>

          <div className="grid grid-cols-1 md:grid-cols-2 w-[70%] gap-2">
            <button
              onClick={() => dispatch(getGender("Male"))}
              className={`p-2 border-2 rounded-lg ${
                gender == "Male"
                  ? `bg-blue-200 border-blue-400`
                  : "bg-white border-gray-400"
              }  h-[60px] flex items-center justify-center`}
            >
              <img src={boy} alt="Male" className="h-full" />
            </button>
            <button
              onClick={() => dispatch(getGender("Female"))}
              className={`p-2 border-2 rounded-lg ${
                gender == "Female"
                  ? `bg-blue-200 border-blue-400`
                  : "bg-white border-gray-400"
              }  h-[60px] flex items-center justify-center`}
            >
              <img src={girl} alt="Female" className="h-full" />
            </button>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[70%] gap-2">
            <div className="flex flex-col gap-2">
              <label>
                <h2 className="font-medium">Height (in cm)</h2>
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(getUserHieght(height - 0.01))}
                  className={`flex items-center justify-center p-2 rounded-full border-2 border-gray`}
                >
                  <FaMinus />
                </button>
                <h2 className="text-xl font-semibold">
                  {(height * 100).toFixed(2)}
                </h2>
                <button
                  onClick={() => dispatch(getUserHieght(height + 0.01))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-medium">Weight (in Kilograms)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(getUserWeight(weight - 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaMinus />
                </button>
                <h2 className="text-xl font-semibold">{weight}</h2>
                <button
                  onClick={() => dispatch(getUserWeight(weight + 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-6">
          <div className="grid grid-cols-1 md:grid-cols-2 w-[70%] gap-2">
            <div className="flex flex-col gap-2">
              <label>
                <h2 className="font-medium">Neck (in cm)</h2>
              </label>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(getUserHip(hip - 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaMinus />
                </button>
                <h2 className="text-xl font-semibold">{hip}</h2>
                <button
                  onClick={() => dispatch(getUserHip(hip + 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaPlus />
                </button>
              </div>
            </div>

            <div className="flex flex-col gap-2">
              <h2 className="font-medium">Waist (in cm)</h2>
              <div className="flex gap-2">
                <button
                  onClick={() => dispatch(getUserWaist(waist - 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaMinus />
                </button>
                <h2 className="text-xl font-semibold">{waist}</h2>
                <button
                  onClick={() => dispatch(getUserWaist(waist + 1))}
                  className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
                >
                  <FaPlus />
                </button>
              </div>
            </div>
          </div>

          <div className="mt-4">
            <h2 className="text-lg font-semibold">
              Choose your fitness goal 🎯
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-3 mt-4 w-[70%] gap-2">
              <button
                onClick={() => dispatch(getSelectedExercise("burn_fats"))}
                className={`p-4 rounded-lg border-2 text-xl font-semibold flex flex-col items-center justify-center ${
                  selected_exercise === "burn_fats"
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-400"
                }`}
              >
                <img src={burnFats} alt="fatburn" className="h-12" />
                Burn Fats
                <p className="text-gray-400 text-sm">
                  Burn fats and lose weight
                </p>
              </button>

              <button
                onClick={() => dispatch(getSelectedExercise("cardiovascular"))}
                className={`p-4 rounded-lg border-2 text-xl font-semibold flex flex-col items-center justify-center ${
                  selected_exercise === "cardiovascular"
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-400"
                }`}
              >
                <img src={cardio} alt="fatburn" className="h-12" />
                Cardiovascular health
                <p className="text-gray-400 text-sm">
                  Better heart health and blood vessels
                </p>
              </button>

              <button
                onClick={() => dispatch(getSelectedExercise("build_muscle"))}
                className={`p-4 rounded-lg border-2 text-xl font-semibold flex flex-col items-center justify-center ${
                  selected_exercise === "build_muscle"
                    ? "bg-blue-100 border-blue-400"
                    : "border-gray-400"
                }`}
              >
                <img src={buildMuscles} alt="fatburn" className="h-12" />
                Build Muscles
                <p className="text-gray-400 text-sm">
                  Burn fats and gain muscle
                </p>
              </button>
            </div>
          </div>
        </div>
        <div className="mt-4">
          <h2 className="text-lg font-semibold">
            How many days a week are you willing to commit to your fitness
            routine 🗓️ ?
          </h2>
          <div className="flex gap-2 mt-4">
            <button
              onClick={() => {
                days > 2 ? dispatch(getNumOfDays(days - 1)) : "";
              }}
              className="flex items-center justify-center p-2 rounded-full border-2 border-gray"
            >
              <FaMinus />
            </button>
            <h2 className="text-xl font-semibold">{days}</h2>
            <button
              onClick={() => {
                days < 7 ? dispatch(getNumOfDays(days + 1)) : "";
              }}
              className="p-2 rounded-full border-2 border-gray flex items-center justify-center p-2"
            >
              <FaPlus />
            </button>
          </div>
        </div>

        <button
          onClick={() => navigate("/workout_routine")}
          className="py-2 px-4 bg-blue-500 hover:bg-blue-600 mt-4 rounded-lg text-white font-semibold"
        >
          Next ⏭
        </button>
      </div>
    </section>
  );
};

export default Layout(WorkoutPlanner);

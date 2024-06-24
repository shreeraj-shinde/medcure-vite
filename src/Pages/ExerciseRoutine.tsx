import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
import { useAppSelector } from "../hooks/hooks";
import getBMI from "../utils/Calculators/BMI";
import calculateCalories from "../utils/Calculators/Calories";
import CardiovascularWorkout from "../utils/Calculators/CardioVascular_workout";
import Factors from "../utils/Calculators/factors";
import FatWorkout from "../utils/Calculators/fat_workout";
import MuscleWorkout from "../utils/Calculators/muscle_workout";

const ExerciseRoutine = () => {
  const { gender, age, name } = useAppSelector((state) => state.user);
  const { selected_exercise, days } = useAppSelector(
    (state) => state.ExerciseData
  );
  const { height, weight } = useAppSelector((state) => state.userData);

  const { bmi, healthy, overweight, status, underweight, ideal_weight } =
    getBMI({
      height: height,
      weight: weight,
      gender: gender,
      fitness_goal: selected_exercise,
    });

  const calory_data = calculateCalories({
    activity: "",
    age: age,
    current_weight: weight,
    fitness_goal: selected_exercise,
    gender: gender,
    height: height,
    ideal_weight,
    workout_days: days,
  });

  return (
    <section>
      <Navbar
        username={name}
        input={false}
        title="Fitness And Health Overview"
      />
      <div className="bg-white p-6 rounded-lg">
        <div className="grid grid-cols-1 gap-4 md:grid-cols-2">
          <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
            {/* weight */}
            <div className="flex flex-col gap-5 w-full h-full">
              <h3 className="text-xl font-semibold">Weight Assessment</h3>
              <div>
                Your current weight ({weight} Kg) is considered
                {status === "healthy" && (
                  <span className="font-semibold text-xl text-green-400">
                    {" "}
                    Healthy
                  </span>
                )}
                {status === "underweight" && (
                  <span className="font-semibold text-xl text-yellow-400 capitalize">
                    {" "}
                    underweight
                  </span>
                )}
                {status === "overweight" && (
                  <span className="font-semibold text-xl text-yellow-400 capitalize">
                    {" "}
                    overweight
                  </span>
                )}
                {status === "obese" && (
                  <span className="font-semibold text-xl text-orange-400">
                    {" "}
                    Obese
                  </span>
                )}
              </div>

              {/* chart v2 */}
              <div className="w-full flex flex-col gap-0 mb-10">
                <div className="w-full h-8 rounded-md shadow-md flex gap-0 text-neutral-50 font-semibold text-xs">
                  <div className="rounded-l-md flex items-center w-[18%] bg-yellow-400 h-full">
                    <span className="text-center mx-auto capitalize">
                      underweight
                    </span>
                  </div>

                  <div className="w-[4%] relative h-full bg-gradient-to-r from-yellow-400 to-green-400">
                    <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                      <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                      <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                        {underweight}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center w-[38%] bg-green-400 h-full">
                    <span className="text-center mx-auto capitalize">
                      Healthy
                    </span>
                  </div>

                  <div className="w-[4%] h-full bg-gradient-to-r from-green-400 to-yellow-400 relative">
                    <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                      <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                      <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                        {healthy}
                      </div>
                    </div>
                  </div>

                  <div className="flex items-center w-[20%] bg-yellow-400 h-full">
                    <span className="text-center mx-auto capitalize">
                      Overweight
                    </span>
                  </div>

                  <div className="w-[4%] h-full bg-gradient-to-r from-yellow-400 to-orange-400 relative">
                    <div className="absolute -bottom-1 left-2/4 -translate-x-2/4 translate-y-full space-y-1">
                      <div className="mx-auto w-0.5 h-3 bg-neutral-300" />
                      <div className="text-neutral-400 w-10 text-center mx-auto font-normal">
                        {overweight}
                      </div>
                    </div>
                  </div>

                  <div className="flex rounded-r-md items-center w-[20%] bg-orange-400 h-full">
                    <span className="text-center mx-auto capitalize">
                      Obese
                    </span>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col lg:flex-row items-center w-full h-full justify-between gap-10">
            {/* weight target */}
            <div className="flex flex-col gap-5 w-full h-full">
              <h3 className="text-xl font-semibold">
                Target Weight Recommendation
              </h3>
              <div className="text-3xl font-semibold text-emerald-500">
                {ideal_weight} Kg
              </div>

              {ideal_weight === weight &&
                selected_exercise !== "build_muscle" && (
                  <p>
                    Based on the formula of D.R. Miller, your current weight
                    considered perfect. Make sure you maintain this weight.
                  </p>
                )}

              {ideal_weight !== weight &&
                selected_exercise !== "build_muscle" && (
                  <p>
                    Based on the formula of D.R. Miller and your fitness goal,
                    the ideal weight you can achieve is {ideal_weight} Kg
                  </p>
                )}

              {selected_exercise === "build_muscle" && (
                <p>
                  Since your fitness goal is to build muscle, you should aim for{" "}
                  {ideal_weight} Kg to look muscular. Note that weight only is
                  not enough, the percentage of body fat is also an important
                  factor.
                </p>
              )}
            </div>
          </div>
        </div>

        <br />
        <br />
        <Factors fitness_goal={selected_exercise} />
        <br />
        <br />
        {/* workout */}
        {selected_exercise === "build_muscle" && (
          <MuscleWorkout workout_days={days} />
        )}
        {selected_exercise === "cardiovascular" && (
          <CardiovascularWorkout workout_days={days} />
        )}
        {selected_exercise === "burn_fats" && (
          <FatWorkout workout_days={days} />
        )}
      </div>
    </section>
  );
};

export default Layout(ExerciseRoutine);

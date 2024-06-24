import { BrowserRouter, Routes, Route, useNavigate } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import { useAppSelector } from "./hooks/hooks";
import Loading from "./Components/Loading";
import Login from "./Pages/Login";
import SignUp from "./Pages/SignUp";
import ExerciseRoutine from "./Pages/ExerciseRoutine";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const History = lazy(() => import("./Pages/History"));
const Diagnose = lazy(() => import("./Pages/DiagnoseMe"));
const Results = lazy(() => import("./Pages/DiagnosisResults"));
const ExerciseDetail = lazy(() => import("./Pages/ExerciseDetail"));
const Workouts = lazy(() => import("./Pages/Workouts"));
const WorkoutPlanner = lazy(() => import("./Pages/WorkoutPlanner"));
const WorkoutRoutine = lazy(() => import("./Pages/ExerciseRoutine"));

function App() {
  const { disease_predicted, token } = useAppSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/sign_up" element={<SignUp />} />
            {/* <Route path="/chat" element={<Diagnose />} /> */}
            <Route path="/diagnose" element={<Diagnose />} />
            <Route path="/workouts" element={<Workouts />} />
            <Route path="/workout_planner" element={<WorkoutPlanner />} />
            <Route path="/workout_routine" element={<WorkoutRoutine />} />

            <Route path="/exercise/:id" element={<ExerciseDetail />} />
            {disease_predicted ? (
              <Route path="/results" element={<Results />} />
            ) : (
              ""
            )}
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

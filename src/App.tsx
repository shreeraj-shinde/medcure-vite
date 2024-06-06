import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Login from "./Pages/Login";
import { useAppSelector } from "./hooks/hooks";
import Loading from "./Components/Loading";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const History = lazy(() => import("./Pages/History"));
const Diagnose = lazy(() => import("./Pages/DiagnoseMe"));
const Results = lazy(() => import("./Pages/DiagnosisResults"));

function App() {
  const { disease_predicted } = useAppSelector((state) => state.user);

  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<Loading />}>
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            {/* <Route path="/chat" element={<Diagnose />} /> */}
            <Route path="/diagnose" element={<Diagnose />} />
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

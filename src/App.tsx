import { BrowserRouter, Routes, Route } from "react-router-dom";
import { lazy, Suspense } from "react";
import "./App.css";
import Login from "./Pages/Login";

const Dashboard = lazy(() => import("./Pages/Dashboard"));
const AboutMe = lazy(() => import("./Pages/AboutMe"));
const History = lazy(() => import("./Pages/History"));
const Diagnose = lazy(() => import("./Pages/Diagnose"));
function App() {
  return (
    <>
      <BrowserRouter>
        <Suspense fallback={<h1>Loading...</h1>}>
          <Routes>
            <Route path="/home" element={<Dashboard />} />
            <Route path="/about_me" element={<AboutMe />} />
            <Route path="/history" element={<History />} />
            <Route path="/login" element={<Login />} />
            <Route path="/chat" element={<Diagnose />} />
          </Routes>
        </Suspense>
      </BrowserRouter>
    </>
  );
}

export default App;

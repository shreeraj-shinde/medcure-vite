import Layout from "../Layout/Layout";
import Navbar from "../Components/Navbar";

import {
  fetchDescription,
  useAppDispatch,
  useAppSelector,
} from "../hooks/hooks";
import { useEffect, useState } from "react";
import { supabase } from "../Supabase/SupabaseClient";
import { getPreviousDiagnosis } from "../Store/Slices/UserDataSlice";
import { ToastContainer, toast } from "react-toastify";

interface RecentDiagnosis {
  symptoms: string[];
  diseasePredicted: string;
  medicinePredicted: string;
  description: string;
  home_remedies: string;
  precautions: string;
  workouts: string;
  diet: string;
}

const DiagnosisResults = () => {
  const dispatch = useAppDispatch();

  const UpdatePreviousDiagonsis = async () => {
    setRecentDiagnosis({
      symptoms: selected_symptoms,
      diseasePredicted: disease_predicted,
      medicinePredicted: medicine_predicted,
      description: description,
      home_remedies: home_remedy,
      precautions: precautions,
      workouts: workouts,
      diet: diet,
    });

    const newData = [...diagnosisArr, recentDiagnosis] as object[];

    setDiagnosisArr(newData);
    dispatch(getPreviousDiagnosis(newData));
    localStorage.setItem("diagnosis", JSON.stringify(newData));
    toast.success("Saved");
  };
  const {
    userId,
    name,
    disease_predicted,
    selected_symptoms,
    medicine_predicted,
    description,
    home_remedy,
    workouts,
    diet,
    precautions,
  } = useAppSelector((state) => state.user);

  const { previous_diagnosis } = useAppSelector((state) => state.userData);
  const [diagnosisArr, setDiagnosisArr] =
    useState<object[]>(previous_diagnosis);

  const [recentDiagnosis, setRecentDiagnosis] = useState<RecentDiagnosis>();
  useEffect(() => {
    setRecentDiagnosis({
      symptoms: selected_symptoms,
      diseasePredicted: disease_predicted,
      medicinePredicted: medicine_predicted,
      description: description,
      home_remedies: home_remedy,
      precautions: precautions,
      workouts: workouts,
      diet: diet,
    });
  }, []);

  return (
    <section>
      <Navbar title="Diagnosis Results" username={name} input={false} />

      <div className="bg-white p-4 mb-2 rounded-lg shadow-lg grid grid-cols-1 md:grid-cols-3 gap-2">
        <div className="p-4">
          <h3 className="text-xs text-gray-500">
            Symptoms you have selected :{" "}
          </h3>
          <div className="flex flex-wrap">
            {selected_symptoms.map((symptom, idx) => (
              <h2 className="text-md text-gray-700 font-semibold m-1" key={idx}>
                {symptom}
              </h2>
            ))}
            <h2 className="text-md text-gray-700 font-semibold mb-2"></h2>
          </div>
        </div>
        <div className="p-4">
          <h3 className="text-xs text-gray-500">Disease you may have :</h3>
          <h2 className="text-md text-gray-700 font-semibold mb-2">
            {disease_predicted}
          </h2>
        </div>
        <div className="p-4">
          <h3 className="text-xs text-gray-500">Recommended Medicine :</h3>
          <h2 className="text-md text-gray-700 font-semibold mb-2">
            {medicine_predicted}
          </h2>
        </div>
      </div>
      <div className="grid grid-cols-1 gap-2 md:grid-cols-2 mb-2">
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xs text-gray-500 font-semibold mb-2">
            Home Remedies for {disease_predicted} :
          </h3>
          <h2 className="text-md text-gray-700 font-semibold">{home_remedy}</h2>
        </div>
        <div className="p-6 bg-white rounded-lg">
          <h3 className="text-xs text-gray-500 font-semibold mb-2">
            Diet Intake for {disease_predicted} :
          </h3>
          <h2 className="text-md text-gray-700 font-semibold">{diet}</h2>
          <div className="mt-6">
            <h3 className="text-xs text-gray-500 font-semibold">
              Precautions to take for {disease_predicted} :
            </h3>
            <h2 className="text-md text-gray-700 font-semibold">
              {precautions}
            </h2>
          </div>
        </div>
      </div>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-2">
        <div className="h-full p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xs text-gray-500 font-semibold mb-2">
            More About {disease_predicted} :
          </h3>
          <h2 className="text-md text-gray-700 font-semibold">{description}</h2>
        </div>
        <div className="h-full p-6 bg-white rounded-lg shadow-lg">
          <h3 className="text-xs text-gray-500 font-semibold mb-2">
            Things to remember:
          </h3>
          <h2 className="text-md text-gray-700 font-semibold">{workouts}</h2>
        </div>
      </div>
      <div className="flex items-center justify-center">
        <button
          className="bg-blue-500 text-sm p-2 pl-4 pr-4 mt-4 text-white font-semibold rounded-md hover:bg-blue-600"
          onClick={() => {
            UpdatePreviousDiagonsis();
          }}
        >
          Save
        </button>
        <ToastContainer />
      </div>
    </section>
  );
};

export default Layout(DiagnosisResults);

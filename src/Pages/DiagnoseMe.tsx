import { useEffect, useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
import {
  fetchDescription,
  useAppDispatch,
  useAppSelector,
} from "../hooks/hooks";
import Select from "react-select";
import { options } from "../assets/data/options";
import axios from "axios";
import {
  getPredictedDisease,
  getSelectedSymptoms,
  getPredictedMedicine,
  getDescription,
  getDiet,
  getWorkouts,
  getPrecautions,
  getHomeRemedy,
  triggerDisclaimer,
} from "../Store/Slices/UserSlice";
import { useNavigate } from "react-router-dom";
import DisclaimerDialogBox from "../Components/DisclaimerDialogBox";

const DiagnoseMe = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const [disease, setDisease] = useState<string[]>([String(null)]);

  const { name, age, gender, showDisclaimer } = useAppSelector(
    (state) => state.user
  );

  const getSymptomsArr = (idx: number, symptom: string | undefined) => {
    const data = disease;
    data[idx] = symptom as string;
    setDisease(data);
  };

  useEffect(() => {
    setTimeout(() => {
      dispatch(triggerDisclaimer(true));
    }, 2000);
  }, []);

  const handleProceed = async (dispatch: Function) => {
    const res = await axios.post("http://127.0.0.1:5000/diagnose", {
      array: disease,
    });
    // console.log("Med", res.data.Medicine[0]);

    // console.log("Workout", res.data.Workouts);
    // console.log("Precautions", res.data.Precaution);
    // console.log("Home Remedies", res.data.Home_Remedies);

    dispatch(getPredictedMedicine(res.data.Medicine[0]));
    dispatch(getDiet(res.data.Diet[0]));
    dispatch(getWorkouts(res.data.Workouts));
    dispatch(getPrecautions(res.data.Precaution));
    dispatch(getDescription(res.data.Description));
    dispatch(getHomeRemedy(res.data.Home_Remedies));
    dispatch(getPredictedDisease(res.data.Disease));
  };

  return (
    <section>
      <Navbar title="Diagnose" username={name} input={false} />
      {disease.map((i, idx) => (
        <div
          className="p-4 w-full text-semibold bg-white rounded-lg mb-2"
          key={idx}
        >
          <label className="font-semibold text-black">Symptom {idx + 1}</label>
          <br />
          <br />
          <Select
            options={options}
            onChange={(e) => getSymptomsArr(idx, e?.value)}
          />
        </div>
      ))}
      <button
        className="p-2 bg-blue-500 hover:bg-blue-600 text-white text-semibold rounded-lg ml-2"
        onClick={() => {
          setDisease((prev) => [...prev, ""]);
        }}
      >
        App Symptom
      </button>
      <button
        className="p-2 bg-red-500 hover:bg-red-600 text-white text-semibold rounded-lg ml-2"
        onClick={() => {
          console.log(disease.length);
          const newArr = disease.slice(0, disease.length - 1);
          setDisease(newArr);
        }}
      >
        Delete
      </button>
      <button
        className="p-2 bg-green-500 hover:bg-green-600 text-white text-semibold rounded-lg ml-2"
        onClick={() => {
          dispatch(getSelectedSymptoms(disease));
          handleProceed(dispatch);
          navigate("/results");
        }}
      >
        Confirm
      </button>
      <DisclaimerDialogBox
        showDisclaimer={showDisclaimer}
        dispatch={dispatch}
      />
      ;
    </section>
  );
};

export default Layout(DiagnoseMe);

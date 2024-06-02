import { useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import Select from "react-select";
import { options } from "../assets/data/options";
import axios from "axios";
import {
  getPredictedDisease,
  getSelectedSymptoms,
} from "../Store/Slices/UserSlice";

const DiagnoseMe = () => {
  const dispatch = useAppDispatch();
  const [disease, setDisease] = useState<string[]>([String(null)]);

  const { name } = useAppSelector((state) => state.user);

  const getSymptomsArr = (idx: number, symptom: string | undefined) => {
    const data = disease;
    data[idx] = symptom as string;
    setDisease(data);
  };

  const handleProceed = async (dispatch: Function) => {
    const res = await axios.post("http://127.0.0.1:5000/diagnose", {
      array: disease,
    });
    console.log(res.data);
    dispatch(getPredictedDisease(res.data));
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
          console.log(disease);
          dispatch(getSelectedSymptoms(disease));
          // handleProceed(dispatch);
        }}
      >
        Confirm
      </button>
    </section>
  );
};

export default Layout(DiagnoseMe);

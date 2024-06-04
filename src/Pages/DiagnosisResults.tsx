import Layout from "../Layout/Layout";
import Navbar from "../Components/Navbar";
import { getDescription, useAppSelector } from "../hooks/hooks";

const DiagnosisResults = () => {
  const { name, disease_predicted, selected_symptoms, medicine_predicted } =
    useAppSelector((state) => state.user);

  return (
    <section>
      <Navbar title="Diagnosis Results" username={name} input={false} />

      <div className="bg-white p-4 mb-2 rounded-lg shadow-lg flex justify-between">
        <div className="p-4 w-[33%]">
          <h3 className="text-xs text-gray-500">
            Symptoms you have selected :{" "}
          </h3>
          <div className="flex flex-wrap">
            {selected_symptoms.map((symptom) => (
              <h2 className="text-md text-gray-700 font-semibold m-1">
                {symptom}
              </h2>
            ))}
            <h2 className="text-md text-gray-700 font-semibold mb-2"></h2>
          </div>
        </div>
        <div className="p-4 w-[33%]">
          <h3 className="text-xs text-gray-500">Disease you may have :</h3>
          <h2 className="text-md text-gray-700 font-semibold mb-2">
            {disease_predicted}
          </h2>
        </div>
        <div className="p-4 w-[33%]">
          <h3 className="text-xs text-gray-500">Recommended Medicine :</h3>
          <h2 className="text-md text-gray-700 font-semibold mb-2">
            {medicine_predicted}
          </h2>
        </div>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg mb-2">
        <h3 className="text-xs text-gray-500 font-semibold mb-2">
          Home Remedies for {disease_predicted} :
        </h3>
        <h2 className="text-md text-gray-700 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          veritatis libero enim recusandae laboriosam exercitationem sunt
          fugiat, eum sint dolor! Deleniti, nulla. Nam, dolor fugiat quo
          expedita quis hic tempore? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Expedita, fugiat? Dicta reiciendis fugit illo
          consequatur saepe culpa aliquam ut tempora iure incidunt error
          architecto officia dolores maxime officiis, optio corrupti.
        </h2>
      </div>
      <div className="p-6 bg-white rounded-lg shadow-lg min-h-72 ">
        <h3 className="text-xs text-gray-500 font-semibold mb-2">
          More About {disease_predicted} :
        </h3>
        <h2 className="text-md text-gray-700 font-semibold">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Quisquam
          veritatis libero enim recusandae laboriosam exercitationem sunt
          fugiat, eum sint dolor! Deleniti, nulla. Nam, dolor fugiat quo
          expedita quis hic tempore? Lorem ipsum dolor sit, amet consectetur
          adipisicing elit. Expedita, fugiat? Dicta reiciendis fugit illo
          consequatur saepe culpa aliquam ut tempora iure incidunt error
          architecto officia dolores maxime officiis, optio corrupti.
        </h2>
      </div>
    </section>
  );
};

export default Layout(DiagnosisResults);

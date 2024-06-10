import Layout from "../Layout/Layout";

import {
  Disclosure,
  DisclosureButton,
  DisclosurePanel,
} from "@headlessui/react";

import Navbar from "../Components/Navbar";

import { useAppDispatch, useAppSelector } from "../hooks/hooks";
import { BiChevronsDown } from "react-icons/bi";
import { useEffect } from "react";
import { getPreviousDiagnosis } from "../Store/Slices/UserDataSlice";

const History = () => {
  const { name } = useAppSelector((state) => state.user);
  const dispatch = useAppDispatch();
  const data = localStorage.getItem("diagnosis") as string;
  const prevDiag = JSON.parse(data);

  const { previous_diagnosis } = useAppSelector((state) => state.userData);

  useEffect(() => {
    const data = localStorage.getItem("diagnosis") as string;
    dispatch(getPreviousDiagnosis(JSON.parse(data)));
  }, []);

  return (
    <main>
      <Navbar title="My History" input={false} username={name} />
      <section>
        {previous_diagnosis.map((diag: any, idx: number) => (
          <HistoryCard
            diseaseName={diag.diseasePredicted}
            medicineName={diag.medicinePredicted}
            symptoms={diag.symptoms}
            diet={diag.diet}
            remember={diag.precautions}
            homeRemedy={diag.home_remedies}
            key={idx}
          />
        ))}
      </section>
    </main>
  );
};

interface HistoryCardProps {
  diseaseName: string;
  medicineName: string;
  symptoms: string[];
  homeRemedy: string;
  diet: string;
  remember: string;
}

const HistoryCard = ({
  diseaseName,
  medicineName,
  symptoms,
  homeRemedy,
  diet,
  remember,
}: HistoryCardProps) => {
  return (
    <Disclosure
      as="div"
      className="p-6 bg-white rounded-lg mt-2"
      defaultOpen={false}
    >
      <DisclosureButton className="group flex w-full items-start justify-between">
        <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-2 items">
          <div>
            <h3 className="text-xs text-gray-500">
              Symptoms you have selected :{" "}
            </h3>
            <div className="flex flex-wrap items-center justify-center">
              {symptoms.map((i, idx) => (
                <h2
                  className="text-md text-gray-700 font-semibold mb-2 mr-1"
                  key={idx}
                >
                  {i}
                </h2>
              ))}
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-500">Disease you may have :</h3>
            <h2 className="text-md text-gray-700 font-semibold mb-2">
              {diseaseName}
            </h2>
          </div>
          <div>
            <h3 className="text-xs text-gray-500">Recommended Medicine :</h3>
            <h2 className="text-md text-gray-700 font-semibold mb-2">
              {medicineName}
            </h2>
          </div>
        </div>
        <BiChevronsDown className="size-5 fill-black/60 group-data-[hover]:fill-black/50 group-data-[open]:rotate-180" />
      </DisclosureButton>
      <DisclosurePanel className="p-6 mt-4 text-black/50 flex w-full items-start justify-between">
        <div className="mb-2 grid grid-cols-1 md:grid-cols-3 gap-20">
          <div>
            <h3 className="text-xs text-gray-500">Home Remedies</h3>
            <div className="flex flex-wrap">
              <h2 className="text-md text-gray-700 font-semibold">
                {homeRemedy}
              </h2>

              <h2 className="text-md text-gray-700 font-semibold mb-2"></h2>
            </div>
          </div>
          <div>
            <h3 className="text-xs text-gray-500">Diet :</h3>
            <h2 className="text-md text-gray-700 font-semibold">{diet}</h2>
          </div>
          <div>
            <div className="mt-6">
              <h3 className="text-xs text-gray-500 font-semibold">
                Precautions to take for:
              </h3>
              <h2 className="text-md text-gray-700 font-semibold">
                {remember}
              </h2>
            </div>
          </div>
        </div>
      </DisclosurePanel>
    </Disclosure>
  );
};

export default Layout(History);

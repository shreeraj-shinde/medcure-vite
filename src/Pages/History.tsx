import Layout from "../Layout/Layout";
import { FaPlus } from "react-icons/fa6";

import {
  Select,
  SelectContent,
  SelectGroup,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "../../@/components/ui/select";
import Navbar from "../Components/Navbar";
import { useState } from "react";
import { useAppSelector } from "../hooks/hooks";

const History = () => {
  const { name } = useAppSelector((state) => state.user);

  const { previous_diagnosis } = useAppSelector((state) => state.userData);
  return (
    <main>
      <Navbar title="My History" input={false} username={name} />
      <section>
        <button className="p-2 bg-blue-500 text-white font-medium w-20 rounded-lg flex justify-center items-center gap-[1px]">
          <FaPlus />
          Add
        </button>
      </section>
    </main>
  );
};

interface HistoryCardProps {
  diseaseName: string;
}

const HistoryCard = ({ diseaseName }: HistoryCardProps) => {
  return (
    <div className="p-6 flex gap-2 flex-col bg-white rounded-lg mb-2 lg:flex-row lg:justify-between">
      <div className="flex items-center justify-center">
        <h2 className="text-gray-500 font-semibold text-md">{diseaseName}</h2>
      </div>
      <div className="flex items-center justify-center">
        <Select>
          <SelectTrigger className="w-[180px] border-2 p-2">
            <SelectValue placeholder="Disease Status" />
          </SelectTrigger>
          <SelectContent>
            <SelectGroup className="bg-white w-[180px]">
              <SelectItem className="text-green-500 p-2 border-2" value="apple">
                CURED
              </SelectItem>
              <SelectItem className="text-red-500 p-2 border-2" value="banana">
                NOT CURED
              </SelectItem>
            </SelectGroup>
          </SelectContent>
        </Select>
      </div>
    </div>
  );
};

export default Layout(History);

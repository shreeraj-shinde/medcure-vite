import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";

import {
  Button,
  Dialog,
  DialogPanel,
  DialogTitle,
  Transition,
  TransitionChild,
} from "@headlessui/react";
import { useState } from "react";
import {
  updateUser,
  useAppSelector,
  useAppDispatch,
  updateUserData,
} from "../hooks/hooks";
import DialogBox from "../Components/DialogBox";
import { getUrl } from "../Store/Slices/UserSlice";
import {
  getUserHieght,
  getUserHip,
  getUserWaist,
  getUserWeight,
} from "../Store/Slices/UserDataSlice";
import { supabase } from "../Supabase/SupabaseClient";

interface UserData {
  Edname: string;
  Edage: number;
  Edgender: string;
  Edheight: number;
  Edweight: number;
  EdWaist: number;
  EdHip: number;
}

const AboutMe = () => {
  const dispatch = useAppDispatch();
  const { name, age, gender, userId, uuid } = useAppSelector(
    (state) => state.user
  );

  const { waist, hip, height, weight } = useAppSelector(
    (state) => state.userData
  );
  const [trigger, setTrigger] = useState<boolean>(false);
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<UserData>({
    Edname: name,
    Edage: age,
    Edgender: gender,
    Edheight: height,
    Edweight: weight,
    EdWaist: waist,
    EdHip: hip,
  });

  const UploadImage = async (file: File) => {
    const { data, error } = await supabase.storage
      .from("medcure_profile_pics")
      .upload(`/public/${uuid}/${uuid}`, file, { upsert: true });

    if (error) {
      alert("Error Uploading Images");
      return;
    }
    if (data) {
    }
  };

  const updateData = () => {
    updateUser(
      userId,
      editData.Edname,
      editData.Edage,
      editData.Edgender,
      dispatch
    );
    updateUserData(
      editData.Edheight,
      editData.Edweight,
      editData.EdHip,
      editData.EdWaist,
      dispatch
    );
  };

  const bmi = Math.floor(weight / (height * height));

  const bfp = 1.2 * bmi + 0.23 * age - 16.2;
  return (
    <main>
      <Navbar title="My Info" username={name} input={false} />

      <section className="mb-2 mt-6 grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div className="flex bg-white w-full p-6 shadow-lg rounded-lg">
          <img
            src={`https://itlrbxyjwkyikmysunvu.supabase.co/storage/v1/object/public/medcure_profile_pics/public/${uuid}/${uuid}`}
            alt="USer Photo"
            className="w-1/2 object-center object-cover rounded-lg"
          />

          <div className="p-4">
            <h3 className="text-xs text-gray-500">Name</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{name}</h2>
            <h3 className="text-xs text-gray-500">Age</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{age}</h2>
            <h3 className="text-xs text-gray-500">Gender</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{gender}</h2>
          </div>
        </div>
        <div className="p-6 flex w-full bg-white shadow-lg rounded-lg justify-between">
          <div className="p-4">
            <h3 className="text-xs text-gray-500">Height</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{height} m</h2>
            <h3 className="text-xs text-gray-500">Weight</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">
              {weight} kg
            </h2>
            <h3 className="text-xs text-gray-500">BMI</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">
              {Math.floor(bmi)}
            </h2>
          </div>
          <div className="p-4">
            <h3 className="text-xs text-gray-500">Neck</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{hip} cm</h2>
            <h3 className="text-xs text-gray-500">Waist</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{waist} cm</h2>
          </div>
          <div className="p-6">
            <div
              className="widgetCircle"
              style={{
                background: `conic-gradient(
      rgb(59 130 246) ${(Math.abs(bfp) / 100) * 360}deg,
      rgb(255,255,255) 0
    )`,
              }}
            >
              <span className="relative" style={{ color: "rgb(59 130 246)" }}>
                {bfp.toFixed(1)}%
              </span>
            </div>
            <span className="uppercase font-semibold text-xs tracking-wider text-center">
              Body Fat Percentage
            </span>
          </div>
        </div>
      </section>

      {/* 
      Smart Watch  */}
      {/* <section className="bg-white p-4 rounded-lg mt-2 mb-2 flex justify-between items-center">
        <img src={img} alt="smart watch" className="h-[120px]" />
        <div className="p-2 rounded-full border-2 border-red-500 bg-red-300 text-red-500 font-semibold text-sm">
          Not Connected
        </div>
        <button
          onClick={() => setTrigger(!trigger)}
          className="bg-blue-500 text-sm p-2 pl-4 pr-4 mb-4 text-white font-semibold rounded-md hover:bg-blue-600"
        >
          Connect
        </button>
      </section> */}

      <section className="bg-white p-2 rounded-lg shadow-lg mt-1">
        <h1 className="uppercase tracking-wider font-semibold text-center mt-2">
          Edit My Info
        </h1>
        <div className="grid gap-0 grid-cols-1 rounded-lg lg:grid-cols-2">
          <div className="p-4">
            <form>
              <label className="text-xs text-gray-500 mr-4">Photo</label>
              <br />
              <input
                onChange={(e) => {
                  UploadImage(e.target.files[0]);
                }}
                type="file"
                id="avatar"
                name="avatar"
                accept="image/png, image/jpeg"
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />
              <label className="text-xs text-gray-500 mr-4">Name</label>
              <br />
              <input
                type="text"
                placeholder={editData.Edname}
                onChange={(e) => {
                  setEditData((prev) => ({ ...prev, Edname: e.target.value }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                value={editData.Edname}
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Age</label>
              <br />
              <input
                type="number"
                placeholder={String(editData.Edage)}
                value={editData.Edage}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    Edage: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Gender</label>
              <br />
              <input
                type="text"
                placeholder={editData.Edgender}
                value={editData.Edgender}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    Edgender: e.target.value,
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
            </form>
          </div>
          <div className="p-4">
            <form>
              <label className="text-xs text-gray-500 mr-4">
                Height (in meters)
              </label>
              <br />
              <input
                type="number"
                placeholder={String(editData.Edheight)}
                value={editData.Edheight}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    Edheight: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />
              <label className="text-xs text-gray-500 mr-4">
                Weight (in Kg)
              </label>
              <br />
              <input
                type="text"
                placeholder={String(editData.Edweight)}
                value={editData.Edweight}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    Edweight: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">
                Waist (in cm)
              </label>
              <br />
              <input
                type="number"
                placeholder={String(editData.EdWaist)}
                value={editData.EdWaist}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    EdWaist: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Neck (in cm)</label>
              <br />
              <input
                type="number"
                placeholder={String(editData.EdHip)}
                value={editData.EdHip}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    EdHip: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
            </form>
          </div>
        </div>
        <div className="grid place-items-center">
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="bg-blue-500 text-sm p-2 pl-4 pr-4 mb-4 text-white font-semibold rounded-md hover:bg-blue-600"
          >
            Update
          </button>
        </div>

        {/* Dialog Box */}
        <Transition appear show={isOpen}>
          <Dialog
            as="div"
            className="relative z-10 focus:outline-none"
            onClose={() => setIsOpen(false)}
            __demoMode
          >
            <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
              <div className="flex min-h-full items-center justify-center p-4">
                <TransitionChild
                  enter="ease-out duration-300"
                  enterFrom="opacity-0 transform-[scale(95%)]"
                  enterTo="opacity-100 transform-[scale(100%)]"
                  leave="ease-in duration-200"
                  leaveFrom="opacity-100 transform-[scale(100%)]"
                  leaveTo="opacity-0 transform-[scale(95%)]"
                >
                  <DialogPanel className="w-full max-w-md rounded-xl bg-gray p-6 backdrop-blur-2xl border-2">
                    <DialogTitle
                      as="h3"
                      className="text-base/7 font-medium text-black"
                    >
                      Confirm Update!!
                    </DialogTitle>
                    <p className="mt-2 text-sm/6 text-black/50">
                      Your Data will be updated. You can update the data
                      whenever you want
                    </p>
                    <div className="mt-4">
                      <Button
                        className="inline-flex items-center gap-2 rounded-md bg-blue-500 py-1.5 px-3 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:outline-none data-[hover]:bg-blue-600 data-[open]:bg-gray-700 data-[focus]:outline-1 data-[focus]:outline-white"
                        onClick={() => {
                          setIsOpen(false);
                          dispatch(getUserHieght(editData.Edheight));
                          dispatch(getUserWeight(editData.Edweight));
                          dispatch(getUserHip(editData.EdHip));
                          dispatch(getUserWaist(editData.EdWaist));
                          updateData();
                        }}
                      >
                        Got it, Sure!
                      </Button>
                    </div>
                  </DialogPanel>
                </TransitionChild>
              </div>
            </div>
          </Dialog>
        </Transition>
        <DialogBox triggerVal={trigger} trigger={setTrigger} />
      </section>
    </main>
  );
};

export default Layout(AboutMe);

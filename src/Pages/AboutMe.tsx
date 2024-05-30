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
import { useAppSelector } from "../hooks/hooks";

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
  const [isOpen, setIsOpen] = useState<boolean>(false);
  const [editData, setEditData] = useState<UserData>({
    Edname: "",
    Edage: Number(null),
    Edgender: "",
    Edheight: Number(null),
    Edweight: Number(null),
    EdWaist: Number(null),
    EdHip: Number(null),
  });
  const { name, age, gender, userId } = useAppSelector((state) => state.user);
  const { waist, hip, height, weight } = useAppSelector(
    (state) => state.userData
  );

  const bmi = Math.floor(weight / (height * height));

  const bfp = 1.2 * bmi + 0.23 * age - 16.2;
  return (
    <main>
      <Navbar title="My Info" username={name} input={false} />

      <section className="mb-2 mt-6 grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div className="flex bg-white w-full p-6 shadow-lg rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1664476705703-bac3f3600b0a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
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
            <h2 className="text-lg text-gray-700 font-bold mb-2">{bmi}</h2>
          </div>
          <div className="p-4">
            <h3 className="text-xs text-gray-500">Hip</h3>
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
                {bfp}%
              </span>
            </div>
            <span className="uppercase font-semibold text-xs tracking-wider text-center">
              Body Fat Percentage
            </span>
          </div>
        </div>
      </section>
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
                placeholder={name}
                onChange={(e) => {
                  setEditData((prev) => ({ ...prev, Edname: e.target.value }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Age</label>
              <br />
              <input
                type="number"
                placeholder={String(age)}
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
                placeholder={gender}
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
                placeholder={String(height)}
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
                placeholder={String(weight)}
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
                placeholder={String(waist)}
                onChange={(e) => {
                  setEditData((prev) => ({
                    ...prev,
                    EdWaist: Number(e.target.value),
                  }));
                }}
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Hip (in cm)</label>
              <br />
              <input
                type="number"
                placeholder={String(hip)}
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
                          console.log(editData);
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
      </section>
    </main>
  );
};

export default Layout(AboutMe);

import { useState } from "react";

interface User {
  email: string;
  name: string;
  age: number;
  gender: string;
}

const UserInfo = () => {
  const [user, setUser] = useState({});

  return (
    <section className="h-screen w-screen flex items-center justify-center">
      <div className="w-[70%] h-[80%] shadow-2xl shadow-blue-500 rounded-2xl overflow-hidden">
        <div className="h-28 bg-blue-500 flex items-center justify-center">
          <h3 className="text-white font-semibold text-lg">
            We need your basic information to get started
          </h3>
        </div>

        <div className="h-[452px] rounded-2xl mt-[-20px] bg-white w-full">
          <section className="bg-white p-2 rounded-lg mt-1">
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
                    placeholder=""
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                    value=""
                  />
                  <br />

                  <label className="text-xs text-gray-500 mr-4">Age</label>
                  <br />
                  <input
                    type="number"
                    placeholder=""
                    value=""
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                  />
                  <br />

                  <label className="text-xs text-gray-500 mr-4">Gender</label>
                  <br />
                  <input
                    type="text"
                    placeholder={""}
                    value={""}
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
                    placeholder={""}
                    value={""}
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                  />
                  <br />
                  <label className="text-xs text-gray-500 mr-4">
                    Weight (in Kg)
                  </label>
                  <br />
                  <input
                    type="text"
                    placeholder={""}
                    value={""}
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                  />
                  <br />

                  <label className="text-xs text-gray-500 mr-4">
                    Waist (in cm)
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder={""}
                    value={""}
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                  />
                  <br />

                  <label className="text-xs text-gray-500 mr-4">
                    Hip (in cm)
                  </label>
                  <br />
                  <input
                    type="number"
                    placeholder={""}
                    value={""}
                    className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
                  />
                </form>
              </div>
            </div>
            <div className="grid place-items-center">
              <button className="bg-blue-500 text-sm p-2 pl-4 pr-4 mb-4 text-white font-semibold rounded-md hover:bg-blue-600">
                Create Account
              </button>
            </div>
          </section>
        </div>
      </div>
    </section>
  );
};

export default UserInfo;

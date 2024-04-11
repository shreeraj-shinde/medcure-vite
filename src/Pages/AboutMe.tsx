import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
const AboutMe = () => {
  const weight = 70;
  const height = 1.7;
  const age = 22;
  const bmi = Math.floor(weight / (height * height));
  const waist = 96;
  const neck = 30;
  const bfp = 1.2 * bmi + 0.23 * age - 16.2;
  return (
    <main>
      <Navbar title="My Info" username="Shreeraj Shinde" input={false} />

      <section className="mb-2 mt-6 grid grid-cols-1 gap-1 lg:grid-cols-2">
        <div className="flex bg-white w-full p-6 shadow-lg rounded-lg">
          <img
            src="https://plus.unsplash.com/premium_photo-1664476705703-bac3f3600b0a?q=80&w=1472&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
            alt="USer Photo"
            className="w-1/2 object-center object-cover rounded-lg"
          />
          <div className="p-4">
            <h3 className="text-xs text-gray-500">Name</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">Name</h2>
            <h3 className="text-xs text-gray-500">Age</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{age}</h2>
            <h3 className="text-xs text-gray-500">Gender</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">Male</h2>
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
            <h3 className="text-xs text-gray-500">Neck</h3>
            <h2 className="text-lg text-gray-700 font-bold mb-2">{neck} cm</h2>
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
                placeholder="First LastName"
                disabled
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Age</label>
              <br />
              <input
                type="number"
                placeholder="22"
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Gender</label>
              <br />
              <input
                type="text"
                placeholder="Male"
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
                placeholder="1.7"
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />
              <label className="text-xs text-gray-500 mr-4">
                Weight (in Kg)
              </label>
              <br />
              <input
                type="text"
                placeholder="70"
                disabled
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">Neck (in cm)</label>
              <br />
              <input
                type="number"
                placeholder="30"
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
              <br />

              <label className="text-xs text-gray-500 mr-4">
                Waist (in cm)
              </label>
              <br />
              <input
                type="number"
                placeholder="40"
                className="text-sm mb-4 border-2 border-gray-500 p-2 rounded-lg w-[70%]"
              />
            </form>
          </div>
        </div>
        <div className="grid place-items-center">
          <button className="bg-blue-500 text-sm p-2 pl-4 pr-4 mb-4 text-white font-semibold rounded-md hover:bg-blue-600">
            Update
          </button>
        </div>
      </section>
    </main>
  );
};

export default Layout(AboutMe);

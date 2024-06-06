import img from "../assets/background.jpg";

const Login = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="w-[80%] h-[80%] rounded-lg shadow-2xl shadow-blue-700 lg:flex lg:flex-row overflow-hidden">
        <div className="w-full h-full p-16 px-16 lg:w-[70%] rounded-lg  items-center justify-center">
          <h2 className="font-medium text-2xl uppercase tracking-wider">
            Login
          </h2>

          <form className="mt-12 flex flex-col gap-14">
            {/* <label className="font-medium text-gray-700 mt-2">
              Email or Phone
            </label> */}

            <input
              type="text"
              placeholder="Email or Phone"
              className="p-2 outline-0 w-full border-b-2 border-gray-600 rounded-lg lg:w-4/5"
            />

            {/* <label className="font-medium text-gray-700 mt-2">Passsword</label> */}

            <input
              type="password"
              placeholder="Password"
              className="p-2 outline-0 border-b-2 border-gray-600 rounded-lg w-full lg:w-4/5"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium w-full lg:w-1/3 mt-4"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 h-full bg-[#d7eff3]">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover object-right"
          />
        </div>
      </section>
    </main>
  );
};

export default Login;

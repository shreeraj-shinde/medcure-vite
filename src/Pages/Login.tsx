const Login = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="w-[80%] h-[80%] rounded-lg shadow-lg lg:flex lg:flex-row overflow-hidden">
        <div className="w-full h-full  p-8 px-8 lg:w-1/2">
          <h2 className="font-medium text-2xl">Welcome Back!!</h2>

          <form className="mt-6 flex flex-col gap-2">
            <label className="font-medium text-white mt-2">
              Email or Phone
            </label>

            <input
              type="text"
              className="p-2 outline-0 w-full border-0 rounded-lg lg:w-4/5"
            />

            <label className="font-medium text-white mt-2">Passsword</label>

            <input
              type="password"
              className="p-2 outline-0 border-0 rounded-lg w-full lg:w-4/5"
            />
            <button
              type="submit"
              className="px-4 py-2 bg-white rounded-md text-blue-500 font-medium w-full lg:w-1/3 mt-4"
            >
              Login
            </button>
          </form>
        </div>
        <div className="w-1/2 h-full p-8">
          <h2 className="text-blue-500 font-medium text-2xl tracking-wider">
            MEDCURE
          </h2>

          <p className="mt-4 font-medium text-blue-500">
            Your personalized Health Consultant
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;

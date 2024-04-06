const Login = () => {
  return (
    <main className="flex items-center justify-center w-screen h-screen bg-[#e4e4e7]">
      <section className="w-2/3 h-2/3 rounded-lg shadow-lg flex flex-col lg:flex lg:flex-row overflow-hidden">
        <div className="w-full h-full bg-blue-500 p-4 lg:w-1/2">
          <button className="px-4 py-2 bg-white rounded-md text-blue-500 font-medium">
            Login
          </button>
        </div>
        <div className="w-1/2 h-full">Left</div>
      </section>
    </main>
  );
};

export default Login;

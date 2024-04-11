import { useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";

const Diagnose = () => {
  const [Allow, setAllow] = useState<boolean>(false);
  return (
    <section>
      <Navbar title="Diagnose" username="Shreeraj Shinde" input={false} />
      <div className="bg-white rounded-lg p-8 flex items-center justify-between">
        <p className="font-medium text-md ">
          Include non-cured disease in Diagnostics
        </p>
        <div className="flex items-center space-x-2">
          <button
            className="bg-gray h-5 w-11 rounded-full border-2 inline-flex"
            onClick={() => setAllow(true)}
          >
            <span className="bg-blue-500 h-full w-5 rounded-full right">
              &nbsp;&nbsp;&nbsp;
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Layout(Diagnose);

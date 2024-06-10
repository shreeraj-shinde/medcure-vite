import { useState } from "react";
import Navbar from "../Components/Navbar";
import Layout from "../Layout/Layout";
import { IoMdClose } from "react-icons/io";
import { IoMdSend } from "react-icons/io";
import { useAppSelector } from "../hooks/hooks";
const Diagnose = () => {
  const [OpenDrawer, setOpenDrawer] = useState<boolean>(false);
  const [messages, setMessage] = useState<string[]>([]);
  const [inputmessage, setinputmessage] = useState<string>("");
  const { name } = useAppSelector((state) => state.user);

  return (
    <section>
      <Navbar title="Diagnose" username={name} input={false} />
      <div className="bg-white rounded-lg p-8 flex items-center justify-between mt-8">
        <p className="font-medium text-md ">
          Include non-cured disease in Diagnostics
        </p>
        <div className="flex items-center space-x-2">
          <input type="checkbox" className="p-2 w-4 h-4" />
        </div>
      </div>
      <div className="bg-white rounded-lg h-[77vh] mt-2 p-6 rounded-lg">
        <button
          className="p-4 w-20 bg-blue-500 font-medium text-white rounded-lg"
          onClick={() => setOpenDrawer(true)}
        >
          New Chat
        </button>

        <section
          className="h-[98vh] w-[98vw] lg:w-[35vw] absolute rounded-lg bg-blue-200 p-4"
          style={
            OpenDrawer
              ? {
                  top: 5,
                  right: 5,
                  transition: "all 0.5s",
                }
              : {
                  top: 5,
                  right: 5,

                  transition: "all 0.5s",
                  transform: "translateY(-100vh)",
                }
          }
        >
          <button
            className="w-20 font-medium rounded-lg mb-2"
            onClick={() => setOpenDrawer(false)}
          >
            <IoMdClose />
          </button>

          <div className="bg-white w-full min-h-[95%] rounded-lg relative">
            <div className="w-full p-4 flex flex-col">
              {messages.map((i) => (
                <span className="px-4 py-2 bg-blue-100 shadow-lg rounded-full mt-2 font-medium">
                  {i}
                </span>
              ))}
            </div>
            <div
              className="bg-white w-full flex items-center justify-center absolute"
              style={{
                bottom: 25,
              }}
            >
              <div
                className="w-[90%] shadow-lg rounded-full overflow-hidden flex items-center justify-between pr-4 absolute"
                style={{
                  bottom: 5,
                }}
              >
                <input
                  type="text"
                  placeholder="Type Here"
                  className="outline-0 p-4 w-full"
                  onChange={(e) => setinputmessage(e.target.value)}
                  value={inputmessage}
                />
                <button
                  onClick={() => {
                    setMessage((prev) => [...prev, inputmessage]);
                    setinputmessage("");
                  }}
                >
                  <IoMdSend />
                </button>
              </div>
            </div>
          </div>
        </section>
      </div>
    </section>
  );
};

export default Layout(Diagnose);

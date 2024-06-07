import { useState } from "react";
import { supabase } from "../Supabase/SupabaseClient";
import img from "../assets/signUp-background.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

interface User {
  email: string;

  age: number;

  password: string;
  confirmedPassword: string;
}

const SignUp = () => {
  const SignUpuser = async (e: any) => {
    e.preventDefault();
    if (user.password != user.confirmedPassword) {
      toast.error(`Passwords do not match`, {
        position: "top-right",
      });
      return;
    }
    let { data, error } = await supabase.auth.signUp({
      email: user.email,
      password: user.password,
    });
    if (data) {
      toast.info(
        `Success ${data}`,

        {
          position: "top-right",
        }
      );
    }
    if (error) {
      console.log(error);
      toast.error(`Error ${error}`, {
        position: "top-right",
      });
    }
  };

  const [user, setUser] = useState<User>({
    email: "",

    age: Number(null),

    password: "",
    confirmedPassword: "",
  });

  return (
    <main className="flex items-center justify-center w-screen h-screen">
      <section className="w-[80%] h-[80%] rounded-lg shadow-2xl shadow-blue-700 lg:flex lg:flex-row overflow-hidden">
        <div className="w-full h-full p-8 px-16 lg:w-[70%] rounded-lg  items-center justify-center">
          <h2 className="font-medium text-2xl uppercase tracking-wider">
            Sign Up
          </h2>

          <form className="mt-8 flex flex-col gap-8">
            {/* <label className="font-medium text-gray-700 mt-2">
              Email or Phone
            </label> */}

            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              type="text"
              placeholder="Email"
              className="p-2 outline-0 w-full border-b-2 border-gray-600 rounded-lg lg:w-4/5"
            />

            <input
              onChange={(e) => {
                const age = 2024 - Number(e.target.value);
                age >= 18
                  ? setUser((prev) => ({ ...prev, age: age }))
                  : alert(
                      "Your age should be atleast 18 years to create profile"
                    );
              }}
              type="text"
              placeholder="Birth Year"
              className="p-2 outline-0 w-full border-b-2 border-gray-600 rounded-lg lg:w-4/5"
            />

            {/* <label className="font-medium text-gray-700 mt-2">Passsword</label> */}

            <input
              onChange={(e) =>
                setUser((prev) => ({ ...prev, password: e.target.value }))
              }
              type="password"
              placeholder="Password"
              className="p-2 outline-0 border-b-2 border-gray-600 rounded-lg w-full lg:w-4/5"
            />

            <input
              onChange={(e) =>
                setUser((prev) => ({
                  ...prev,
                  confirmedPassword: e.target.value,
                }))
              }
              type="password"
              placeholder="Confirm Password"
              className="p-2 outline-0 border-b-2 border-gray-600 rounded-lg w-full lg:w-4/5"
            />

            <button
              onClick={(e) => SignUpuser(e)}
              disabled={2024 - user.age >= 18 ? false : true}
              className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium w-full lg:w-1/3 mt-4"
            >
              Sign Up
            </button>
          </form>
        </div>
        <div className="w-1/2 h-full bg-[#d7eff3]">
          <img
            src={img}
            alt=""
            className="w-full h-full object-cover object-right"
          />
          <ToastContainer />
        </div>
      </section>
    </main>
  );
};

export default SignUp;

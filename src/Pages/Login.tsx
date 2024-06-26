import { supabase } from "../Supabase/SupabaseClient";
import img from "../assets/background.jpg";
import { toast, ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { fetchUser, fetchUserData, useAppDispatch } from "../hooks/hooks";
interface UserInput {
  email: string;
  password: string;
}
const Login = () => {
  const navigate = useNavigate();
  const dispatch = useAppDispatch();

  const [user, setUser] = useState<UserInput>({
    email: "",
    password: "",
  });

  const LoginUser = async (e: any) => {
    e.preventDefault();
    let { data, error } = await supabase.auth.signInWithPassword({
      email: user.email,
      password: user.password,
    });
    if (data.user) {
      localStorage.setItem("token", data.session.access_token);

      const Data = await supabase
        .from("users")
        .update({ auth_token: data.session.access_token })
        .eq("email", user.email)
        .select("id, email");
      if (Data.data)
        fetchUserData(dispatch, Data.data[0].id, Data.data[0].email);
    }

    if (error) {
      toast.error(error.message, {
        position: "top-right",
      });
      return;
    }

    fetchUser(dispatch, user.email);
    toast.success("Loggged In Successfully");
    setTimeout(() => navigate("/home"), 3000);
  };

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
              onChange={(e) =>
                setUser((prev) => ({ ...prev, email: e.target.value }))
              }
              type="text"
              placeholder="Email or Phone"
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
            <div>
              <button
                onClick={(e) => {
                  LoginUser(e);
                }}
                type="submit"
                className="px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium w-full lg:w-1/3 mt-4"
              >
                Login
              </button>
              <button
                onClick={() => {
                  navigate("/sign_up");
                }}
                type="submit"
                className="ml-8 px-4 py-2 bg-blue-500 hover:bg-blue-600 rounded-md text-white font-medium w-full lg:w-1/3 mt-4"
              >
                Sign Up
              </button>
            </div>
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

export default Login;

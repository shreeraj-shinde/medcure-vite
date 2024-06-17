import Layout from "../Layout/Layout";
import Card from "../Components/Card";
import { FaHeadSideVirus, FaHeart } from "react-icons/fa";
import { IoFootsteps } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import { BarChart } from "../Components/Charts";
import Navbar from "../Components/Navbar";
import { useEffect } from "react";
import {
  useAppSelector,
  useAppDispatch,
  fetchUser,
  fetchUserData,
  fetchUserByAuthToken,
} from "../hooks/hooks";
import { ToastContainer, toast } from "react-toastify";
import { useNavigate } from "react-router-dom";

const Dashboard = () => {
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const { name, userId, email } = useAppSelector((state) => state.user);
  const { stress, steps, oxygen, calories_burnt } = useAppSelector(
    (state) => state.userData
  );

  useEffect(() => {
    console.log(userId, email);
    const token = localStorage.getItem("token") as string;
    fetchUserByAuthToken(token, dispatch);
    // fetchUserData(dispatch, userId, email);
    fetchUserData(dispatch, 1, email);

    if (!token) {
      navigate("/login");
    }
  }, []);

  return (
    <main className="max-h-screen">
      <Navbar title="Dashboard" username={name} input={true} />
      <section className="mt-8 flex flex-wrap justify-evenly">
        <Card
          title="Stress"
          level={stress}
          color="rgb(0, 121, 255)"
          Icon={FaHeadSideVirus}
        />
        <Card
          title="Oxygen"
          level={oxygen}
          color="rgb(0, 223, 162)"
          Icon={FaHeart}
        />
        <Card
          title="Steps"
          level={steps}
          color="rgb(246, 250, 112)"
          Icon={IoFootsteps}
        />
        <Card
          title="Calories Burnt"
          level={calories_burnt}
          color="rgb(255, 0, 96)"
          Icon={MdBloodtype}
        />
      </section>

      <section className="mt-8 pl-5 pr-5">
        <div className="bg-white p-6 rounded-xl">
          <h2 className="tracking-widest font-base text-lg uppercase text-center">
            Sleep Chart
          </h2>
          <BarChart
            data1={[8, 6, 7, 9, 6, 7, 8]}
            data2={[7, 9, 5, 3, 6, 8, 9]}
            title1="3rd Week"
            title2="2nd Week"
            bgColor="rgb(64, 86, 244)"
            bgColor2="rgb(206, 187, 201)"
          />
          <ToastContainer />
        </div>
      </section>
    </main>
  );
};

export default Layout(Dashboard);

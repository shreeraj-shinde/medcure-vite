import Layout from "../Layout/Layout"
import Card from "../Components/Card";
import { FaHeadSideVirus, FaHeart } from "react-icons/fa";
import { IoFootsteps } from "react-icons/io5";
import { MdBloodtype } from "react-icons/md";
import { BarChart } from "../Components/Charts";
import Navbar from "../Components/Navbar";

const Dashboard = () => {
  return (
    <main className="max-h-screen">
      <Navbar title="Dashboard" username="Shreeraj Shinde" input={true} />
      <section className="mt-8 flex flex-wrap justify-evenly">
        <Card
          title="Stress"
          level={30}
          color="rgb(0, 121, 255)"
          Icon={FaHeadSideVirus}
        />
        <Card
          title="Oxygen"
          level={97}
          color="rgb(0, 223, 162)"
          Icon={FaHeart}
        />
        <Card
          title="Steps"
          level={3000}
          color="rgb(246, 250, 112)"
          Icon={IoFootsteps}
        />
        <Card
          title="Blood Pressure"
          level={60}
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
        </div>
      </section>
    </main>
  )
}

export default Layout(Dashboard)
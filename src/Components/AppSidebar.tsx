import { Link, useLocation } from "react-router-dom";

import { useEffect, useState } from "react";
import { IconType } from "react-icons";
import { BsBarChartFill, BsPieChartFill } from "react-icons/bs";
import { FaHistory, FaUser } from "react-icons/fa";
import { FaUserDoctor } from "react-icons/fa6";
import { GiMuscleUp } from "react-icons/gi";
import { MdMenu } from "react-icons/md";
import { RiDashboard2Fill, RiLineChartFill } from "react-icons/ri";

const AppSidebar = () => {
  const [mobileActive, setMobileActive] = useState<number>(window.innerWidth);
  const [showModal, setShowModal] = useState<boolean>(false);
  const { pathname } = useLocation();

  useEffect(() => {
    window.addEventListener("resize", () => {
      setMobileActive(window.innerWidth);
    });
  }, []);

  return (
    <>
      {mobileActive < 1100 && (
        <button
          className="bg-blue-500 p-2 rounded-full w-8 h-8 font-semibold"
          onClick={() => setShowModal(!showModal)}
        >
          <MdMenu />
        </button>
      )}

      {mobileActive < 1100 ? (
        <aside
          className="bg-blue-500 text-white rounded-xl overflow-auto absolute w-[20rem] p-2"
          style={
            showModal
              ? {
                  height: "96%",
                  zIndex: 2,
                  transition: "all 0.5s",
                }
              : {
                  transform: "translateX(-25rem)",

                  position: "absolute",
                  height: "96%",
                  zIndex: 2,
                  transition: "all 0.5s",
                }
          }
        >
          <h1 className="uppercase tracking-wider font-bold text-xl pl-10 pt-12">
            Medcure
          </h1>
          <section className="flex flex-col gap-1 p-2 mt-10">
            <DivOne pathName={pathname} />
            <DivTwo pathName={pathname} />
          </section>
          <button
            className="p-2 bg-blue-700 w-full mr-auto rounded-lg"
            onClick={() => setShowModal(false)}
          >
            Close
          </button>
        </aside>
      ) : (
        <aside className="bg-blue-500 text-white rounded-xl overflow-auto">
          <h1 className="uppercase tracking-wider font-bold text-xl pl-10 pt-12">
            Medcure
          </h1>
          <section className="flex flex-col gap-1 p-2 mt-10">
            <DivOne pathName={pathname} />
            <DivTwo pathName={pathname} />
          </section>
        </aside>
      )}
    </>
  );
};

interface LiProps {
  url: string;
  name: string;
  Icon: IconType;
  pathName: string;
}
const Li = ({ url, name, Icon, pathName }: LiProps) => {
  return (
    <li
      className={`list-none w-full rounded-sm mb-1 tracking-wide  ${
        pathName.includes(url) ? `bg-blue-600` : `bg-blue-500 hover:bg-blue-600`
      }`}
    >
      <Link
        to={url}
        className="flex items-center content-center gap-2 pl-6 p-2 text-sm font-medium"
      >
        <Icon /> {name}
      </Link>
    </li>
  );
};

const DivOne = ({ pathName }: { pathName: string }) => {
  return (
    <>
      <h2 className="font-base uppercase tracking-widest text-xs pl-8 mb-2">
        Health & Diagnostics
      </h2>
      <ul className="mb-4">
        <Li
          url="/home"
          name={"Dashboard"}
          Icon={RiDashboard2Fill}
          pathName={pathName}
        />
        <Li
          url="/about_me"
          name={"About Me"}
          Icon={FaUser}
          pathName={pathName}
        />
        <Li
          url="/history"
          name={"History"}
          Icon={FaHistory}
          pathName={pathName}
        />
        <Li
          url="/diagnose"
          name={"Diagnose"}
          Icon={FaUserDoctor}
          pathName={pathName}
        />
        {/* <Li
          url="/workout"
          name={"Workouts"}
          Icon={GiMuscleUp}
          pathName={pathName}
        /> */}
      </ul>
    </>
  );
};

const DivTwo = ({ pathName }: { pathName: string }) => {
  return (
    <>
      <h2 className="font-base uppercase tracking-widest text-xs pl-8 mb-2">
        Health Charts
      </h2>
      <ul>
        <Li
          url="/chart/pie"
          name={"Pie"}
          Icon={BsPieChartFill}
          pathName={pathName}
        />
        <Li
          url="/chart/bar"
          name={"Bar"}
          Icon={BsBarChartFill}
          pathName={pathName}
        />
        <Li
          url="/chart/line"
          name={"Line"}
          Icon={RiLineChartFill}
          pathName={pathName}
        />
      </ul>
    </>
  );
};

export default AppSidebar;

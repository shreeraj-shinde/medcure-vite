import  { useEffect, useState } from "react";
import { BiSearch } from "react-icons/bi";
interface NavbarProps {
  title: string;
  input: boolean;
  username: string;
}

const Navbar = ({ title, input, username }: NavbarProps) => {
  const [mobileActive, setMobileActive] = useState<boolean>(false);

  useEffect(() => {
    window.addEventListener("resize", () => {
      if (window.innerWidth < 1100) setMobileActive(true);
      else {
        setMobileActive(false);
      }
    });
  }, []);


  return (
    <section className="p-4 flex justify-between items-center h-14">
      <h1 className="text-2xl font-bold">{title}</h1>
      {input && !mobileActive ? (
        <div className="flex bg-white items-center p-1 rounded-lg h-8 shadow-lg">
          <BiSearch />
          <input
            type="text"
            placeholder="Search"
            className="border-0 outline-0 h-full "
          />
        </div>
      ):""}
      <div className="h-8 flex items-center gap-1">
        <span className="text-gray-500 text-sm font-bold">{username}</span>
        <img
          className="h-full rounded-3xl"
          src="https://imgs.search.brave.com/dDwU1J1LUxaGv5ZwczefspM1CD36lZ_04ejkSN0KElo/rs:fit:500:0:0/g:ce/aHR0cHM6Ly9pY29u/cy52ZXJ5aWNvbi5j/b20vcG5nLzEyOC9m/aWxlLXR5cGUvbGlu/ZWFyLWljb24tMi91/c2VyLTEzMi5wbmc"
          alt="user"
        />
      </div>
    </section>
  );
};

export default Navbar;
import { useState } from "react";
import { FaCheckCircle } from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoMdClose } from "react-icons/io";
import { MdDarkMode, MdLightMode } from "react-icons/md";

interface Props {
  dark: boolean;
  onDark: () => void;
}

const Navbar = ({ dark, onDark }: Props) => {
  const [expanded, setExpanded] = useState(false);
  return (
    <div className="max-w-5xl mx-auto">
      <nav className="flex items-center justify-between">
        <h1
          className="flex items-center space-x-1
          xs:text-lg md:text-xl lg:text-2xl xl:text-4xl
        text-green-600 font-black"
        >
          <FaCheckCircle />
          <span>TodoList</span>
        </h1>

        <button
          className={`flex items-center space-x-1 ${
            dark ? "text-stone-100" : "text-stone-900"
          } hidden md:flex md:text-xl lg:text-2xl xl:text-4xl font-bold`}
          onClick={onDark}
        >
          {dark ? <MdLightMode /> : <MdDarkMode />}
        </button>

        <button
          className={`flex items-center space-x-1 ${
            dark ? "text-stone-100" : "text-stone-800"
          }
        xs:text-md md:hidden
        font-bold`}
          onClick={() => setExpanded(!expanded)}
        >
          {expanded ? <IoMdClose /> : <GiHamburgerMenu />}
        </button>
      </nav>
      {expanded && (
        <ul className="px-4 py-2 md:hidden">
          <li>
            <button
              className={`flex items-center space-x-1 ${
                dark ? "text-stone-100" : "text-stone-900"
              } xs:text-lg font-bold`}
              onClick={onDark}
            >
              {dark ? <MdLightMode /> : <MdDarkMode />}
            </button>
          </li>
        </ul>
      )}
    </div>
  );
};

export default Navbar;

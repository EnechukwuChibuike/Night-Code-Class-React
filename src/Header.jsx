import { useState } from "react";
import { MdMenu } from "react-icons/md";

function Header() {
  const [toggleMenu, setToggleMenu] = useState("h-0");

  const handleClick = () => {
    toggleMenu === "h-0" ? setToggleMenu("h-fit") : setToggleMenu("h-0");
  };
  return (
    <header className="min-h-[10vh] h-fit bg-gray-500 flex justify-between px-10 items-center">
      <strong>Logo.</strong>

      <nav
        className={`absolute sm:static grid justify-items-center transition duration-1000 ${toggleMenu} md:h-fit overflow-hidden sm:flex sm:items-center left-0 bg-gray-500 w-full sm:w-fit gap-5 top-[10vh]`}
      >
        <a href="/">Home</a>
        <a href="/">About</a>
        <a href="/">Contact</a>
        <a href="/">Blog</a>
        <a href="/">Gallery</a>
      </nav>

      <button
        onClick={handleClick}
        className="text-2xl p-3 shadow-md sm:hidden rounded-md hover:opacity-50"
      >
        <MdMenu />
      </button>
    </header>
  );
}

export default Header;

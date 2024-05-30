import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function Mode() {
  const [toggleBg, setToggleBg] = useState(true);

  const handleClick = () => {
    setToggleBg(!toggleBg);
  };
  return (
    <section className={toggleBg ? "bg-black h-screen" : "bg-white h-screen"}>
      <button
        className={toggleBg ? "text-white text-5xl" : "text-black text-5xl"}
        onClick={handleClick}
      >
        {toggleBg && <MdOutlineDarkMode />}
        {!toggleBg && <MdDarkMode />}
      </button>
    </section>
  );
}

export default Mode;

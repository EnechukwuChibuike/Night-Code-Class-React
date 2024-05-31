import { useState } from "react";
import { MdDarkMode } from "react-icons/md";
import { MdOutlineDarkMode } from "react-icons/md";

function Mode({ toggleBg, handleClick }) {
  return (
    <section className="h-screen">
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

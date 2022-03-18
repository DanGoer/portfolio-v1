import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBarLinks from "./components/NavBarLinks";
import BgMountain from "../../public/bg-mountain.jpg";

function NavBar() {
  const [isOpen, setIsOpen] = useState(false);
  const genericHamburgerLine = `h-1 w-6 my-1 rounded-full bg-black transition ease transform duration-300`;

  return (
    <header className=" relative flex flex-row items-center justify-between h-1/6 bg-cyan-900/50   ">
      <div className="text-xl">Logo</div>
      <ul>
        <NavBarLinks />
      </ul>

      <button
        className="flex flex-col h-12 w-12 border-2 border-black rounded justify-center items-center group"
        onClick={() => setIsOpen(!isOpen)}
      >
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "rotate-45 translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen ? "opacity-0" : "opacity-50 group-hover:opacity-100"
          }`}
        />
        <div
          className={`${genericHamburgerLine} ${
            isOpen
              ? "-rotate-45 -translate-y-3 opacity-50 group-hover:opacity-100"
              : "opacity-50 group-hover:opacity-100"
          }`}
        />
      </button>
    </header>
  );
}

export default NavBar;

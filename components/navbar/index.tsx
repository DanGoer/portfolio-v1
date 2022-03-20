import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBarLinks from "./components/NavBarLinks";
import BgMountain from "../../public/bg-mountain.jpg";

import HamBurger from "./components/HamBurger";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="z-30 w-screen py-8 px-6 fixed flex flex-col items-center justify-between bg-cyan-900/50">
      <span className=" flex flex-row justify-between md:justify-center items-center w-full ">
        <div className="text-white text-xl md:absolute md:left-6 ">Logo</div>
        <ul className="text-lg hidden md:flex md:flex-row gap-10 items-center">
          <NavBarLinks />
        </ul>
        <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </span>
      <ul
        className={`mt-4 overflow-hidden   ease-in-out  flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-64 " : "h-0  "}`}
      >
        <NavBarLinks />
      </ul>
    </header>
  );
}

export default NavBar;

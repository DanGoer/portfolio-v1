import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBarLinks from "./components/NavBarLinks";
import BgMountain from "../../public/bg-mountain.jpg";

import HamBurger from "./components/NavBarHamBurger";
import LangDropDown from "./components/NavBarLangDropDown";
import SocialIcons from "./components/NavBarSocialIcons";
import NavBarSocialIcons from "./components/NavBarSocialIcons";
import NavBarLangDropDown from "./components/NavBarLangDropDown";
import NavBarHamBurger from "./components/NavBarHamBurger";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  //todo:togglenav

  return (
    <header className="z-30 w-screen py-0 px-6 fixed flex flex-col items-center justify-between bg-cyan-900/50">
      <span className=" flex flex-row justify-between items-center w-full ">
        <div className="text-white text-xl  md:left-6 ">Logo</div>
        <NavBarSocialIcons />
        <span className="flex md:flex-row-reverse ">
          <NavBarLangDropDown />
          <ul className="text-lg hidden md:flex md:flex-row gap-8 items-center">
            <NavBarLinks />
          </ul>
        </span>
        <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </span>
      <ul
        className={`mt-0 overflow-hidden ease-in-out  flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-64 " : "h-0"}`}
      >
        <NavBarLinks />
      </ul>
    </header>
  );
}

export default NavBar;

// NavBar

import { useState } from "react";

import NavBarLinks from "./components/NavBarLinks";
import NavBarSocialIcons from "./components/NavBarSocialIcons";
import NavBarLangDropDown from "./components/NavBarLangDropDown";
import NavBarHamBurger from "./components/NavBarHamBurger";
import NavBarLogo from "./components/NavBarLogo";

function NavBar({ scrollTarget }: { scrollTarget: string }) {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  const toggleNav = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="z-30 w-screen py-0 px-4 fixed flex flex-col shadow items-center justify-between bg-cyan-900/50">
      <nav className="flex flex-row justify-between items-center w-full px-2">
        <NavBarLogo />
        <NavBarSocialIcons />
        <span className="flex md:flex-row-reverse ">
          <NavBarLangDropDown />
          <ul className="text-lg hidden md:flex md:flex-row gap-8 items-center">
            <NavBarLinks scrollTarget={scrollTarget} />
          </ul>
        </span>
        <NavBarHamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
      </nav>
      <ul
        className={`mt-0 overflow-hidden md:hidden ease-in-out flex flex-col gap-6 items-center transition-all duration-500   	   
				${isOpen ? "h-64 " : "h-0"}`}
      >
        <NavBarLinks scrollTarget={scrollTarget} toggleNav={toggleNav} />
      </ul>
    </header>
  );
}

export default NavBar;

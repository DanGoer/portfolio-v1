import Image from "next/image";
import Link from "next/link";
import { useState } from "react";
import NavBarLinks from "./components/NavBarLinks";
import BgMountain from "../../public/bg-mountain.jpg";

import HamBurger from "./components/HamBurger";

function NavBar() {
  const [isOpen, setIsOpen] = useState<boolean>(false);

  return (
    <header className="px-6 relative flex flex-row items-center justify-between h-20 bg-cyan-900/50 ">
      <div className="text-xl">Logo</div>
      <ul className="hidden">
        <NavBarLinks />
      </ul>
      <HamBurger isOpen={isOpen} setIsOpen={setIsOpen} />
    </header>
  );
}

export default NavBar;

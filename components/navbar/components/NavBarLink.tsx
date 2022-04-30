import { navLinks } from "../../../assets/data";
import Link from "next/link";
import { NavBarI } from "../../../types/interfaces";

function NavBarLink({ toggleNav, idx, name, pageRefs }: any) {
  function scrollIntoView(type: any) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
      block: "nearest",
      inline: "start",
    });
  }
  return (
    <button onClick={() => scrollIntoView(navLinks[idx])}>
      <li
        onClick={() => {
          if (toggleNav) {
            toggleNav!();
          }
        }}
        className=" text-2xl text-white cursor-pointer hover:text-green-100"
      >
        {name}
      </li>
    </button>
  );
}

export default NavBarLink;

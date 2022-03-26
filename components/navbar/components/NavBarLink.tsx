import { NavBarItemsTProps } from "../../../types/types";
import { navLinks } from "../../../assets/data";
import Link from "next/link";

function NavBarLink({ toggleNav, idx, name }: NavBarItemsTProps) {
  return (
    <Link href={navLinks[idx]} passHref>
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
    </Link>
  );
}

export default NavBarLink;

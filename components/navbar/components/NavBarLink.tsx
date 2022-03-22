import { NavBarItemsTProps } from "../../../types/types";
import { navLinks } from "../../../assets/data";
import Link from "next/link";

function NavBarLink({ name, idx }: NavBarItemsTProps) {
  return (
    <Link href={navLinks[idx]} passHref>
      <li className=" text-2xl text-white cursor-pointer hover:text-green-100">
        {name}
      </li>
    </Link>
  );
}

export default NavBarLink;

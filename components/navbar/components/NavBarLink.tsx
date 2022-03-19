import { NavBarItemsTProps } from "../../../types/types";

function NavBarLink({ name }: NavBarItemsTProps) {
  return <li className="cursor-pointer hover:text-green-100">{name}</li>;
}

export default NavBarLink;

import { NavBarItemsTProps } from "../../../types/types";

function NavBarLink({ name }: NavBarItemsTProps) {
  return <li className="text-xl">{name}</li>;
}

export default NavBarLink;

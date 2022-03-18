import { navBarItems } from "../../../assets/data";
import NavBarLink from "./NavBarLink";

function NavBarLinks() {
  return (
    <>
      {navBarItems.map((item) => {
        return <NavBarLink key={item} name={item} />;
      })}
    </>
  );
}

export default NavBarLinks;

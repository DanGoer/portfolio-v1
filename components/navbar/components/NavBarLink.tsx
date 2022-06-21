import { navLinks } from "../../../assets/data";
import { NavBarLinkI } from "../../../types/interfaces";
// todo: TS

function NavBarLink({
  toggleNav,
  idx,
  name,
  pageRefs,
  scrollTarget,
}: NavBarLinkI) {
  function scrollIntoView(type: any) {
    pageRefs.current[type].scrollIntoView({
      behavior: "smooth",
      block: "start",
      top: "+500px",
    });
  }

  const scrollClass = "text-slate-900 font-bold";
  console.log("target" + scrollTarget);

  return (
    <button onClick={() => scrollIntoView(navLinks[idx])}>
      <li
        onClick={() => {
          if (toggleNav) {
            toggleNav!();
          }
        }}
        className={`text-2xl text-white cursor-pointer hover:text-green-100 ${
          scrollTarget === navLinks[idx] && scrollClass
        }`}
      >
        {name}
      </li>
    </button>
  );
}

export default NavBarLink;

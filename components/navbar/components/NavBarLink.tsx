import { navLinks } from "../../../assets/data";
import { NavBarLinkI } from "../../../types/interfaces";
// todo: TS

function NavBarLink({ toggleNav, idx, name, scrollTarget }: NavBarLinkI) {
  const scrollClass = "text-slate-900 font-bold";

  return (
    <button>
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
        <a
          aria-label={`Link to ${navLinks[idx]} section`}
          href={`#${navLinks[idx]}`}
        >
          {name}
        </a>
      </li>
    </button>
  );
}

export default NavBarLink;

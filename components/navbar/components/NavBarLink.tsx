import { NavBarLinkI } from "../../../types/interfaces";

import { motion } from "framer-motion";

import { navLinks } from "../../../assets/data";

function NavBarLink({
  toggleNav,
  idx,
  name,
  scrollTarget,
  active = false,
  setActive = null,
}: NavBarLinkI) {
  return (
    <button
      onClick={() => {
        if (setActive) {
          setActive();
        }
        if (toggleNav) {
          toggleNav!();
        }
      }}
      className={`${
        scrollTarget === "hero"
          ? "text-navBeforeOn hover:text-navBeforeHover"
          : "text-navAfterOn hover:text-navAfterHover"
      } text-2xl cursor-pointer duration-300 ${
        scrollTarget === navLinks[idx] && "text-hoverEffect font-bold"
      }`}
    >
      <motion.a
        aria-label={`Link to ${navLinks[idx]} section`}
        href={`#${navLinks[idx]}`}
      >
        {name}
      </motion.a>
      {active && (
        <motion.div
          layoutId="selector"
          className="w-2 h-2 bg-white rounded-full z-50"
        />
      )}
    </button>
  );
}

export default NavBarLink;

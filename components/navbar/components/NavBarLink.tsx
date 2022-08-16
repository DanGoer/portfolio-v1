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
    <li
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
      } text-2xl relative cursor-pointer duration-300 flex flex-col items-center ${
        scrollTarget === navLinks[idx] && "text-hoverEffect font-bold"
      }`}
    >
      <motion.a
        aria-label={`Link to ${navLinks[idx]} section`}
        href={`#${navLinks[idx]}`}
        className="z-[51]"
      >
        {name}
      </motion.a>
      {active && (
        <motion.div
          transition={{ delay: 0.15 }}
          className="w-full h-1 bg-white rounded-full"
          layoutId="selector"
        ></motion.div>
      )}
    </li>
  );
}

export default NavBarLink;

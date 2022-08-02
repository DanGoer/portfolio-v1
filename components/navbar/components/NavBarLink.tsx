import { NavBarLinkI } from "../../../types/interfaces";

import { motion, AnimateSharedLayout } from "framer-motion";

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
      className={`text-2xl text-white cursor-pointer duration-300 hover:text-green-100 ${
        scrollTarget === navLinks[idx] && "text-slate-900 font-bold"
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

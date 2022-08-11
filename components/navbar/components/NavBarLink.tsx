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
        <>
          <motion.div
            className="w-full h-1 bg-white rounded-full"
            layoutId="selector"
          ></motion.div>

          {/*<motion.div
            className=" absolute w-full h-full bg-red-300"
            layoutId="selector"
          ></motion.div>*}
          {/*<motion.svg
            layoutId="selector"
            xmlns="http://www.w3.org/2000/svg"
            viewBox="0 0 384 512"
            className="w-4"
          >
            <path d="M352 352c-8.188 0-16.38-3.125-22.62-9.375L192 205.3l-137.4 137.4c-12.5 12.5-32.75 12.5-45.25 0s-12.5-32.75 0-45.25l160-160c12.5-12.5 32.75-12.5 45.25 0l160 160c12.5 12.5 12.5 32.75 0 45.25C368.4 348.9 360.2 352 352 352z" />
          </motion.svg>
      */}
        </>
      )}
    </button>
  );
}

export default NavBarLink;

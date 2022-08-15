import Link from "next/link";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";
import { ScrollTargetI } from "../../../types/interfaces";

const subMenuAnimate = {
  enter: {
    opacity: 1,
    rotateX: 0,
    transition: {
      duration: 0.5,
    },
    display: "block",
  },
  exit: {
    opacity: 0,
    rotateX: -15,
    transition: {
      duration: 0.5,
      delay: 0.3,
    },
    transitionEnd: {
      display: "none",
    },
  },
};

function NavBarLangDropDown({ scrollTarget }: ScrollTargetI) {
  const { t } = useTranslation("navbar");
  const router = useRouter();

  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  return (
    <>
      <div className="px-10">
        <motion.div
          onHoverStart={toggleHoverMenu}
          onHoverEnd={toggleHoverMenu}
          className="relative inline-block"
        >
          <button
            className={`${
              scrollTarget === "hero"
                ? "border-navBeforeOn text-navBeforeOn"
                : "border-navAfterOn text-navAfterOn"
            } border-2 font-semibold py-2 px-4 rounded inline-flex justify-center items-center w-32`}
          >
            <span className="mr-1">{t("language-dropdown")}</span>
            <svg
              className="w-4 h-4 fill-current"
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 20 20"
            >
              <path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z" />{" "}
            </svg>
          </button>
          <motion.ul
            initial="exit"
            animate={isHover ? "enter" : "exit"}
            variants={subMenuAnimate}
            className="absolute hidden pt-1 "
          >
            <li>
              <Link passHref href="/" locale="en">
                <button
                  className={` ${
                    router.locale === "en"
                      ? "bg-container underline"
                      : "bg-black/90 hover:bg-white hover:text-black text-white border-white"
                  } rounded-t border-2 py-2 px-4 w-32 flex justify-center transition-all duration-500`}
                >
                  English
                </button>
              </Link>
            </li>
            <li className="">
              <Link passHref href="/" locale="de">
                <button
                  className={`${
                    router.locale === "de"
                      ? "bg-container underline"
                      : "bg-black/90 hover:bg-white hover:text-black text-white border-white"
                  } rounded-b   
                  border-2 border-t-0 py-2 px-4 w-32 flex justify-center transition-all duration-500`}
                >
                  Deutsch
                </button>
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
}

export default NavBarLangDropDown;

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
          onTouchStart={toggleHoverMenu}
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
                <a
                  className={`${
                    router.locale === "en"
                      ? " underline text-white "
                      : "hover:bg-white hover:text-black"
                  } rounded-b bg-black/60 border-white text-white
                  border-2 border-t-0 py-2 px-4 w-32 grid grid-cols-4 justify-center transition-all duration-500 items-center gap-2`}
                >
                  {router.locale === "en" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="w-3 fill-white"
                    >
                      <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                    </svg>
                  )}
                  <p className="col-start-2 col-end-4">English</p>
                </a>
              </Link>
            </li>
            <li className="">
              <Link passHref href="/" locale="de">
                <a
                  className={`${
                    router.locale === "de"
                      ? " underline text-white "
                      : "hover:bg-white hover:text-black"
                  } rounded-b bg-black/60 border-white text-white
                  border-2 border-t-0 py-2 px-4 w-32 grid grid-cols-4 justify-center transition-all duration-500 items-center gap-2`}
                >
                  {router.locale === "de" && (
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      viewBox="0 0 256 512"
                      className="w-3 fill-white"
                    >
                      <path d="M118.6 105.4l128 127.1C252.9 239.6 256 247.8 256 255.1s-3.125 16.38-9.375 22.63l-128 127.1c-9.156 9.156-22.91 11.9-34.88 6.943S64 396.9 64 383.1V128c0-12.94 7.781-24.62 19.75-29.58S109.5 96.23 118.6 105.4z" />
                    </svg>
                  )}
                  <p className="col-start-2 col-end-4">Deutsch</p>
                </a>
              </Link>
            </li>
          </motion.ul>
        </motion.div>
      </div>
    </>
  );
}

export default NavBarLangDropDown;

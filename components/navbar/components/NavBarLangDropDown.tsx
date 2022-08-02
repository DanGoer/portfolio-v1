import Link from "next/link";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";
import { useState } from "react";
import { useRouter } from "next/router";

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

function NavBarLangDropDown() {
  const { t } = useTranslation("navbar");
  const router = useRouter();

  const [isHover, toggleHover] = useState(false);
  const toggleHoverMenu = () => {
    toggleHover(!isHover);
  };

  return (
    <>
      <div className="p-10">
        <motion.div
          onHoverStart={toggleHoverMenu}
          onHoverEnd={toggleHoverMenu}
          className="inline-block relative"
        >
          <button className="bg-gray-300/0 text-white border-white border-2 font-semibold py-2 px-4 rounded inline-flex justify-center items-center w-32">
            <span className="mr-1">{t("language-dropdown")}</span>
            <svg
              className="fill-current h-4 w-4"
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
            className=" absolute hidden text-gray-700 pt-1"
          >
            <li className="">
              <Link passHref href="/" locale="en">
                <button
                  className={`${
                    router.locale === "en" && "bg-red-400"
                  } rounded-t bg-black/90 hover:bg-white hover:text-black text-white
                 border-white border-2 py-2 px-4 w-32 flex justify-center transition-all duration-500`}
                >
                  English
                </button>
              </Link>
            </li>
            <li className="">
              <Link passHref href="/" locale="de">
                <button
                  className={`${
                    router.locale === "de" && "bg-red-400"
                  } rounded-b bg-black/90 hover:bg-white hover:text-black text-white
                 border-white border-2 border-t-0 py-2 px-4 w-32 flex justify-center transition-all duration-500`}
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

import { useEffect, useState } from "react";

import { NavBarLinksI } from "../../../types/interfaces";

import { useTranslation } from "next-i18next";
import { motion, AnimateSharedLayout } from "framer-motion";

import NavBarLink from "./NavBarLink";
import { navLinks } from "../../../assets/data";

function NavBarLinks({ toggleNav, scrollTarget }: NavBarLinksI) {
  const [activeItem, setActiveItem] = useState<number>(0);

  const handleSelection = (index: number) => {
    setActiveItem(index);
  };
  const { t } = useTranslation("navbar");

  useEffect(() => {
    setActiveItem(navLinks.findIndex((element) => element === scrollTarget));
  }, [scrollTarget]);

  return (
    <>
      <AnimateSharedLayout>
        {t("navbar-links", { joinArrays: "+" })
          .split("+")
          .map((item, index) => {
            return (
              <NavBarLink
                scrollTarget={scrollTarget}
                toggleNav={toggleNav}
                idx={index}
                key={item}
                name={item}
                setActive={() => handleSelection(index)}
                active={index === activeItem}
              />
            );
          })}
      </AnimateSharedLayout>
    </>
  );
}

export default NavBarLinks;

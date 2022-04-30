import { useTranslation } from "next-i18next";
import { NavBarLinksI } from "../../../types/interfaces";
import NavBarLink from "./NavBarLink";

function NavBarLinks({ toggleNav, pageRefs }: NavBarLinksI) {
  const { t } = useTranslation("navbar");
  return (
    <>
      {t("navbar-links", { joinArrays: "+" })
        .split("+")
        .map((item, index) => {
          return (
            <NavBarLink
              pageRefs={pageRefs}
              toggleNav={toggleNav}
              idx={index}
              key={item}
              name={item}
            />
          );
        })}
    </>
  );
}

export default NavBarLinks;

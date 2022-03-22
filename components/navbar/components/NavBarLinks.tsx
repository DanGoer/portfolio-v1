import { useTranslation } from "next-i18next";
import NavBarLink from "./NavBarLink";

function NavBarLinks() {
  const { t } = useTranslation("navbar");
  return (
    <>
      {t("navbar-links", { joinArrays: "+" })
        .split("+")
        .map((item, index) => {
          return <NavBarLink idx={index} key={item} name={item} />;
        })}
    </>
  );
}

export default NavBarLinks;

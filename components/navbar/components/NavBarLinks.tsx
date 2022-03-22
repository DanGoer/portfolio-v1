import { useTranslation } from "next-i18next";
import { navBarItems } from "../../../assets/data";
import NavBarLink from "./NavBarLink";

function NavBarLinks() {
  const { t } = useTranslation("navbar");
  return (
    <>
      {t("navbar-links", { joinArrays: "+" })
        .split("+")
        .map((item) => {
          return <NavBarLink key={item} name={item} />;
        })}
    </>
  );
}

export default NavBarLinks;

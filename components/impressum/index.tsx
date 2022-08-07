// Impressum

import { SectionChangeI } from "../../types/interfaces";

import { useTranslation } from "next-i18next";
import { InView } from "react-intersection-observer";

import ImpressumContact from "./components/ImpressumContact";
import ImpressumIcons from "./components/ImpressumIcons";
import ImpressumInfo from "./components/ImpressumInfo";
import ImpressumSubtitle from "./components/ImpressumSubtitle";
import ImpressumTitle from "./components/ImpressumTitle";

function Impressum({ handleSectionChange }: SectionChangeI) {
  const { t } = useTranslation("impressum");
  return (
    <InView threshold={0.5} onChange={handleSectionChange}>
      {({ ref }) => (
        <footer
          ref={ref}
          id="impressum"
          className="flex flex-col items-center gap-8 py-8 w-full bg-impressum/90 text-impressumOn transition-all duration-300"
        >
          <ImpressumTitle />
          <span className="flex flex-col gap-4">
            <ImpressumSubtitle subtitle={t("paragraph-impressum")} />
            <ImpressumInfo />
          </span>
          <span className="flex flex-col gap-4">
            <ImpressumSubtitle subtitle={t("contact-impressum")} />
            <ImpressumContact />
          </span>
          <ImpressumIcons />
        </footer>
      )}
    </InView>
  );
}

export default Impressum;

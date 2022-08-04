import { useTranslation } from "next-i18next";
import { heroData } from "../../../assets/data";

function HeroWelcomeText() {
  const { t } = useTranslation("hero");

  return (
    <>
      <h1 className="text-xl font-bold">{t("h1-hero")}</h1>
      <h2 className="text-6xl">{heroData.name}.</h2>
      <h3 className="text-6xl">{t("h3-hero")}</h3>
      <p className="text-2xl font-medium max-w-[600px]">{t("p-1-hero")}</p>
    </>
  );
}

export default HeroWelcomeText;

import { useTranslation } from "next-i18next";

function HeroWelcomeText() {
  const { t } = useTranslation("hero");
  return (
    <>
      <h1 className="text-black text-3xl pb-4 font-bold">{t("h1-hero")}</h1>
      <p className="text-2xl font-medium">{t("p-1-hero")}</p>
      <p className="text-2xl font-medium">{t("p-2-hero")}</p>
      <p className="text-2xl pb-4 font-medium">{t("p-3-hero")}</p>
    </>
  );
}

export default HeroWelcomeText;

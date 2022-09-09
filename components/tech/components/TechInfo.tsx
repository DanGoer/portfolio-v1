import { useTranslation } from "next-i18next";

function TechInfo() {
  const { t } = useTranslation("tech");
  return (
    <div>
      <h2 className="my-4 text-4xl">{t("h2-tech")}</h2>
      <p>{t("info-tech")}</p>
    </div>
  );
}

export default TechInfo;

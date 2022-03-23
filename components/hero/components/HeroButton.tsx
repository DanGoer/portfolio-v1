import { useTranslation } from "next-i18next";

function HeroButton() {
  const { t } = useTranslation("hero");
  return (
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2"
    >
      {t("button-hero")}
    </button>
  );
}

export default HeroButton;

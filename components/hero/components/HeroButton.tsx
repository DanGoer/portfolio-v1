import { useTranslation } from "next-i18next";

function HeroButton() {
  const { t } = useTranslation("hero");
  return (
    <button
      type="button"
      className="text-white bg-gray-800 hover:bg-gray-900 focus:ring-4 focus:ring-gray-300 font-medium rounded-full text-lg px-10 py-2 text-center mr-2 mb-2 dark:bg-gray-800 dark:hover:bg-gray-700 dark:focus:ring-gray-800 dark:border-gray-700"
    >
      {t("button-hero")}
    </button>
  );
}

export default HeroButton;

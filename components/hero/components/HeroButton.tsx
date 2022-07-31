import Link from "next/link";

import { useTranslation } from "next-i18next";

function HeroButton() {
  const { t } = useTranslation("hero");
  return (
    <Link href="/#projects" passHref>
      <button
        className="text-white border-2 border-gray-800 bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full
       text-lg px-10 py-2 text-center mr-2 mb-2 duration-300"
      >
        {t("button-hero")}
      </button>
    </Link>
  );
}

export default HeroButton;

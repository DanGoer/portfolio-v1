import Link from "next/link";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HeroButton() {
  const { t } = useTranslation("common");

  return (
    <Link href="/#projects" passHref>
      <motion.a
        aria-label="to the projects section"
        variants={item}
        className="w-56 px-10 py-2 mt-2 mb-2 mr-2 text-lg font-medium text-center text-black duration-300 bg-white border-2 border-gray-800 rounded-full hover:text-white hover:bg-gray-800"
      >
        {t("button-hero")}
      </motion.a>
    </Link>
  );
}

export default HeroButton;

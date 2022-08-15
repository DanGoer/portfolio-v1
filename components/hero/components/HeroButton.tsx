import Link from "next/link";

import { useTranslation } from "next-i18next";
import { motion } from "framer-motion";

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function HeroButton() {
  const { t } = useTranslation("hero");
  return (
    <Link href="/#projects" aria-label="to the projects section" passHref>
      <motion.button
        variants={item}
        className="px-10 py-2 mt-2 mb-2 mr-2 text-lg font-medium text-center text-white duration-300 bg-gray-800 border-2 border-gray-800 rounded-full hover:bg-white hover:text-black"
      >
        {t("button-hero")}
      </motion.button>
    </Link>
  );
}

export default HeroButton;

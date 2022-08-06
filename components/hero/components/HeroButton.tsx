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
    <Link href="/#projects" passHref>
      <motion.button
        variants={item}
        className="text-white border-2 border-gray-800 bg-gray-800 hover:bg-white hover:text-black font-medium rounded-full
       text-lg px-10 py-2 text-center mr-2 mb-2 duration-300 mt-2"
      >
        {t("button-hero")}
      </motion.button>
    </Link>
  );
}

export default HeroButton;

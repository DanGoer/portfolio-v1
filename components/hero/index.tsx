// Hero part of the web app

import { SectionChangeI } from "../../types/interfaces";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import HeroButton from "./components/HeroButton";
import HeroText from "./components/HeroText";
import { useTranslation } from "next-i18next";

const container = {
  visible: {
    transition: {
      staggerChildren: 0.025,
    },
  },
};

const item = {
  hidden: { opacity: 0 },
  visible: { opacity: 1 },
};

function Hero({ handleSectionChange }: SectionChangeI) {
  const { t } = useTranslation("hero");

  return (
    <InView threshold={0.8} onChange={handleSectionChange}>
      {({ ref }) => (
        <section ref={ref} id="hero" className="relative w-full h-screen">
          <motion.div
            className="absolute flex flex-col text-left left-1/4 top-1/4 "
            initial="hidden"
            animate="visible"
            variants={container}
          >
            <HeroText />
            <motion.p
              variants={item}
              className="text-2xl font-medium max-w-[320px] md:max-w-[720px]"
            >
              {t("p-1-hero")}
            </motion.p>
            <HeroButton />
          </motion.div>
          <a
            href="#tech"
            className="absolute px-3 py-1 transition-all duration-300 border-2 rounded-full bottom-8 left-1/2 border-textBgOn group hover:border-hoverEffect bg-container hover:bg-textBgOn"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 384 512"
              className="w-10 transition-all duration-300 fill-textBgOn group-hover:fill-hoverEffect"
            >
              <path d="M374.6 310.6l-160 160C208.4 476.9 200.2 480 192 480s-16.38-3.125-22.62-9.375l-160-160c-12.5-12.5-12.5-32.75 0-45.25s32.75-12.5 45.25 0L160 370.8V64c0-17.69 14.33-31.1 31.1-31.1S224 46.31 224 64v306.8l105.4-105.4c12.5-12.5 32.75-12.5 45.25 0S387.1 298.1 374.6 310.6z" />
            </svg>
          </a>
        </section>
      )}
    </InView>
  );
}

export default Hero;

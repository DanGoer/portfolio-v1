// Tech section

import { SectionChangeI } from "../../types/interfaces";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";
import { useEffect } from "react";

function Tech({ handleSectionChange }: SectionChangeI) {
  return (
    <InView threshold={0.3} onChange={handleSectionChange}>
      {({ ref }) => (
        <motion.section
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.5 }}
          viewport={{ once: true }}
          ref={ref}
          id="tech"
          className="pt-48 flex items-center justify-center z-10"
        >
          <div className="flex flex-col items-center w-11/12 border-solid bg-container rounded-xl py-6 px-3 max-w-6xl text-containerOn">
            <TechLogo />
            <TechInfo />
            <TechIcons />
          </div>
        </motion.section>
      )}
    </InView>
  );
}

export default Tech;

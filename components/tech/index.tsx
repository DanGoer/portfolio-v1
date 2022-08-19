// Tech section

import { SectionChangeI } from "../../types/interfaces";

import { InView } from "react-intersection-observer";
import { motion } from "framer-motion";

import TechIcons from "./components/TechIcons";
import TechInfo from "./components/TechInfo";
import TechLogo from "./components/TechLogo";

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
          className="z-10 flex items-center justify-center pt-48"
        >
          <div className="flex flex-col items-center w-11/12 max-w-6xl px-3 py-6 border-solid bg-container rounded-xl text-containerOn">
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
